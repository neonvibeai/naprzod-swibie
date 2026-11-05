const LIGA_90MINUT_URL = 'http://www.90minut.pl/liga/1/liga15135.html';

let cached90MinutData = null;
let lastFetchTimestamp = 0;

function stripTags(str) {
  return (str || '')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function parse90MinutHtml(html) {
  const table = [];
  const rowRegex = /<tr[^>]*>\s*<td[^>]*>(?:<b>)?\s*(\d+)\.\s*(?:<\/b>)?<\/td>\s*<td[^>]*>(?:&nbsp;|\s)*<a[^>]*href="([^"]*id_klub=(\d+)[^"]*)"[^>]*>([^<]+)<\/a>\s*<\/td>\s*<td[^>]*>(\d+)<\/td>\s*<td[^>]*>(?:<b>)?(\d+)(?:<\/b>)?<\/td>\s*<td[^>]*>(\d+)<\/td>\s*<td[^>]*>(\d+)<\/td>\s*<td[^>]*>(\d+)<\/td>\s*<td[^>]*>(\d+-\d+)<\/td>\s*<td[^>]*>(\d+)<\/td>\s*<td[^>]*>(\d+)<\/td>\s*<td[^>]*>(\d+)<\/td>\s*<td[^>]*>(\d+-\d+)<\/td>\s*<td[^>]*>(\d+)<\/td>\s*<td[^>]*>(\d+)<\/td>\s*<td[^>]*>(\d+)<\/td>\s*<td[^>]*>(\d+-\d+)<\/td>/gi;

  let m;
  while ((m = rowRegex.exec(html)) !== null) {
    table.push({
      pos: Number(m[1]),
      skarbUrl: 'http://www.90minut.pl' + m[2],
      clubId: Number(m[3]),
      team: stripTags(m[4]),
      matches: Number(m[5]),
      points: Number(m[6]),
      w: Number(m[7]),
      d: Number(m[8]),
      l: Number(m[9]),
      goals: m[10].replace('-', ':'),
      homeW: Number(m[11]),
      homeD: Number(m[12]),
      homeL: Number(m[13]),
      homeGoals: m[14].replace('-', ':'),
      awayW: Number(m[15]),
      awayD: Number(m[16]),
      awayL: Number(m[17]),
      awayGoals: m[18].replace('-', ':')
    });
  }

  const rounds = [];
  const roundHeaderRegex = /<b><u>(Kolejka\s+(\d+)[^<]*)<\/u><\/b>/gi;
  const headers = [];
  let rh;
  while ((rh = roundHeaderRegex.exec(html)) !== null) {
    headers.push({
      title: stripTags(rh[1]),
      roundNum: Number(rh[2]),
      index: rh.index
    });
  }

  for (let i = 0; i < headers.length; i++) {
    const startIdx = headers[i].index;
    const endIdx = i + 1 < headers.length ? headers[i + 1].index : html.length;
    const chunk = html.slice(startIdx, endIdx);

    const matches = [];
    const matchRowRegex = /<tr align="left">\s*<td[^>]* width="180"><b>([^<]+)<\/b><\/td>\s*<td[^>]* width="50">([\s\S]*?)<\/td>\s*<td[^>]* width="180"><b>([^<]+)<\/b><\/td>\s*<td[^>]* width="190">([^<]*)<\/td>\s*<\/tr>/gi;
    let mr;
    while ((mr = matchRowRegex.exec(chunk)) !== null) {
      const home = stripTags(mr[1]);
      const scoreHtml = mr[2];
      const scoreText = stripTags(scoreHtml).replace('-', ':');
      const linkMatch = /href="([^"]+)"/i.exec(scoreHtml);
      const away = stripTags(mr[3]);
      const dateStr = stripTags(mr[4]);
      matches.push({
        roundNum: headers[i].roundNum,
        roundTitle: headers[i].title,
        home,
        away,
        score: scoreText || '-',
        reportUrl: linkMatch ? linkMatch[1] : null,
        date: dateStr
      });
    }
    rounds.push({
      roundNum: headers[i].roundNum,
      title: headers[i].title,
      matches
    });
  }

  const swibieMatches = [];
  for (const r of rounds) {
    for (const match of r.matches) {
      if (match.home.includes('Naprzód Świbie') || match.away.includes('Naprzód Świbie')) {
        swibieMatches.push(match);
      }
    }
  }

  return {
    sourceUrl: LIGA_90MINUT_URL,
    clubSkarbUrl: 'http://www.90minut.pl/skarb.php?id_klub=5257&id_sezon=109',
    seasonName: 'Eurotech Klasa B 2026/2027, grupa: Zabrze',
    fetchedAt: new Date().toISOString(),
    tableCount: table.length,
    table,
    rounds,
    swibieMatches
  };
}

module.exports = async (req, res) => {
  const url = req.url || '';
  const forceRefresh = url.includes('refresh=1') || (req.query && req.query.refresh === '1');
  const now = Date.now();

  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Access-Control-Allow-Origin', '*');

  if (!forceRefresh && cached90MinutData && now - lastFetchTimestamp < 3 * 60 * 1000) {
    res.statusCode = 200;
    return res.end(JSON.stringify(cached90MinutData));
  }

  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 5000);
    const resp = await fetch(LIGA_90MINUT_URL, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/128.0.0.0 Safari/537.36'
      }
    });
    clearTimeout(timer);
    const buf = await resp.arrayBuffer();
    const html = new TextDecoder('iso-8859-2').decode(buf);
    const parsed = parse90MinutHtml(html);
    if (parsed.table.length > 0) {
      cached90MinutData = parsed;
      lastFetchTimestamp = now;
      res.statusCode = 200;
      return res.end(JSON.stringify(parsed));
    }
  } catch (err) {
    // Fallback handled by client
  }

  const fallback = cached90MinutData || {
    sourceUrl: LIGA_90MINUT_URL,
    seasonName: 'Eurotech Klasa B 2026/2027, grupa: Zabrze',
    fetchedAt: new Date().toISOString(),
    tableCount: 0,
    table: [],
    rounds: [],
    swibieMatches: []
  };
  res.statusCode = 200;
  return res.end(JSON.stringify(fallback));
};
