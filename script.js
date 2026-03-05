const snapshots = [
  { date: '2025-02-21', players: { Varenyk: 703068, Vityappro11: 150000, hipoma: 131932, kasikm1: 125700, treaforik: 113805, ForteCa228: 83300, FairDemonYT: 75000, Vortex1k: 40000, '05LONE12': 25000, jtx_by: 25000, '07_YM': 23000, Nazar3321: 22000, m0NESY: 10000, kampys231231: 10000 }, play: {} },
  { date: '2025-02-22', players: { edazfetg4ooo: 1124558, Varenyk: 638068, Vityappro11: 500747, 'wontz': 354418, FairDemonYT: 151654, kasikm1: 126340, treaforik: 113805, aboba2032: 106000, Paolo_Fermer: 55633, Vortex1k: 40000, hipoma: 27848, ForteCa228: 25682, jtx_by: 25000, '05LONE12': 25000, '07_YM': 23000, Nazar3321: 22000, m0NESY: 10000, belui228: 10000, kampys231231: 10000, Varenyk228: 700 }, play: {} },
  { date: '2025-02-23', players: { edazfetg4ooo: 967856, Varenyk: 638068, Vityappro11: 584510, 'wontz': 354418, kasikm1: 169382, treaforik: 113805, aboba2032: 106000, FairDemonYT: 102864, '07_YM': 75606, Paolo_Fermer: 45685, Vortex1k: 40000, hipoma: 31208, ForteCa228: 25682, jtx_by: 25000, '05LONE12': 25000, Nazar3321: 22000, m0NESY: 10000, belui228: 10000, kampys231231: 10000, Varenyk228: 700, GGlolick: 46 }, play: {} },
  { date: '2025-02-24', players: { edazfetg4ooo: 967856, Varenyk: 636068, Vityappro11: 619983, 'wontz': 304418, FairDemonYT: 177751, kasikm1: 169382, treaforik: 126295, aboba2032: 106000, '07_YM': 89456, Paolo_Fermer: 45685, Vortex1k: 40000, hipoma: 31208, ForteCa228: 25682, jtx_by: 25000, '05LONE12': 25000, Nazar3321: 22000, m0NESY: 10000, belui228: 10000, kampys231231: 10000, lukyan187: 5157, Varenyk228: 700, GGlolick: 46 }, play: {} },
  { date: '2025-02-25', players: { edazfetg4ooo: 968409, Vityappro11: 659831, Varenyk: 636068, 'wontz': 304418, FairDemonYT: 177726, kasikm1: 169968, '07_YM': 139753, aboba2032: 106000, hipoma: 56208, Paolo_Fermer: 45685, Vortex1k: 40000, Nazar3321: 32000, ForteCa228: 25682, jtx_by: 25000, '05LONE12': 25000, lukyan187: 16571, BEFF: 10781, treaforik: 10737, m0NESY: 10000, belui228: 10000, kampys231231: 10000, Varenyk228: 2100, GGlolick: 46 }, play: {} },
  { date: '2025-02-26', players: { edazfetg4ooo: 758309, Vityappro11: 680445, Varenyk: 636068, 'wontz': 304418, FairDemonYT: 177726, kasikm1: 169968, '07_YM': 141155, aboba2032: 102006, Paolo_Fermer: 66732, hipoma: 56208, Vortex1k: 40000, Nazar3321: 32000, ForteCa228: 25682, jtx_by: 25000, '05LONE12': 25000, BEFF: 10781, treaforik: 10737, lukyan187: 16571, m0NESY: 10000, belui228: 10000, kampys231231: 10000, Varenyk228: 2100, SIGMA: 105, GGlolick: 46 }, play: {} },
  { date: '2025-02-27', players: { Vityappro11: 805884, Varenyk: 636068, Paolo_Fermer: 624253, edazfetg4ooo: 526361, 'wontz': 304418, kasikm1: 169968, aboba2032: 155349, '07_YM': 141670, belui228: 80000, lukyan187: 79024, hipoma: 68863, treaforik: 10737, Vortex1k: 40000, Nazar3321: 32000, ForteCa228: 25682, jtx_by: 25000, '05LONE12': 25000, BEFF: 10781, m0NESY: 10000, kampys231231: 10000, FairDemonYT: 7726, SIGMA: 3147, Varenyk228: 2100, GGlolick: 46 }, play: {} },
  { date: '2025-02-28', players: { Vityappro11: 913082, edazfetg4ooo: 670241, Varenyk: 636068, Paolo_Fermer: 522002, treaforik: 333659, 'wontz': 304418, aboba2032: 184845, kasikm1: 169968, '07_YM': 141670, lukyan187: 135042, belui228: 80000, hipoma: 68863, Vortex1k: 40000, Nazar3321: 32000, ForteCa228: 25682, jtx_by: 25000, '05LONE12': 25000, m0NESY: 10000, kampys231231: 10000, BEFF: 8845, FairDemonYT: 7726, SIGMA: 3147, Varenyk228: 2100, GGlolick: 46 }, play: {} },
  { date: '2025-03-01', players: { Vityappro11: 1017196, Varenyk: 636068, treaforik: 327585, 'wontz': 304418, aboba2032: 184845, kasikm1: 169968, edazfetg4ooo: 155992, '07_YM': 141670, lukyan187: 135042, belui228: 80000, ForteCa228: 79682, hipoma: 68863, Vortex1k: 40000, Nazar3321: 32000, jtx_by: 25000, '05LONE12': 25000, Paolo_Fermer: 22669, m0NESY: 10000, maksyarosh: 10000, kampys231231: 10000, kostya2103: 9175, BEFF: 8845, FairDemonYT: 7726, SIGMA: 3478, Varenyk228: 2100, GGlolick: 46 }, play: {} },
  { date: '2025-03-02', players: { Vityappro11: 1017513, Varenyk: 636068, treaforik: 327585, 'wontz': 304418, aboba2032: 184845, kasikm1: 169968, edazfetg4ooo: 155992, '07_YM': 141670, lukyan187: 135042, belui228: 80000, ForteCa228: 79682, hipoma: 68863, Vortex1k: 40000, Nazar3321: 32000, jtx_by: 25000, '05LONE12': 25000, Paolo_Fermer: 22669, m0NESY: 10000, maksyarosh: 10000, kampys231231: 10000, kostya2103: 9175, BEFF: 8845, FairDemonYT: 7726, SIGMA: 3478, Varenyk228: 2100, GGlolick: 46 }, play: { maksik_paksik7: 4881, edazfetg4ooo: 2458, PravyiNosok777: 1581, ForteCa228: 1534, treaforik: 1281, Paolo_Fermer: 1132, Vityappro11: 1087, Varenyk: 864, hipoma: 736, lukyan187: 596 } },
  { date: '2025-03-03', players: { Vityappro11: 1023513, Varenyk: 636068, treaforik: 326443, 'wontz': 304418, aboba2032: 184845, kasikm1: 169968, '07_YM': 141670, lukyan187: 135042, belui228: 80000, ForteCa228: 79682, hipoma: 68863, Vortex1k: 40000, Nazar3321: 32000, jtx_by: 25000, '05LONE12': 25000, Paolo_Fermer: 22669, m0NESY: 10000, maksyarosh: 10000, kampys231231: 10000, kostya2103: 9175, BEFF: 8845, FairDemonYT: 7726, SIGMA: 3478, Varenyk228: 2100, GGlolick: 46, edazfetg4ooo: 11 }, play: { maksik_paksik7: 4881, edazfetg4ooo: 2478, PravyiNosok777: 1581, ForteCa228: 1534, treaforik: 1284, Paolo_Fermer: 1137, Vityappro11: 1094, Varenyk: 864, hipoma: 741, lukyan187: 596 } },
  { date: '2025-03-04', players: { Vityappro11: 1043995, Varenyk: 636068, treaforik: 325737, 'wontz': 304418, aboba2032: 184845, kasikm1: 169968, '07_YM': 148734, lukyan187: 135042, belui228: 80000, ForteCa228: 79682, hipoma: 68863, Vortex1k: 40000, Nazar3321: 32000, jtx_by: 25000, '05LONE12': 25000, Paolo_Fermer: 22669, m0NESY: 10000, maksyarosh: 10000, kampys231231: 10000, kostya2103: 9175, BEFF: 8845, FairDemonYT: 7726, SIGMA: 3478, Varenyk228: 2100, GGlolick: 46, edazfetg4ooo: 33 }, play: { maksik_paksik7: 4899, edazfetg4ooo: 2484, '07_YM': 1784, PravyiNosok777: 1581, ForteCa228: 1534, treaforik: 1294, Vityappro11: 1147, Paolo_Fermer: 1137, Varenyk: 864, hipoma: 742 } },
];

const donationByPlayer = {
  SIGMA: 'гравець', BEFF: 'гравець', kostya2103: 'гравець', maksyarosh: 'гравець', lukyan187: 'status',
  ForteCa228: 'keerinam', edazfetg4ooo: 'keerinam', aboba2032: 'keerinam',
  Vityappro11: 'debryli', Varenyk: 'debryli', treaforik: 'debryli', 'wontz': 'debryli', Vortex1k: 'debryli', hipoma: 'debryli',
  kasikm1: 'GOD', jtx_by: 'GOD', Paolo_Fermer: 'GOD', kampys231231: 'GOD', FairDemonYT: 'GOD',
  '07_YM': 'status', '05LONE12': 'status'
};

const donationHistoryByPlayer = {
  // Можна додавати будь-якого гравця з датами зміни донату
  treaforik: [
    { from: '2025-02-21', donation: 'гравець' },
    { from: '2025-02-27', donation: 'debryli' },
  ],
};

const clans = {
  Vitya: {
    createdAt: '2025-02-22',
    events: [
      { date: '2025-02-22', player: 'Vityappro11', role: 'leader', action: 'join' },
      { date: '2025-02-25', player: 'lukyan187', role: 'senior', action: 'join' },
      { date: '2025-02-26', player: 'SIGMA', role: 'senior', action: 'join' },
    ],
  },
  treaf: {
    createdAt: '2025-02-25',
    events: [{ date: '2025-02-25', player: 'treaforik', role: 'leader', action: 'join' }],
  },
};

const serverUpdates = [
  { title: 'НЕЗЕРСЬКИЙ ВАЙП', period: '29 липня - 5 серпня 2025', start: '2025-07-29', end: '2025-08-05', items: ['це перший вайп сервера'] },
  { title: 'ОСТАННІЙ ВАЙП', period: '5 серпня - 12 серпня', start: '2025-08-05', end: '2025-08-12', items: ['добавили Талісман Останнього'] },
  { title: 'ОСТАННЄ ЛІТО', period: '12 серпня - 30 серпня', start: '2025-08-12', end: '2025-08-30', items: ['видалили Замок Весторі і Аірдроп', 'Переробили спавн'] },
  { title: 'ОСІННІЙ ВАЙП', period: '31 серпня - 30 вересня', start: '2025-08-31', end: '2025-09-30', items: ['Переробили спавн', '9 вересня добавили сферу Останнього'] },
  { title: 'ПОВЕРНЕННЯ ДЕМІГРО', period: '25 січня - 14 лютого', start: '2026-01-25', end: '2026-02-14', items: ['Добавили Контейнер PTE'] },
  { title: 'НОВА ЕРА', period: '14 лютого - 8 березня', start: '2026-02-14', end: '2026-03-08', items: ['Переробка сервера на новому хостингу', '21 лютого добавили /site, Клани, Кейс Талісманів', '22 лютого добавили Призи,Купця та Чарівника', '25 лютого добавили новий кейс ТнТ і нові 3 вида ТнТ', '27 лютого заміна кейса ТнТ', '28 лютого добавили TAB, /report, валюту Демігрики, Топ по часу на сервері, Рівні ендер Скрині, Новий магазин, Оновлення кітів'] },
];

const INFO_LINES = [
  'Сайт зробив Vityappro11',
  'Це не офіційний сайт сервера',
  'Офіційний сайт Демігро: https://sites.google.com/view/demigro/%D0%B3%D0%BE%D0%BB%D0%BE%D0%B2%D0%BD%D0%B0-%D1%81%D1%82%D0%BE%D1%80%D1%96%D0%BD%D0%BA%D0%B0?authuser=0',
  'Підпишіться на мій канал та канал Адміна',
  'YOUTUBE: Мій канал UCEOL6x4uzVT31SRwXBG1tRQ',
  'YOUTUBE: Канал Макса UC6aVFfxS51vymg45uIUCQ-w',
  'TIKTOK: Мій канал www.tiktok.com/@vityapro132',
  'TIKTOK: Канал Макса www.tiktok.com/@maksik_paksik70',
  'IP сервера: demigro.play.ski',
];

const manualLastSeen = { Varenyk: '2025-03-02', ForteCa228: '2025-03-02', kasikm1: '2025-03-01' };

const dateSelect = document.getElementById('dateSelect');
const leaderboardBody = document.getElementById('leaderboardBody');
const tableTitle = document.getElementById('tableTitle');
const tableSubtitle = document.getElementById('tableSubtitle');
const valueHeader = document.getElementById('valueHeader');
const nameHeader = document.getElementById('nameHeader');
const tabs = document.querySelectorAll('.tab');
const detailsTitle = document.getElementById('detailsTitle');
const detailsHint = document.getElementById('detailsHint');
const detailsContent = document.getElementById('detailsContent');
const entityName = document.getElementById('entityName');
const metaInfo = document.getElementById('metaInfo');
const statsGrid = document.getElementById('statsGrid');
const history1Title = document.getElementById('history1Title');
const history2Title = document.getElementById('history2Title');
const history1 = document.getElementById('history1');
const history2 = document.getElementById('history2');

let view = 'balance';
let selected = null;

const dates = snapshots.map((s) => s.date);
const latestDate = dates[dates.length - 1];

const formatCurrency = (v) => `$${new Intl.NumberFormat('uk-UA').format(v ?? 0)}`;
const formatPlay = (m) => `${Math.floor(m / 1440)}d ${Math.floor((m % 1440) / 60)}h ${m % 60}m`;
const dateLabel = (d) => new Date(`${d}T00:00:00`).toLocaleDateString('uk-UA', { day: 'numeric', month: 'long' });
const getSnapshot = (date) => snapshots.find((s) => s.date === date);
function donationOfAtDate(name, date) {
  const history = donationHistoryByPlayer[name];
  if (history?.length) {
    const match = history
      .filter((item) => item.from <= date)
      .sort((a, b) => a.from.localeCompare(b.from))
      .at(-1);
    if (match) return match.donation;
  }
  return donationByPlayer[name] || 'гравець';
}


function daysDiffInclusive(start, end) {
  const ms = new Date(`${end}T00:00:00`) - new Date(`${start}T00:00:00`);
  return Math.floor(ms / 86400000) + 1;
}

function allowedDatesForView(v) {
  if (v === 'play') return dates.filter((d) => d >= '2025-03-02' && d <= '2025-03-04');
  if (v === 'clans') return dates.filter((d) => d >= '2025-02-22');
  return dates;
}

function refreshDateSelect() {
  const allowed = allowedDatesForView(view);
  const prev = dateSelect.value;
  dateSelect.innerHTML = '';
  allowed.forEach((d) => {
    const opt = document.createElement('option');
    opt.value = d;
    opt.textContent = dateLabel(d);
    dateSelect.appendChild(opt);
  });
  dateSelect.value = allowed.includes(prev) ? prev : allowed[allowed.length - 1];
}

function totalMoneyAtDate(date) {
  const snap = getSnapshot(date);
  return Object.values(snap.players).reduce((a, b) => a + b, 0);
}

function rankMapForDate(sourceObj) {
  const sorted = Object.entries(sourceObj).sort((a, b) => b[1] - a[1]).map(([name], idx) => [name, idx + 1]);
  return Object.fromEntries(sorted);
}

function positionDelta(prevRank, curRank) {
  if (!prevRank) return 'new';
  if (prevRank === curRank) return '=';
  if (prevRank > curRank) return `↑${prevRank - curRank}`;
  return `↓${curRank - prevRank}`;
}

function getClanForPlayerAtDate(player, date) {
  for (const [clanName, clan] of Object.entries(clans)) {
    const event = clan.events.filter((e) => e.player === player && e.date <= date).sort((a, b) => a.date.localeCompare(b.date)).at(-1);
    if (event?.action === 'join') return { clan: clanName, role: event.role };
  }
  return { clan: 'без клану', role: '—' };
}

function getClanMembersAtDate(clanName, date) {
  return clans[clanName].events.filter((e) => e.action === 'join' && e.date <= date).map((e) => ({ player: e.player, role: e.role }));
}

function clanBalanceAtDate(clanName, date) {
  const snap = getSnapshot(date);
  return getClanMembersAtDate(clanName, date).reduce((sum, m) => sum + (snap.players[m.player] || 0), 0);
}

function donationBalanceAtDate(group, date) {
  const snap = getSnapshot(date);
  return Object.entries(snap.players).reduce((sum, [p, bal]) => (donationOfAtDate(p, date) === group ? sum + bal : sum), 0);
}

function renderStats(items) {
  statsGrid.innerHTML = items.map((i) => `<div class="stat"><strong>${i.label}</strong><p>${i.value}</p></div>`).join('');
}

function detectLastSeen(player) {
  if (manualLastSeen[player]) return dateLabel(manualLastSeen[player]);

  let lastPlayChange = null;
  let prevPlay;
  for (const s of snapshots) {
    const v = s.play[player];
    if (v !== undefined) {
      if (prevPlay !== undefined && v !== prevPlay) lastPlayChange = s.date;
      prevPlay = v;
    }
  }

  let lastBalanceChange = null;
  let prevBal;
  for (const s of snapshots) {
    const v = s.players[player];
    if (v !== undefined) {
      if (prevBal !== undefined && v !== prevBal) lastBalanceChange = s.date;
      prevBal = v;
    }
  }

  if (lastPlayChange) return dateLabel(lastPlayChange);
  if (lastBalanceChange) return dateLabel(lastBalanceChange);
  const firstSeen = snapshots.find((s) => s.players[player] !== undefined || s.play[player] !== undefined)?.date;
  return firstSeen ? dateLabel(firstSeen) : '—';
}

function firstSeenDate(player) {
  return snapshots.find((s) => s.players[player] !== undefined || s.play[player] !== undefined)?.date || null;
}

function bestRankInfo(player) {
  let best = null;
  for (const s of snapshots) {
    if (s.players[player] === undefined) continue;
    const ranks = rankMapForDate(s.players);
    const r = ranks[player];
    if (!best || r < best.rank) best = { rank: r, date: s.date };
  }
  return best;
}

function showPlayerDetails(player) {
  selected = { type: 'player', id: player };
  detailsHint.classList.add('hidden');
  detailsContent.classList.remove('hidden');

  const date = dateSelect.value;
  const clanInfo = getClanForPlayerAtDate(player, date);
  const group = donationOfAtDate(player, date);
  const balanceHistory = snapshots.filter((s) => s.players[player] !== undefined).map((s) => ({ date: s.date, value: s.players[player] }));
  const playHistory = snapshots.filter((s) => s.play[player] !== undefined).map((s) => ({ date: s.date, value: s.play[player] }));
  const peakBalance = balanceHistory.reduce((m, x) => (x.value > m.value ? x : m), { value: -1, date: '' });
  const currentBalance = getSnapshot(date).players[player] ?? 0;
  const firstSeen = firstSeenDate(player);
  const best = bestRankInfo(player);

  detailsTitle.textContent = 'Профіль гравця';
  entityName.textContent = player;
  metaInfo.textContent = `Клан: ${clanInfo.clan} • Донат: ${group}`;
  renderStats([
    { label: 'Макс. баланс', value: peakBalance.value >= 0 ? `${formatCurrency(peakBalance.value)} (${dateLabel(peakBalance.date)})` : '—' },
    { label: 'Баланс', value: formatCurrency(currentBalance) },
    { label: 'Перший раз на сервері', value: firstSeen ? dateLabel(firstSeen) : '—' },
    { label: 'Найвище місце', value: best ? `#${best.rank} (${dateLabel(best.date)})` : '—' },
    { label: 'Останній раз в мережі', value: detectLastSeen(player) },
    { label: 'Час на Сервері', value: playHistory.at(-1) ? formatPlay(playHistory.at(-1).value) : '—' },
  ]);

  history1Title.textContent = 'Історія балансу (місце та зміна)';
  history2Title.textContent = 'Історія Top Play (місце та зміна)';

  const balanceRows = balanceHistory.map((row, idx) => {
    const ranksNow = rankMapForDate(getSnapshot(row.date).players);
    const curRank = ranksNow[player];
    const prevRank = idx > 0 ? rankMapForDate(getSnapshot(balanceHistory[idx - 1].date).players)[player] : null;
    return `<li>${dateLabel(row.date)} — ${formatCurrency(row.value)} • #${curRank} • ${positionDelta(prevRank, curRank)}</li>`;
  });

  const playRows = playHistory.map((row, idx) => {
    const ranksNow = rankMapForDate(getSnapshot(row.date).play);
    const curRank = ranksNow[player];
    const prevRank = idx > 0 ? rankMapForDate(getSnapshot(playHistory[idx - 1].date).play)[player] : null;
    return `<li>${dateLabel(row.date)} — ${formatPlay(row.value)} • #${curRank} • ${positionDelta(prevRank, curRank)}</li>`;
  });

  history1.innerHTML = balanceRows.join('') || '<li>Немає даних</li>';
  history2.innerHTML = playRows.join('') || '<li>Немає даних</li>';
}

function showClanDetails(clanName) {
  selected = { type: 'clan', id: clanName };
  detailsHint.classList.add('hidden');
  detailsContent.classList.remove('hidden');

  const date = dateSelect.value;
  const membersNow = getClanMembersAtDate(clanName, date);
  const history = dates.filter((d) => d >= clans[clanName].createdAt).map((d) => ({ date: d, value: clanBalanceAtDate(clanName, d) }));

  let latestMemberActivity = null;
  for (const m of membersNow) {
    const seenAuto = [...snapshots].reverse().find((s) => s.play[m.player] !== undefined || s.players[m.player] !== undefined)?.date;
    const seen = manualLastSeen[m.player] || seenAuto;
    if (seen && (!latestMemberActivity || seen > latestMemberActivity)) latestMemberActivity = seen;
  }

  detailsTitle.textContent = 'Профіль клану';
  entityName.textContent = clanName;
  metaInfo.textContent = `Створено: ${dateLabel(clans[clanName].createdAt)} • Остання активність: ${latestMemberActivity ? dateLabel(latestMemberActivity) : '—'}`;
  renderStats([
    { label: 'Поточний баланс клану', value: formatCurrency(clanBalanceAtDate(clanName, date)) },
    { label: 'Макс. баланс клану', value: formatCurrency(Math.max(...history.map((h) => h.value))) },
  ]);

  history1Title.textContent = 'Учасники клану';
  history2Title.textContent = 'Історія балансу клану';
  history1.innerHTML = membersNow.map((m) => `<li>${m.player} — ${m.role}</li>`).join('') || '<li>Немає учасників</li>';
  history2.innerHTML = history.map((h) => `<li>${dateLabel(h.date)} — ${formatCurrency(h.value)}</li>`).join('');
}

function showDonateDetails(group) {
  selected = { type: 'donate', id: group };
  detailsHint.classList.add('hidden');
  detailsContent.classList.remove('hidden');

  const date = dateSelect.value;
  const players = Object.keys(getSnapshot(date).players).filter((p) => donationOfAtDate(p, date) === group);
  const history = dates.map((d) => ({ date: d, value: donationBalanceAtDate(group, d) }));

  detailsTitle.textContent = 'Профіль групи';
  entityName.textContent = group;
  metaInfo.textContent = 'Об’єднаний баланс усіх гравців цієї групи';
  renderStats([
    { label: 'Поточний баланс групи', value: formatCurrency(donationBalanceAtDate(group, date)) },
    { label: 'Макс. баланс групи', value: formatCurrency(Math.max(...history.map((h) => h.value))) },
  ]);

  history1Title.textContent = 'Гравці цієї групи';
  history2Title.textContent = 'Історія балансу групи';
  history1.innerHTML = players.map((p) => `<li>${p}</li>`).join('') || '<li>Немає гравців на цю дату</li>';
  history2.innerHTML = history.map((h) => `<li>${dateLabel(h.date)} — ${formatCurrency(h.value)}</li>`).join('');
}

function showSingleUpdateDetails(update) {
  selected = { type: 'update-item', id: update.title };
  detailsHint.classList.add('hidden');
  detailsContent.classList.remove('hidden');
  detailsTitle.textContent = 'Оновлення сервера';
  entityName.textContent = update.title;
  metaInfo.textContent = `${update.period} • Тривалість: ${daysDiffInclusive(update.start, update.end)} днів`;
  renderStats([
    { label: 'Тривалість', value: `${daysDiffInclusive(update.start, update.end)} днів` },
    { label: 'Кількість змін', value: String(update.items.length) },
  ]);
  history1Title.textContent = 'Що було в цьому періоді';
  history2Title.textContent = 'Додані / змінені фічі';
  history1.innerHTML = `<li>${update.title} (${update.period})</li>`;
  history2.innerHTML = update.items.map((item) => `<li>${item}</li>`).join('');
}

function showUpdatesDetails() {
  selected = { type: 'updates', id: 'updates' };
  detailsHint.classList.add('hidden');
  detailsContent.classList.remove('hidden');
  detailsTitle.textContent = 'Оновлення сервера';
  entityName.textContent = 'Хронологія оновлень';
  metaInfo.textContent = 'Офіційні етапи розвитку сервера';
  renderStats([{ label: 'Кількість етапів', value: String(serverUpdates.length) }]);
  history1Title.textContent = 'Етапи';
  history2Title.textContent = 'Деталі';
  history1.innerHTML = serverUpdates.map((u) => `<li>${u.title} (${u.period})</li>`).join('');
  history2.innerHTML = serverUpdates.map((u) => `<li><strong>${u.title}</strong>: ${u.items.join(' • ')}</li>`).join('');
}

function showInfoDetails() {
  selected = { type: 'info', id: 'info' };
  detailsHint.classList.add('hidden');
  detailsContent.classList.remove('hidden');
  detailsTitle.textContent = 'Інформація';
  entityName.textContent = 'Про цей сайт';
  metaInfo.textContent = 'Контакти та посилання';
  renderStats([]);
  history1Title.textContent = 'Інфо';
  history2Title.textContent = 'Соцмережі';
  history1.innerHTML = INFO_LINES.slice(0, 4).map((x) => `<li>${x}</li>`).join('');
  history2.innerHTML = INFO_LINES.slice(4).map((x) => `<li>${x}</li>`).join('');
}

function renderLeaderboard() {
  const date = dateSelect.value;
  const snap = getSnapshot(date);
  let rows = [];

  if (view === 'balance') {
    tableTitle.textContent = 'Топ Баланс'; nameHeader.textContent = 'Гравець'; valueHeader.textContent = 'Баланс';
    tableSubtitle.textContent = `Актуальні баланси на ${dateLabel(date)} • Всього на сервері: ${formatCurrency(totalMoneyAtDate(date))}`;
    rows = Object.entries(snap.players).map(([n, v]) => ({ name: n, value: v, click: () => showPlayerDetails(n), display: formatCurrency(v) }));
  } else if (view === 'play') {
    tableTitle.textContent = 'Top Play'; nameHeader.textContent = 'Гравець'; valueHeader.textContent = 'Час';
    tableSubtitle.textContent = `Доступно лише 2-4 березня • ${dateLabel(date)} • Всього на сервері: ${formatCurrency(totalMoneyAtDate(date))}`;
    rows = Object.entries(snap.play).map(([n, v]) => ({ name: n, value: v, click: () => showPlayerDetails(n), display: formatPlay(v) }));
  } else if (view === 'clans') {
    tableTitle.textContent = 'Топ Кланів'; nameHeader.textContent = 'Клан'; valueHeader.textContent = 'Баланс клану';
    tableSubtitle.textContent = `Доступно з 22 лютого • ${dateLabel(date)} • Всього на сервері: ${formatCurrency(totalMoneyAtDate(date))}`;
    const visibleClans = Object.keys(clans).filter((c) => clans[c].createdAt <= date);
    rows = visibleClans.map((c) => ({ name: c, value: clanBalanceAtDate(c, date), click: () => showClanDetails(c), display: formatCurrency(clanBalanceAtDate(c, date)) }));
  } else if (view === 'donates') {
    tableTitle.textContent = 'Топ Донатів'; nameHeader.textContent = 'Група'; valueHeader.textContent = 'Баланс групи';
    tableSubtitle.textContent = `Без невизначених груп • ${dateLabel(date)} • Всього на сервері: ${formatCurrency(totalMoneyAtDate(date))}`;
    const groups = [...new Set(Object.keys(snap.players).map((p) => donationOfAtDate(p, date)))];
    rows = groups.map((d) => ({ name: d, value: donationBalanceAtDate(d, date), click: () => showDonateDetails(d), display: formatCurrency(donationBalanceAtDate(d, date)) }));
  } else if (view === 'updates') {
    tableTitle.textContent = 'Оновлення сервера'; nameHeader.textContent = 'Етап'; valueHeader.textContent = 'Період';
    tableSubtitle.textContent = 'Натисни на етап для деталей';
    rows = serverUpdates.map((u, i) => ({ name: u.title, value: serverUpdates.length - i, click: () => showSingleUpdateDetails(u), display: u.period }));
  } else {
    tableTitle.textContent = 'Інформація'; nameHeader.textContent = 'Розділ'; valueHeader.textContent = 'Дані';
    tableSubtitle.textContent = 'Натисни на рядок для повної інформації';
    rows = [{ name: 'Про сайт', value: 1, click: () => showInfoDetails(), display: 'Контакти та посилання' }];
  }

  rows.sort((a, b) => b.value - a.value);
  leaderboardBody.innerHTML = rows.map((r, i) => `<tr class="player-row ${i === 0 ? 'top-1' : i === 1 ? 'top-2' : i === 2 ? 'top-3' : ''}"><td>${i + 1}</td><td>${r.name}</td><td>${r.display}</td></tr>`).join('');
  [...leaderboardBody.querySelectorAll('tr')].forEach((tr, i) => tr.addEventListener('click', rows[i].click));

  if (selected) {
    if (selected.type === 'player') showPlayerDetails(selected.id);
    if (selected.type === 'clan') showClanDetails(selected.id);
    if (selected.type === 'donate') showDonateDetails(selected.id);
    if (selected.type === 'updates') showUpdatesDetails();
    if (selected.type === 'update-item') {
      const item = serverUpdates.find((u) => u.title === selected.id);
      if (item) showSingleUpdateDetails(item);
    }
    if (selected.type === 'info') showInfoDetails();
  }
}

function init() {
  refreshDateSelect();
  dateSelect.value = latestDate;
  dateSelect.addEventListener('change', renderLeaderboard);

  tabs.forEach((tab) => tab.addEventListener('click', () => {
    tabs.forEach((t) => t.classList.remove('active'));
    tab.classList.add('active');
    view = tab.dataset.view;
    refreshDateSelect();
    renderLeaderboard();
  }));

  renderLeaderboard();
}

init();
