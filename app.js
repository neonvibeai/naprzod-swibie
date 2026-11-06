/* ==========================================================================
   LKS NAPRZÓD ŚWIBIE - INTERACTIVE ENGINE (KLUB + SZKÓŁKA + LIVE 90MINUT.PL)
   Źródło oficjalne: http://www.90minut.pl/liga/1/liga15135.html
   Skarb klubu: http://www.90minut.pl/skarb.php?id_klub=5257&id_sezon=109
   ========================================================================== */

// 1. Pełna tabela 16 drużyn: Eurotech Klasa B 2026/2027, grupa: Zabrze (stan z 90minut.pl po 11. kolejce)
let LEAGUE_TABLE_DATA = [
  { pos: 1, clubId: 4229, team: "LKS 45 Bujaków (Mikołów)", matches: 11, points: 24, w: 8, d: 0, l: 3, goals: "40:19", homeW: 5, homeD: 0, homeL: 0, homeGoals: "24:3", awayW: 3, awayD: 0, awayL: 3, awayGoals: "16:16" },
  { pos: 2, clubId: 54, team: "Czarni Pyskowice", matches: 11, points: 22, w: 7, d: 1, l: 3, goals: "27:15", homeW: 3, homeD: 0, homeL: 3, homeGoals: "13:10", awayW: 4, awayD: 1, awayL: 0, awayGoals: "14:5" },
  { pos: 3, clubId: 23247, team: "KS Zabrze-Grzybowice", matches: 11, points: 22, w: 7, d: 1, l: 3, goals: "27:14", homeW: 2, homeD: 1, homeL: 2, homeGoals: "10:6", awayW: 5, awayD: 0, awayL: 1, awayGoals: "17:8" },
  { pos: 4, clubId: 3971, team: "Orzeł Paczyna", matches: 11, points: 21, w: 6, d: 3, l: 2, goals: "35:18", homeW: 3, homeD: 2, homeL: 1, homeGoals: "23:12", awayW: 3, awayD: 1, awayL: 1, awayGoals: "12:6" },
  { pos: 5, clubId: 5238, team: "Drama Kamieniec", matches: 11, points: 21, w: 7, d: 0, l: 4, goals: "38:25", homeW: 3, homeD: 0, homeL: 3, homeGoals: "19:15", awayW: 4, awayD: 0, awayL: 1, awayGoals: "19:10" },
  { pos: 6, clubId: 15666, team: "MKS Zabrze-Kończyce", matches: 11, points: 18, w: 5, d: 3, l: 3, goals: "22:24", homeW: 3, homeD: 2, homeL: 1, homeGoals: "15:12", awayW: 2, awayD: 1, awayL: 2, awayGoals: "7:12" },
  { pos: 7, clubId: 3972, team: "Gwiazda Chudów", matches: 11, points: 17, w: 5, d: 2, l: 4, goals: "25:20", homeW: 4, homeD: 0, homeL: 1, homeGoals: "15:8", awayW: 1, awayD: 2, awayL: 3, awayGoals: "10:12" },
  { pos: 8, clubId: 5256, team: "Naprzód Łubie", matches: 11, points: 17, w: 5, d: 2, l: 4, goals: "23:20", homeW: 4, homeD: 1, homeL: 1, homeGoals: "17:7", awayW: 1, awayD: 1, awayL: 3, awayGoals: "6:13" },
  { pos: 9, clubId: 5257, team: "Naprzód Świbie", matches: 11, points: 16, w: 5, d: 1, l: 5, goals: "23:31", homeW: 3, homeD: 1, homeL: 1, homeGoals: "13:9", awayW: 2, awayD: 0, awayL: 4, awayGoals: "10:22" },
  { pos: 10, clubId: 8616, team: "Quo Vadis Makoszowy (Zabrze)", matches: 10, points: 14, w: 4, d: 2, l: 4, goals: "14:24", homeW: 3, homeD: 1, homeL: 0, homeGoals: "9:4", awayW: 1, awayD: 1, awayL: 4, awayGoals: "5:20" },
  { pos: 11, clubId: 3969, team: "Zamkowiec Toszek", matches: 11, points: 13, w: 4, d: 1, l: 6, goals: "28:33", homeW: 2, homeD: 0, homeL: 4, homeGoals: "12:17", awayW: 2, awayD: 1, awayL: 2, awayGoals: "16:16" },
  { pos: 12, clubId: 6604, team: "Tempo II Paniówki", matches: 11, points: 13, w: 3, d: 4, l: 4, goals: "8:16", homeW: 2, homeD: 0, homeL: 3, homeGoals: "4:7", awayW: 1, awayD: 4, awayL: 1, awayGoals: "4:9" },
  { pos: 13, clubId: 3975, team: "Amator Rudziniec", matches: 11, points: 12, w: 3, d: 3, l: 5, goals: "22:26", homeW: 1, homeD: 3, homeL: 1, homeGoals: "10:10", awayW: 2, awayD: 0, awayL: 4, awayGoals: "12:16" },
  { pos: 14, clubId: 5235, team: "Pogoń Ziemięcice", matches: 11, points: 8, w: 2, d: 2, l: 7, goals: "26:35", homeW: 1, homeD: 1, homeL: 3, homeGoals: "12:12", awayW: 1, awayD: 1, awayL: 4, awayGoals: "14:23" },
  { pos: 15, clubId: 5247, team: "Leśnik Łącza", matches: 10, points: 5, w: 1, d: 2, l: 7, goals: "15:34", homeW: 1, homeD: 1, homeL: 4, homeGoals: "13:22", awayW: 0, awayD: 1, awayL: 3, awayGoals: "2:12" },
  { pos: 16, clubId: 5255, team: "Olimpia Pławniowice", matches: 11, points: 4, w: 1, d: 1, l: 9, goals: "7:26", homeW: 1, homeD: 1, homeL: 4, homeGoals: "5:12", awayW: 0, awayD: 0, awayL: 5, awayGoals: "2:14" }
];

// 2. Pełny, chronologiczny wykaz meczów LKS Naprzód Świbie z 90minut.pl (Kolejki 1–30)
let SWIBIE_MATCHES_DATA = [
  // ROZEGRANE SPOTKANIA (KOLEJKI 1–11)
  {
    roundNum: 1,
    date: "9 sierpnia, 17:00",
    home: "Olimpia Pławniowice",
    away: "Naprzód Świbie",
    score: "1:3",
    reportUrl: "https://www.laczynaspilka.pl/rozgrywki/mecz/cf07c028-62ee-4dbc-9eb4-718d63830e6c"
  },
  {
    roundNum: 2,
    date: "16 sierpnia, 17:00",
    home: "LKS 45 Bujaków (Mikołów)",
    away: "Naprzód Świbie",
    score: "6:2",
    reportUrl: "https://www.laczynaspilka.pl/rozgrywki/mecz/1c0bf295-3e5c-499a-93c2-ca2bd022a011"
  },
  {
    roundNum: 3,
    date: "23 sierpnia, 17:00",
    home: "Naprzód Świbie",
    away: "Amator Rudziniec",
    score: "4:1",
    reportUrl: "https://www.laczynaspilka.pl/rozgrywki/mecz/d63c8daf-f8e7-4d39-ae17-fef3c56ec952"
  },
  {
    roundNum: 4,
    date: "30 sierpnia, 17:00",
    home: "Tempo II Paniówki",
    away: "Naprzód Świbie",
    score: "0:1",
    reportUrl: "https://www.laczynaspilka.pl/rozgrywki/mecz/3c004b52-16df-4826-ac05-ba48aab3bbe6"
  },
  {
    roundNum: 5,
    date: "5 września, 16:00",
    home: "Naprzód Świbie",
    away: "Gwiazda Chudów",
    score: "3:3",
    reportUrl: "https://www.laczynaspilka.pl/rozgrywki/mecz/b061ce13-152d-41b9-acd3-465dfa1d3d87"
  },
  {
    roundNum: 6,
    date: "12 września, 16:00",
    home: "Pogoń Ziemięcice",
    away: "Naprzód Świbie",
    score: "6:1",
    reportUrl: "https://www.laczynaspilka.pl/rozgrywki/mecz/bc0ceaa3-6a73-4517-bd0d-689f7a9b71a3"
  },
  {
    roundNum: 7,
    date: "20 września, 16:00",
    home: "Naprzód Świbie",
    away: "Quo Vadis Makoszowy (Zabrze)",
    score: "3:0",
    note: "(wo, na boisku 4:0)",
    reportUrl: "https://www.laczynaspilka.pl/rozgrywki/mecz/4dd2d684-c95e-4eb7-a45c-ae92c8dba33f"
  },
  {
    roundNum: 8,
    date: "27 września, 11:00",
    home: "KS Zabrze-Grzybowice",
    away: "Naprzód Świbie",
    score: "6:1",
    reportUrl: "https://www.laczynaspilka.pl/rozgrywki/mecz/0c930d24-f533-4a17-8125-14b4f34d3a30"
  },
  {
    roundNum: 9,
    date: "4 października, 15:00",
    home: "Naprzód Świbie",
    away: "Drama Kamieniec",
    score: "1:5",
    reportUrl: "https://www.laczynaspilka.pl/rozgrywki/mecz/65ba8975-ca6f-442e-b1b8-9940e4413b51"
  },
  {
    roundNum: 10,
    date: "10 października, 12:00",
    home: "MKS Zabrze-Kończyce",
    away: "Naprzód Świbie",
    score: "3:2",
    reportUrl: "https://www.laczynaspilka.pl/rozgrywki/mecz/408b685a-296d-4b17-8781-99d4cf4039ee"
  },
  {
    roundNum: 11,
    date: "18 października, 15:00",
    home: "Naprzód Świbie",
    away: "Naprzód Łubie",
    score: "2:0",
    reportUrl: "https://www.laczynaspilka.pl/rozgrywki/mecz/1c51f445-4f28-44b2-9307-ec3d863821db"
  },
  // TERMINARZ NADCHODZĄCYCH SPOTKAŃ (KOLEJKI 12–30)
  { roundNum: 12, date: "24 października, 14:00", home: "Zamkowiec Toszek", away: "Naprzód Świbie", score: "-" },
  { roundNum: 13, date: "31 października", home: "Naprzód Świbie", away: "Czarni Pyskowice", score: "-" },
  { roundNum: 14, date: "7-8 listopada", home: "Leśnik Łącza", away: "Naprzód Świbie", score: "-" },
  { roundNum: 15, date: "14-15 listopada", home: "Naprzód Świbie", away: "Orzeł Paczyna", score: "-" },
  { roundNum: 16, date: "Runda wiosenna", home: "Naprzód Świbie", away: "Olimpia Pławniowice", score: "-" },
  { roundNum: 17, date: "Runda wiosenna", home: "Naprzód Świbie", away: "LKS 45 Bujaków (Mikołów)", score: "-" },
  { roundNum: 18, date: "Runda wiosenna", home: "Amator Rudziniec", away: "Naprzód Świbie", score: "-" },
  { roundNum: 19, date: "Runda wiosenna", home: "Naprzód Świbie", away: "Tempo II Paniówki", score: "-" },
  { roundNum: 20, date: "Runda wiosenna", home: "Gwiazda Chudów", away: "Naprzód Świbie", score: "-" },
  { roundNum: 21, date: "Runda wiosenna", home: "Naprzód Świbie", away: "Pogoń Ziemięcice", score: "-" },
  { roundNum: 22, date: "Runda wiosenna", home: "Quo Vadis Makoszowy (Zabrze)", away: "Naprzód Świbie", score: "-" },
  { roundNum: 23, date: "Runda wiosenna", home: "Naprzód Świbie", away: "KS Zabrze-Grzybowice", score: "-" },
  { roundNum: 24, date: "Runda wiosenna", home: "Drama Kamieniec", away: "Naprzód Świbie", score: "-" },
  { roundNum: 25, date: "Runda wiosenna", home: "Naprzód Świbie", away: "MKS Zabrze-Kończyce", score: "-" },
  { roundNum: 26, date: "Runda wiosenna", home: "Naprzód Łubie", away: "Naprzód Świbie", score: "-" },
  { roundNum: 27, date: "Runda wiosenna", home: "Naprzód Świbie", away: "Zamkowiec Toszek", score: "-" },
  { roundNum: 28, date: "Runda wiosenna", home: "Czarni Pyskowice", away: "Naprzód Świbie", score: "-" },
  { roundNum: 29, date: "Runda wiosenna", home: "Naprzód Świbie", away: "Leśnik Łącza", score: "-" },
  { roundNum: 30, date: "Runda wiosenna", home: "Orzeł Paczyna", away: "Naprzód Świbie", score: "-" }
];

let ALL_LEAGUE_ROUNDS = [];
let currentTableMode = "all"; // 'all' | 'home' | 'away'
let currentMatchesTab = "played"; // 'played' | 'upcoming' | 'round'
let playedNewestFirst = true; // domyślnie od najnowszej kolejki (11 -> 1)

// Renderowanie pełnej 16-drużynowej tabeli Eurotech Klasa B (grupa Zabrze)
function renderLeagueTable() {
  const tbody = document.getElementById("leagueTableBody");
  if (!tbody) return;

  tbody.innerHTML = LEAGUE_TABLE_DATA.map((row) => {
    const isSwibie = row.team.includes("Naprzód Świbie") || row.clubId === 5257;
    let m = row.matches;
    let pkt = row.points;
    let zrp = `${row.w}-${row.d}-${row.l}`;
    let goals = row.goals;

    if (currentTableMode === "home") {
      m = row.homeW + row.homeD + row.homeL;
      pkt = row.homeW * 3 + row.homeD;
      zrp = `${row.homeW}-${row.homeD}-${row.homeL}`;
      goals = row.homeGoals;
    } else if (currentTableMode === "away") {
      m = row.awayW + row.awayD + row.awayL;
      pkt = row.awayW * 3 + row.awayD;
      zrp = `${row.awayW}-${row.awayD}-${row.awayL}`;
      goals = row.awayGoals;
    }

    const skarbHref = row.skarbUrl || `http://www.90minut.pl/skarb.php?id_klub=${row.clubId}&id_sezon=109`;

    return `
      <tr class="${isSwibie ? "highlight-swibie" : ""}">
        <td><strong>${row.pos}.</strong></td>
        <td>
          <a href="${skarbHref}" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: none; display: inline-flex; align-items: center; gap: 0.45rem;">
            ${isSwibie ? `<img src="assets/logo-klub.png" alt="Herb LKS Naprzód Świbie" class="inline-team-crest" /> <strong>${row.team}</strong>` : row.team}
          </a>
        </td>
        <td>${m}</td>
        <td><strong style="color: ${isSwibie ? "var(--turf-bright)" : "#fff"};">${pkt}</strong></td>
        <td style="font-size: 0.8rem; color: var(--text-muted);">${zrp}</td>
        <td>${goals}</td>
      </tr>
    `;
  }).join("");
}

function setTableMode(mode, btnEl) {
  currentTableMode = mode;
  if (btnEl && btnEl.parentElement) {
    btnEl.parentElement.querySelectorAll(".filter-tab").forEach((b) => b.classList.remove("active"));
    btnEl.classList.add("active");
  }
  renderLeagueTable();
}

// Określenie wyniku z perspektywy Naprzodu Świbie (Zwycięstwo / Remis / Porażka)
function getSwibieOutcomeClass(match) {
  if (!match.score || match.score === "-" || !match.score.includes(":")) return "";
  const parts = match.score.replace(/[^\d:]/g, "").split(":");
  if (parts.length !== 2) return "";
  const hGoals = parseInt(parts[0], 10);
  const aGoals = parseInt(parts[1], 10);
  if (isNaN(hGoals) || isNaN(aGoals)) return "";

  const isHome = match.home.includes("Naprzód Świbie");
  const isAway = match.away.includes("Naprzód Świbie");
  if (!isHome && !isAway) return "";

  if (hGoals === aGoals) return "draw";
  const swibieWon = (isHome && hGoals > aGoals) || (isAway && aGoals > hGoals);
  return swibieWon ? "win" : "loss";
}

// Widok drużyny w meczach: Herb + Nazwa (flex-row, items-center, dwuwierszowy napis Naprzód / Świbie całkowicie po prawej stronie herbu)
function renderMatchTeamUnitHTML(teamName, isHome, note = "") {
  const isSwibie = teamName.includes("Naprzód") && teamName.includes("Świbie");

  if (isSwibie) {
    return `
      <div class="match-team-wrap is-swibie ${isHome ? "is-home" : "is-away"}">
        <img src="assets/logo-klub.png" alt="Herb LKS Naprzód Świbie" class="match-swibie-crest" />
        <div class="match-swibie-text">
          <span class="match-swibie-line1">Naprzód</span>
          <span class="match-swibie-line2">Świbie</span>
        </div>
      </div>
    `;
  }

  return `
    <div class="match-team-wrap is-opponent ${isHome ? "is-home" : "is-away"}">
      <div class="match-opponent-text">
        <span class="match-opponent-name">${teamName}</span>
        ${note ? `<span class="match-team-note">${note}</span>` : ""}
      </div>
    </div>
  `;
}

function renderMatchItemHTML(m) {
  const outcome = getSwibieOutcomeClass(m);

  let pillStyle = "";
  if (outcome === "win") {
    pillStyle = "background: rgba(16, 185, 129, 0.24); color: #34d399; border: 1px solid rgba(16, 185, 129, 0.45);";
  } else if (outcome === "draw") {
    pillStyle = "background: rgba(245, 158, 11, 0.22); color: #fbbf24; border: 1px solid rgba(245, 158, 11, 0.45);";
  } else if (outcome === "loss") {
    pillStyle = "background: rgba(239, 68, 68, 0.2); color: #f87171; border: 1px solid rgba(239, 68, 68, 0.38);";
  }

  const scoreText = m.score === "-" ? "VS" : m.score.replace(":", " : ");
  const scoreBadge = m.reportUrl
    ? `<a href="${m.reportUrl}" target="_blank" rel="noopener noreferrer" class="match-score-pill" style="${pillStyle} text-decoration: none;" title="Otwórz oficjalny protokół meczu w Łączy Nas Piłka">${scoreText}</a>`
    : `<span class="match-score-pill" style="${pillStyle}">${scoreText}</span>`;

  return `
    <div class="match-row-item">
      <div class="match-date-tag">
        <div class="match-round-lbl" style="color: var(--turf-bright); font-weight: 800;">Kolejka ${m.roundNum}</div>
        <div>${m.date || ""}</div>
      </div>
      <div class="match-team-home-cell">
        ${renderMatchTeamUnitHTML(m.home, true)}
      </div>
      <div class="match-score-cell">
        ${scoreBadge}
      </div>
      <div class="match-team-away-cell">
        ${renderMatchTeamUnitHTML(m.away, false, m.note)}
      </div>
    </div>
  `;
}

function renderMatchesPanel() {
  const container = document.getElementById("matchesListContainer");
  const subInfo = document.getElementById("matchesSubInfo");
  const sortBtn = document.getElementById("btnToggleSortOrder");
  const roundSelect = document.getElementById("roundSelectorDropdown");
  if (!container) return;

  if (currentMatchesTab === "played") {
    if (sortBtn) sortBtn.style.display = "inline-block";
    if (roundSelect) roundSelect.style.display = "none";

    const played = SWIBIE_MATCHES_DATA.filter((m) => m.score && m.score !== "-");
    const list = playedNewestFirst ? [...played].reverse() : [...played];

    if (subInfo) {
      subInfo.innerHTML = playedNewestFirst
        ? `Kolejność: <strong>Od najnowszego (Kolejka ${played.length} → 1)</strong>`
        : `Kolejność: <strong>Chronologicznie (Kolejka 1 → ${played.length})</strong>`;
    }
    if (sortBtn) {
      sortBtn.textContent = playedNewestFirst
        ? `⇅ Pokaż od 1. kolejki (1 → ${played.length})`
        : `⇅ Pokaż od najnowszego (${played.length} → 1)`;
    }

    container.innerHTML = list.map(renderMatchItemHTML).join("");
  } else if (currentMatchesTab === "upcoming") {
    if (sortBtn) sortBtn.style.display = "none";
    if (roundSelect) roundSelect.style.display = "none";

    const upcoming = SWIBIE_MATCHES_DATA.filter((m) => !m.score || m.score === "-");
    if (subInfo) {
      subInfo.innerHTML = `Nadchodzące mecze Naprzodu Świbie: <strong>Kolejki ${upcoming[0]?.roundNum || 12} – 30</strong>`;
    }
    container.innerHTML = upcoming.map(renderMatchItemHTML).join("");
  } else if (currentMatchesTab === "round") {
    if (sortBtn) sortBtn.style.display = "none";
    if (roundSelect) {
      roundSelect.style.display = "inline-block";
      if (!roundSelect.options.length && ALL_LEAGUE_ROUNDS.length > 0) {
        roundSelect.innerHTML = ALL_LEAGUE_ROUNDS.map(
          (r) => `<option value="${r.roundNum}" ${r.roundNum === 11 ? "selected" : ""}>${r.title}</option>`
        ).join("");
      }
      renderSelectedLeagueRound(roundSelect.value || 11);
    }
  }
}

function renderSelectedLeagueRound(roundNum) {
  const container = document.getElementById("matchesListContainer");
  const subInfo = document.getElementById("matchesSubInfo");
  const rNum = Number(roundNum);
  const foundRound = ALL_LEAGUE_ROUNDS.find((r) => r.roundNum === rNum);

  if (subInfo) {
    subInfo.innerHTML = foundRound
      ? `Wszystkie mecze: <strong>${foundRound.title}</strong>`
      : `Kolejka ${rNum} (Eurotech Klasa B Zabrze)`;
  }

  if (foundRound && foundRound.matches.length > 0 && container) {
    container.innerHTML = foundRound.matches.map(renderMatchItemHTML).join("");
  } else if (container) {
    const fallbackMatch = SWIBIE_MATCHES_DATA.find((m) => m.roundNum === rNum);
    container.innerHTML = fallbackMatch ? renderMatchItemHTML(fallbackMatch) : "";
  }
}

function setMatchesTab(tab, btnEl) {
  currentMatchesTab = tab;
  if (btnEl && btnEl.parentElement) {
    btnEl.parentElement.querySelectorAll(".filter-tab").forEach((b) => b.classList.remove("active"));
    btnEl.classList.add("active");
  }
  renderMatchesPanel();
}

function togglePlayedSortOrder() {
  playedNewestFirst = !playedNewestFirst;
  renderMatchesPanel();
}

// Synchronizacja na żywo z endpointu /api/90minut (który pobiera prosto z 90minut.pl/liga/1/liga15135.html)
async function syncLiveFrom90Minut(manualClick = false) {
  const badge = document.getElementById("syncStatusBadge");
  if (manualClick && badge) {
    badge.textContent = "⏳ Pobieranie świeżych danych z 90minut.pl...";
  }
  try {
    const resp = await fetch(`/api/90minut${manualClick ? "?refresh=1" : ""}`);
    if (!resp.ok) throw new Error("Network error");
    const data = await resp.json();

    if (data.table && data.table.length > 0) {
      LEAGUE_TABLE_DATA = data.table;
      renderLeagueTable();
    }
    if (data.swibieMatches && data.swibieMatches.length > 0) {
      SWIBIE_MATCHES_DATA = data.swibieMatches;
    }
    if (data.rounds && data.rounds.length > 0) {
      ALL_LEAGUE_ROUNDS = data.rounds;
    }
    renderMatchesPanel();

    if (badge) {
      const timeStr = new Date().toLocaleTimeString("pl-PL", { hour: "2-digit", minute: "2-digit" });
      badge.textContent = `✅ Zsynchronizowano na żywo z 90minut.pl (${timeStr})`;
    }
  } catch (err) {
    if (badge && manualClick) {
      badge.textContent = "✅ Dane zgodne z 90minut.pl (Tryb lokalny – 11. kolejka)";
    }
  }
}

// 3. Pełna oficjalna kadra LKS Naprzód Świbie (32 zawodników + Trener Kamil Giera + Kierownik Rafał Leksy)
// Treningi Seniorów: Wtorek, czwartek 19:15 – 20:45 (boisko w Świbiu)
const SWIBIE_SQUAD = [
  // BRAMKARZE (4)
  { id: "m_musiol", num: 12, name: "Marcin Musioł", shortName: "M. Musioł", pos: "Bramkarz" },
  { id: "v_mykhailiuk", num: 25, name: "Volodymyr Mykhailiuk", shortName: "V. Mykhailiuk", pos: "Bramkarz" },
  { id: "p_chodkiewicz", num: null, name: "Piotr Chodkiewicz", shortName: "P. Chodkiewicz", pos: "Bramkarz" },
  { id: "k_grochla", num: null, name: "Krzysztof Grochla", shortName: "K. Grochla", pos: "Bramkarz" },

  // OBROŃCY (8)
  { id: "m_szostok", num: 2, name: "Michał Szostok", shortName: "M. Szostok", pos: "Obrońca" },
  { id: "t_jendrysik", num: 6, name: "Tomasz Jendrysik", shortName: "T. Jendrysik", pos: "Obrońca" },
  { id: "p_kokoszka", num: 15, name: "Paweł Kokoszka", shortName: "P. Kokoszka", pos: "Obrońca" },
  { id: "d_sosna", num: 17, name: "Dawid Sosna", shortName: "D. Sosna", pos: "Obrońca" },
  { id: "m_kravchuk", num: 13, name: "Mykola Kravchuk", shortName: "M. Kravchuk", pos: "Obrońca" },
  { id: "g_lasak", num: null, name: "Grzegorz Lasak", shortName: "G. Lasak", pos: "Obrońca" },
  { id: "w_marszalek", num: null, name: "Wojciech Marszałek", shortName: "W. Marszałek", pos: "Obrońca" },
  { id: "y_pozdniakov", num: null, name: "Yevhenii Pozdniakov", shortName: "Y. Pozdniakov", pos: "Obrońca" },

  // POMOCNICY (15)
  { id: "t_kusz", num: 5, name: "Tobiasz Kusz", shortName: "T. Kusz", pos: "Pomocnik" },
  { id: "o_bartosevych", num: 7, name: "Oleksandr Bartosevych", shortName: "O. Bartosevych", pos: "Pomocnik" },
  { id: "k_mazalik", num: 10, name: "Kamil Mazalik", shortName: "K. Mazalik", pos: "Pomocnik" },
  { id: "a_john", num: 11, name: "Adam John", shortName: "A. John", pos: "Pomocnik" },
  { id: "t_janoszka", num: 4, name: "Tomasz Janoszka", shortName: "T. Janoszka", pos: "Pomocnik" },
  { id: "m_krzykawski", num: 16, name: "Mateusz Krzykawski", shortName: "M. Krzykawski", pos: "Pomocnik" },
  { id: "w_bujara", num: 18, name: "Wojciech Bujara", shortName: "W. Bujara", pos: "Pomocnik" },
  { id: "a_dudek", num: null, name: "Artur Dudek", shortName: "A. Dudek", pos: "Pomocnik" },
  { id: "p_john", num: null, name: "Patryk John", shortName: "P. John", pos: "Pomocnik" },
  { id: "a_koziolek", num: null, name: "Artur Koziołek", shortName: "A. Koziołek", pos: "Pomocnik" },
  { id: "k_krupa", num: null, name: "Kacper Krupa", shortName: "K. Krupa", pos: "Pomocnik" },
  { id: "p_mazalik", num: null, name: "Patryk Mazalik", shortName: "P. Mazalik", pos: "Pomocnik" },
  { id: "sz_musiol", num: null, name: "Szymon Musioł", shortName: "Sz. Musioł", pos: "Pomocnik" },
  { id: "o_mysza", num: null, name: "Oliwier Mysza", shortName: "O. Mysza", pos: "Pomocnik" },
  { id: "t_seifried", num: null, name: "Tomasz Seifried", shortName: "T. Seifried", pos: "Pomocnik" },

  // NAPASTNICY (5)
  { id: "m_chowaniec", num: 8, name: "Marek Chowaniec", shortName: "M. Chowaniec", pos: "Napastnik" },
  { id: "p_giera", num: 9, name: "Patryk Giera", shortName: "P. Giera", pos: "Napastnik" },
  { id: "m_dudek", num: null, name: "Marcin Dudek", shortName: "M. Dudek", pos: "Napastnik" },
  { id: "j_tomaszek", num: null, name: "Jakub Tomaszek", shortName: "J. Tomaszek", pos: "Napastnik" },
  { id: "a_zienc", num: null, name: "Andrzej Zieńć", shortName: "A. Zieńć", pos: "Napastnik" },

  // SZTAB SZKOLENIOWY (2)
  { id: "k_giera_coach", num: "TR", name: "Kamil Giera", shortName: "K. Giera", pos: "Trener", role: "Licencja UEFA C", isStaff: true },
  { id: "r_leksy_staff", num: "KD", name: "Rafał Leksy", shortName: "R. Leksy", pos: "Kierownik drużyny", role: "Kierownik drużyny", isStaff: true }
];

// Domyślne ustawienie 1-4-4-2 (Wyjściowa 11: Musioł #12, Jendrysik #6, Szostok #2, Kokoszka #15, Sosna #17, Kusz #5, Bartosevych #7, Mazalik #10, John #11, Chowaniec #8, Giera #9)
const DEFAULT_442_SLOTS = [
  { slotIdx: 0, posLabel: "BR", left: "50%", top: "88%", isGK: true, playerId: "m_musiol" },
  // 4 Obrońców
  { slotIdx: 1, posLabel: "LO", left: "16%", top: "68%", isGK: false, playerId: "t_jendrysik" },
  { slotIdx: 2, posLabel: "ŚO", left: "38%", top: "72%", isGK: false, playerId: "m_szostok" },
  { slotIdx: 3, posLabel: "ŚO", left: "62%", top: "72%", isGK: false, playerId: "p_kokoszka" },
  { slotIdx: 4, posLabel: "PO", left: "84%", top: "68%", isGK: false, playerId: "d_sosna" },
  // 4 w drugiej linii (4-4-2)
  { slotIdx: 5, posLabel: "LP", left: "16%", top: "44%", isGK: false, playerId: "t_kusz" },
  { slotIdx: 6, posLabel: "ŚP", left: "38%", top: "48%", isGK: false, playerId: "o_bartosevych" },
  { slotIdx: 7, posLabel: "ŚP", left: "62%", top: "48%", isGK: false, playerId: "k_mazalik" },
  { slotIdx: 8, posLabel: "PP", left: "84%", top: "44%", isGK: false, playerId: "a_john" },
  // 2 Napastników (4-4-2)
  { slotIdx: 9, posLabel: "N", left: "35%", top: "20%", isGK: false, playerId: "m_chowaniec" },
  { slotIdx: 10, posLabel: "N", left: "65%", top: "20%", isGK: false, playerId: "p_giera" }
];

let currentPitchSlots = DEFAULT_442_SLOTS.map((s) => ({ ...s }));
let selectedSlotIdxForSub = null; // gdy kliknięto pozycję na boisku
let selectedPlayerIdForSub = null; // gdy kliknięto "Zmień" na karcie zawodnika z ławki
let currentSquadFilter = "all";

function getPlayerById(id) {
  return SWIBIE_SQUAD.find((p) => p.id === id);
}

function isPlayerInStarting11(playerId) {
  return currentPitchSlots.some((s) => s.playerId === playerId);
}

// Renderowanie interaktywnego boiska 1-4-4-2
function renderPitch442() {
  const container = document.getElementById("pitchNodesContainer");
  if (!container) return;

  container.innerHTML = currentPitchSlots
    .map((slot) => {
      const p = getPlayerById(slot.playerId) || SWIBIE_SQUAD[0];
      const isSelected = selectedSlotIdxForSub === slot.slotIdx;
      const gkClass = slot.isGK ? "gk" : "";
      const selClass = isSelected ? "selected-slot" : "";
      const jerseyDisplay = p.num ? p.num : "—";

      return `
        <div class="pitch-node ${gkClass} ${selClass}"
             style="left: ${slot.left}; top: ${slot.top};"
             data-slot="${slot.slotIdx}"
             onclick="handlePitchSlotClick(${slot.slotIdx})"
             ondragover="handlePitchDragOver(event, ${slot.slotIdx})"
             ondragleave="handlePitchDragLeave(event)"
             ondrop="handlePitchDrop(event, ${slot.slotIdx})"
             title="Kliknij, aby wymienić zawodnika na pozycji ${slot.posLabel} (${p.name})">
          <div class="pitch-jersey">${jerseyDisplay}</div>
          <span class="pitch-player-name">${slot.posLabel} • ${p.shortName}</span>
        </div>
      `;
    })
    .join("");
}

// Kliknięcie pozycji na boisku 1-4-4-2
function handlePitchSlotClick(slotIdx) {
  const slot = currentPitchSlots[slotIdx];
  const currentPlayer = getPlayerById(slot.playerId);

  // Jeśli wcześniej wybrano zawodnika z prawej listy do wejścia na boisko -> od razu dokonaj zmiany!
  if (selectedPlayerIdForSub) {
    performSubstitution(slotIdx, selectedPlayerIdForSub);
    return;
  }

  // W przeciwnym razie zaznacz / odznacz slot na boisku
  if (selectedSlotIdxForSub === slotIdx) {
    selectedSlotIdxForSub = null;
    updateSubBanner("💡 <strong>Jak zmieniać skład?</strong> Kliknij pozycję na boisku po lewej, a potem zawodnika z listy (lub przeciągnij kartę na boisko).");
  } else {
    selectedSlotIdxForSub = slotIdx;
    const numPrefix = currentPlayer.num ? `#${currentPlayer.num} ` : "";
    updateSubBanner(
      `🔄 Wybrano do zmiany na boisku: <strong style="color: #fbbf24;">${slot.posLabel} – ${numPrefix}${currentPlayer.name}</strong>. Kliknij teraz dowolnego zawodnika na liście po prawej, aby wstawić go w to miejsce!`
    );
  }

  renderPitch442();
  // Automatycznie rozwiń kategorię pozycji odpowiadającej wybranemu slotowi na boisku
  if (slot.isGK) {
    openSquadCategory = "Bramkarz";
  } else if (slot.posLabel.includes("O")) {
    openSquadCategory = "Obrońca";
  } else if (slot.posLabel.includes("P")) {
    openSquadCategory = "Pomocnik";
  } else if (slot.posLabel === "N") {
    openSquadCategory = "Napastnik";
  }
  renderSquad(currentSquadFilter, currentPlayer?.name);
}

// Dokonanie zmiany zawodnika w slocie 1-4-4-2 (lub zamiana miejscami, jeśli obaj są na boisku)
function performSubstitution(targetSlotIdx, incomingPlayerId) {
  const incomingPlayer = getPlayerById(incomingPlayerId);
  if (!incomingPlayer || incomingPlayer.isStaff) return;

  const targetSlot = currentPitchSlots[targetSlotIdx];
  const outgoingPlayer = getPlayerById(targetSlot.playerId);

  // Sprawdź, czy wchodzący zawodnik jest już na innej pozycji na boisku -> zamień ich miejscami!
  const existingSlot = currentPitchSlots.find((s) => s.playerId === incomingPlayerId);
  if (existingSlot && existingSlot.slotIdx !== targetSlotIdx) {
    existingSlot.playerId = targetSlot.playerId;
  }

  targetSlot.playerId = incomingPlayerId;
  selectedSlotIdxForSub = null;
  selectedPlayerIdForSub = null;

  const incomingNum = incomingPlayer.num ? `#${incomingPlayer.num} ` : "";
  updateSubBanner(
    `✅ <strong>Zmiana w Wyjściowej 11 (4-4-2):</strong> <span style="color: var(--turf-bright);">${incomingNum}${incomingPlayer.name}</span> wszedł na pozycję <strong>${targetSlot.posLabel}</strong> (za: ${outgoingPlayer.name})!`
  );

  renderPitch442();
  renderSquad(currentSquadFilter, incomingPlayer.name);
}

// Kliknięcie przycisku zmiany na karcie zawodnika po prawej stronie
function triggerSubFromCard(event, playerId) {
  event.stopPropagation();
  const clickedPlayer = getPlayerById(playerId);
  if (!clickedPlayer || clickedPlayer.isStaff) return;

  // Jeśli slot na boisku jest już zaznaczony -> od razu wstaw tam tego zawodnika!
  if (selectedSlotIdxForSub !== null) {
    performSubstitution(selectedSlotIdxForSub, playerId);
    return;
  }

  // Jeśli kliknięty zawodnik jest już w Wyjściowej 11 -> zaznacz jego slot na boisku do zmiany!
  const starterSlot = currentPitchSlots.find((s) => s.playerId === playerId);
  if (starterSlot) {
    selectedSlotIdxForSub = starterSlot.slotIdx;
    selectedPlayerIdForSub = null;
    updateSubBanner(
      `🔄 Zaznaczono na boisku: <strong style="color: #fbbf24;">${starterSlot.posLabel} – ${clickedPlayer.name}</strong>. Wybierz zmiennika z listy poniżej!`
    );
    renderPitch442();
    renderSquad(currentSquadFilter, clickedPlayer.name);
    return;
  }

  // Zawodnik z ławki rezerwowych -> zaznacz go do wejścia i poproś o kliknięcie pozycji na boisku
  if (selectedPlayerIdForSub === playerId) {
    selectedPlayerIdForSub = null;
    updateSubBanner("💡 Anulowano wybór. Kliknij pozycję na boisku lub zawodnika z listy.");
  } else {
    selectedPlayerIdForSub = playerId;
    selectedSlotIdxForSub = null;
    const playerNum = clickedPlayer.num ? `#${clickedPlayer.num} ` : "";
    updateSubBanner(
      `🎯 Wybrano do wejścia: <strong style="color: var(--turf-bright);">${playerNum}${clickedPlayer.name}</strong> (${clickedPlayer.pos}). Kliknij teraz pozycję na boisku po lewej, aby go wstawić!`
    );
  }
  renderPitch442();
  renderSquad(currentSquadFilter, clickedPlayer.name);
}

// Drag & Drop z listy zawodników na boisko 4-4-2
function handleCardDragStart(event, playerId) {
  event.dataTransfer.setData("text/plain", playerId);
}

function handlePitchDragOver(event) {
  event.preventDefault();
  event.currentTarget.classList.add("drag-over");
}

function handlePitchDragLeave(event) {
  event.currentTarget.classList.remove("drag-over");
}

function handlePitchDrop(event, slotIdx) {
  event.preventDefault();
  event.currentTarget.classList.remove("drag-over");
  const playerId = event.dataTransfer.getData("text/plain");
  if (playerId) {
    performSubstitution(slotIdx, playerId);
  }
}

function resetStartingEleven() {
  currentPitchSlots = DEFAULT_442_SLOTS.map((s) => ({ ...s }));
  selectedSlotIdxForSub = null;
  selectedPlayerIdForSub = null;
  updateSubBanner("✅ Przywrócono domyślną <strong>Wyjściową 11 (1-4-4-2)</strong> trenera Kamila Giery.");
  renderPitch442();
  renderSquad(currentSquadFilter);
}

function updateSubBanner(htmlText) {
  const banner = document.getElementById("selectedPlayerBanner");
  if (banner) banner.innerHTML = htmlText;
}

// 4. Wejście ze Split-Screen Portalu (Klub albo Szkółka) & Nawigacja Mobilna
function toggleMobileMenu() {
  const navLinks = document.getElementById("mainNavLinks");
  const toggleBtn = document.getElementById("mobileMenuToggle");
  const iconEl = document.getElementById("mobileMenuIcon");
  if (!navLinks) return;

  const isOpen = navLinks.classList.toggle("is-open");
  if (toggleBtn) toggleBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  if (iconEl) iconEl.textContent = isOpen ? "✕" : "☰";
}

function closeMobileMenu() {
  const navLinks = document.getElementById("mainNavLinks");
  const toggleBtn = document.getElementById("mobileMenuToggle");
  const iconEl = document.getElementById("mobileMenuIcon");
  if (navLinks) navLinks.classList.remove("is-open");
  if (toggleBtn) toggleBtn.setAttribute("aria-expanded", "false");
  if (iconEl) iconEl.textContent = "☰";
}

let currentActivePortalSide = null; // null | 'club' | 'academy'

// Obsługa dotyku i kliknięcia w sekcję powitalną (Split Screen) na telefonach i komputerach
function handlePortalSideClick(event, mode) {
  const isTouchOrMobile =
    window.innerWidth <= 1024 ||
    window.matchMedia("(max-width: 1024px)").matches ||
    window.matchMedia("(hover: none)").matches ||
    ("ontouchstart" in window) ||
    (navigator.maxTouchPoints > 0);

  // Bezpośrednie kliknięcie w przycisk przejścia (CTA) natychmiast otwiera daną strefę
  if (event && event.target && event.target.closest(".portal-cta")) {
    enterWorld(mode);
    return;
  }

  // Na urządzeniach dotykowych / mobilnych
  if (isTouchOrMobile) {
    // Jeśli dana strefa jest JUŻ powiększona (aktywna), ponowne kliknięcie wchodzi do niej
    if (currentActivePortalSide === mode) {
      enterWorld(mode);
      return;
    }

    // Pierwsze kliknięcie: powiększ tę strefę, pomniejsz drugą i przesuń linię podziału
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    activatePortalSide(mode);
    return;
  }

  // Na desktopie z myszką: bezpośrednie wejście
  enterWorld(mode);
}

function activatePortalSide(mode) {
  currentActivePortalSide = mode;
  const gateway = document.getElementById("portalGateway");
  const clubSide = document.querySelector(".portal-side--club");
  const academySide = document.querySelector(".portal-side--academy");

  if (!gateway || !clubSide || !academySide) return;

  gateway.classList.remove("active-club", "active-academy");
  clubSide.classList.remove("is-active", "is-inactive");
  academySide.classList.remove("is-active", "is-inactive");

  if (mode === "club") {
    gateway.classList.add("active-club");
    clubSide.classList.add("is-active");
    academySide.classList.add("is-inactive");
  } else if (mode === "academy") {
    gateway.classList.add("active-academy");
    academySide.classList.add("is-active");
    clubSide.classList.add("is-inactive");
  }
}

function enterWorld(mode) {
  closeMobileMenu();
  const gateway = document.getElementById("portalGateway");
  if (gateway) {
    gateway.classList.add("is-hidden");
  }
  switchMode(mode);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openPortalGateway() {
  closeMobileMenu();
  const gateway = document.getElementById("portalGateway");
  if (gateway) {
    gateway.classList.remove("is-hidden");
    // Przy ponownym otwarciu przywracamy równowagę 50/50
    gateway.classList.remove("active-club", "active-academy");
    document.querySelector(".portal-side--club")?.classList.remove("is-active", "is-inactive");
    document.querySelector(".portal-side--academy")?.classList.remove("is-active", "is-inactive");
    currentActivePortalSide = null;
  }
}

// 5. Przełączanie trybu: KLUB (Seniorzy) vs SZKÓŁKA PIŁKARSKA (Akademia)
function switchMode(mode) {
  closeMobileMenu();
  const body = document.body;
  const btnClub = document.getElementById("btnSwitchClub");
  const btnAcademy = document.getElementById("btnSwitchAcademy");

  const heroBadgeText = document.getElementById("heroBadgeText");
  const heroHeadline = document.getElementById("heroHeadline");
  const heroLead = document.getElementById("heroLead");
  const heroPrimaryBtn = document.getElementById("heroPrimaryBtn");

  if (mode === "academy") {
    body.classList.remove("mode-club");
    body.classList.add("mode-academy");

    btnAcademy.className = "world-btn active-academy";
    btnClub.className = "world-btn";

    heroBadgeText.textContent = "SZKÓŁKA PIŁKARSKA • SKRZATY • ŻAKI • ORLIKI • MŁODZIKI";
    heroHeadline.innerHTML = `SZKÓŁKA <span class="accent-text">NAPRZÓD ŚWIBIE</span>`;
    heroLead.innerHTML = `
      Szkolimy dzieci i młodzież od 4 do 14 roku życia (roczniki 2012–2022) w biało-czarnych barwach <strong>LKS Naprzód Świbie</strong>! Pierwsze <strong>2 treningi próbne są całkowicie bezpłatne</strong>. Poznaj grupy, trenerów, grafik zajęć oraz turniej <strong>Naprzód Świbie Kids Cup</strong>!
    `;
    if (heroPrimaryBtn) {
      heroPrimaryBtn.textContent = "🎯 Dobierz Grupę Wiekową Dziecka";
      heroPrimaryBtn.setAttribute("href", "#szkolka");
    }

    // W trybie Szkółki galeria pokazuje zdjęcia Akademii i Kids Cup (bez meczów seniorów!)
    const acadTab = document.getElementById("galleryTabAcademy");
    filterGallery("academy", acadTab);
    const wm = document.getElementById("bgWatermarkText");
    if (wm) wm.textContent = "SZKÓŁKA • KIDS CUP";
  } else {
    body.classList.remove("mode-academy");
    body.classList.add("mode-club");

    btnClub.className = "world-btn active-club";
    btnAcademy.className = "world-btn";

    heroBadgeText.textContent = "EUROTECH KLASA B • GRUPA ZABRZE (ŚLZPN) • ZAŁ. 1952";
    heroHeadline.innerHTML = `LKS NAPRZÓD <span class="accent-text">ŚWIBIE</span>`;
    heroLead.innerHTML = `
      Od 13 kwietnia 1952 roku budujemy piłkarską historię na naszym legendarnym boisku <strong>„Kęp Noł”</strong> przy ul. Sportowej 51. Sprawdź aktualną tabelę Eurotech Klasy B, terminarz spotkań oraz interaktywną kadrę 1-4-4-2.
    `;

    renderPhotoGallery("all");
    const wm = document.getElementById("bgWatermarkText");
    if (wm) wm.textContent = "NAPRZÓD • 1952";
  }

  // Upewnij się, że wszystkie widoczne sekcje animacji .reveal są od razu widoczne po przełączeniu trybu
  setTimeout(() => {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
    if (typeof updateScrollBackground === "function") updateScrollBackground();
  }, 50);
}

// 6. Kategorie pozycji kadry & Interaktywny Akordeon na telefonach i komputerach
const SQUAD_POSITION_CATEGORIES = [
  { key: "Bramkarz", title: "Bramkarze", icon: "🧤" },
  { key: "Obrońca", title: "Obrońcy", icon: "🛡️" },
  { key: "Pomocnik", title: "Pomocnicy", icon: "⚙️" },
  { key: "Napastnik", title: "Napastnicy", icon: "⚡" },
  { key: "staff", title: "Sztab szkoleniowy", icon: "📋" }
];

let openSquadCategory = "Bramkarz"; // Domyślnie rozwinięta pierwsza kategoria (Bramkarze)

function renderSinglePlayerCardHTML(p, highlightName) {
  const inStarting11 = isPlayerInStarting11(p.id);
  const isCoach = p.pos === "Trener";
  const isStaff = p.isStaff || p.pos === "Trener" || p.pos === "Kierownik drużyny";
  const isHighlighted =
    (highlightName && p.name === highlightName) ||
    selectedPlayerIdForSub === p.id;

  const slotObj = currentPitchSlots.find((s) => s.playerId === p.id);
  const starterBadge = inStarting11
    ? `<span class="starter-badge">⚡ Wyjściowa 11 (${slotObj ? slotObj.posLabel : ""})</span>`
    : "";

  let subBtnLabel = inStarting11 ? "🔄 Zmień na boisku" : "🔄 Wstaw do Wyjściowej 11";
  let subBtnExtraClass = "";

  if (selectedSlotIdxForSub !== null && !isStaff) {
    const targetSlot = currentPitchSlots[selectedSlotIdxForSub];
    const targetPlayer = getPlayerById(targetSlot.playerId);
    if (targetSlot.playerId === p.id) {
      subBtnLabel = "⚠️ Zaznaczony do zejścia";
      subBtnExtraClass = "sub-btn--active-target";
    } else {
      subBtnLabel = `⚡ Wstaw za: ${targetPlayer.shortName} (${targetSlot.posLabel})`;
      subBtnExtraClass = "sub-btn--active-target";
    }
  } else if (selectedPlayerIdForSub === p.id) {
    subBtnLabel = "🎯 Kliknij pozycję na boisku!";
    subBtnExtraClass = "sub-btn--active-target";
  }

  const numBadge = isCoach ? "TR" : p.pos === "Kierownik drużyny" ? "KD" : (p.num ? "#" + p.num : "—");
  const staffMetaHtml = isStaff && p.role ? `<div class="player-meta">${p.role}</div>` : "";

  return `
    <div class="player-card ${isHighlighted ? "highlighted" : ""} ${inStarting11 ? "is-starter" : ""} ${isStaff ? "is-coach" : ""}"
         data-player="${p.name}"
         draggable="${!isStaff}"
         ondragstart="handleCardDragStart(event, '${p.id}')"
         onclick="handlePlayerCardClick('${p.id}')">
      <div class="player-num">${numBadge}</div>
      <div>
        <span class="player-pos-badge" style="${isStaff ? "background: rgba(245,158,11,0.22); color: #fbbf24;" : ""}">${p.pos}</span>
        ${starterBadge}
      </div>
      <div class="player-name">${p.name}</div>
      ${staffMetaHtml}
      ${
        !isStaff
          ? `<button type="button" class="sub-btn ${subBtnExtraClass}" onclick="triggerSubFromCard(event, '${p.id}')">${subBtnLabel}</button>`
          : ""
      }
    </div>
  `;
}

// Renderowanie kadry w postaci rozwijanych kategorii (akordeon)
function renderSquad(filterPos = "all", highlightName = null) {
  currentSquadFilter = filterPos;
  const grid = document.getElementById("playersGrid");
  if (!grid) return;

  let baseSquad = SWIBIE_SQUAD;
  if (filterPos === "starter") {
    baseSquad = SWIBIE_SQUAD.filter((p) => isPlayerInStarting11(p.id));
  } else if (filterPos === "bench") {
    baseSquad = SWIBIE_SQUAD.filter((p) => !p.isStaff && !isPlayerInStarting11(p.id));
  } else if (filterPos === "staff") {
    baseSquad = SWIBIE_SQUAD.filter((p) => p.isStaff || p.pos === "Trener" || p.pos === "Kierownik drużyny");
    openSquadCategory = "staff";
  } else if (filterPos !== "all") {
    openSquadCategory = filterPos;
  }

  const accordionHtml = SQUAD_POSITION_CATEGORIES.map((cat) => {
    let catPlayers = [];
    if (cat.key === "staff") {
      catPlayers = baseSquad.filter((p) => p.isStaff || p.pos === "Trener" || p.pos === "Kierownik drużyny");
    } else {
      catPlayers = baseSquad.filter((p) => !p.isStaff && p.pos === cat.key);
    }

    // Jeśli filtr pozycji ukrywa daną kategorię
    if (filterPos !== "all" && filterPos !== "starter" && filterPos !== "bench" && cat.key !== filterPos && !(filterPos === "staff" && cat.key === "staff")) {
      return "";
    }
    if (catPlayers.length === 0 && (filterPos === "starter" || filterPos === "bench")) {
      return "";
    }

    const isOpen = openSquadCategory === cat.key || (filterPos !== "all" && cat.key === filterPos);
    const startersInCat = catPlayers.filter((p) => isPlayerInStarting11(p.id)).length;
    const starterBadge = startersInCat > 0
      ? `<span class="squad-cat-starter-pill">⚡ ${startersInCat} w Wyjściowej 11</span>`
      : "";

    const cardsHtml = catPlayers.map((p) => renderSinglePlayerCardHTML(p, highlightName)).join("");

    return `
      <div class="squad-accordion-item ${isOpen ? "is-open" : ""}" id="squadAccordion-${cat.key}">
        <button type="button" class="squad-accordion-header" onclick="toggleSquadCategory('${cat.key}')" aria-expanded="${isOpen}">
          <div class="squad-accordion-title-wrap">
            <span class="squad-cat-icon">${cat.icon}</span>
            <span class="squad-cat-title">${cat.title}</span>
            <span class="squad-cat-count">(${catPlayers.length})</span>
            ${starterBadge}
          </div>
          <span class="squad-accordion-chevron" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </span>
        </button>
        <div class="squad-accordion-body">
          <div class="squad-accordion-content">
            <div class="players-subgrid">
              ${cardsHtml}
            </div>
          </div>
        </div>
      </div>
    `;
  }).join("");

  grid.innerHTML = accordionHtml;
}

// Kliknięcie/tapnięcie w nagłówek pozycji rozwija listę zawodników i chowa pozostałe
function toggleSquadCategory(key) {
  const container = document.getElementById("playersGrid");
  if (!container) return;

  const currentItem = document.getElementById(`squadAccordion-${key}`);
  const isAlreadyOpen = currentItem && currentItem.classList.contains("is-open");

  // Zwiń pozostałe kategorie
  const allItems = container.querySelectorAll(".squad-accordion-item");
  allItems.forEach((item) => {
    item.classList.remove("is-open");
    const btn = item.querySelector(".squad-accordion-header");
    if (btn) btn.setAttribute("aria-expanded", "false");
  });

  if (isAlreadyOpen) {
    // Jeśli była już otwarta -> zwiń
    openSquadCategory = null;
  } else {
    // Rozwiń klikniętą kategorię
    if (currentItem) {
      currentItem.classList.add("is-open");
      const btn = currentItem.querySelector(".squad-accordion-header");
      if (btn) btn.setAttribute("aria-expanded", "true");
    }
    openSquadCategory = key;
  }
}

function filterSquad(pos, btnEl) {
  document.querySelectorAll("#kadra .filter-tab").forEach((b) => b.classList.remove("active"));
  if (btnEl) btnEl.classList.add("active");
  if (pos !== "all" && pos !== "starter" && pos !== "bench") {
    openSquadCategory = pos;
  }
  renderSquad(pos);
}

function handlePlayerCardClick(playerId) {
  const p = getPlayerById(playerId);
  if (!p) return;

  // Jeśli na boisku wybrano pozycję do zmiany i kliknięto kartę piłkarza -> wykonaj zmianę!
  if (selectedSlotIdxForSub !== null && !p.isStaff) {
    performSubstitution(selectedSlotIdxForSub, playerId);
    return;
  }

  renderSquad(currentSquadFilter, p.name);
  const numPrefix = p.num ? `#${p.num} ` : "";
  const staffRoleSuffix = p.isStaff && p.role ? ` — ${p.role}` : "";
  updateSubBanner(
    `⚡ Wybrano: <strong style="color: var(--turf-bright);">${p.isStaff ? p.pos + ": " : numPrefix}${p.name}</strong> (${p.pos}${staffRoleSuffix})`
  );
}

// 7. Kalkulator Grupy Wiekowej Szkółki Piłkarskiej (4–14 lat / roczniki 2012–2022)
function updateAcademyFinder(ageVal) {
  const age = parseInt(ageVal, 10);
  const birthYear = 2026 - age;
  const label = document.getElementById("ageSliderValueLabel");
  const badge = document.getElementById("recBadge");
  const title = document.getElementById("recTitle");
  const desc = document.getElementById("recDesc");
  const schedule = document.getElementById("recSchedule");

  ["groupCardSkrzat", "groupCardZak", "groupCardOrlik", "groupCardMlodzik"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.classList.remove("active-group");
  });

  if (age <= 6) {
    label.textContent = `${age} lat • Rocznik ${birthYear} (Skrzat G1/G2)`;
    badge.textContent = `KATEGORIA: SKRZATY (G1 / G2) • ${age} LAT (ROCZNIK ${birthYear})`;
    title.textContent = "GRUPA SKRZAT – ZABAWA, KOORDYNACJA I PIERWSZE GOLE";
    desc.textContent =
      "Idealny start dla najmłodszych! Bajkowe gry ruchowe z piłką, tor przeszkód, mini-mecze 3v3 i ogromna dawka uśmiechu bez żadnej presji wyniku.";
    if (schedule) schedule.textContent = "📅 Treningi: Wtorek i Czwartek (16:30–17:30) • Boisko „Kęp Noł” / Zimą Hala";
    document.getElementById("groupCardSkrzat")?.classList.add("active-group");
  } else if (age <= 8) {
    label.textContent = `${age} lat • Rocznik ${birthYear} (Żak F1/F2)`;
    badge.textContent = `KATEGORIA: ŻAKI (F1 / F2) • ${age} LAT (ROCZNIK ${birthYear})`;
    title.textContent = "GRUPA ŻAK – TECHNIKA, DRYBLING I RADOŚĆ Z GRY";
    desc.textContent =
      "Zajęcia ukierunkowane na czucie piłki, pojedynki 1v1, małe gry 4v4 + bramkarz oraz udział w bezwynikowych turniejach ŚLZPN i naszym domowym turnieju Naprzód Świbie Kids Cup.";
    if (schedule) schedule.textContent = "📅 Treningi: Wtorek i Czwartek (17:00–18:15) • Boisko „Kęp Noł” / Zimą Hala";
    document.getElementById("groupCardZak")?.classList.add("active-group");
  } else if (age <= 10) {
    label.textContent = `${age} lat • Rocznik ${birthYear} (Orlik E1/E2)`;
    badge.textContent = `KATEGORIA: ORLIKI (E1 / E2) • ${age} LAT (ROCZNIK ${birthYear})`;
    title.textContent = "GRUPA ORLIK – GRA ZESPOŁOWA 7V7 I ROZGRYWKI ŚLZPN";
    desc.textContent =
      "Doskonalenie podań, przyjęcia kierunkowego, gry w trójkątach oraz regularne mecze ligowe 7v7 i turnieje w Podokręgu Zabrze oraz Naprzód Świbie Kids Cup.";
    if (schedule) schedule.textContent = "📅 Treningi: Poniedziałek, Środa, Piątek (17:00–18:30) • Boisko „Kęp Noł”";
    document.getElementById("groupCardOrlik")?.classList.add("active-group");
  } else {
    label.textContent = `${age} lat • Rocznik ${birthYear} (Młodzik D1/D2)`;
    badge.textContent = `KATEGORIA: MŁODZIKI (D1 / D2) • ${age} LAT (ROCZNIK ${birthYear})`;
    title.textContent = "GRUPA MŁODZIK – TAKTYKA, MOTORYKA I DUŻE BOISKO";
    desc.textContent =
      "Przejście do gry 9v9 oraz 11v11 na pełnowymiarowej płycie 100×60m „Kęp Noł”. Kształtowanie boiskowej inteligencji, motoryki oraz udział w rozgrywkach ligowych ŚLZPN.";
    if (schedule) schedule.textContent = "📅 Treningi: Wtorek, Czwartek, Piątek (17:30–19:00) • Boisko „Kęp Noł”";
    document.getElementById("groupCardMlodzik")?.classList.add("active-group");
  }
}

// 8. Kalkulator 1,5% podatku (OPP KRS 0000294473)
function calculateOnePointFive(taxAmount) {
  const num = parseFloat(taxAmount) || 0;
  const oneFive = (num * 0.015).toFixed(2).replace(".", ",");
  const out = document.getElementById("taxResultValue");
  if (out) {
    out.textContent = `${oneFive} zł`;
  }
}

function copyKrsNumber() {
  const krs = "0000294473";
  if (navigator.clipboard) {
    navigator.clipboard.writeText(krs);
  }
  const btnText = document.getElementById("copyKrsBtnText");
  if (btnText) {
    btnText.textContent = "Skopiowano: 0000294473!";
    setTimeout(() => {
      btnText.textContent = "Kopiuj KRS";
    }, 2800);
  }
}

// 9. Filtrowanie Social Media Wall
function filterSocial(category, btnEl) {
  document.querySelectorAll("#social-wall .filter-tab").forEach((b) => b.classList.remove("active"));
  if (btnEl) btnEl.classList.add("active");

  document.querySelectorAll("#socialWallGrid .social-post-card").forEach((card) => {
    const cat = card.getAttribute("data-category");
    if (category === "all" || cat === category) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
}

// 10. Modal Zgłoszeniowy
function openEnrollModal(topic) {
  const modal = document.getElementById("enrollModal");
  const topicInput = document.getElementById("formTopic");
  const successMsg = document.getElementById("formSuccessMsg");
  if (topicInput) topicInput.value = topic || "Zgłoszenie ogólne";
  if (successMsg) successMsg.style.display = "none";
  if (modal) modal.classList.add("is-open");
}

function closeEnrollModal() {
  const modal = document.getElementById("enrollModal");
  if (modal) modal.classList.remove("is-open");
}

async function handleFormSubmit(e) {
  e.preventDefault();
  const formEl = e.target;
  const formTopic = document.getElementById("formTopic")?.value || "Wiadomość z formularza";
  const formName = document.getElementById("formName")?.value || "";
  const formPhone = document.getElementById("formPhone")?.value || "";
  const formNotes = document.getElementById("formNotes")?.value || "";

  const submitBtn = formEl.querySelector('button[type="submit"]');
  const originalBtnHtml = submitBtn ? submitBtn.innerHTML : "🚀 Wyślij Zgłoszenie";
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = "⏳ Wysyłanie zgłoszenia...";
  }

  const successMsg = document.getElementById("formSuccessMsg");
  if (successMsg) {
    successMsg.style.display = "none";
  }

  try {
    const resp = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        topic: formTopic,
        name: formName,
        contact: formPhone,
        notes: formNotes
      })
    });

    const result = await resp.json().catch(() => ({}));

    if (!resp.ok || !result.ok) {
      throw new Error(result.error || "Wystąpił błąd podczas wysyłania formularza.");
    }

    if (successMsg) {
      successMsg.style.background = "rgba(16, 185, 129, 0.2)";
      successMsg.style.borderColor = "var(--turf-bright)";
      successMsg.innerHTML = `
        ✅ <strong>Dziękujemy za przesłanie zgłoszenia!</strong><br />
        Wiadomość została wysłana do klubu na adres: <strong>naprzodswibie@o2.pl</strong>.<br />
        Skontaktujemy się z Tobą najszybciej jak to możliwe.<br /><br />
        <div style="font-size: 0.82rem; color: #cbd5e1; text-align: left; background: rgba(0,0,0,0.35); padding: 0.6rem 0.85rem; border-radius: 8px;">
          📞 <strong>Zarząd / kontakt ogólny:</strong> 796 129 276 (Piotr Chodkiewicz - Wiceprezes)<br />
          📞 <strong>Zapisy do Szkółki Piłkarskiej:</strong> 511 956 923 (Tomasz Janoszka - Koordynator)
        </div>
      `;
      successMsg.style.display = "block";
    }

    formEl.reset();
    setTimeout(() => {
      closeEnrollModal();
    }, 4500);
  } catch (err) {
    if (successMsg) {
      successMsg.style.background = "rgba(239, 68, 68, 0.2)";
      successMsg.style.borderColor = "#ef4444";
      successMsg.innerHTML = `
        ⚠️ <strong>Nie udało się wysłać zgłoszenia automatycznie:</strong> ${err.message || "Błąd sieci"}<br /><br />
        <div style="font-size: 0.82rem; color: #cbd5e1; text-align: left; background: rgba(0,0,0,0.35); padding: 0.6rem 0.85rem; border-radius: 8px;">
          Skontaktuj się bezpośrednio:<br />
          ✉️ <strong>E-mail:</strong> naprzodswibie@o2.pl<br />
          📞 <strong>Zarząd:</strong> 796 129 276 • <strong>Szkółka:</strong> 511 956 923
        </div>
      `;
      successMsg.style.display = "block";
    }
  } finally {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnHtml;
    }
  }
}

// Kopiowanie numeru konta bankowego klubu
function copyBankAccount() {
  const bankAcc = "18 2490 0005 0000 4500 3814 1133";
  if (navigator.clipboard) {
    navigator.clipboard.writeText(bankAcc);
  }
  const btnText = document.getElementById("copyAccountBtnText");
  if (btnText) {
    btnText.textContent = "Skopiowano numer rachunku!";
    setTimeout(() => {
      btnText.textContent = "Kopiuj nr konta";
    }, 2800);
  }
}

// 11. Efekty Scrollowania (Pasek murawy z piłką + Piłka tocząca się w tle całej strony + Parallax)
function updateScrollBackground() {
  const scrollTop = window.scrollY;
  const vh = window.innerHeight || 900;
  const vw = window.innerWidth || 1440;
  const docHeight = Math.max(1, document.documentElement.scrollHeight - vh);
  const progress = Math.min(1, Math.max(0, scrollTop / docHeight));
  const progressPct = progress * 100;

  // Górny pasek postępu murawy
  const bar = document.getElementById("scrollPitchBar");
  const ball = document.getElementById("scrollPitchBall");
  if (bar) bar.style.width = `${progressPct}%`;
  if (ball) ball.style.transform = `rotate(${scrollTop * 0.65}deg)`;

  // Parallax w sekcji Hero
  const heroBg = document.getElementById("heroBgLayer");
  if (heroBg && scrollTop < 900) {
    heroBg.style.transform = `translateY(${scrollTop * 0.22}px) scale(1.04)`;
  }

  // Główna piłka 3D tocząca się w dół ekranu po łuku (S-curve) i obracająca się podczas scrollowania
  const mainBall = document.getElementById("bgRollingBallMain");
  const mainBallSvg = document.getElementById("bgRollingBallMainSvg");
  if (mainBall && mainBallSvg) {
    const mainSize = mainBall.offsetWidth || (vw <= 640 ? 130 : vw <= 1024 ? 185 : 270);
    const ballY = vh * 0.1 + progress * (vh * 0.6);
    const wave = Math.cos(scrollTop * 0.0025);
    const centerX = vw * 0.5 - mainSize * 0.5;
    const amplitudeX = Math.min(vw * 0.34, 520);
    const ballX = centerX + wave * amplitudeX;

    mainBall.style.transform = `translate3d(${ballX.toFixed(1)}px, ${ballY.toFixed(1)}px, 0)`;
    mainBallSvg.style.transform = `rotate(${(scrollTop * 0.42).toFixed(1)}deg)`;
  }

  // Druga piłka głębi (po przeciwnej stronie ekranu, obracająca się w drugą stronę)
  const secBall = document.getElementById("bgRollingBallSecondary");
  const secBallSvg = document.getElementById("bgRollingBallSecondarySvg");
  if (secBall && secBallSvg) {
    const secSize = secBall.offsetWidth || (vw <= 640 ? 86 : vw <= 1024 ? 120 : 165);
    const secY = vh * 0.74 - progress * (vh * 0.58);
    const secWave = -Math.cos(scrollTop * 0.0025);
    const secCenterX = vw * 0.5 - secSize * 0.5;
    const secAmpX = Math.min(vw * 0.32, 480);
    const secX = secCenterX + secWave * secAmpX;

    secBall.style.transform = `translate3d(${secX.toFixed(1)}px, ${secY.toFixed(1)}px, 0)`;
    secBallSvg.style.transform = `rotate(${(-scrollTop * 0.32).toFixed(1)}deg)`;
  }

  // Subtelny ruch napisu wodnego NAPRZÓD • 1952 / SZKÓŁKA • KIDS CUP oraz linii boiska
  const watermark = document.getElementById("bgWatermarkText");
  if (watermark) {
    const wmOffset = (progress - 0.5) * -140;
    watermark.style.transform = `translate3d(-50%, calc(-50% + ${wmOffset.toFixed(1)}px), 0)`;
  }

  const blueprint = document.getElementById("bgPitchBlueprint");
  if (blueprint) {
    const bpOffset = Math.sin(scrollTop * 0.0015) * 24;
    blueprint.style.transform = `translate3d(0, ${bpOffset.toFixed(1)}px, 0)`;
  }
}

window.addEventListener("scroll", updateScrollBackground, { passive: true });
window.addEventListener("resize", updateScrollBackground, { passive: true });

// ==========================================================================
// 12. KARUZELA "GRAJĄ Z NAMI" (DARCZYŃCY I PARTNERZY Z LOGOTYPAMI SVG)
// ==========================================================================
const SPONSORS_LIST = [
  {
    name: "Gmina Wielowieś",
    role: "Partner Samorządowy",
    svg: `<svg width="44" height="40" viewBox="0 0 44 40" fill="none"><path d="M8 6H36V22C36 31 22 37 22 37C22 37 8 31 8 22V6Z" fill="#10b981" stroke="#fff" stroke-width="2"/><text x="22" y="24" text-anchor="middle" fill="#090a0f" font-family="Teko" font-weight="700" font-size="16">GW</text></svg>`
  },
  {
    name: "EUROTECH",
    role: "Sponsor Tytularny Klasy B",
    svg: `<svg width="110" height="36" viewBox="0 0 110 36" fill="none"><rect x="2" y="4" width="106" height="28" rx="6" fill="#1e293b" stroke="#a3e635" stroke-width="2"/><text x="55" y="24" text-anchor="middle" fill="#a3e635" font-family="Teko" font-weight="700" font-size="20" letter-spacing="2">EUROTECH</text></svg>`
  },
  {
    name: "Sołectwo Świbie",
    role: "Społeczność Lokalna",
    svg: `<svg width="44" height="40" viewBox="0 0 44 40" fill="none"><circle cx="22" cy="20" r="16" fill="#fff" stroke="#a3e635" stroke-width="3"/><text x="22" y="25" text-anchor="middle" fill="#090a0f" font-family="Teko" font-weight="700" font-size="16">ŚWIBIE</text></svg>`
  },
  {
    name: "Śląski ZPN • Zabrze",
    role: "Organizator Rozgrywek",
    svg: `<svg width="90" height="36" viewBox="0 0 90 36" fill="none"><rect x="2" y="4" width="86" height="28" rx="14" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/><text x="45" y="24" text-anchor="middle" fill="#38bdf8" font-family="Teko" font-weight="700" font-size="18" letter-spacing="1.5">ŚLZPN ZABRZE</text></svg>`
  },
  {
    name: "Wzmocnij Swoje Otoczenie",
    role: "Program Grantowy (24 000 zł)",
    svg: `<svg width="44" height="40" viewBox="0 0 44 40" fill="none"><polygon points="22,3 40,34 4,34" fill="rgba(163,230,53,0.2)" stroke="#a3e635" stroke-width="2"/><text x="22" y="30" text-anchor="middle" fill="#a3e635" font-size="16">⚡</text></svg>`
  },
  {
    name: "GBD Architektura",
    role: "Projekt Szatni „Kęp Noł”",
    svg: `<svg width="86" height="36" viewBox="0 0 86 36" fill="none"><rect x="4" y="5" width="78" height="26" fill="none" stroke="#fff" stroke-width="2"/><text x="43" y="24" text-anchor="middle" fill="#fff" font-family="Teko" font-weight="700" font-size="19" letter-spacing="2">GBD ARCH</text></svg>`
  },
  {
    name: "Klub 100 • Świbie",
    role: "Lokalni Darczyńcy & Kibice",
    svg: `<svg width="86" height="36" viewBox="0 0 86 36" fill="none"><rect x="2" y="4" width="82" height="28" rx="6" fill="rgba(245,158,11,0.16)" stroke="#f59e0b" stroke-width="2"/><text x="43" y="24" text-anchor="middle" fill="#fbbf24" font-family="Teko" font-weight="700" font-size="19" letter-spacing="1.5">KLUB 100</text></svg>`
  },
  {
    name: "+ ZOSTAŃ DARCZYŃCĄ",
    role: "Wspieraj Klub i Szkółkę!",
    isCta: true,
    svg: `<svg width="44" height="40" viewBox="0 0 44 40" fill="none"><circle cx="22" cy="20" r="16" fill="rgba(163,230,53,0.2)" stroke="#a3e635" stroke-dasharray="4 3" stroke-width="2"/><text x="22" y="26" text-anchor="middle" fill="#a3e635" font-size="20" font-weight="800">+</text></svg>`
  }
];

function renderSponsorsCarousel() {
  const track = document.getElementById("sponsorsCarouselTrack");
  if (!track) return;

  // Powielamy listę 2x dla płynnej, nieskończonej pętli karuzeli
  const combined = [...SPONSORS_LIST, ...SPONSORS_LIST];
  track.innerHTML = combined
    .map(
      (s) => `
      <div class="sponsor-logo-card ${s.isCta ? "sponsor-cta-slot" : ""}"
           onclick="openEnrollModal('Wsparcie Klubu / Zostań Darczyńcą LKS Naprzód Świbie (${s.name})')">
        <div class="sponsor-logo-svg">${s.svg}</div>
        <div class="sponsor-name-lbl" style="${s.isCta ? "color: var(--turf-bright);" : ""}">${s.name}</div>
        <div class="sponsor-role-lbl">${s.role}</div>
      </div>
    `
    )
    .join("");
}

function toggleKlub100Packages() {
  const grid = document.getElementById("klub100PackagesGrid");
  if (!grid) return;
  grid.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

// ==========================================================================
// 13. INTERAKTYWNA WIRTUALNA TORBA MŁODEGO PIŁKARZA ("SPAKUJ PLECAK NA TRENING")
// ==========================================================================
function toggleBagItem(btnEl) {
  if (!btnEl) return;
  btnEl.classList.toggle("packed");

  const allItems = document.querySelectorAll("#bagChecklistGrid .bag-item-btn");
  const packedItems = document.querySelectorAll("#bagChecklistGrid .bag-item-btn.packed");
  const total = allItems.length || 5;
  const count = packedItems.length;
  const pct = Math.round((count / total) * 100);

  const progressText = document.getElementById("bagProgressText");
  if (progressText) {
    if (count === total) {
      progressText.textContent = "5 / 5 (100% GOTOWY! ⚽)";
    } else {
      progressText.textContent = `${count} / ${total} (${pct}%)`;
    }
  }
}

// ==========================================================================
// 14. TYGODNIOWY HARMONOGRAM TRENINGÓW SZKÓŁKI, FAQ RODZICA & DOKUMENTY PZPN
// ==========================================================================
const SCHEDULE_DATA = {
  outdoor: [
    {
      group: "🐣 Roczniki 2019 i młodsi (Skrzaty)",
      trainer: "Trener: Mateusz Jarząb (UEFA B) • Asystent: Rafał Leksy",
      days: "Środa, Piątek",
      hours: "16:45 – 17:45",
      place: "Boisko „Kęp Noł” (do końca listopada)"
    },
    {
      group: "⚡ Roczniki 2017/2018 (Żaki)",
      trainer: "Trener: Mateusz Jarząb (UEFA B) • Asystent: Rafał Leksy",
      days: "Środa, Piątek",
      hours: "17:45 – 19:00",
      place: "Boisko „Kęp Noł” (do końca listopada)"
    },
    {
      group: "🦅 Roczniki 2013–2016 (Orliki / Młodziki)",
      trainer: "Trener: Kamil Giera (UEFA C) • Asystent: Rafał Leksy",
      days: "Wtorek, Czwartek",
      hours: "17:30 – 19:00",
      place: "Boisko „Kęp Noł” (do końca listopada)"
    }
  ],
  winter: [
    {
      group: "❄️ Wszystkie roczniki młodzieżowe (2013–2019 i mł.)",
      trainer: "Sztab: M. Jarząb (UEFA B), K. Giera (UEFA C), R. Leksy",
      days: "W trakcie ustalania",
      hours: "W trakcie ustalania (okres zimowy)",
      place: "Hala Sportowa w Gminie Wielowieś"
    }
  ]
};

function renderTrainingSchedule(seasonKey = "outdoor") {
  const tbody = document.getElementById("trainingScheduleBody");
  if (!tbody) return;
  const rows = SCHEDULE_DATA[seasonKey] || SCHEDULE_DATA.outdoor;
  tbody.innerHTML = rows
    .map(
      (r) => `
      <tr>
        <td>
          <strong>${r.group}</strong>
          ${r.trainer ? `<div style="font-size: 0.72rem; color: #a3e635; margin-top: 0.2rem;">${r.trainer}</div>` : ""}
        </td>
        <td>${r.days}</td>
        <td style="color: var(--turf-bright); font-weight: 800;">${r.hours}</td>
        <td style="color: var(--text-muted); font-size: 0.8rem;">${r.place}</td>
      </tr>
    `
    )
    .join("");
}

function setScheduleSeason(seasonKey, btnEl) {
  if (btnEl && btnEl.parentElement) {
    btnEl.parentElement.querySelectorAll(".filter-tab").forEach((b) => b.classList.remove("active"));
    btnEl.classList.add("active");
  }
  renderTrainingSchedule(seasonKey);
}

function toggleFaqItem(btnEl) {
  const item = btnEl.closest(".faq-item");
  if (item) {
    item.classList.toggle("is-open");
  }
}

function openDocumentPreview(docTitle) {
  const modal = document.getElementById("lightboxModal");
  const title = document.getElementById("lightboxTitle");
  const body = document.getElementById("lightboxBody");
  if (!modal || !title || !body) return;

  const isDeclaration = docTitle.toLowerCase().includes("deklaracja");

  title.textContent = docTitle;
  body.innerHTML = `
    <div style="background: #090a0f; border: 1px solid rgba(255,255,255,0.14); border-radius: 14px; padding: 1.5rem; color: #cbd5e1; font-size: 0.9rem; line-height: 1.65;">
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 0.85rem; margin-bottom: 1rem;">
        <div>
          <strong style="color: #fff;">Ludowy Klub Sportowy „Naprzód” Świbie</strong><br />
          <span style="font-size: 0.78rem; color: var(--text-muted);">ul. Sportowa 51, 44-187 Świbie • KRS: 0000294473 • NIP: 9691241833</span>
        </div>
        <span class="status-badge">WZÓR OFICJALNY</span>
      </div>
      <p style="margin-bottom: 0.85rem;">
        Niniejszy dokument (<strong>${docTitle}</strong>) obowiązuje wszystkich uczestników szkolenia młodzieżowego oraz rodziców/opiekunów prawnych w Szkółce Piłkarskiej LKS Naprzód Świbie zgodnie z wytycznymi Śląskiego Związku Piłki Nożnej (ŚLZPN) oraz Polskiego Związku Piłki Nożnej.
      </p>
      <ul style="margin-left: 1.2rem; margin-bottom: 1.25rem;">
        <li><strong>Ważne:</strong> Do końca 2026 roku nie pobieramy składki członkowskiej za udział dziecka w treningach!</li>
        <li>Bezpieczeństwo i dobro dziecka (Standardy Ochrony Małoletnich) są najwyższym priorytetem klubu.</li>
        <li>Wypełnioną deklarację można przekazać bezpośrednio trenerowi grupy lub przesłać skan na adres: <strong>naprzodswibie@o2.pl</strong>.</li>
      </ul>
      <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
        ${
          isDeclaration
            ? `<a href="assets/deklaracja-czlonkowska.pdf" download="Deklaracja_uczestnictwa_w_LKS_Naprzod_Swibie.pdf" target="_blank" class="btn btn-primary" style="display: inline-flex; align-items: center; gap: 0.45rem; text-decoration: none;">⬇ Pobierz Oficjalną Deklarację (PDF)</a>
               <a href="assets/deklaracja-czlonkowska.pdf" target="_blank" rel="noopener noreferrer" class="btn btn-outline" style="display: inline-flex; align-items: center; gap: 0.45rem; text-decoration: none;">👁️ Otwórz PDF w nowej karcie</a>`
            : `<button type="button" class="btn btn-primary" onclick="window.print()">🖨️ Drukuj / Zapisz jako PDF</button>`
        }
        <button type="button" class="btn btn-outline" onclick="closeLightboxModal(); openEnrollModal('Pobranie dokumentów i kontakt: ${docTitle}')">📝 Wypełnij Zgłoszenie Online</button>
      </div>
    </div>
  `;
  modal.classList.add("is-open");
}

function closeLightboxModal() {
  const modal = document.getElementById("lightboxModal");
  if (modal) modal.classList.remove("is-open");
}

// ==========================================================================
// 15. GALERIA FOTO Z LIGHTBOXEM & BIAŁO-CZARNY FAN SHOP
// ==========================================================================
const GALLERY_ITEMS = [
  {
    cat: "senior",
    title: "Zwycięskie Derby Gminy: Naprzód Świbie 2:0 Naprzód Łubie",
    subtitle: "Eurotech Klasa B • Kolejka 11 • Stadion „Kęp Noł”",
    img: "assets/hero-senior.png"
  },
  {
    cat: "academy",
    title: "Turniej Naprzód Świbie Kids Cup – Emocje najmłodszych!",
    subtitle: "Skrzaty, Żaki, Orliki i Młodziki przy ul. Sportowej 51",
    img: "assets/hero-academy.png"
  },
  {
    cat: "stadium",
    title: "Twierdza „Kęp Noł” w Świbiu (Płyta 100m × 60m)",
    subtitle: "Domowe boisko Biało-Czarnych od 1952 roku",
    img: "assets/hero-senior.png"
  },
  {
    cat: "academy",
    title: "Trening techniki i koordynacji w Szkółce Piłkarskiej",
    subtitle: "Nabór otwarty dla chłopców i dziewczynek (4–14 lat)",
    img: "assets/hero-academy.png"
  }
];

function renderPhotoGallery(filterCat = "all") {
  const grid = document.getElementById("photoGalleryGrid");
  if (!grid) return;

  const list = filterCat === "all" ? GALLERY_ITEMS : GALLERY_ITEMS.filter((g) => g.cat === filterCat);
  grid.innerHTML = list
    .map(
      (item, idx) => `
      <div class="gallery-card" onclick="openPhotoLightbox(${idx}, '${filterCat}')">
        <img src="${item.img}" alt="${item.title}" loading="lazy" />
        <div class="gallery-caption-overlay">
          <span style="font-size: 0.68rem; font-weight: 800; color: var(--turf-bright); text-transform: uppercase;">${item.subtitle}</span>
          <div style="font-size: 0.9rem; font-weight: 800; color: #fff; line-height: 1.25; margin-top: 0.2rem;">${item.title}</div>
        </div>
      </div>
    `
    )
    .join("");
}

function filterGallery(cat, btnEl) {
  if (btnEl && btnEl.parentElement) {
    btnEl.parentElement.querySelectorAll(".filter-tab").forEach((b) => b.classList.remove("active"));
    btnEl.classList.add("active");
  }
  renderPhotoGallery(cat);
}

function openPhotoLightbox(idx, filterCat = "all") {
  const list = filterCat === "all" ? GALLERY_ITEMS : GALLERY_ITEMS.filter((g) => g.cat === filterCat);
  const item = list[idx] || GALLERY_ITEMS[0];
  const modal = document.getElementById("lightboxModal");
  const title = document.getElementById("lightboxTitle");
  const body = document.getElementById("lightboxBody");
  if (!modal || !title || !body) return;

  title.textContent = item.title;
  body.innerHTML = `
    <div style="border-radius: 14px; overflow: hidden; border: 1px solid rgba(255,255,255,0.15);">
      <img src="${item.img}" alt="${item.title}" style="width: 100%; max-height: 460px; object-fit: cover; display: block;" />
    </div>
    <p style="margin-top: 0.85rem; color: var(--text-muted); font-size: 0.88rem;">
      📍 <strong>${item.subtitle}</strong> — LKS Naprzód Świbie (ul. Sportowa 51, 44-187 Świbie).
    </p>
  `;
  modal.classList.add("is-open");
}

const FANSHOP_ITEMS = [
  {
    name: "Szalik Tkany „LKS Naprzód Świbie 1952”",
    badge: "BESTSELLER KIBICA",
    price: "49 zł",
    desc: "Dwustronny biało-czarny szalik klubowy z herbem i napisem „Duma Gminy Wielowieś – Kęp Noł”.",
    svg: `<svg width="160" height="70" viewBox="0 0 160 70"><rect x="10" y="20" width="140" height="30" fill="#090a0f" stroke="#fff" stroke-width="2"/><rect x="10" y="20" width="22" height="30" fill="#fff"/><rect x="128" y="20" width="22" height="30" fill="#fff"/><text x="80" y="40" text-anchor="middle" fill="#a3e635" font-family="Teko" font-size="18" font-weight="700" letter-spacing="1.5">NAPRZÓD ŚWIBIE</text></svg>`
  },
  {
    name: "Koszulka Meczowa „Pasiak” (Personalizowana)",
    badge: "TWÓJ NUMER I NAZWISKO",
    price: "139 zł",
    desc: "Oficjalny biało-czarny pasiak meczowy z możliwością nadruku własnego nazwiska oraz numeru na plecach.",
    svg: `<svg width="90" height="90" viewBox="0 0 90 90"><path d="M22 14 L34 10 L56 10 L68 14 L82 32 L68 42 L62 32 L62 78 L28 78 L28 32 L22 42 L8 32 Z" fill="#090a0f" stroke="#a3e635" stroke-width="2.5"/><rect x="34" y="12" width="7" height="64" fill="#fff"/><rect x="49" y="12" width="7" height="64" fill="#fff"/><text x="45" y="52" text-anchor="middle" fill="#a3e635" font-family="Teko" font-size="24" font-weight="700">10</text></svg>`
  },
  {
    name: "Wyprawka Treningowa Szkółki (Komplet)",
    badge: "DLA MŁODEGO PIŁKARZA",
    price: "159 zł",
    desc: "Zestaw dla zawodnika Akademii: oddychająca koszulka treningowa z herbem, spodenki oraz getry piłkarskie.",
    svg: `<svg width="90" height="90" viewBox="0 0 90 90"><circle cx="45" cy="45" r="34" fill="rgba(163,230,53,0.18)" stroke="#a3e635" stroke-width="2.5"/><text x="45" y="53" text-anchor="middle" font-size="28">⚽</text></svg>`
  },
  {
    name: "Kubek & Zestaw Wlepek „Twierdza Kęp Noł”",
    badge: "CEGIEŁKA NA KLUB",
    price: "35 zł",
    desc: "Ceramiczny kubek w biało-czarnych barwach + pakiet wlepek LKS Naprzód Świbie. 100% wsparcia na sprzęt dla dzieci!",
    svg: `<svg width="80" height="80" viewBox="0 0 80 80"><rect x="18" y="18" width="38" height="46" rx="5" fill="#fff" stroke="#090a0f" stroke-width="3"/><path d="M56 26 H65 C68 26 68 48 65 48 H56" fill="none" stroke="#a3e635" stroke-width="4"/><text x="37" y="46" text-anchor="middle" fill="#090a0f" font-family="Teko" font-size="16" font-weight="700">1952</text></svg>`
  }
];

function renderFanShop() {
  const grid = document.getElementById("fanShopGrid");
  if (!grid) return;

  grid.innerHTML = FANSHOP_ITEMS.map(
    (item) => `
      <div class="shop-item-card">
        <div>
          <div class="shop-visual-box">${item.svg}</div>
          <span class="group-age-pill" style="font-size: 0.68rem; margin-bottom: 0.6rem;">${item.badge}</span>
          <h3 style="font-size: 1.05rem; font-weight: 800; color: #fff; margin-bottom: 0.45rem;">${item.name}</h3>
          <p style="font-size: 0.82rem; color: var(--text-muted); margin-bottom: 1.1rem;">${item.desc}</p>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 0.9rem;">
          <div>
            <div style="font-size: 0.68rem; color: var(--text-muted); text-transform: uppercase;">Cegiełka:</div>
            <div class="shop-price-tag">${item.price}</div>
          </div>
          <button type="button" class="btn btn-primary" style="padding: 0.6rem 1rem; font-size: 0.78rem;" onclick="openEnrollModal('Zamówienie gadżetu / cegiełki: ${item.name} (${item.price})')">
            🛒 Zamów
          </button>
        </div>
      </div>
    `
  ).join("");
}

// Inicjalizacja wszystkich modułów na stronie
document.addEventListener("DOMContentLoaded", () => {
  renderSponsorsCarousel();
  renderLeagueTable();
  renderMatchesPanel();
  renderPitch442();
  renderSquad("all");
  renderTrainingSchedule("outdoor");
  renderPhotoGallery("all");
  updateAcademyFinder(8);
  updateScrollBackground();
  syncLiveFrom90Minut(false);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

  // Dynamiczne odliczanie do najbliższego meczu ligowego Eurotech Klasy B
  const UPCOMING_FIXTURES = [
    {
      roundNum: 14,
      targetDate: new Date("2026-11-07T14:00:00+01:00").getTime(),
      headerBadge: "KOLEJKA 14 • 07.11, 14:00",
      dateBadge: "7 lis, 14:00",
      home: "Leśnik Łącza",
      homeBadge: "LŁ",
      homeDesc: "Gospodarz (15. msc)",
      away: "Naprzód Świbie",
      awayDesc: "Goście (9. msc • 16 pkt)"
    },
    {
      roundNum: 15,
      targetDate: new Date("2026-11-14T14:00:00+01:00").getTime(),
      headerBadge: "KOLEJKA 15 • 14.11, 14:00",
      dateBadge: "14 lis, 14:00",
      home: "Naprzód Świbie",
      homeBadge: "NŚ",
      homeDesc: "Gospodarz • „Kęp Noł”",
      away: "Orzeł Paczyna",
      awayDesc: "Goście (4. msc • 21 pkt)"
    },
    {
      roundNum: 16,
      targetDate: new Date("2027-03-20T15:00:00+01:00").getTime(),
      headerBadge: "KOLEJKA 16 • 20.03.2027",
      dateBadge: "20 mar, 15:00",
      home: "Naprzód Świbie",
      homeBadge: "NŚ",
      homeDesc: "Gospodarz • „Kęp Noł”",
      away: "Olimpia Pławniowice",
      awayDesc: "Goście (16. msc)"
    }
  ];

  function updateMatchCountdown() {
    const now = Date.now();
    let fixture = UPCOMING_FIXTURES.find((f) => f.targetDate > now);
    if (!fixture) {
      const nextSat = new Date();
      nextSat.setDate(nextSat.getDate() + ((6 - nextSat.getDay() + 7) % 7 || 7));
      nextSat.setHours(14, 0, 0, 0);
      fixture = {
        headerBadge: "NAJBLIŻSZY MECZ LIGOWY",
        dateBadge: "Sobota, 14:00",
        home: "Leśnik Łącza",
        homeDesc: "Gospodarz",
        away: "Naprzód Świbie",
        awayDesc: "Eurotech Klasa B",
        targetDate: nextSat.getTime()
      };
    }

    const diff = Math.max(0, Math.floor((fixture.targetDate - now) / 1000));
    const d = Math.floor(diff / 86400);
    const h = Math.floor((diff % 86400) / 3600);
    const m = Math.floor((diff % 3600) / 60);
    const s = diff % 60;

    const elD = document.getElementById("cdDays");
    const elH = document.getElementById("cdHours");
    const elM = document.getElementById("cdMins");
    const elS = document.getElementById("cdSecs");
    if (elD) elD.textContent = String(d).padStart(2, "0");
    if (elH) elH.textContent = String(h).padStart(2, "0");
    if (elM) elM.textContent = String(m).padStart(2, "0");
    if (elS) elS.textContent = String(s).padStart(2, "0");

    const badge = document.getElementById("spotlightMatchBadge");
    if (badge && badge.textContent !== fixture.headerBadge) badge.textContent = fixture.headerBadge;
    const dateBadge = document.getElementById("nextMatchDateBadge");
    if (dateBadge && dateBadge.textContent !== fixture.dateBadge) dateBadge.textContent = fixture.dateBadge;
    const home = document.getElementById("nextMatchHome");
    if (home && home.textContent !== fixture.home) home.textContent = fixture.home;
    const homeDesc = document.getElementById("nextMatchHomeDesc");
    if (homeDesc && homeDesc.textContent !== fixture.homeDesc) homeDesc.textContent = fixture.homeDesc;
    const away = document.getElementById("nextMatchAway");
    if (away && away.textContent !== fixture.away) away.textContent = fixture.away;
    const awayDesc = document.getElementById("nextMatchAwayDesc");
    if (awayDesc && awayDesc.textContent !== fixture.awayDesc) awayDesc.textContent = fixture.awayDesc;
  }
  updateMatchCountdown();
  setInterval(updateMatchCountdown, 1000);
});

