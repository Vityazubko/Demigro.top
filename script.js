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
  { date: '2025-03-05', players: { Vityappro11: 1063338, Varenyk: 636068, treaforik: 325737, 'wontz': 304418, aboba2032: 184845, kasikm1: 169968, '07_YM': 148734, lukyan187: 135042, belui228: 80000, ForteCa228: 84682, hipoma: 68863, Vortex1k: 40000, Nazar3321: 32000, jtx_by: 25000, '05LONE12': 25000, Paolo_Fermer: 22669, m0NESY: 10000, maksyarosh: 10000, kampys231231: 10000, kostya2103: 9175, BEFF: 8845, FairDemonYT: 7726, SIGMA: 3478, Varenyk228: 2100, GGlolick: 46, edazfetg4ooo: 2671 }, play: { maksik_paksik7: 5165, edazfetg4ooo: 2493, '07_YM': 1784, PravyiNosok777: 1581, ForteCa228: 1770, treaforik: 1299, Vityappro11: 1240, Paolo_Fermer: 1138, Varenyk: 864, hipoma: 743 } },
  { date: '2025-03-06', players: { Vityappro11: 1148491, Varenyk: 636068, treaforik: 326169, 'wontz': 304418, aboba2032: 184738, kasikm1: 169968, '07_YM': 148856, lukyan187: 135042, belui228: 80000, ForteCa228: 104682, hipoma: 68863, Vortex1k: 40000, Nazar3321: 32000, jtx_by: 25000, '05LONE12': 25000, Paolo_Fermer: 22669, m0NESY: 10000, maksyarosh: 10000, kampys231231: 10000, kostya2103: 9175, BEFF: 9087, FairDemonYT: 7726, SIGMA: 3478, Varenyk228: 2100, GGlolick: 46, edazfetg4ooo: 8602 }, play: { maksik_paksik7: 5377, edazfetg4ooo: 2565, '07_YM': 1946, PravyiNosok777: 1600, ForteCa228: 1920, treaforik: 1302, Vityappro11: 1496, Paolo_Fermer: 1138, Varenyk: 864, hipoma: 744 } },
  { date: '2025-03-07', players: { Vityappro11: 107255, ForteCa228: 61482, treaforik: 39546, '07_YM': 11640, edazfetg4ooo: 2222, BEFF: 824, Varenyk: 733 }, play: {} },
  { date: '2025-03-08', players: { Vityappro11: 362621, ForteCa228: 336032, TIKTOK_BMW_EDIT: 187566, treaforik: 55145, edazfetg4ooo: 38314, Varenyk: 33203, '07_YM': 11640, BEFF: 824, hirtir: 352 }, play: { maksik_paksik7: 1084, ForteCa228: 637, TIKTOK_BMW_EDIT: 397, edazfetg4ooo: 354, Vityappro11: 223, '07_YM': 121, treaforik: 110 } },
  { date: '2025-03-09', players: { Vityappro11: 620803, treaforik: 427882, ForteCa228: 336032, edazfetg4ooo: 109991, TIKTOK_BMW_EDIT: 89298, Paolo_Fermer: 68828, Varenyk: 33203, '07_YM': 11010, lukyan187: 3296, robot: 863, BEFF: 824, hirtir: 352 }, play: { maksik_paksik7: 1200, ForteCa228: 638, TIKTOK_BMW_EDIT: 541, Vityappro11: 463, edazfetg4ooo: 427, Paolo_Fermer: 200, '07_YM': 131, treaforik: 115 } },
  { date: '2025-03-10', players: { Vityappro11: 791692, treaforik: 427882, ForteCa228: 336032, Paolo_Fermer: 129061, TIKTOK_BMW_EDIT: 89298, edazfetg4ooo: 87468, Varenyk: 33203, '07_YM': 17707, Topix__: 7533, lukyan187: 3022, robot: 863, BEFF: 824, hirtir: 352 }, play: { maksik_paksik7: 1303, ForteCa228: 638, Vityappro11: 684, TIKTOK_BMW_EDIT: 593, edazfetg4ooo: 488, '07_YM': 460, Paolo_Fermer: 352, treaforik: 115 } },
  { date: '2025-03-11', players: { Vityappro11: 811023, treaforik: 427882, ForteCa228: 336032, Paolo_Fermer: 131053, TIKTOK_BMW_EDIT: 89298, edazfetg4ooo: 44934, Varenyk: 33203, '07_YM': 26177, maksik_paksik7: 21000, Topix__: 7533, robot: 5722, lukyan187: 3022, BEFF: 824, hirtir: 352 }, play: { maksik_paksik7: 1492, Vityappro11: 747, ForteCa228: 638, TIKTOK_BMW_EDIT: 595, edazfetg4ooo: 566, '07_YM': 566, Paolo_Fermer: 462, treaforik: 115 } },
  { date: '2025-03-12', players: { Vityappro11: 889745, Varenyk: 494196, treaforik: 418882, ForteCa228: 336032, Paolo_Fermer: 146186, TIKTOK_BMW_EDIT: 89298, Restioynik1: 82589, '07_YM': 49188, Bear228: 34160, maksik_paksik7: 21000, edazfetg4ooo: 7295, Topix__: 7533, robot: 5722, lukyan187: 3022, ivan_strogo: 2057, dddooooppp: 1000, BEFF: 824, hirtir: 352 }, play: { maksik_paksik7: 1663, Vityappro11: 880, edazfetg4ooo: 815, '07_YM': 734, ForteCa228: 638, TIKTOK_BMW_EDIT: 597, Paolo_Fermer: 550, treaforik: 115 } },
  { date: '2025-03-13', players: { Vityappro11: 911618, Varenyk: 494146, treaforik: 409882, ForteCa228: 336032, Paolo_Fermer: 114089, Restioynik1: 102507, goiida11: 100929, TIKTOK_BMW_EDIT: 90298, '07_YM': 49092, Bear228: 34160, maksik_paksik7: 21000, Topix__: 7533, edazfetg4ooo: 220, robot: 5722, lukyan187: 3022, ivan_strogo: 2057, dddooooppp: 1000, BEFF: 824, hirtir: 352 }, play: { Vityappro11: 967, edazfetg4ooo: 895, '07_YM': 765, Paolo_Fermer: 664, maksik_paksik7: 1663, ForteCa228: 638, TIKTOK_BMW_EDIT: 602, treaforik: 115 } },
  { date: '2025-03-14', players: { Vityappro11: 936432, Varenyk: 494136, treaforik: 418882, ForteCa228: 336032, Paolo_Fermer: 114089, Restioynik1: 102507, goiida11: 100929, TIKTOK_BMW_EDIT: 90298, XIN_jonu: 29573, illwix: 18335, Bear228: 34160, '07_YM': 11767, maksik_paksik7: 21000, Topix__: 7533, robot: 5722, ivan_strogo: 2057, ulquiorra2: 1589, dddooooppp: 1000, BEFF: 824, edazfetg4ooo: 701, lukyan187: 3022, hirtir: 352 }, play: { Vityappro11: 1100, edazfetg4ooo: 983, '07_YM': 841, Paolo_Fermer: 666, ForteCa228: 638, TIKTOK_BMW_EDIT: 602, treaforik: 115, maksik_paksik7: 1663 } },
];

const donationByPlayer = {
  SIGMA: 'гравець', BEFF: 'гравець', kostya2103: 'гравець', maksyarosh: 'гравець', lukyan187: 'status',
  ForteCa228: 'keerinam', edazfetg4ooo: 'keerinam', aboba2032: 'keerinam',
  Vityappro11: 'debryli', Varenyk: 'debryli', treaforik: 'debryli', 'wontz': 'debryli', Vortex1k: 'debryli', hipoma: 'debryli',
  kasikm1: 'GOD', jtx_by: 'GOD', Paolo_Fermer: 'GOD', kampys231231: 'GOD', FairDemonYT: 'GOD',
  '07_YM': 'status', '05LONE12': 'status',
  TIKTOK_BMW_EDIT: 'CONTENT MAKER', robot: 'гравець',
  maksik_paksik7: 'ADMIN', PravyiNosok777: 'ADMIN'
};

const donationHistoryByPlayer = {
  // Можна додавати будь-якого гравця з датами зміни донату
  treaforik: [
    { from: '2025-02-21', donation: 'гравець' },
    { from: '2025-02-27', donation: 'debryli' },
  ],
  Vityappro11: [
    { from: '2025-02-21', donation: 'debryli' },
    { from: '2025-03-05', donation: 'GOD' },
    { from: '2025-03-08', donation: 'CONTENT MAKER' },
  ],
  ForteCa228: [
    { from: '2025-02-21', donation: 'keerinam' },
    { from: '2025-03-08', donation: 'DM+' },
  ],
  edazfetg4ooo: [
    { from: '2025-02-21', donation: 'keerinam' },
    { from: '2025-03-05', donation: 'prista' },
    { from: '2025-03-08', donation: 'DM+' },
  ],
  '07_YM': [
    { from: '2025-02-21', donation: 'status' },
    { from: '2025-03-10', donation: 'prista' },
  ],
};

const clans = {
  Vitya: {
    createdAt: '2025-02-22',
    events: [
      { date: '2025-02-22', player: 'Vityappro11', role: 'leader', action: 'join' },
      { date: '2025-02-25', player: 'lukyan187', role: 'senior', action: 'join' },
      { date: '2025-02-26', player: 'SIGMA', role: 'senior', action: 'join' },
      { date: '2025-03-07', player: 'lukyan187', role: 'senior', action: 'leave' },
      { date: '2025-03-07', player: 'SIGMA', role: 'senior', action: 'leave' },
      { date: '2025-03-08', player: 'lukyan187', role: 'senior', action: 'join' },
      { date: '2025-03-09', player: 'robot', role: 'member', action: 'join' },
    ],
  },
  treaf: {
    createdAt: '2025-02-25',
    deletedAt: '2025-03-08',
    events: [
      { date: '2025-02-25', player: 'treaforik', role: 'leader', action: 'join' },
      { date: '2025-03-05', player: 'jtx_by', role: 'member', action: 'join' },
      { date: '2025-03-07', player: 'jtx_by', role: 'member', action: 'leave' },
      { date: '2025-03-08', player: 'treaforik', role: 'leader', action: 'leave' },
    ],
  },
  bitwi: {
    createdAt: '2025-03-08',
    events: [
      { date: '2025-03-08', player: 'ForteCa228', role: 'leader', action: 'join' },
      { date: '2025-03-08', player: 'treaforik', role: 'member', action: 'join' },
    ],
  },
  pipki: {
    createdAt: '2025-03-08',
    events: [
      { date: '2025-03-08', player: 'edazfetg4ooo', role: 'leader', action: 'join' },
    ],
  },
};

const serverUpdates = [
  { title: 'НЕЗЕРСЬКИЙ ВАЙП', period: '29 липня - 5 серпня 2025', start: '2025-07-29', end: '2025-08-05', items: ['це перший вайп сервера'] },
  { title: 'ОСТАННІЙ ВАЙП', period: '5 серпня - 12 серпня', start: '2025-08-05', end: '2025-08-12', items: ['добавили Талісман Останнього'] },
  { title: 'ОСТАННЄ ЛІТО', period: '12 серпня - 30 серпня', start: '2025-08-12', end: '2025-08-30', items: ['видалили Замок Весторі і Аірдроп', 'Переробили спавн'] },
  { title: 'ОСІННІЙ ВАЙП', period: '31 серпня - 30 вересня', start: '2025-08-31', end: '2025-09-30', items: ['Переробили спавн', '9 вересня добавили сферу Останнього'] },
  { title: 'ПОВЕРНЕННЯ ДЕМІГРО', period: '25 січня - 14 лютого', start: '2026-01-25', end: '2026-02-14', items: ['Добавили Контейнер PTE'] },
  { title: 'НОВА ЕРА', period: '14 лютого - 7 березня', start: '2025-02-14', end: '2025-03-07', items: ['Переробка сервера на новому хостингу', '21 лютого добавили /site, Клани, Кейс Талісманів', '22 лютого добавили Призи,Купця та Чарівника', '25 лютого добавили новий кейс ТнТ і нові 3 вида ТнТ', '27 лютого заміна кейса ТнТ', '28 лютого добавили TAB, /report, валюту Демігрики, Топ по часу на сервері, Рівні ендер Скрині, Новий магазин, Оновлення кітів'] },
  { title: 'ВЕСНЯНА ГРА', period: '7 березня - 1 квітня', start: '2025-03-07', end: '2025-04-01', items: ['Новий статус', 'Новий квест', 'Новий кейс', 'Новий Донат', 'Новий івент', 'Нові донат речі', 'Зміна сайту', 'Зміна цін привілегій', 'Видалення Талісмана Бога', 'Оновлення спавна', 'Оновлення ПвП арени', 'Скорборд у режимі ПвП'] },
];

const INFO_LINES = [
  'Сайт зробив Vityappro11',
  'Це не офіційний сайт сервера',
  'Офіційний сайт Демігро: https://sites.google.com/view/demigro/%D0%B3%D0%BE%D0%BB%D0%BE%D0%B2%D0%BD%D0%B0-%D1%81%D1%82%D0%BE%D1%80%D1%96%D0%BD%D0%BA%D0%B0?authuser=0',
  'Підпишіться на мій канал та канал Адміна',
  'YOUTUBE: Мій канал UCEOL6x4uzVT31SRwXBG1tRQ',
  'YOUTUBE: Канал Макса UC6aVFfxS51vymg45uIUCQ-w',
  'TIKTOK: Мій канал www.tiktok.com/@vityapro132',
  'TIKTOK: Канал Макса www.tiktok.com/@maksik_paksik0',
  'IP сервера: demigro.play.ski',
];

const firstSeenOverrides = {
  maksik_paksik7: '2025-02-14',
  treaforik: '2025-02-14',
  Vityappro11: '2025-02-15',
  PravyiNosok777: '2025-02-15',
  '07_YM': '2025-02-17',
  ForteCa228: '2025-02-17',
  Varenyk: '2025-02-17',
  Varenyk228: '2025-02-17',
  '05LONE12': '2025-02-18',
};

const contentVideos = [
  { platform: 'tiktok', author: 'Varenyk', title: 'Відкриття сервера', url: 'https://vt.tiktok.com/ZSud2Q6aJ/', date: '14 лютого', views: 277, likes: 9 },
  { platform: 'tiktok', author: 'Varenyk', title: 'ПвП', url: 'https://vt.tiktok.com/ZSud2u5Er/', date: '18 лютого', views: 378, likes: 10 },
  { platform: 'tiktok', author: 'Varenyk', title: 'Битва з Vortex1k', url: 'https://vt.tiktok.com/ZSud2nhMV/', date: '21 лютого', views: 217, likes: 8 },
  { platform: 'tiktok', author: 'Varenyk', title: 'Топ 1 сервера', url: 'https://vt.tiktok.com/ZSud2shgW/', date: '21 лютого', views: 329, likes: 7 },
  { platform: 'tiktok', author: 'Varenyk', title: 'Битва з FairDemonYT', url: 'https://vt.tiktok.com/ZSudjdED7/', date: '22 лютого', views: 230, likes: 5 },
  { platform: 'tiktok', author: 'Vityappro11', title: 'Вбиваю Ендер Дракона на Деміґро', url: 'https://vt.tiktok.com/ZSudjkrrn/', date: '11 вересня', views: 268, likes: 11 },
  { platform: 'tiktok', author: 'Vityappro11', title: 'AKSELEND vs DEMIGRO', url: 'https://vt.tiktok.com/ZSudjtwVQ/', date: '', views: 249, likes: 15 },
  { platform: 'tiktok', author: 'Vityappro11', title: 'Сервер Демігро', url: '', date: '', views: 259, likes: 11 },
  { platform: 'youtube', author: 'Vityappro11', title: 'Вбиваю Ендер Дракона на Демігро', url: 'https://youtube.com/shorts/hsXJGZhCAs8?si=ZFe9-hOGMZrwe1Sz', date: '11 вересня', views: 348, likes: 3 },
  { platform: 'youtube', author: 'Vityappro11', title: 'AKSELEND vs DEMIGRO', url: 'https://youtube.com/shorts/KWamPGCoPsg?si=fdI65BANOtvFekP4', date: '22 листопада', views: 1605, likes: 8 },
];

const contentChannels = [
  { platform: 'tiktok', name: 'Varenyk', followers: 538, label: 'слідкувачів', url: 'https://www.tiktok.com/@zadr1t', owners: ['Varenyk'] },
  { platform: 'tiktok', name: 'Maksik_paksik7', followers: 88, label: 'слідкувачів', url: 'https://www.tiktok.com/@maksik_paksik70', owners: ['maksik_paksik7'] },
  { platform: 'tiktok', name: 'Vityappro11', followers: 50, label: 'слідкувачів', url: 'https://www.tiktok.com/@vityapro132', owners: ['Vityappro11'] },
  { platform: 'youtube', name: 'Vityappro11', followers: 33, label: 'підписники', url: '', owners: ['Vityappro11'] },
  { platform: 'youtube', name: 'Maksik_paksik7', followers: 10, label: 'підписників', url: '', owners: ['maksik_paksik7'] },
];

const pvpFights = [
  { date: '5 березня', player1: 'treaforik', player2: 'kasikm1', winner: 'kasikm1' },
  { date: '8 березня', player1: 'Vityappro11', player2: 'Varenyk', winner: 'Vityappro11' },
  { date: '8 березня', player1: 'Vityappro11', player2: 'ForteCa228', winner: 'ForteCa228' },
  { date: '9 березня', player1: 'lukyan187', player2: 'robot', winner: 'lukyan187' },
];


const medalsByPlayer = {
  Vityappro11: ['🥇 Баланс (золота)'],
  Varenyk: ['🥈 Баланс (срібна)'],
  treaforik: ['🥉 Баланс (бронзова)'],
  edazfetg4ooo: ['🥇 Час (золота)'],
  '07_YM': ['🥈 Час (срібна)'],
  ForteCa228: ['🥉 Час (бронзова)'],
};

const medalXpByType = { gold: 2500, silver: 1500, bronze: 750 };

const extraXpByPlayer = {
  Vityappro11: 300,
  ForteCa228: 200,
  kasikm1: 100,
  lukyan187: 100,
};

function medalXpForPlayer(player) {
  const medals = medalsByPlayer[player] || [];
  return medals.reduce((sum, text) => {
    if (text.includes('золота')) return sum + medalXpByType.gold;
    if (text.includes('срібна')) return sum + medalXpByType.silver;
    if (text.includes('бронзова')) return sum + medalXpByType.bronze;
    return sum;
  }, 0);
}

const manualLastSeen = {
  Vityappro11: '2025-03-14', ForteCa228: '2025-03-09', treaforik: '2025-03-14', '07_YM': '2025-03-14',
  edazfetg4ooo: '2025-03-14', BEFF: '2025-03-09', Varenyk: '2025-03-14', TIKTOK_BMW_EDIT: '2025-03-13', hirtir: '2025-03-08',
  lukyan187: '2025-03-13', Paolo_Fermer: '2025-03-14', belui228: '2025-03-08', maksik_paksik7: '2025-03-12',
  PravyiNosok777: '2025-03-12', hipoma: '2025-03-07', wontz: '2025-03-07', kasikm1: '2025-03-01', robot: '2025-03-14', Topix__: '2025-03-10',
  Restioynik1: '2025-03-13', Bear228: '2025-03-12', ivan_strogo: '2025-03-14', dddooooppp: '2025-03-12', goiida11: '2025-03-13',
  XIN_jonu: '2025-03-14', illwix: '2025-03-14', ulquiorra2: '2025-03-14', kampys231231: '2025-03-13'
};

const dateSelect = document.getElementById('dateSelect');
const dateSelectWrap = document.getElementById('dateSelectWrap');
const wipeSelect = document.getElementById('wipeSelect');
const wipeSelectWrap = document.getElementById('wipeSelectWrap');
const heroSubtitle = document.getElementById('heroSubtitle');
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
const history3Title = document.getElementById('history3Title');
const history3 = document.getElementById('history3');
const detailsWipeWrap = document.getElementById('detailsWipeWrap');
const detailsWipeSelect = document.getElementById('detailsWipeSelect');
const contentControls = document.getElementById('contentControls');
const contentPlatformTikTok = document.getElementById('contentPlatformTikTok');
const contentPlatformYouTube = document.getElementById('contentPlatformYouTube');
const contentTypeVideos = document.getElementById('contentTypeVideos');
const contentTypeChannels = document.getElementById('contentTypeChannels');
const videoSortControls = document.getElementById('videoSortControls');
const contentSortViews = document.getElementById('contentSortViews');
const contentSortLikes = document.getElementById('contentSortLikes');
const openFullStatsBtn = document.getElementById('openFullStatsBtn');
const fullStatsModal = document.getElementById('fullStatsModal');
const closeFullStatsBtn = document.getElementById('closeFullStatsBtn');
const fullStatsTitle = document.getElementById('fullStatsTitle');
const fullStatsWipeSelect = document.getElementById('fullStatsWipeSelect');
const fullStatsBody = document.getElementById('fullStatsBody');
const fullStatsContentPlatformWrap = document.getElementById('fullStatsContentPlatformWrap');
const fullStatsContentPlatform = document.getElementById('fullStatsContentPlatform');

let view = 'balance';
let selected = null;
let contentPlatform = 'tiktok';
let contentType = 'videos';
let contentSort = 'views';
let fullStatsPlayer = null;

const dates = snapshots.map((s) => s.date);
const latestDate = dates[dates.length - 1];

const wipeRanges = {
  novaEra: { label: 'Нова Ера (14 лютого - 7 березня)', start: '2025-02-14', end: '2025-03-06' },
  springGame: { label: 'Весняна Гра (7 березня - 1 квітня)', start: '2025-03-07', end: '2025-04-01' },
  allTime: { label: 'За весь час', start: '2025-02-21', end: '2025-12-31' },
};

let activeWipe = 'springGame';

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

function isTopView(v) {
  return ['balance', 'play', 'clans', 'donates'].includes(v);
}

function datesInActiveWipe() {
  const range = wipeRanges[activeWipe];
  return dates.filter((d) => d >= range.start && d <= range.end);
}

function snapshotsInActiveWipe() {
  const inWipe = new Set(datesInActiveWipe());
  return snapshots.filter((s) => inWipe.has(s.date));
}

function currentDateInWipe(wipeId, preferredDate = dateSelect.value) {
  const allowed = wipeId === 'allTime' ? dates : snapshotsForWipe(wipeId).map((s) => s.date);
  if (!allowed.length) return latestDate;
  if (allowed.includes(preferredDate)) return preferredDate;
  return allowed[allowed.length - 1];
}

function currentDateInActiveWipe(preferredDate = dateSelect.value) {
  return currentDateInWipe(activeWipe, preferredDate);
}

function allowedDatesForView(v) {
  if (v === 'content') return ['2025-03-05'];

  let allowed = dates;
  if (v === 'play') allowed = dates.filter((d) => d >= '2025-03-02' && d <= '2025-03-14' && d !== '2025-03-07');
  if (v === 'clans') allowed = dates.filter((d) => d >= '2025-02-22');
  if (isTopView(v)) {
    const inWipe = new Set(datesInActiveWipe());
    allowed = allowed.filter((d) => inWipe.has(d));
  }
  return allowed;
}


function snapshotsForWipe(wipeId) {
  if (wipeId === 'allTime') return snapshots;
  const range = wipeRanges[wipeId];
  return snapshots.filter((x) => x.date >= range.start && x.date <= range.end);
}

function entityExistsInWipe(type, id, wipeId) {
  const data = snapshotsForWipe(wipeId);
  if (type === 'player') return data.some((s) => s.players[id] !== undefined || s.play[id] !== undefined);
  if (type === 'clan') return data.some((s) => isClanActiveAtDate(id, s.date));
  if (type === 'donate') return data.some((s) => Object.keys(s.players).some((p) => donationOfAtDate(p, s.date) === id));
  return true;
}

function setupDetailsWipeOptions(type, id) {
  const wipeIds = ['allTime', 'novaEra', 'springGame'];
  detailsWipeSelect.innerHTML = wipeIds
    .map((w) => `<option value="${w}" ${entityExistsInWipe(type, id, w) ? '' : 'disabled'}>${wipeRanges[w].label}</option>`)
    .join('');

  if (!entityExistsInWipe(type, id, activeWipe)) {
    const fallback = wipeIds.find((w) => entityExistsInWipe(type, id, w)) || 'allTime';
    detailsWipeSelect.value = fallback;
  } else {
    detailsWipeSelect.value = activeWipe;
  }
}

function getReputation(player) {
  const map = {
    GGlolick: 1, Varenyk228: 1, hirtir: 1,
    m0NESY: 2, Nazar3321: 2, kostya2103: 2, maksyarosh: 2,
    SIGMA: 3, kampys231231: 3, jtx_by: 3, '05LONE12': 3,
    BEFF: 4, Vortex1k: 4, belui228: 4,
    lukyan187: 5, FairDemonYT: 5, wontz: 5, TIKTOK_BMW_EDIT: 5,
    kasikm1: 6, aboba2032: 6, hipoma: 6, Varenyk: 6,
    PravyiNosok777: 7, edazfetg4ooo: 7, Paolo_Fermer: 7, '07_YM': 7, treaforik: 7,
    ForteCa228: 8,
    Vityappro11: 9,
    maksik_paksik7: 10,
  };
  const score = map[player] || 1;
  const color = score <= 2 ? '#7f1d1d' : score <= 4 ? '#dc2626' : score <= 6 ? '#f59e0b' : score <= 8 ? '#16a34a' : '#166534';
  return { score, color };
}

function fightDateToIso(dateText) {
  const m = /^(\d+)\s+березня$/i.exec(dateText || '');
  if (!m) return '2025-03-01';
  return `2025-03-${m[1].padStart(2, '0')}`;
}

function fullStatsForPlayer(player, wipeId, platform='tiktok') {
  const snaps = snapshotsForWipe(wipeId);
  const bal = snaps.filter((s) => s.players[player] !== undefined).map((s) => ({ date:s.date, v:s.players[player] }));
  const play = snaps.filter((s) => s.play[player] !== undefined).map((s) => ({ date:s.date, v:s.play[player] }));
  const maxBalance = bal.reduce((m,x)=>x.v>m?x.v:m,0);
  const currentBalance = wipeId === 'allTime'
    ? combinedValueAcrossWipesForPlayer(player, 'players')
    : (bal.length ? bal[bal.length-1].v : 0);
  const playTime = wipeId === 'allTime'
    ? combinedValueAcrossWipesForPlayer(player, 'play')
    : (play.length ? play[play.length-1].v : 0);
  const fights = pvpFights.filter((f)=>{
    const iso = fightDateToIso(f.date);
    const inWipe = wipeId === 'allTime' || (iso >= wipeRanges[wipeId].start && iso <= wipeRanges[wipeId].end);
    return inWipe && (f.player1===player || f.player2===player);
  });
  const wins = fights.filter((f)=>f.winner===player).length;
  const losses = fights.length - wins;
  const allBal = snapshots
    .filter((s) => s.players[player] !== undefined)
    .map((s) => ({ date: s.date, v: s.players[player] }));
  const allPlay = snapshots
    .filter((s) => s.play[player] !== undefined)
    .map((s) => ({ date: s.date, v: s.play[player] }));

  let earnedAllTime = 0;
  for (let i = 1; i < allBal.length; i++) {
    const diff = allBal[i].v - allBal[i - 1].v;
    if (diff > 0) earnedAllTime += diff;
  }

  let playIncAllTime = 0;
  for (let i = 1; i < allPlay.length; i++) {
    playIncAllTime += Math.max(0, allPlay[i].v - allPlay[i - 1].v);
  }

  const fightsAllTime = pvpFights.filter((f) => f.player1 === player || f.player2 === player);
  const winsAllTime = fightsAllTime.filter((f) => f.winner === player).length;
  const clanJoinsAllTime = Object.values(clans)
    .flatMap((c) => c.events)
    .filter((e) => e.player === player && e.action === 'join').length;

  const xp = Math.floor(earnedAllTime / 30) + Math.floor(playIncAllTime / 3) + winsAllTime * 100 + clanJoinsAllTime * 100 + (extraXpByPlayer[player] || 0) + medalXpForPlayer(player);
  const thresholds = [0, 100, 150, 200, 250, 300, 400, 500, 600, 750, 1000, 1250, 1500, 1750, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 6000, 7000, 8000, 9000, 10000, 12000, 14000, 16000, 18000, 20000, 50000];
  let rawLevel = 0;
  for (let i = 0; i < thresholds.length; i++) if (xp >= thresholds[i]) rawLevel = i;
  const isMaxLevel = xp >= 50000;
  const level = isMaxLevel ? 30 : Math.min(rawLevel, 30);
  const toNext = isMaxLevel ? 0 : Math.max(0, thresholds[level + 1] - xp);
  const xpAfterMax = isMaxLevel ? xp - 50000 : 0;
  const rep = getReputation(player);
  const channels = getPlayerChannels(player).filter((c)=>c.platform===platform);
  const vids = getPlayerVideos(player).filter((v)=>v.platform===platform);
  const content = {
    totalVideos: vids.length,
    totalViews: vids.reduce((a,v)=>a+(v.views||0),0),
    totalLikes: vids.reduce((a,v)=>a+(v.likes||0),0),
    followers: channels.reduce((a,c)=>a+c.followers,0),
  };
  return {rep,level,xp,toNext,xpAfterMax,isMaxLevel,maxBalance,currentBalance,playTime,wins,losses,fights,content,medals: medalsByPlayer[player] || []};
}

function renderFullStatsModal(player) {
  fullStatsPlayer = player;
  const wipeId = fullStatsWipeSelect.value || 'allTime';
  const platform = fullStatsContentPlatform.value;
  const stat = fullStatsForPlayer(player, wipeId, platform);
  const repFill = Math.max(0, Math.min(100, stat.rep.score * 10));
  const repLabel = `${stat.rep.score}/10`;
  const levelText = stat.isMaxLevel
    ? `max level (потрібно 50000 XP, XP після max level: ${stat.xpAfterMax})`
    : `${stat.level} (XP: ${stat.xp}, до наступного: ${stat.toNext})`;
  const canContent = ['maksik_paksik7','Varenyk','Vityappro11'].includes(player);
  fullStatsContentPlatformWrap.classList.toggle('hidden', !canContent);

  fullStatsTitle.textContent = `Повна статистика: ${player}`;
  fullStatsBody.innerHTML = `
    <h3>Загальне</h3>
    <div class="full-grid">
      <div class="stat"><strong>Рівень</strong><p>${levelText}</p></div>
      <div class="stat"><strong>Макс Баланс</strong><p>${formatCurrency(stat.maxBalance)}</p></div>
      <div class="stat"><strong>Баланс</strong><p>${formatCurrency(stat.currentBalance)}</p></div>
      <div class="stat"><strong>Перший Раз на сервері</strong><p>${firstSeenDate(player) ? dateLabel(firstSeenDate(player)) : '—'}</p></div>
      <div class="stat"><strong>Останній раз в мережі</strong><p>${detectLastSeen(player)}</p></div>
      <div class="stat"><strong>Час на сервері</strong><p>${formatPlay(stat.playTime)}</p></div>
    </div>
    <div class="rep-wrap">
      <strong>Репутація на Сервері</strong>
      <div class="rep-rect"><span style="width:${repFill}%; background:${stat.rep.color};"></span></div>
      <div class="rep-value">${repLabel}</div>
    </div>
    <h3>PvP</h3>
    <div class="full-grid">
      <div class="stat"><strong>Всього боїв</strong><p>${stat.fights.length}</p></div>
      <div class="stat"><strong>Всього Перемог</strong><p>${stat.wins}</p></div>
      <div class="stat"><strong>Всього Поразок</strong><p>${stat.losses}</p></div>
      <div class="stat"><strong>Winrate</strong><p>${stat.fights.length ? Math.round((stat.wins/stat.fights.length)*100) : 0}%</p></div>
    </div>
    ${canContent ? `<h3>Content (${platform.toUpperCase()})</h3><div class="full-grid"><div class="stat"><strong>Всього відео</strong><p>${stat.content.totalVideos}</p></div><div class="stat"><strong>Всього переглядів</strong><p>${new Intl.NumberFormat('uk-UA').format(stat.content.totalViews)}</p></div><div class="stat"><strong>Всього Лайків</strong><p>${new Intl.NumberFormat('uk-UA').format(stat.content.totalLikes)}</p></div><div class="stat"><strong>${platform==='youtube' ? 'Всього Підписників' : 'Всього Слідкувачів'}</strong><p>${new Intl.NumberFormat('uk-UA').format(stat.content.followers)}</p></div></div>` : ''}
    <h3>Медалі</h3>
    <ul>${(stat.medals.length ? stat.medals : ['Немає медалей']).map((m) => `<li>${m}</li>`).join('')}</ul>
  `;
}

function refreshWipeSelect() {
  const options = Object.entries(wipeRanges).filter(([id]) => id !== 'allTime').map(([id, info]) => `<option value="${id}">${info.label}</option>`).join('');
  wipeSelect.innerHTML = options;
  detailsWipeSelect.innerHTML = options;
  wipeSelect.value = activeWipe;
  detailsWipeSelect.value = activeWipe;
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

function setDateSelectVisibility() {
  const hide = ['updates', 'info', 'pvp', 'content'].includes(view);
  dateSelectWrap.classList.toggle('hidden', hide);
}

function setWipeSelectVisibility() {
  wipeSelectWrap.classList.toggle('hidden', !isTopView(view));
}

function setDetailsWipeVisibility(visible) {
  detailsWipeWrap.classList.toggle('hidden', !visible);
  if (visible && !detailsWipeSelect.value) detailsWipeSelect.value = activeWipe;
}

function setContentControlsVisible(visible) {
  contentControls.classList.toggle('hidden', !visible);
}

function syncContentControlButtons() {
  contentPlatformTikTok.classList.toggle('active', contentPlatform === 'tiktok');
  contentPlatformYouTube.classList.toggle('active', contentPlatform === 'youtube');
  contentTypeVideos.classList.toggle('active', contentType === 'videos');
  contentTypeChannels.classList.toggle('active', contentType === 'channels');
  videoSortControls.classList.toggle('hidden', contentType !== 'videos');
  contentSortViews.classList.toggle('active', contentSort === 'views');
  contentSortLikes.classList.toggle('active', contentSort === 'likes');
}

function videoOwners(video) {
  if (video.author === 'Varenyk/treaforik') return ['Varenyk', 'treaforik'];
  return [video.author];
}

function getPlayerChannels(player) {
  return contentChannels.filter((c) => c.owners.includes(player));
}

function getPlayerVideos(player) {
  return contentVideos.filter((v) => videoOwners(v).includes(player));
}

function updateHeroSubtitle() {
  const endDay = Number(latestDate.split('-')[2]);
  if (!Number.isNaN(endDay)) {
    heroSubtitle.textContent = `Сучасна панель перегляду статистики за 21 лютого — ${endDay} березня.`;
  }
}

function totalMoneyAtDate(date) {
  const snap = getSnapshot(date);
  return Object.values(snap.players).reduce((a, b) => a + b, 0);
}

function rankMapForDate(sourceObj) {
  const sorted = Object.entries(sourceObj).sort((a, b) => b[1] - a[1]).map(([name], idx) => [name, idx + 1]);
  return Object.fromEntries(sorted);
}

function isHiddenFromPlayLeaderboard(name, date) {
  return name === 'maksik_paksik7' && date >= '2025-03-13';
}

function positionDelta(prevRank, curRank) {
  if (!prevRank) return 'new';
  if (prevRank === curRank) return '=';
  if (prevRank > curRank) return `↑${prevRank - curRank}`;
  return `↓${curRank - prevRank}`;
}

function isClanActiveAtDate(clanName, date) {
  const clan = clans[clanName];
  return clan.createdAt <= date && (!clan.deletedAt || date < clan.deletedAt);
}

function getClanForPlayerAtDate(player, date) {
  for (const [clanName, clan] of Object.entries(clans)) {
    if (!isClanActiveAtDate(clanName, date)) continue;
    const event = clan.events
      .filter((e) => e.player === player && e.date <= date)
      .sort((a, b) => a.date.localeCompare(b.date))
      .at(-1);
    if (event?.action === 'join') return { clan: clanName, role: event.role };
  }
  return { clan: 'без клану', role: '—' };
}

function getClanMembersAtDate(clanName, date) {
  if (!isClanActiveAtDate(clanName, date)) return [];
  const latestByPlayer = {};
  for (const e of clans[clanName].events.filter((x) => x.date <= date).sort((a, b) => a.date.localeCompare(b.date))) {
    latestByPlayer[e.player] = e;
  }
  return Object.values(latestByPlayer).filter((e) => e.action === 'join').map((e) => ({ player: e.player, role: e.role }));
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
  if (firstSeenOverrides[player]) return firstSeenOverrides[player];
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

function playerPvpStats(player) {
  let wins = 0;
  let losses = 0;
  for (const f of pvpFights) {
    if (f.player1 === player || f.player2 === player) {
      if (f.winner === player) wins += 1;
      else losses += 1;
    }
  }
  const total = wins + losses;
  const rate = total ? Math.round((wins / total) * 100) : 0;
  return { wins, losses, rate };
}


function combinedValueAcrossWipesForPlayer(player, field) {
  const realWipes = Object.keys(wipeRanges).filter((w) => w !== 'allTime');
  return realWipes.reduce((sum, wipeId) => {
    const value = snapshotsForWipe(wipeId)
      .filter((snap) => snap[field]?.[player] !== undefined)
      .map((snap) => snap[field][player])
      .at(-1);
    return sum + (value || 0);
  }, 0);
}

function combinedValueAcrossWipesForClan(clanName) {
  const realWipes = Object.keys(wipeRanges).filter((w) => w !== 'allTime');
  return realWipes.reduce((sum, wipeId) => {
    const lastDate = snapshotsForWipe(wipeId).map((s) => s.date).at(-1);
    if (!lastDate || lastDate < clans[clanName].createdAt) return sum;
    return sum + clanBalanceAtDate(clanName, lastDate);
  }, 0);
}

function combinedValueAcrossWipesForDonate(group) {
  const realWipes = Object.keys(wipeRanges).filter((w) => w !== 'allTime');
  return realWipes.reduce((sum, wipeId) => {
    const lastDate = snapshotsForWipe(wipeId).map((s) => s.date).at(-1);
    if (!lastDate) return sum;
    return sum + donationBalanceAtDate(group, lastDate);
  }, 0);
}

function showPlayerDetails(player) {
  selected = { type: 'player', id: player };
  detailsHint.classList.add('hidden');
  detailsContent.classList.remove('hidden');
  setDetailsWipeVisibility(true);
  setupDetailsWipeOptions('player', player);
  const scopeWipe = detailsWipeSelect.value;

  const date = currentDateInWipe(scopeWipe, dateSelect.value);
  const wipeSnapshots = snapshotsForWipe(scopeWipe);
  const clanInfo = getClanForPlayerAtDate(player, date);
  const group = donationOfAtDate(player, date);
  const balanceHistory = wipeSnapshots.filter((s) => s.players[player] !== undefined).map((s) => ({ date: s.date, value: s.players[player] }));
  const playHistory = wipeSnapshots.filter((s) => s.play[player] !== undefined).map((s) => ({ date: s.date, value: s.play[player] }));
  const peakBalance = balanceHistory.reduce((m, x) => (x.value > m.value ? x : m), { value: -1, date: '' });
  const currentBalance = scopeWipe === 'allTime'
    ? combinedValueAcrossWipesForPlayer(player, 'players')
    : (getSnapshot(date).players[player] ?? 0);
  const firstSeen = firstSeenDate(player);
  const pvp = playerPvpStats(player);

  let best = null;
  for (const s of wipeSnapshots) {
    if (s.players[player] === undefined) continue;
    const r = rankMapForDate(s.players)[player];
    if (!best || r < best.rank) best = { rank: r, date: s.date };
  }

  detailsTitle.textContent = 'Профіль гравця';
  entityName.textContent = player;
  metaInfo.textContent = `Клан: ${clanInfo.clan} • Донат: ${group} • Вайп: ${wipeRanges[scopeWipe].label}`;
  renderStats([
    { label: 'Макс. баланс', value: peakBalance.value >= 0 ? `${formatCurrency(peakBalance.value)} (${dateLabel(peakBalance.date)})` : '—' },
    { label: 'Баланс', value: formatCurrency(currentBalance) },
    { label: 'Перший раз на сервері', value: firstSeen ? dateLabel(firstSeen) : '—' },
    { label: 'Найвище місце', value: best ? `#${best.rank} (${dateLabel(best.date)})` : '—' },
    { label: 'Останній раз в мережі', value: detectLastSeen(player) },
    { label: 'Час на Сервері', value: (scopeWipe === 'allTime'
      ? formatPlay(combinedValueAcrossWipesForPlayer(player, 'play'))
      : formatPlay(playHistory.at(-1)?.value || 0)) },
    { label: 'ПвП', value: `${pvp.wins} перемог / ${pvp.losses} поразок (${pvp.rate}% winrate)` },
    { label: 'Медалі', value: (medalsByPlayer[player] || []).join(', ') || 'Немає медалей' },
  ]);

  history1Title.textContent = 'Історія балансу (місце та зміна)';
  history2Title.textContent = 'Історія Top Play (місце та зміна)';
  history3Title.textContent = 'Контент гравця';
  history3Title.classList.remove('hidden');
  history3.classList.remove('hidden');
  openFullStatsBtn.classList.remove('hidden');

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

  const channels = getPlayerChannels(player);
  const videos = getPlayerVideos(player).sort((a, b) => b.views - a.views);

  const channelRows = channels.map((c) => `<li>Канал ${c.platform === 'tiktok' ? 'TikTok' : 'YouTube'}: ${c.name} — ${c.followers} ${c.label}${c.url ? ` • <a href="${c.url}" target="_blank" rel="noopener noreferrer">посилання</a>` : ''}</li>`);
  const videoRows = videos.map((v) => `<li>${v.platform === 'tiktok' ? 'TikTok' : 'YouTube'} • ${v.title} — ${v.views} переглядів, ${v.likes} лайків${v.url ? ` • <a href="${v.url}" target="_blank" rel="noopener noreferrer">дивитись</a>` : ''}</li>`);

  history1.innerHTML = balanceRows.join('') || '<li>Немає даних</li>';
  history2.innerHTML = playRows.join('') || '<li>Немає Top Play даних</li>';
  history3.innerHTML = [
    ...(channelRows.length ? channelRows : ['<li>Каналів не знайдено</li>']),
    ...(videoRows.length ? videoRows : ['<li>Відео не знайдено</li>']),
  ].join('');
}


function hideThirdHistoryBlock() {
  openFullStatsBtn.classList.add('hidden');
  history3Title.classList.add('hidden');
  history3.classList.add('hidden');
  history3.innerHTML = '';
  setDetailsWipeVisibility(false);
}

function showClanDetails(clanName) {
  selected = { type: 'clan', id: clanName };
  detailsHint.classList.add('hidden');
  detailsContent.classList.remove('hidden');
  hideThirdHistoryBlock();

  setDetailsWipeVisibility(true);
  setupDetailsWipeOptions('clan', clanName);
  const scopeWipe = detailsWipeSelect.value;
  const date = currentDateInWipe(scopeWipe, dateSelect.value);
  const wipeDates = snapshotsForWipe(scopeWipe).map((s) => s.date);
  const membersNow = getClanMembersAtDate(clanName, date);
  const history = wipeDates.filter((d) => d >= clans[clanName].createdAt).map((d) => ({ date: d, value: clanBalanceAtDate(clanName, d) }));

  let latestMemberActivity = null;
  for (const m of membersNow) {
    const seenAuto = [...snapshots].reverse().find((s) => s.play[m.player] !== undefined || s.players[m.player] !== undefined)?.date;
    const seen = manualLastSeen[m.player] || seenAuto;
    if (seen && (!latestMemberActivity || seen > latestMemberActivity)) latestMemberActivity = seen;
  }

  detailsTitle.textContent = 'Профіль клану';
  entityName.textContent = clanName;
  metaInfo.textContent = `Створено: ${dateLabel(clans[clanName].createdAt)} • Остання активність: ${latestMemberActivity ? dateLabel(latestMemberActivity) : '—'} • Вайп: ${wipeRanges[scopeWipe].label}`;
  renderStats([
    { label: 'Поточний баланс клану', value: formatCurrency(scopeWipe === 'allTime'
      ? combinedValueAcrossWipesForClan(clanName)
      : clanBalanceAtDate(clanName, date)) },
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
  hideThirdHistoryBlock();

  setDetailsWipeVisibility(true);
  setupDetailsWipeOptions('donate', group);
  const scopeWipe = detailsWipeSelect.value;
  const date = currentDateInWipe(scopeWipe, dateSelect.value);
  const wipeDates = snapshotsForWipe(scopeWipe).map((s) => s.date);
  const players = Object.keys(getSnapshot(date).players).filter((p) => donationOfAtDate(p, date) === group);
  const history = wipeDates.map((d) => ({ date: d, value: donationBalanceAtDate(group, d) }));

  detailsTitle.textContent = 'Профіль групи';
  entityName.textContent = group;
  metaInfo.textContent = `Об’єднаний баланс усіх гравців цієї групи • Вайп: ${wipeRanges[scopeWipe].label}`;
  renderStats([
    { label: 'Поточний баланс групи', value: formatCurrency(scopeWipe === 'allTime'
      ? combinedValueAcrossWipesForDonate(group)
      : donationBalanceAtDate(group, date)) },
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
  hideThirdHistoryBlock();
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
  hideThirdHistoryBlock();
  detailsTitle.textContent = 'Оновлення сервера';
  entityName.textContent = 'Хронологія оновлень';
  metaInfo.textContent = 'Офіційні етапи розвитку сервера';
  renderStats([{ label: 'Кількість етапів', value: String(serverUpdates.length) }]);
  history1Title.textContent = 'Етапи';
  history2Title.textContent = 'Деталі';
  const ordered = [...serverUpdates].reverse();
  history1.innerHTML = ordered.map((u) => `<li>${u.title} (${u.period})</li>`).join('');
  history2.innerHTML = ordered.map((u) => `<li><strong>${u.title}</strong>: ${u.items.join(' • ')}</li>`).join('');
}

function showInfoDetails() {
  selected = { type: 'info', id: 'info' };
  detailsHint.classList.add('hidden');
  detailsContent.classList.remove('hidden');
  hideThirdHistoryBlock();
  detailsTitle.textContent = 'Інформація';
  entityName.textContent = 'Про цей сайт';
  metaInfo.textContent = 'Контакти та посилання';
  renderStats([]);
  history1Title.textContent = 'Інфо';
  history2Title.textContent = 'Соцмережі';
  history1.innerHTML = INFO_LINES.slice(0, 4).map((x) => `<li>${x}</li>`).join('');
  history2.innerHTML = INFO_LINES.slice(4).map((x) => `<li>${x}</li>`).join('');
}

function showContentVideoDetails(video) {
  selected = { type: 'content-video', id: `${video.platform}::${video.title}` };
  detailsHint.classList.add('hidden');
  detailsContent.classList.remove('hidden');
  hideThirdHistoryBlock();

  detailsTitle.textContent = 'Контент';
  entityName.textContent = video.title;
  metaInfo.textContent = `${video.platform === 'tiktok' ? 'TikTok' : 'YouTube'} • ${video.author}`;
  renderStats([
    { label: 'Перегляди', value: new Intl.NumberFormat('uk-UA').format(video.views) },
    { label: 'Лайки', value: new Intl.NumberFormat('uk-UA').format(video.likes || 0) },
    { label: 'Дата', value: video.date || '—' },
  ]);

  history1Title.textContent = 'Відео';
  history2Title.textContent = 'Посилання';
  history1.innerHTML = `<li>${video.title} — ${video.views} переглядів • ${video.likes || 0} лайків</li>`;
  history2.innerHTML = video.url ? `<li><a href="${video.url}" target="_blank" rel="noopener noreferrer">Відкрити відео</a></li>` : '<li>Посилання ще не додано</li>';
}

function showContentChannelDetails(channel) {
  selected = { type: 'content-channel', id: `${channel.platform}::${channel.name}` };
  detailsHint.classList.add('hidden');
  detailsContent.classList.remove('hidden');
  hideThirdHistoryBlock();

  const channelVideos = contentVideos.filter((v) => v.platform === channel.platform && channel.owners.some((owner) => videoOwners(v).includes(owner))).sort((a, b) => b.views - a.views);
  detailsTitle.textContent = 'Контент';
  entityName.textContent = channel.name;
  metaInfo.textContent = `${channel.platform === 'tiktok' ? 'TikTok' : 'YouTube'} канал`;
  renderStats([
    { label: channel.platform === 'tiktok' ? 'Слідкувачі' : 'Підписники', value: new Intl.NumberFormat('uk-UA').format(channel.followers) },
    { label: 'Відео на сайті', value: String(channelVideos.length) },
  ]);

  history1Title.textContent = 'Канал';
  history2Title.textContent = 'Відео каналу';
  history1.innerHTML = `<li>${channel.name} — ${channel.followers} ${channel.label}${channel.url ? ` • <a href="${channel.url}" target="_blank" rel="noopener noreferrer">перейти</a>` : ''}</li>`;
  history2.innerHTML = channelVideos.map((v) => `<li>${v.title} — ${v.views} переглядів • ${v.likes || 0} лайків${v.url ? ` • <a href="${v.url}" target="_blank" rel="noopener noreferrer">дивитись</a>` : ''}</li>`).join('') || '<li>Немає відео</li>';
}

function showPvpDetails() {
  selected = { type: 'pvp', id: 'pvp' };
  detailsHint.classList.add('hidden');
  detailsContent.classList.remove('hidden');
  hideThirdHistoryBlock();
  detailsTitle.textContent = 'ПвП';
  entityName.textContent = 'ПвП-статистика сервера';
  metaInfo.textContent = 'ПвП-режим активний.';
  renderStats([{ label: 'Кількість боїв', value: String(pvpFights.length) }]);
  history1Title.textContent = 'Бої';
  history2Title.textContent = 'Результати';
  history1.innerHTML = pvpFights.map((f) => `<li>${f.date}: ${f.player1} vs ${f.player2} — Переможець: ${f.winner}</li>`).join('');
  history2.innerHTML = pvpFights.map((f) => `<li>Переможець: ${f.winner}</li>`).join('');
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
    if ((date === '2025-03-07' && activeWipe === 'springGame') || Object.keys(snap.play).length === 0) {
      tableSubtitle.textContent = 'Нажаль на сьогодні інформації нема, спробуй подивитися топ за минулий вайп.';
      rows = [];
    } else {
      tableSubtitle.textContent = `${dateLabel(date)} • Всього на сервері: ${formatCurrency(totalMoneyAtDate(date))}`;
      rows = Object.entries(snap.play).filter(([n]) => !isHiddenFromPlayLeaderboard(n, date)).map(([n, v]) => ({ name: n, value: v, click: () => showPlayerDetails(n), display: formatPlay(v) }));
    }
  } else if (view === 'clans') {
    tableTitle.textContent = 'Топ Кланів'; nameHeader.textContent = 'Клан'; valueHeader.textContent = 'Баланс клану';
    tableSubtitle.textContent = `Доступно з 22 лютого • ${dateLabel(date)} • Всього на сервері: ${formatCurrency(totalMoneyAtDate(date))}`;
    const visibleClans = Object.keys(clans).filter((c) => isClanActiveAtDate(c, date));
    rows = visibleClans.map((c) => ({ name: c, value: clanBalanceAtDate(c, date), click: () => showClanDetails(c), display: formatCurrency(clanBalanceAtDate(c, date)) }));
  } else if (view === 'donates') {
    tableTitle.textContent = 'Топ Донатів'; nameHeader.textContent = 'Група'; valueHeader.textContent = 'Баланс групи';
    tableSubtitle.textContent = `${dateLabel(date)} • Всього на сервері: ${formatCurrency(totalMoneyAtDate(date))}`;
    const groups = [...new Set(Object.keys(snap.players).map((p) => donationOfAtDate(p, date)))].filter((g) => g !== 'ADMIN');
    rows = groups.map((d) => ({ name: d, value: donationBalanceAtDate(d, date), click: () => showDonateDetails(d), display: formatCurrency(donationBalanceAtDate(d, date)) }));
  } else if (view === 'updates') {
    tableTitle.textContent = 'Оновлення сервера'; nameHeader.textContent = 'Етап'; valueHeader.textContent = 'Період';
    tableSubtitle.textContent = 'Натисни на етап для деталей';
    const ordered = [...serverUpdates].reverse();
    rows = ordered.map((u, i) => ({ name: u.title, value: ordered.length - i, click: () => showSingleUpdateDetails(u), display: u.period }));
  } else if (view === 'info') {
    tableTitle.textContent = 'Інформація'; nameHeader.textContent = 'Розділ'; valueHeader.textContent = 'Дані';
    tableSubtitle.textContent = 'Натисни на рядок для повної інформації';
    rows = [{ name: 'Про сайт', value: 1, click: () => showInfoDetails(), display: 'Контакти та посилання' }];
  } else if (view === 'content') {
    if (contentType === 'videos') {
      tableTitle.textContent = 'Контент • Відео'; nameHeader.textContent = 'Відео'; valueHeader.textContent = contentSort === 'views' ? 'Перегляди' : 'Лайки';
      tableSubtitle.textContent = `${contentPlatform === 'tiktok' ? 'TikTok' : 'YouTube'} • сортування: ${contentSort === 'views' ? 'за переглядами' : 'за лайками'}`;
      const videos = contentVideos
        .filter((v) => v.platform === contentPlatform)
        .sort((a, b) => (b[contentSort] || 0) - (a[contentSort] || 0));
      rows = videos.map((v) => ({
        name: v.title,
        value: v[contentSort] || 0,
        click: () => showContentVideoDetails(v),
        display: `${new Intl.NumberFormat('uk-UA').format(v[contentSort] || 0)}${contentSort === 'views' ? ' 👁' : ' ❤'}`,
      }));
    } else {
      tableTitle.textContent = 'Контент • Канали'; nameHeader.textContent = 'Канал'; valueHeader.textContent = contentPlatform === 'tiktok' ? 'Слідкувачі' : 'Підписники';
      tableSubtitle.textContent = `${contentPlatform === 'tiktok' ? 'TikTok' : 'YouTube'} • канали за кількістю підписників`;
      const channels = contentChannels
        .filter((c) => c.platform === contentPlatform)
        .sort((a, b) => b.followers - a.followers);
      rows = channels.map((c) => ({
        name: c.name,
        value: c.followers,
        click: () => showContentChannelDetails(c),
        display: `${new Intl.NumberFormat('uk-UA').format(c.followers)} ${c.label}`,
      }));
    }
  } else {
    tableTitle.textContent = 'ПвП'; nameHeader.textContent = 'ГРАВЕЦЬ'; valueHeader.textContent = 'WINRATE';
    tableSubtitle.textContent = 'ПвП статистика гравців';
    const pvpPlayers = [...new Set(pvpFights.flatMap((f) => [f.player1, f.player2]))];
    rows = pvpPlayers.map((player) => {
      const stats = playerPvpStats(player);
      return {
        name: player,
        value: stats.rate,
        click: () => showPvpDetails(),
        display: `${stats.rate}% (${stats.wins}-${stats.losses})`,
      };
    });
  }

  setDateSelectVisibility();
  setWipeSelectVisibility();
  setContentControlsVisible(view === 'content');
  if (view === 'content') syncContentControlButtons();
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
    if (selected.type === 'content-video') {
      const [platform, title] = selected.id.split('::');
      const video = contentVideos.find((v) => v.platform === platform && v.title === title);
      if (video) showContentVideoDetails(video);
    }
    if (selected.type === 'content-channel') {
      const [platform, name] = selected.id.split('::');
      const channel = contentChannels.find((c) => c.platform === platform && c.name === name);
      if (channel) showContentChannelDetails(channel);
    }
    if (selected.type === 'pvp') showPvpDetails();
  }
}

function init() {
  updateHeroSubtitle();
  refreshWipeSelect();
  refreshDateSelect();
  dateSelect.value = allowedDatesForView(view).at(-1) || latestDate;
  dateSelect.addEventListener('change', renderLeaderboard);
  wipeSelect.addEventListener('change', () => {
    activeWipe = wipeSelect.value;
    refreshWipeSelect();
    refreshDateSelect();
    selected = null;
    renderLeaderboard();
  });

  detailsWipeSelect.addEventListener('change', () => {
    renderLeaderboard();
  });

  openFullStatsBtn.addEventListener('click', () => {
    if (!selected || selected.type !== 'player') return;
    fullStatsWipeSelect.innerHTML = detailsWipeSelect.innerHTML;
    fullStatsWipeSelect.value = detailsWipeSelect.value;
    renderFullStatsModal(selected.id);
    fullStatsModal.classList.remove('hidden');
  });

  closeFullStatsBtn.addEventListener('click', () => fullStatsModal.classList.add('hidden'));
  fullStatsWipeSelect.addEventListener('change', () => { if (fullStatsPlayer) renderFullStatsModal(fullStatsPlayer); });
  fullStatsContentPlatform.addEventListener('change', () => { if (fullStatsPlayer) renderFullStatsModal(fullStatsPlayer); });


  contentPlatformTikTok.addEventListener('click', () => {
    contentPlatform = 'tiktok';
    selected = null;
    renderLeaderboard();
  });
  contentPlatformYouTube.addEventListener('click', () => {
    contentPlatform = 'youtube';
    selected = null;
    renderLeaderboard();
  });
  contentTypeVideos.addEventListener('click', () => {
    contentType = 'videos';
    selected = null;
    renderLeaderboard();
  });
  contentTypeChannels.addEventListener('click', () => {
    contentType = 'channels';
    selected = null;
    renderLeaderboard();
  });
  contentSortViews.addEventListener('click', () => {
    contentSort = 'views';
    selected = null;
    renderLeaderboard();
  });
  contentSortLikes.addEventListener('click', () => {
    contentSort = 'likes';
    selected = null;
    renderLeaderboard();
  });

  tabs.forEach((tab) => tab.addEventListener('click', () => {
    tabs.forEach((t) => t.classList.remove('active'));
    tab.classList.add('active');
    view = tab.dataset.view;
    if (view === 'pvp') {
      selected = { type: 'pvp', id: 'pvp' };
    } else if (view !== 'balance' && selected?.type === 'pvp') {
      selected = null;
    }
    refreshDateSelect();
    renderLeaderboard();
  }));

  renderLeaderboard();
}

init();
