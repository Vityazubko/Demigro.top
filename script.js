const snapshots = [
  { date: '2025-02-21', players: { Varenyk: 703068, Vityappro11: 150000, hipoma: 131932, kasikm1: 125700, treaforik: 113805, ForteCa228: 83300, FairDemonYT: 75000, Vortex1k: 40000, '05LONE12': 25000, jtx_by: 25000, '07_YM': 23000, Nazar3321: 22000, m0NESY: 10000, kampys231231: 10000 }, play: {} },
  { date: '2025-02-22', players: { edazfetg4ooo: 1124558, Varenyk: 638068, Vityappro11: 500747, 'wontzhi**er': 354418, FairDemonYT: 151654, kasikm1: 126340, treaforik: 113805, aboba2032: 106000, Paolo_Fermer: 55633, Vortex1k: 40000, hipoma: 27848, ForteCa228: 25682, jtx_by: 25000, '05LONE12': 25000, '07_YM': 23000, Nazar3321: 22000, m0NESY: 10000, belui228: 10000, kampys231231: 10000, Varenyk228: 700 }, play: {} },
  { date: '2025-02-23', players: { edazfetg4ooo: 967856, Varenyk: 638068, Vityappro11: 584510, 'wontzhi**er': 354418, kasikm1: 169382, treaforik: 113805, aboba2032: 106000, FairDemonYT: 102864, '07_YM': 75606, Paolo_Fermer: 45685, Vortex1k: 40000, hipoma: 31208, ForteCa228: 25682, jtx_by: 25000, '05LONE12': 25000, Nazar3321: 22000, m0NESY: 10000, belui228: 10000, kampys231231: 10000, Varenyk228: 700, GGlolick: 46 }, play: {} },
  { date: '2025-02-24', players: { edazfetg4ooo: 967856, Varenyk: 636068, Vityappro11: 619983, 'wontzhi**er': 304418, FairDemonYT: 177751, kasikm1: 169382, treaforik: 126295, aboba2032: 106000, '07_YM': 89456, Paolo_Fermer: 45685, Vortex1k: 40000, hipoma: 31208, ForteCa228: 25682, jtx_by: 25000, '05LONE12': 25000, Nazar3321: 22000, m0NESY: 10000, belui228: 10000, kampys231231: 10000, lukyan187: 5157, Varenyk228: 700, GGlolick: 46 }, play: {} },
  { date: '2025-02-25', players: { edazfetg4ooo: 968409, Vityappro11: 659831, Varenyk: 636068, 'wontzhi**er': 304418, FairDemonYT: 177726, kasikm1: 169968, '07_YM': 139753, aboba2032: 106000, hipoma: 56208, Paolo_Fermer: 45685, Vortex1k: 40000, Nazar3321: 32000, ForteCa228: 25682, jtx_by: 25000, '05LONE12': 25000, lukyan187: 16571, BEFF: 10781, treaforik: 10737, m0NESY: 10000, belui228: 10000, kampys231231: 10000, Varenyk228: 2100, GGlolick: 46 }, play: {} },
  { date: '2025-02-26', players: { edazfetg4ooo: 758309, Vityappro11: 680445, Varenyk: 636068, 'wontzhi**er': 304418, FairDemonYT: 177726, kasikm1: 169968, '07_YM': 141155, aboba2032: 102006, Paolo_Fermer: 66732, hipoma: 56208, Vortex1k: 40000, Nazar3321: 32000, ForteCa228: 25682, jtx_by: 25000, '05LONE12': 25000, BEFF: 10781, treaforik: 10737, lukyan187: 16571, m0NESY: 10000, belui228: 10000, kampys231231: 10000, Varenyk228: 2100, SIGMA: 105, GGlolick: 46 }, play: {} },
  { date: '2025-02-27', players: { Vityappro11: 805884, Varenyk: 636068, Paolo_Fermer: 624253, edazfetg4ooo: 526361, 'wontzhi**er': 304418, kasikm1: 169968, aboba2032: 155349, '07_YM': 141670, belui228: 80000, lukyan187: 79024, hipoma: 68863, treaforik: 10737, Vortex1k: 40000, Nazar3321: 32000, ForteCa228: 25682, jtx_by: 25000, '05LONE12': 25000, BEFF: 10781, m0NESY: 10000, kampys231231: 10000, FairDemonYT: 7726, SIGMA: 3147, Varenyk228: 2100, GGlolick: 46 }, play: {} },
  { date: '2025-02-28', players: { Vityappro11: 913082, edazfetg4ooo: 670241, Varenyk: 636068, Paolo_Fermer: 522002, treaforik: 333659, 'wontzhi**er': 304418, aboba2032: 184845, kasikm1: 169968, '07_YM': 141670, lukyan187: 135042, belui228: 80000, hipoma: 68863, Vortex1k: 40000, Nazar3321: 32000, ForteCa228: 25682, jtx_by: 25000, '05LONE12': 25000, m0NESY: 10000, kampys231231: 10000, BEFF: 8845, FairDemonYT: 7726, SIGMA: 3147, Varenyk228: 2100, GGlolick: 46 }, play: {} },
  { date: '2025-03-01', players: { Vityappro11: 1017196, Varenyk: 636068, treaforik: 327585, 'wontzhi**er': 304418, aboba2032: 184845, kasikm1: 169968, edazfetg4ooo: 155992, '07_YM': 141670, lukyan187: 135042, belui228: 80000, ForteCa228: 79682, hipoma: 68863, Vortex1k: 40000, Nazar3321: 32000, jtx_by: 25000, '05LONE12': 25000, Paolo_Fermer: 22669, m0NESY: 10000, maksyarosh: 10000, kampys231231: 10000, kostya2103: 9175, BEFF: 8845, FairDemonYT: 7726, SIGMA: 3478, Varenyk228: 2100, GGlolick: 46 }, play: {} },
  { date: '2025-03-02', players: { Vityappro11: 1017513, Varenyk: 636068, treaforik: 327585, 'wontzhi**er': 304418, aboba2032: 184845, kasikm1: 169968, edazfetg4ooo: 155992, '07_YM': 141670, lukyan187: 135042, belui228: 80000, ForteCa228: 79682, hipoma: 68863, Vortex1k: 40000, Nazar3321: 32000, jtx_by: 25000, '05LONE12': 25000, Paolo_Fermer: 22669, m0NESY: 10000, maksyarosh: 10000, kampys231231: 10000, kostya2103: 9175, BEFF: 8845, FairDemonYT: 7726, SIGMA: 3478, Varenyk228: 2100, GGlolick: 46 }, play: { maksik_paksik7: 4881, edazfetg4ooo: 2458, PravyiNosok777: 1581, ForteCa228: 1534, treaforik: 1281, Paolo_Fermer: 1132, Vityappro11: 1087, Varenyk: 864, hipoma: 736, lukyan187: 596 } },
  { date: '2025-03-03', players: { Vityappro11: 1023513, Varenyk: 636068, treaforik: 326443, 'wontzhi**er': 304418, aboba2032: 184845, kasikm1: 169968, '07_YM': 141670, lukyan187: 135042, belui228: 80000, ForteCa228: 79682, hipoma: 68863, Vortex1k: 40000, Nazar3321: 32000, jtx_by: 25000, '05LONE12': 25000, Paolo_Fermer: 22669, m0NESY: 10000, maksyarosh: 10000, kampys231231: 10000, kostya2103: 9175, BEFF: 8845, FairDemonYT: 7726, SIGMA: 3478, Varenyk228: 2100, GGlolick: 46, edazfetg4ooo: 11 }, play: { maksik_paksik7: 4881, edazfetg4ooo: 2478, PravyiNosok777: 1581, ForteCa228: 1534, treaforik: 1284, Paolo_Fermer: 1137, Vityappro11: 1094, Varenyk: 864, hipoma: 741, lukyan187: 596 } },
  { date: '2025-03-04', players: { Vityappro11: 1043995, Varenyk: 636068, treaforik: 325737, 'wontzhi**er': 304418, aboba2032: 184845, kasikm1: 169968, '07_YM': 148734, lukyan187: 135042, belui228: 80000, ForteCa228: 79682, hipoma: 68863, Vortex1k: 40000, Nazar3321: 32000, jtx_by: 25000, '05LONE12': 25000, Paolo_Fermer: 22669, m0NESY: 10000, maksyarosh: 10000, kampys231231: 10000, kostya2103: 9175, BEFF: 8845, FairDemonYT: 7726, SIGMA: 3478, Varenyk228: 2100, GGlolick: 46, edazfetg4ooo: 33 }, play: { maksik_paksik7: 4899, edazfetg4ooo: 2484, '07_YM': 1784, PravyiNosok777: 1581, ForteCa228: 1534, treaforik: 1294, Vityappro11: 1147, Paolo_Fermer: 1137, Varenyk: 864, hipoma: 742 } },
];

const donationByPlayer = {
  SIGMA: 'має', BEFF: 'має', kostya2103: 'має', maksyarosh: 'має', lukyan187: 'status',
  ForteCa228: 'keerinam', edazfetg4ooo: 'keerinam', aboba2032: 'keerinam',
  Vityappro11: 'debryli', Varenyk: 'debryli', treaforik: 'debryli', 'wontzhi**er': 'debryli', Vortex1k: 'debryli',
  kasikm1: 'GOD', jtx_by: 'GOD', Paolo_Fermer: 'GOD', kampys231231: 'GOD', FairDemonYT: 'GOD'
};

const clans = {
  Vitya: {
    createdAt: '2025-02-22',
    events: [
      { date: '2025-02-22', player: 'Vityappro11', role: 'leader', action: 'join' },
      { date: '2025-02-25', player: 'lukyan187', role: 'senior', action: 'join' },
      { date: '2025-02-26', player: 'SIGMA', role: 'member', action: 'join' },
    ],
  },
  treaf: {
    createdAt: '2025-02-25',
    events: [{ date: '2025-02-25', player: 'treaforik', role: 'leader', action: 'join' }],
  },
};

const dateSelect = document.getElementById('dateSelect');
const leaderboardBody = document.getElementById('leaderboardBody');
const tableTitle = document.getElementById('tableTitle');
const valueHeader = document.getElementById('valueHeader');
const nameHeader = document.getElementById('nameHeader');
const tableSubtitle = document.getElementById('tableSubtitle');
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
const donationOf = (name) => donationByPlayer[name] || 'невизначений';

function getClanForPlayerAtDate(player, date) {
  for (const [clanName, clan] of Object.entries(clans)) {
    const memberEvent = clan.events.filter((e) => e.player === player && e.date <= date).sort((a, b) => a.date.localeCompare(b.date)).at(-1);
    if (memberEvent?.action === 'join') return { clan: clanName, role: memberEvent.role };
  }
  return { clan: 'без клану', role: '—' };
}

function getClanMembersAtDate(clanName, date) {
  const clan = clans[clanName];
  return clan.events.filter((e) => e.action === 'join' && e.date <= date).map((e) => ({ player: e.player, role: e.role }));
}

function clanBalanceAtDate(clanName, date) {
  const snap = getSnapshot(date);
  return getClanMembersAtDate(clanName, date).reduce((sum, m) => sum + (snap.players[m.player] || 0), 0);
}

function donationBalanceAtDate(donate, date) {
  const snap = getSnapshot(date);
  return Object.entries(snap.players).reduce((sum, [p, bal]) => (donationOf(p) === donate ? sum + bal : sum), 0);
}

function renderStats(items) {
  statsGrid.innerHTML = items.map((i) => `<div class="stat"><strong>${i.label}</strong><p>${i.value}</p></div>`).join('');
}

function detectLastSeen(player) {
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

  if (lastPlayChange) return `${dateLabel(lastPlayChange)} (по зміні Top Play)`;
  if (lastBalanceChange) return `${dateLabel(lastBalanceChange)} (по зміні балансу)`;
  const firstSeen = snapshots.find((s) => s.players[player] !== undefined || s.play[player] !== undefined)?.date;
  return firstSeen ? `${dateLabel(firstSeen)} (перша поява)` : '—';
}

function showPlayerDetails(player) {
  selected = { type: 'player', id: player };
  detailsHint.classList.add('hidden');
  detailsContent.classList.remove('hidden');
  const date = dateSelect.value;
  const clanInfo = getClanForPlayerAtDate(player, date);
  const donation = donationOf(player);
  const balanceHistory = snapshots.filter((s) => s.players[player] !== undefined).map((s) => ({ date: s.date, value: s.players[player] }));
  const playHistory = snapshots.filter((s) => s.play[player] !== undefined).map((s) => ({ date: s.date, value: s.play[player] }));
  const peakBalance = balanceHistory.reduce((m, x) => (x.value > m.value ? x : m), { value: -1, date: '' });
  const latestBalance = balanceHistory.at(-1);

  detailsTitle.textContent = 'Профіль гравця';
  entityName.textContent = player;
  metaInfo.textContent = `Клан: ${clanInfo.clan} • Роль: ${clanInfo.role} • Донат: ${donation}`;
  renderStats([
    { label: 'Макс. баланс', value: peakBalance.value >= 0 ? `${formatCurrency(peakBalance.value)} (${dateLabel(peakBalance.date)})` : '—' },
    { label: 'Останній баланс', value: latestBalance ? `${formatCurrency(latestBalance.value)} (${dateLabel(latestBalance.date)})` : '—' },
    { label: 'Останній раз в мережі', value: detectLastSeen(player) },
    { label: 'Поточний Top Play', value: playHistory.at(-1) ? formatPlay(playHistory.at(-1).value) : '—' },
  ]);

  history1Title.textContent = 'Історія балансу';
  history2Title.textContent = 'Історія гри (Top Play)';
  history1.innerHTML = balanceHistory.map((i) => `<li>${dateLabel(i.date)} — ${formatCurrency(i.value)}</li>`).join('') || '<li>Немає даних</li>';
  history2.innerHTML = playHistory.map((i) => `<li>${dateLabel(i.date)} — ${formatPlay(i.value)}</li>`).join('') || '<li>Немає даних</li>';
}

function showClanDetails(clanName) {
  selected = { type: 'clan', id: clanName };
  detailsHint.classList.add('hidden');
  detailsContent.classList.remove('hidden');
  const membersNow = getClanMembersAtDate(clanName, dateSelect.value);
  const history = dates.filter((d) => d >= clans[clanName].createdAt).map((d) => ({ date: d, value: clanBalanceAtDate(clanName, d) }));
  detailsTitle.textContent = 'Профіль клану';
  entityName.textContent = clanName;
  metaInfo.textContent = `Створено: ${dateLabel(clans[clanName].createdAt)}`;
  renderStats([
    { label: 'Поточний баланс клану', value: formatCurrency(clanBalanceAtDate(clanName, dateSelect.value)) },
    { label: 'Макс. баланс клану', value: `${formatCurrency(Math.max(...history.map((h) => h.value)))} ` },
  ]);
  history1Title.textContent = 'Учасники клану';
  history2Title.textContent = 'Історія балансу клану';
  history1.innerHTML = membersNow.map((m) => `<li>${m.player} — ${m.role}</li>`).join('') || '<li>Немає учасників</li>';
  history2.innerHTML = history.map((h) => `<li>${dateLabel(h.date)} — ${formatCurrency(h.value)}</li>`).join('');
}

function showDonateDetails(donate) {
  selected = { type: 'donate', id: donate };
  detailsHint.classList.add('hidden');
  detailsContent.classList.remove('hidden');
  const players = Object.keys(getSnapshot(dateSelect.value).players).filter((p) => donationOf(p) === donate);
  const history = dates.map((d) => ({ date: d, value: donationBalanceAtDate(donate, d) }));
  detailsTitle.textContent = 'Профіль донату';
  entityName.textContent = donate;
  metaInfo.textContent = 'Об’єднаний баланс усіх гравців з цим донатом';
  renderStats([
    { label: 'Поточний баланс донату', value: formatCurrency(donationBalanceAtDate(donate, dateSelect.value)) },
    { label: 'Макс. баланс донату', value: formatCurrency(Math.max(...history.map((h) => h.value))) },
  ]);
  history1Title.textContent = 'Гравці з цим донатом';
  history2Title.textContent = 'Історія балансу донату';
  history1.innerHTML = players.map((p) => `<li>${p}</li>`).join('') || '<li>Немає гравців на цю дату</li>';
  history2.innerHTML = history.map((h) => `<li>${dateLabel(h.date)} — ${formatCurrency(h.value)}</li>`).join('');
}

function renderLeaderboard() {
  const date = dateSelect.value;
  const snap = getSnapshot(date);
  let rows = [];

  if (view === 'balance') {
    tableTitle.textContent = 'Топ Баланс'; nameHeader.textContent = 'Гравець'; valueHeader.textContent = 'Баланс';
    tableSubtitle.textContent = `Актуальні баланси на ${dateLabel(date)}`;
    rows = Object.entries(snap.players).map(([n, v]) => ({ name: n, value: v, click: () => showPlayerDetails(n), display: formatCurrency(v) }));
  } else if (view === 'play') {
    tableTitle.textContent = 'Top Play'; nameHeader.textContent = 'Гравець'; valueHeader.textContent = 'Час';
    tableSubtitle.textContent = `Ігровий час на ${dateLabel(date)}`;
    rows = Object.entries(snap.play).map(([n, v]) => ({ name: n, value: v, click: () => showPlayerDetails(n), display: formatPlay(v) }));
  } else if (view === 'clans') {
    tableTitle.textContent = 'Топ Кланів'; nameHeader.textContent = 'Клан'; valueHeader.textContent = 'Баланс клану';
    tableSubtitle.textContent = `Сумарні баланси кланів на ${dateLabel(date)}`;
    rows = Object.keys(clans).map((c) => ({ name: c, value: clanBalanceAtDate(c, date), click: () => showClanDetails(c), display: formatCurrency(clanBalanceAtDate(c, date)) }));
  } else {
    tableTitle.textContent = 'Топ Донатів'; nameHeader.textContent = 'Донат'; valueHeader.textContent = 'Баланс донату';
    tableSubtitle.textContent = `Сумарні баланси донат-груп на ${dateLabel(date)}`;
    const donateTypes = [...new Set(Object.values(donationByPlayer).concat('невизначений'))];
    rows = donateTypes.map((d) => ({ name: d, value: donationBalanceAtDate(d, date), click: () => showDonateDetails(d), display: formatCurrency(donationBalanceAtDate(d, date)) }));
  }

  rows.sort((a, b) => b.value - a.value);
  leaderboardBody.innerHTML = rows.map((r, i) => `<tr class="player-row ${i === 0 ? 'top-1' : ''}" data-name="${r.name}"><td>${i + 1}</td><td>${r.name}</td><td>${r.display}</td></tr>`).join('');
  [...leaderboardBody.querySelectorAll('tr')].forEach((tr, i) => tr.addEventListener('click', rows[i].click));

  if (selected) {
    if (selected.type === 'player') showPlayerDetails(selected.id);
    if (selected.type === 'clan') showClanDetails(selected.id);
    if (selected.type === 'donate') showDonateDetails(selected.id);
  }
}

function init() {
  dates.forEach((d) => {
    const opt = document.createElement('option');
    opt.value = d;
    opt.textContent = dateLabel(d);
    dateSelect.appendChild(opt);
  });
  dateSelect.value = latestDate;
  dateSelect.addEventListener('change', renderLeaderboard);

  tabs.forEach((tab) => tab.addEventListener('click', () => {
    tabs.forEach((t) => t.classList.remove('active'));
    tab.classList.add('active');
    view = tab.dataset.view;
    renderLeaderboard();
  }));

  renderLeaderboard();
}

init();
