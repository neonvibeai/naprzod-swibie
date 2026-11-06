function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

async function parseJsonBody(req) {
  if (req.body && typeof req.body === 'object') {
    return req.body;
  }
  if (typeof req.body === 'string' && req.body.trim()) {
    return JSON.parse(req.body);
  }
  return new Promise((resolve, reject) => {
    let raw = '';
    req.on('data', (chunk) => {
      raw += chunk;
      if (raw.length > 100000) {
        reject(new Error('Payload too large'));
      }
    });
    req.on('end', () => {
      if (!raw.trim()) return resolve({});
      try {
        resolve(JSON.parse(raw));
      } catch (err) {
        reject(err);
      }
    });
    req.on('error', reject);
  });
}

module.exports = async (req, res) => {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    return res.end();
  }

  if (req.method !== 'POST') {
    res.statusCode = 405;
    return res.end(JSON.stringify({ ok: false, error: 'Method Not Allowed' }));
  }

  let body;
  try {
    body = await parseJsonBody(req);
  } catch (err) {
    res.statusCode = 400;
    return res.end(JSON.stringify({ ok: false, error: 'Nieprawidłowy format danych JSON.' }));
  }

  const topic = String(body.topic || 'Zgłoszenie ze strony naprzodswibie.pl').trim();
  const name = String(body.name || '').trim();
  const contact = String(body.contact || '').trim();
  const notes = String(body.notes || '').trim();

  if (!name || !contact) {
    res.statusCode = 400;
    return res.end(
      JSON.stringify({
        ok: false,
        error: 'Proszę podać imię i nazwisko oraz numer telefonu lub adres e-mail.'
      })
    );
  }

  const apiKey = (process.env.RESEND_API_KEY || '').trim();
  if (!apiKey) {
    res.statusCode = 500;
    return res.end(
      JSON.stringify({
        ok: false,
        error: 'Brak konfiguracji klucza RESEND_API_KEY po stronie serwera.'
      })
    );
  }

  const nowFormatted = new Intl.DateTimeFormat('pl-PL', {
    dateStyle: 'full',
    timeStyle: 'medium',
    timeZone: 'Europe/Warsaw'
  }).format(new Date());

  const safeTopic = escapeHtml(topic);
  const safeName = escapeHtml(name);
  const safeContact = escapeHtml(contact);
  const safeNotes = notes ? escapeHtml(notes).replace(/\r?\n/g, '<br />') : '<em>Brak dodatkowych uwag</em>';

  const html = `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 620px; margin: 0 auto; background: #07150f; color: #f8fafc; border-radius: 14px; overflow: hidden; border: 1px solid #10b981;">
      <div style="background: linear-gradient(135deg, #064e3b, #047857); padding: 22px 26px; border-bottom: 2px solid #10b981;">
        <div style="font-size: 12px; letter-spacing: 1.5px; text-transform: uppercase; color: #a7f3d0; font-weight: 700;">
          LKS NAPRZÓD ŚWIBIE • PORTAL KLUBOWY
        </div>
        <h1 style="margin: 6px 0 0; font-size: 22px; color: #ffffff;">
          Nowe zgłoszenie z formularza online
        </h1>
      </div>
      <div style="padding: 24px 26px;">
        <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
          <tr>
            <td style="padding: 10px 0; color: #94a3b8; width: 40%; vertical-align: top;">Temat zgłoszenia:</td>
            <td style="padding: 10px 0; color: #34d399; font-weight: 700;">${safeTopic}</td>
          </tr>
          <tr style="border-top: 1px solid rgba(255,255,255,0.08);">
            <td style="padding: 10px 0; color: #94a3b8; vertical-align: top;">Imię i nazwisko:</td>
            <td style="padding: 10px 0; color: #ffffff; font-weight: 700;">${safeName}</td>
          </tr>
          <tr style="border-top: 1px solid rgba(255,255,255,0.08);">
            <td style="padding: 10px 0; color: #94a3b8; vertical-align: top;">Kontakt (tel. / e-mail):</td>
            <td style="padding: 10px 0; color: #fbbf24; font-weight: 700; font-size: 16px;">${safeContact}</td>
          </tr>
          <tr style="border-top: 1px solid rgba(255,255,255,0.08);">
            <td style="padding: 10px 0; color: #94a3b8; vertical-align: top;">Dodatkowe informacje:</td>
            <td style="padding: 10px 0; color: #e2e8f0; line-height: 1.5;">${safeNotes}</td>
          </tr>
          <tr style="border-top: 1px solid rgba(255,255,255,0.08);">
            <td style="padding: 10px 0; color: #94a3b8; vertical-align: top;">Data wysłania:</td>
            <td style="padding: 10px 0; color: #cbd5e1; font-size: 13px;">${escapeHtml(nowFormatted)}</td>
          </tr>
        </table>
      </div>
      <div style="background: rgba(0,0,0,0.35); padding: 14px 26px; font-size: 12px; color: #94a3b8; text-align: center; border-top: 1px solid rgba(255,255,255,0.08);">
        Wiadomość wygenerowana automatycznie przez formularz na stronie <a href="https://www.naprzodswibie.pl" style="color: #34d399; text-decoration: none;">www.naprzodswibie.pl</a>
      </div>
    </div>
  `;

  const text = [
    'LKS NAPRZÓD ŚWIBIE — Nowe zgłoszenie z formularza online',
    '=========================================================',
    `Temat zgłoszenia: ${topic}`,
    `Imię i nazwisko: ${name}`,
    `Kontakt (tel. / e-mail): ${contact}`,
    `Dodatkowe informacje: ${notes || 'Brak dodatkowych uwag'}`,
    `Data wysłania: ${nowFormatted}`,
    '',
    'Wiadomość wysłana ze strony https://www.naprzodswibie.pl'
  ].join('\n');

  const emailPayload = {
    from: 'LKS Naprzód Świbie <formularz@naprzodswibie.pl>',
    to: ['naprzodswibie@o2.pl'],
    subject: `[Naprzód Świbie] ${topic} — ${name}`,
    html,
    text
  };

  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact)) {
    emailPayload.reply_to = contact;
  }

  try {
    const resendResp = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(emailPayload)
    });

    const resendData = await resendResp.json().catch(() => ({}));

    if (!resendResp.ok) {
      res.statusCode = 502;
      return res.end(
        JSON.stringify({
          ok: false,
          error: resendData.message || 'Nie udało się wysłać wiadomości przez serwer pocztowy.'
        })
      );
    }

    res.statusCode = 200;
    return res.end(JSON.stringify({ ok: true, id: resendData.id }));
  } catch (err) {
    res.statusCode = 500;
    return res.end(
      JSON.stringify({
        ok: false,
        error: 'Błąd połączenia z serwerem pocztowym. Spróbuj ponownie.'
      })
    );
  }
};
