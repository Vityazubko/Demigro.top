const snapshots = [
  {
    date: '2025-02-21',
    total: 1512805,
    players: {
      Varenyk: 703068, Vityappro11: 150000, hipoma: 131932, kasikm1: 125700, treaforik: 113805,
      ForteCa228: 83300, FairDemonYT: 75000, Vortex1k: 40000, '05LONE12': 25000, jtx_by: 25000,
      '07_YM': 23000, Nazar3321: 22000, m0NESY: 10000, kampys231231: 10000,
    },
    play: {}
  },
  {
    date: '2025-02-22',
    total: 3390453,
    players: {
      edazfetg4ooo: 1124558, Varenyk: 638068, Vityappro11: 500747, 'wontzhi**er': 354418, FairDemonYT: 151654,
      kasikm1: 126340, treaforik: 113805, aboba2032: 106000, Paolo_Fermer: 55633, Vortex1k: 40000,
      hipoma: 27848, ForteCa228: 25682, jtx_by: 25000, '05LONE12': 25000, '07_YM': 23000,
      Nazar3321: 22000, m0NESY: 10000, belui228: 10000, kampys231231: 10000, Varenyk228: 700,
    },
    play: {}
  },
  { date: '2025-02-23', total: 3357830, players: { edazfetg4ooo: 967856, Varenyk: 638068, Vityappro11: 584510, 'wontzhi**er': 354418, kasikm1: 169382, treaforik: 113805, aboba2032: 106000, FairDemonYT: 102864, '07_YM': 75606, Paolo_Fermer: 45685, Vortex1k: 40000, hipoma: 31208, ForteCa228: 25682, jtx_by: 25000, '05LONE12': 25000, Nazar3321: 22000, m0NESY: 10000, belui228: 10000, kampys231231: 10000, Varenyk228: 700, GGlolick: 46 }, play: {} },
  { date: '2025-02-24', total: 3447867, players: { edazfetg4ooo: 967856, Varenyk: 636068, Vityappro11: 619983, 'wontzhi**er': 304418, FairDemonYT: 177751, kasikm1: 169382, treaforik: 126295, aboba2032: 106000, '07_YM': 89456, Paolo_Fermer: 45685, Vortex1k: 40000, hipoma: 31208, ForteCa228: 25682, jtx_by: 25000, '05LONE12': 25000, Nazar3321: 22000, m0NESY: 10000, belui228: 10000, kampys231231: 10000, lukyan187: 5157, Varenyk228: 700, GGlolick: 46 }, play: {} },
  { date: '2025-02-25', total: 3481983, players: { edazfetg4ooo: 968409, Vityappro11: 659831, Varenyk: 636068, 'wontzhi**er': 304418, FairDemonYT: 177726, kasikm1: 169968, '07_YM': 139753, aboba2032: 106000, hipoma: 56208, Paolo_Fermer: 45685, Vortex1k: 40000, Nazar3321: 32000, ForteCa228: 25682, jtx_by: 25000, '05LONE12': 25000, lukyan187: 16571, BEFF: 10781, treaforik: 10737, m0NESY: 10000, belui228: 10000, kampys231231: 10000, Varenyk228: 2100, GGlolick: 46 }, play: {} },
  { date: '2025-02-26', total: 3311057, players: { edazfetg4ooo: 758309, Vityappro11: 680445, Varenyk: 636068, 'wontzhi**er': 304418, FairDemonYT: 177726, kasikm1: 169968, '07_YM': 141155, aboba2032: 102006, Paolo_Fermer: 66732, hipoma: 56208, Vortex1k: 40000, Nazar3321: 32000, ForteCa228: 25682, jtx_by: 25000, '05LONE12': 25000, BEFF: 10781, treaforik: 10737, lukyan187: 16571, m0NESY: 10000, belui228: 10000, kampys231231: 10000, Varenyk228: 2100, SIGMA: 105, GGlolick: 46 }, play: {} },
  { date: '2025-02-27', total: 3794182, players: { Vityappro11: 805884, Varenyk: 636068, Paolo_Fermer: 624253, edazfetg4ooo: 526361, 'wontzhi**er': 304418, kasikm1: 169968, aboba2032: 155349, '07_YM': 141670, belui228: 80000, lukyan187: 79024, hipoma: 68863, treaforik: 10737, Vortex1k: 40000, Nazar3321: 32000, ForteCa228: 25682, jtx_by: 25000, '05LONE12': 25000, BEFF: 10781, m0NESY: 10000, kampys231231: 10000, FairDemonYT: 7726, SIGMA: 3147, Varenyk228: 2100, GGlolick: 46 }, play: {} },
  { date: '2025-02-28', total: 4366940, players: { Vityappro11: 913082, edazfetg4ooo: 670241, Varenyk: 636068, Paolo_Fermer: 522002, treaforik: 333659, 'wontzhi**er': 304418, aboba2032: 184845, kasikm1: 169968, '07_YM': 141670, lukyan187: 135042, belui228: 80000, hipoma: 68863, Vortex1k: 40000, Nazar3321: 32000, ForteCa228: 25682, jtx_by: 25000, '05LONE12': 25000, m0NESY: 10000, kampys231231: 10000, BEFF: 8845, FairDemonYT: 7726, SIGMA: 3147, Varenyk228: 2100, GGlolick: 46 }, play: {} },
  { date: '2025-03-01', total: 3511548, players: { Vityappro11: 1017196, Varenyk: 636068, treaforik: 327585, 'wontzhi**er': 304418, aboba2032: 184845, kasikm1: 169968, edazfetg4ooo: 155992, '07_YM': 141670, lukyan187: 135042, belui228: 80000, ForteCa228: 79682, hipoma: 68863, Vortex1k: 40000, Nazar3321: 32000, jtx_by: 25000, '05LONE12': 25000, Paolo_Fermer: 22669, m0NESY: 10000, maksyarosh: 10000, kampys231231: 10000, kostya2103: 9175, BEFF: 8845, FairDemonYT: 7726, SIGMA: 3478, Varenyk228: 2100, GGlolick: 46 }, play: {} },
  {
    date: '2025-03-02',
    total: 3511864,
    playersCount: 87,
    players: { Vityappro11: 1017513, Varenyk: 636068, treaforik: 327585, 'wontzhi**er': 304418, aboba2032: 184845, kasikm1: 169968, edazfetg4ooo: 155992, '07_YM': 141670, lukyan187: 135042, belui228: 80000, ForteCa228: 79682, hipoma: 68863, Vortex1k: 40000, Nazar3321: 32000, jtx_by: 25000, '05LONE12': 25000, Paolo_Fermer: 22669, m0NESY: 10000, maksyarosh: 10000, kampys231231: 10000, kostya2103: 9175, BEFF: 8845, FairDemonYT: 7726, SIGMA: 3478, Varenyk228: 2100, GGlolick: 46 },
    play: { maksik_paksik7: 4881, edazfetg4ooo: 2458, PravyiNosok777: 1581, ForteCa228: 1534, treaforik: 1281, Paolo_Fermer: 1132, Vityappro11: 1087, Varenyk: 864, hipoma: 736, lukyan187: 596 }
  },
  {
    date: '2025-03-03',
    total: 3344864,
    playersCount: 87,
    players: { Vityappro11: 1023513, Varenyk: 636068, treaforik: 326443, 'wontzhi**er': 304418, aboba2032: 184845, kasikm1: 169968, '07_YM': 141670, lukyan187: 135042, belui228: 80000, ForteCa228: 79682, hipoma: 68863, Vortex1k: 40000, Nazar3321: 32000, jtx_by: 25000, '05LONE12': 25000, Paolo_Fermer: 22669, m0NESY: 10000, maksyarosh: 10000, kampys231231: 10000, kostya2103: 9175, BEFF: 8845, FairDemonYT: 7726, SIGMA: 3478, Varenyk228: 2100, GGlolick: 46, edazfetg4ooo: 11 },
    play: { maksik_paksik7: 4881, edazfetg4ooo: 2478, PravyiNosok777: 1581, ForteCa228: 1534, treaforik: 1284, Paolo_Fermer: 1137, Vityappro11: 1094, Varenyk: 864, hipoma: 741, lukyan187: 596 }
  },
  {
    date: '2025-03-04',
    total: 3387603,
    playersCount: 87,
    players: { Vityappro11: 1043995, Varenyk: 636068, treaforik: 325737, 'wontzhi**er': 304418, aboba2032: 184845, kasikm1: 169968, '07_YM': 148734, lukyan187: 135042, belui228: 80000, ForteCa228: 79682, hipoma: 68863, Vortex1k: 40000, Nazar3321: 32000, jtx_by: 25000, '05LONE12': 25000, Paolo_Fermer: 22669, m0NESY: 10000, maksyarosh: 10000, kampys231231: 10000, kostya2103: 9175, BEFF: 8845, FairDemonYT: 7726, SIGMA: 3478, Varenyk228: 2100, GGlolick: 46, edazfetg4ooo: 33 },
    play: { maksik_paksik7: 4899, edazfetg4ooo: 2484, '07_YM': 1784, PravyiNosok777: 1581, ForteCa228: 1534, treaforik: 1294, Vityappro11: 1147, Paolo_Fermer: 1137, Varenyk: 864, hipoma: 742 }
  },
];

const dateSelect = document.getElementById('dateSelect');
const leaderboardBody = document.getElementById('leaderboardBody');
const tableTitle = document.getElementById('tableTitle');
const valueHeader = document.getElementById('valueHeader');
const tabs = document.querySelectorAll('.tab');

const detailsHint = document.getElementById('detailsHint');
const detailsContent = document.getElementById('detailsContent');
const playerName = document.getElementById('playerName');
const peakBalance = document.getElementById('peakBalance');
const latestBalance = document.getElementById('latestBalance');
const peakPlay = document.getElementById('peakPlay');
const latestPlay = document.getElementById('latestPlay');
const balanceHistory = document.getElementById('balanceHistory');
const playHistory = document.getElementById('playHistory');

let view = 'balance';
let selectedPlayer = null;

function formatCurrency(amount) {
  return `$${new Intl.NumberFormat('uk-UA').format(amount)}`;
}

function formatPlay(minutes) {
  if (!minutes && minutes !== 0) return '—';
  const d = Math.floor(minutes / 1440);
  const h = Math.floor((minutes % 1440) / 60);
  const m = minutes % 60;
  return `${d}d ${h}h ${m}m`;
}

function dateLabel(date) {
  return new Date(date + 'T00:00:00').toLocaleDateString('uk-UA', { day: 'numeric', month: 'long' });
}

function renderLeaderboard() {
  const date = dateSelect.value;
  const snap = snapshots.find((s) => s.date === date);
  const source = view === 'balance' ? snap.players : snap.play;

  const rows = Object.entries(source)
    .sort((a, b) => b[1] - a[1])
    .map(([name, value], index) => {
      const tr = document.createElement('tr');
      tr.className = 'player-row';
      tr.innerHTML = `<td>${index + 1}</td><td>${name}</td><td>${view === 'balance' ? formatCurrency(value) : formatPlay(value)}</td>`;
      tr.addEventListener('click', () => showPlayerDetails(name));
      return tr;
    });

  tableTitle.textContent = view === 'balance' ? 'Топ Баланс' : 'Top Play';
  valueHeader.textContent = view === 'balance' ? 'Баланс' : 'Час';

  leaderboardBody.innerHTML = '';
  rows.forEach((r) => leaderboardBody.appendChild(r));

  if (selectedPlayer) showPlayerDetails(selectedPlayer);
}

function showPlayerDetails(name) {
  selectedPlayer = name;
  detailsHint.classList.add('hidden');
  detailsContent.classList.remove('hidden');
  playerName.textContent = name;

  const balanceData = snapshots
    .filter((s) => s.players[name] !== undefined)
    .map((s) => ({ date: s.date, value: s.players[name] }));

  const playData = snapshots
    .filter((s) => s.play[name] !== undefined)
    .map((s) => ({ date: s.date, value: s.play[name] }));

  const peakB = balanceData.reduce((max, item) => (item.value > max.value ? item : max), { date: '—', value: -1 });
  const latestB = [...balanceData].sort((a, b) => a.date.localeCompare(b.date)).at(-1);
  peakBalance.textContent = peakB.value >= 0 ? `${formatCurrency(peakB.value)} (${dateLabel(peakB.date)})` : '—';
  latestBalance.textContent = latestB ? `${formatCurrency(latestB.value)} (${dateLabel(latestB.date)})` : '—';

  const peakP = playData.reduce((max, item) => (item.value > max.value ? item : max), { date: '—', value: -1 });
  const latestP = [...playData].sort((a, b) => a.date.localeCompare(b.date)).at(-1);
  peakPlay.textContent = peakP.value >= 0 ? `${formatPlay(peakP.value)} (${dateLabel(peakP.date)})` : '—';
  latestPlay.textContent = latestP ? `${formatPlay(latestP.value)} (${dateLabel(latestP.date)})` : '—';

  balanceHistory.innerHTML = balanceData.length
    ? balanceData.map((item) => `<li>${dateLabel(item.date)} — ${formatCurrency(item.value)}</li>`).join('')
    : '<li>Немає даних</li>';

  playHistory.innerHTML = playData.length
    ? playData.map((item) => `<li>${dateLabel(item.date)} — ${formatPlay(item.value)}</li>`).join('')
    : '<li>Немає даних</li>';
}

function init() {
  snapshots
    .map((s) => s.date)
    .forEach((date) => {
      const opt = document.createElement('option');
      opt.value = date;
      opt.textContent = dateLabel(date);
      dateSelect.appendChild(opt);
    });

  dateSelect.value = '2025-03-04';
  dateSelect.addEventListener('change', renderLeaderboard);

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');
      view = tab.dataset.view;
      renderLeaderboard();
    });
  });

  renderLeaderboard();
}

init();
