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
  { date: '2025-03-14', players: { Vityappro11: 936432, Varenyk: 494136, treaforik: 418882, ForteCa228: 336032, Paolo_Fermer: 114089, Restioynik1: 102507, goiida11: 100929, TIKTOK_BMW_EDIT: 90298, XIN_jonu: 29573, illwix: 18335, Bear228: 34160, '07_YM': 11767, maksik_paksik7: 21000, Topix__: 7533, robot: 5722, ivan_strogo: 2057, ulquiorra2: 1589, dddooooppp: 1000, BEFF: 824, edazfetg4ooo: 701, lukyan187: 3022, hirtir: 352 }, play: { Vityappro11: 1040, edazfetg4ooo: 983, '07_YM': 841, Paolo_Fermer: 666, ForteCa228: 638, TIKTOK_BMW_EDIT: 602, treaforik: 115, maksik_paksik7: 1663 } },
  { date: '2025-03-15', players: { Vityappro11: 1001057, Varenyk: 518696, treaforik: 418882, ForteCa228: 336032, Paolo_Fermer: 126217, Restioynik1: 102507, goiida11: 100929, TIKTOK_BMW_EDIT: 90298, XIN_jonu: 29573, illwix: 18335, Bear228: 34160, '07_YM': 11737, maksik_paksik7: 21000, Topix__: 7533, robot: 5722, ivan_strogo: 2057, ulquiorra2: 1589, dddooooppp: 1000, BEFF: 824, edazfetg4ooo: 286, lukyan187: 3022, hirtir: 352 }, play: { Vityappro11: 1068, edazfetg4ooo: 1160, '07_YM': 922, Paolo_Fermer: 735, Varenyk: 269, ForteCa228: 638, TIKTOK_BMW_EDIT: 609, treaforik: 115, maksik_paksik7: 1663 } },
  { date: '2025-03-16', players: { Vityappro11: 965388, Varenyk: 518496, treaforik: 418882, ForteCa228: 336032, edazfetg4ooo: 201351, Paolo_Fermer: 104930, Restioynik1: 102507, goiida11: 100929, TIKTOK_BMW_EDIT: 90298, XIN_jonu: 29573, illwix: 18335, Bear228: 34160, Inzio_: 32150, '07_YM': 11737, maksik_paksik7: 21000, Topix__: 7533, robot: 5722, ivan_strogo: 2057, ulquiorra2: 1589, dddooooppp: 1000, BEFF: 824, lukyan187: 3022, hirtir: 352 }, play: { Vityappro11: 1131, edazfetg4ooo: 1240, '07_YM': 941, Paolo_Fermer: 773, Varenyk: 280, ForteCa228: 638, TIKTOK_BMW_EDIT: 609, treaforik: 115, maksik_paksik7: 1663 } },
  { date: '2025-03-17', players: { Vityappro11: 1072119, Varenyk: 518496, Inzio_: 476978, treaforik: 418882, ForteCa228: 336032, edazfetg4ooo: 201351, Restioynik1: 122507, Paolo_Fermer: 110932, goiida11: 100929, TIKTOK_BMW_EDIT: 90298, XIN_jonu: 29573, ulquiorra2: 26589, illwix: 18335, Bear228: 34160, '07_YM': 11737, maksik_paksik7: 21000, Topix__: 7533, robot: 5722, ivan_strogo: 2057, dddooooppp: 1000, BEFF: 824, lukyan187: 3022, hirtir: 352 }, play: { edazfetg4ooo: 1295, Vityappro11: 1223, '07_YM': 944, Paolo_Fermer: 911, Inzio_: 406, TIKTOK_BMW_EDIT: 609, Varenyk: 280, ForteCa228: 638, treaforik: 115, maksik_paksik7: 1663 } },
  { date: '2025-03-18', players: { Vityappro11: 1072119, Varenyk: 518496, Inzio_: 81613, treaforik: 418882, ForteCa228: 336032, edazfetg4ooo: 301291, Restioynik1: 122507, Paolo_Fermer: 16349, goiida11: 100929, TIKTOK_BMW_EDIT: 90298, XIN_jonu: 29573, ulquiorra2: 26589, illwix: 18335, Bear228: 34160, '07_YM': 11737, maksik_paksik7: 21000, Topix__: 7533, robot: 5722, ivan_strogo: 2057, dddooooppp: 1000, BEFF: 824, lukyan187: 3022, hirtir: 352, _ilovemygf_: 5000 }, play: { edazfetg4ooo: 1380, Vityappro11: 1223, Paolo_Fermer: 1051, '07_YM': 947, TIKTOK_BMW_EDIT: 655, Inzio_: 507, treaforik: 217, _ilovemygf_: 83, Varenyk: 280, ForteCa228: 638, maksik_paksik7: 1663 } },
  { date: '2025-03-20', players: { Vityappro11: 1223034, Varenyk: 518496, Inzio_: 858, treaforik: 418882, ForteCa228: 336032, edazfetg4ooo: 1000000, Restioynik1: 122507, Paolo_Fermer: 1000000, goiida11: 100929, TIKTOK_BMW_EDIT: 95298, XIN_jonu: 29573, ulquiorra2: 26589, illwix: 170404, Bear228: 34160, '07_YM': 136737, maksik_paksik7: 21000, Topix__: 7533, robot: 5722, ivan_strogo: 2057, dddooooppp: 1000, BEFF: 824, lukyan187: 3022, hirtir: 352, _ilovemygf_: 5000, piromanyakk: 98766, Xeyo_pa: 3000, Contik2: 1015 }, play: { edazfetg4ooo: 1640, Vityappro11: 1231, Paolo_Fermer: 1221, '07_YM': 1176, TIKTOK_BMW_EDIT: 673, Inzio_: 572, treaforik: 217, _ilovemygf_: 83, Varenyk: 319, ForteCa228: 638, maksik_paksik7: 1663 } },
  { date: '2025-03-23', players: { Vityappro11: 1348034, Varenyk: 518496, Inzio_: 71946, treaforik: 418882, ForteCa228: 445747, edazfetg4ooo: 758264, Restioynik1: 122507, Paolo_Fermer: 1000554, goiida11: 100929, TIKTOK_BMW_EDIT: 652666, XIN_jonu: 29573, ulquiorra2: 26589, illwix: 170404, Bear228: 34160, '07_YM': 136737, maksik_paksik7: 21000, Topix__: 7533, robot: 5722, ivan_strogo: 2057, dddooooppp: 1000, BEFF: 824, lukyan187: 3022, hirtir: 352, _ilovemygf_: 6000, piromanyakk: 98766, Xeyo_pa: 150925, Contik2: 1015, FairDemonYT: 17300, MrTop: 13648, '05LONE12': 10000, ggjexik: 5000, tvih098: 4360, belui228: 1000, Inzik2__: 1000, bubkababka: 1000 }, play: { edazfetg4ooo: 1967, Vityappro11: 1239, Paolo_Fermer: 1231, '07_YM': 1184, ForteCa228: 915, TIKTOK_BMW_EDIT: 952, Inzio_: 746, treaforik: 217, _ilovemygf_: 83, Varenyk: 319, maksik_paksik7: 1663 } },
  { date: '2025-03-24', players: { Vityappro11: 1398034, Varenyk: 518496, Inzio_: 71946, treaforik: 318882, ForteCa228: 663747, edazfetg4ooo: 758264, Restioynik1: 122507, Paolo_Fermer: 1000554, goiida11: 100929, TIKTOK_BMW_EDIT: 653284, XIN_jonu: 29573, ulquiorra2: 26589, illwix: 13385, Bear228: 34160, '07_YM': 136737, maksik_paksik7: 21000, Topix__: 7533, robot: 5722, ivan_strogo: 2057, dddooooppp: 1000, BEFF: 824, lukyan187: 3022, hirtir: 352, _ilovemygf_: 6000, piromanyakk: 98766, Xeyo_pa: 107342, Contik2: 1015, FairDemonYT: 79493, MrTop: 13648, '05LONE12': 10000, ggjexik: 5000, tvih098: 4360, belui228: 1000, Inzik2__: 1000, bubkababka: 1000, rofler: 25000, SKAM3000: 1000, hipoma: 97 }, play: { edazfetg4ooo: 1967, Paolo_Fermer: 1247, Vityappro11: 1244, '07_YM': 1189, ForteCa228: 1144, TIKTOK_BMW_EDIT: 952, Inzio_: 746, Xeyo_pa: 367, treaforik: 217, _ilovemygf_: 83, Varenyk: 319, maksik_paksik7: 1663 } },
  { date: '2025-03-25', players: { Vityappro11: 2052336, Varenyk: 518496, Inzio_: 71946, treaforik: 7558, ForteCa228: 913747, edazfetg4ooo: 758264, Restioynik1: 122507, Paolo_Fermer: 1000554, goiida11: 100929, TIKTOK_BMW_EDIT: 653284, XIN_jonu: 29573, ulquiorra2: 26589, illwix: 13385, Bear228: 34160, '07_YM': 136737, maksik_paksik7: 21000, Topix__: 7533, robot: 5722, ivan_strogo: 2057, dddooooppp: 1000, BEFF: 824, lukyan187: 3022, hirtir: 352, _ilovemygf_: 6000, piromanyakk: 98766, Xeyo_pa: 107342, Contik2: 1015, FairDemonYT: 83203, MrTop: 13648, '05LONE12': 10000, ggjexik: 5000, tvih098: 4360, belui228: 1000, Inzik2__: 1000, bubkababka: 1000, rofler: 25000, SKAM3000: 1000, hipoma: 97, gord: 16783, Zipdak: 1 }, play: { edazfetg4ooo: 1967, Paolo_Fermer: 1247, Vityappro11: 1432, '07_YM': 1195, ForteCa228: 1242, TIKTOK_BMW_EDIT: 952, Inzio_: 746, Xeyo_pa: 367, FairDemonYT: 530, treaforik: 217, _ilovemygf_: 83, Varenyk: 319, maksik_paksik7: 1663 } },
  { date: '2025-03-26', players: { Vityappro11: 2102353, Varenyk: 518496, Inzio_: 71946, treaforik: 7558, ForteCa228: 933747, edazfetg4ooo: 758264, Restioynik1: 122507, Paolo_Fermer: 1000554, goiida11: 100929, TIKTOK_BMW_EDIT: 603562, XIN_jonu: 29573, ulquiorra2: 26589, illwix: 13385, Bear228: 34160, '07_YM': 136737, maksik_paksik7: 21000, Topix__: 7533, robot: 5722, ivan_strogo: 2057, dddooooppp: 1000, BEFF: 824, lukyan187: 3022, hirtir: 352, _ilovemygf_: 6000, piromanyakk: 98766, Xeyo_pa: 107342, Contik2: 1015, FairDemonYT: 83203, MrTop: 14794, '05LONE12': 10000, ggjexik: 5000, tvih098: 4360, belui228: 1000, Inzik2__: 1000, bubkababka: 1000, rofler: 25000, SKAM3000: 1000, hipoma: 97, gord: 16783, Zipdak: 1, Mantraktar: 10000 }, play: { edazfetg4ooo: 1967, Paolo_Fermer: 1247, Vityappro11: 1477, '07_YM': 1203, ForteCa228: 1277, TIKTOK_BMW_EDIT: 966, Inzio_: 746, Xeyo_pa: 367, FairDemonYT: 542, treaforik: 217, _ilovemygf_: 83, Varenyk: 319, maksik_paksik7: 1663 } },
  { date: '2025-03-27', players: { Vityappro11: 2103323, Varenyk: 518496, Inzio_: 71946, treaforik: 7558, ForteCa228: 933747, edazfetg4ooo: 758264, Restioynik1: 122507, Paolo_Fermer: 1000554, goiida11: 100929, TIKTOK_BMW_EDIT: 603562, XIN_jonu: 29573, ulquiorra2: 26589, illwix: 13385, Bear228: 34160, '07_YM': 136737, maksik_paksik7: 21000, Topix__: 7533, robot: 5722, ivan_strogo: 2057, dddooooppp: 1000, BEFF: 824, lukyan187: 3022, hirtir: 352, _ilovemygf_: 6000, piromanyakk: 98766, Xeyo_pa: 107342, Contik2: 1015, FairDemonYT: 83203, MrTop: 14794, '05LONE12': 10000, ggjexik: 5000, tvih098: 4360, belui228: 1000, Inzik2__: 1000, bubkababka: 1000, rofler: 25000, SKAM3000: 1000, hipoma: 97, gord: 16783, Zipdak: 1, Mantraktar: 10000 }, play: { edazfetg4ooo: 1967, Paolo_Fermer: 1247, Vityappro11: 1491, '07_YM': 1203, ForteCa228: 1307, TIKTOK_BMW_EDIT: 966, Inzio_: 746, Xeyo_pa: 367, FairDemonYT: 542, treaforik: 217, _ilovemygf_: 83, Varenyk: 319, maksik_paksik7: 1663 } },
  { date: '2025-03-28', players: { Vityappro11: 3763324, Varenyk: 524496, Inzio_: 71946, treaforik: 7558, ForteCa228: 1133747, edazfetg4ooo: 758264, Restioynik1: 122507, Paolo_Fermer: 1000447, goiida11: 100929, TIKTOK_BMW_EDIT: 603562, XIN_jonu: 29573, ulquiorra2: 26589, illwix: 13385, Bear228: 34160, '07_YM': 151737, maksik_paksik7: 21000, Topix__: 7533, robot: 5722, ivan_strogo: 2057, dddooooppp: 1000, BEFF: 824, lukyan187: 3022, hirtir: 352, _ilovemygf_: 6000, piromanyakk: 98766, Xeyo_pa: 107342, Contik2: 1015, FairDemonYT: 83203, MrTop: 14794, '05LONE12': 10000, ggjexik: 5000, tvih098: 4360, belui228: 1000, Inzik2__: 1000, bubkababka: 1000, rofler: 25000, SKAM3000: 1000, hipoma: 97, gord: 16783, Zipdak: 1, Mantraktar: 10000 }, play: { edazfetg4ooo: 1967, Paolo_Fermer: 1247, Vityappro11: 1491, '07_YM': 1203, ForteCa228: 1307, TIKTOK_BMW_EDIT: 966, Inzio_: 746, Xeyo_pa: 367, FairDemonYT: 542, treaforik: 217, _ilovemygf_: 83, Varenyk: 319, maksik_paksik7: 1663 } },
  { date: '2025-03-31', players: { Vityappro11: 41171, shurik_xx19: 26000, gord: 21000, ItzFrillz: 7000, edazfetg4ooo: 1549, '07_YM': 314, lukyan187: 69 }, play: {} },
  { date: '2025-04-01', players: { Vityappro11: 51171, shurik_xx19: 26000, Paolo_Fermer: 10000, ItzFrillz: 7000, edazfetg4ooo: 5091, gord: 1710, '07_YM': 314, lukyan187: 69 }, play: {} },
  { date: '2025-04-02', players: { edazfetg4ooo: 127573, Vityappro11: 72875, shurik_xx19: 26000, piromanyakk: 20000, Paolo_Fermer: 19472, ItzFrillz: 7000, gord: 1710, '07_YM': 314, lukyan187: 69 }, play: {} },
  { date: '2025-04-03', players: { edazfetg4ooo: 127689, Vityappro11: 73480, shurik_xx19: 26000, piromanyakk: 20000, Paolo_Fermer: 19472, ItzFrillz: 7000, gord: 1710, '07_YM': 314, '30FPS': 426, aniqum: 69, lukyan187: 69 }, play: { edazfetg4ooo: 435, Vityappro11: 415, ForteCa228: 241, '07_YM': 181 } },
  { date: '2025-04-04', players: { Vityappro11: 455245, ForteCa228: 432685, edazfetg4ooo: 129867, shurik_xx19: 46000, piromanyakk: 40000, treaforik: 40000, Paolo_Fermer: 39472, ItzFrillz: 27000, gord: 26710, lukyan187: 26276, Varenyk: 25605, aetu: 21000, '30FPS': 20426, '07_YM': 20314, aniqum: 20069 }, play: { ForteCa228: 654, Vityappro11: 496, edazfetg4ooo: 440, '07_YM': 181, gord: 136 } },
  { date: '2025-04-05', players: { Vityappro11: 933426, ForteCa228: 731400, Varenyk: 391566, Paolo_Fermer: 203192, Inzio_: 74000, shurik_xx19: 46000, piromanyakk: 40000, treaforik: 40000, galavastik: 33950, ItzFrillz: 27000, gord: 26710, lukyan187: 26276, '30FPS': 20426, '07_YM': 20314, aniqum: 20069, aetu: 16072, edazfetg4ooo: 7576, wontz: 6000, aboba2032: 5000, masloprosto: 1000 }, play: { ForteCa228: 1006, Vityappro11: 759, edazfetg4ooo: 493, Varenyk: 414, galavastik: 355, '07_YM': 216, gord: 136 } },
  { date: '2025-04-06', players: { ForteCa228: 1348313, Vityappro11: 1098496, Paolo_Fermer: 125477, Varenyk: 228979, Inzio_: 124000, fakemed1: 61175, walleb0y: 53864, shurik_xx19: 46000, piromanyakk: 40000, treaforik: 40000, galavastik: 38950, ItzFrillz: 27000, gord: 26710, lukyan187: 26276, '30FPS': 20426, '07_YM': 20314, aniqum: 20069, aetu: 16072, aboba2032: 10000, IlyaiyaYT: 6006, masloprosto: 6000, edazfetg4ooo: 3546, wontz: 2683, dima111p: 1000, zxcnotezxc1: 1000, PixelReaper1337: 461 }, play: { ForteCa228: 1212, Vityappro11: 813, Varenyk: 637, galavastik: 538, edazfetg4ooo: 536, PixelReaper1337: 335, walleb0y: 320, aboba2032: 270, '07_YM': 216, gord: 136 } },
  { date: '2025-04-08', players: { ForteCa228: 1657851, Vityappro11: 1456770, Varenyk: 832867, Paolo_Fermer: 324149, edazfetg4ooo: 310135, Inzio_: 24000, fakemed1: 179212, Genderpatty_2: 95000, PixelReaper1337: 64495, walleb0y: 52226, shurik_xx19: 46000, piromanyakk: 40000, galavastik: 38950, ItzFrillz: 27000, gord: 26710, lukyan187: 26276, '07_YM': 23265, aetu: 16072, treaforik: 1657, '30FPS': 20426, aniqum: 20069, aboba2032: 10000, IlyaiyaYT: 6006, masloprosto: 6000, wontz: 2683, dima111p: 1000, zxcnotezxc1: 1000 }, play: { ForteCa228: 1464, fakemed1: 1087, PixelReaper1337: 898, Vityappro11: 859, Varenyk: 782, galavastik: 743, edazfetg4ooo: 731, walleb0y: 499, aboba2032: 468, '07_YM': 216, gord: 136 } },
  { date: '2025-04-09', players: { ForteCa228: 1657851, Vityappro11: 1536770, Varenyk: 832867, Paolo_Fermer: 305760, edazfetg4ooo: 189845, walleb0y: 123210, Genderpatty_2: 95000, lukyan187: 54784, PixelReaper1337: 54719, piromanyakk: 40000, galavastik: 38950, aetu: 36072, ItzFrillz: 27000, '07_YM': 24265, Inzio_: 24000, nag1bator11: 22080, CAT228sus1: 16842, treaforik: 15910, aboba2032: 10381, fakemed1: 7387, IlyaiyaYT: 6006, masloprosto: 6000, nag1bator12: 5000, shurik_xx19: 46000, gord: 26710, '30FPS': 20426, aniqum: 20069, wontz: 2683, dima111p: 1000, zxcnotezxc1: 1000, superholik: 1000 }, play: { fakemed1: 1526, ForteCa228: 1464, PixelReaper1337: 977, edazfetg4ooo: 883, Vityappro11: 859, galavastik: 804, Varenyk: 782, walleb0y: 742, aboba2032: 639, '07_YM': 216, gord: 136 } },
  { date: '2025-04-10', players: { ForteCa228: 1657851, Vityappro11: 1536770, Varenyk: 832867, nag1bator12: 381792, Paolo_Fermer: 175478, walleb0y: 123210, Genderpatty_2: 95000, CAT228sus1: 58115, lukyan187: 57176, PixelReaper1337: 54719, piromanyakk: 40000, galavastik: 38950, edazfetg4ooo: 35425, ItzFrillz: 27000, Inzio_: 25540, '07_YM': 24265, aetu: 36072, aboba2032: 13679, treaforik: 8923, Xeyo_pa: 8869, IlyaiyaYT: 6006, masloprosto: 6000, zxcnotezxc1: 3584, wontz: 2683, fakemed1: 1590, dima111p: 1000, superholik: 1000, night_850: 1000, nag1bator11: 1, shurik_xx19: 46000, gord: 26710, '30FPS': 20426, aniqum: 20069 }, play: { fakemed1: 1742, ForteCa228: 1464, edazfetg4ooo: 1007, PixelReaper1337: 977, Vityappro11: 859, galavastik: 804, Varenyk: 800, walleb0y: 742, aboba2032: 639, '07_YM': 216, gord: 136 } },
  { date: '2025-04-11', players: { Vityappro11: 2019433, ForteCa228: 1702920, Varenyk: 832867, nag1bator12: 729824, collected: 432165, Paolo_Fermer: 175478, Inzio_: 171540, walleb0y: 123210, treaforik: 97907, Genderpatty_2: 95000, zxcnotezxc1: 82732, Craz1k: 60142, night_850: 58665, CAT228sus1: 58115, PixelReaper1337: 54719, edazfetg4ooo: 53506, shurik_xx19: 46000, piromanyakk: 40000, galavastik: 38950, aetu: 36072, ItzFrillz: 27000, lukyan187: 24614, '07_YM': 24265, '30FPS': 20426, aniqum: 20069, aboba2032: 6897, zxcnotezxc: 6737, IlyaiyaYT: 6006, masloprosto: 6000, Xeyo_pa: 8869, wontz: 2683, gord: 11550, fakemed1: 10274, dima111p: 1000, superholik: 1000, maun3914: 1000, nag1bator11: 1 }, play: { fakemed1: 2165, ForteCa228: 1622, Vityappro11: 1161, edazfetg4ooo: 1144, nag1bator12: 1131, PixelReaper1337: 977, aboba2032: 825, galavastik: 804, Varenyk: 804, walleb0y: 742, '07_YM': 216, gord: 136 } },
  { date: '2025-04-12', players: { Vityappro11: 2129912, ForteCa228: 1784890, Varenyk: 882867, nag1bator12: 819824, Nazarius6: 621000, collected: 432165, zxcnotezxc1: 332732, Paolo_Fermer: 286089, walleb0y: 173210, Inzio_: 6767, fakemed1: 160274, Genderpatty_2: 145000, allcash: 138253, edazfetg4ooo: 113008, Craz1k: 110142, night_850: 108665, CAT228sus1: 108115, DarkPuma69: 106000, PixelReaper1337: 104719, shurik_xx19: 96000, piromanyakk: 90000, galavastik: 88950, aetu: 86072, '07_YM': 79352, ItzFrillz: 77000, IlyaiyaYT: 76006, lukyan187: 74614, wontz: 72683, '30FPS': 70426, aniqum: 70069, gord: 61550, treaforik: 32295, Xeyo_pa: 58869, aboba2032: 56897, zxcnotezxc: 56737, masloprosto: 56000, dima111p: 51000, superholik: 51000, maun3914: 51000, nag1bator11: 50001 }, play: { fakemed1: 2262, ForteCa228: 1955, Vityappro11: 1228, nag1bator12: 1203, edazfetg4ooo: 1172, PixelReaper1337: 977, aboba2032: 862, galavastik: 804, Varenyk: 804, walleb0y: 742, '07_YM': 216, gord: 136 } },
  { date: '2025-04-13', players: { Vityappro11: 2258463, ForteCa228: 1788872, collected: 596946, nag1bator12: 915484, zxcnotezxc1: 452732, Paolo_Fermer: 254089, fakemed1: 207774, aboba2032: 191897, walleb0y: 173210, allcash: 158253, edazfetg4ooo: 146844, Genderpatty_2: 145000, Craz1k: 110142, night_850: 108665, CAT228sus1: 108115, DarkPuma69: 106000, PixelReaper1337: 104719, shurik_xx19: 96000, piromanyakk: 90000, galavastik: 88950, aetu: 86123, lukyan187: 84614, '07_YM': 79352, ItzFrillz: 77000, IlyaiyaYT: 76006, wontz: 26751, '30FPS': 70426, aniqum: 70069, gord: 61550, Varenyk: 882867, Xeyo_pa: 58869, zxcnotezxc: 56737, masloprosto: 56000, dima111p: 51000, superholik: 51000, maun3914: 51000, nag1bator11: 50001, mykolanos: 42407, CDmDqjjk: 6668, Inzio_: 4267 }, play: { fakemed1: 2624, ForteCa228: 2413, nag1bator12: 1579, edazfetg4ooo: 1510, Vityappro11: 1416, Inzio_: 1296, PixelReaper1337: 977, aboba2032: 879, galavastik: 804, Varenyk: 804, walleb0y: 742, '07_YM': 216 } },
  { date: '2025-04-14', players: { Vityappro11: 2410204, ForteCa228: 1808872, nag1bator12: 935484, Varenyk: 932867, collected: 597946, zxcnotezxc1: 452732, Paolo_Fermer: 254089, fakemed1: 227774, aboba2032: 191897, walleb0y: 173210, allcash: 158253, edazfetg4ooo: 131844, Genderpatty_2: 145000, Craz1k: 110142, night_850: 108665, CAT228sus1: 108115, DarkPuma69: 106000, PixelReaper1337: 104719, '07_YM': 99352, shurik_xx19: 96000, piromanyakk: 90000, galavastik: 88950, aetu: 86123, lukyan187: 84614, ItzFrillz: 77000, IlyaiyaYT: 76006, '05LONE12': 71000, wontz: 26751, '30FPS': 70426, aniqum: 70069, gord: 61550, Xeyo_pa: 58869, zxcnotezxc: 56737, masloprosto: 56000, dima111p: 51000, superholik: 51000, maun3914: 51000, nag1bator11: 50001, CherryKira: 36613, mykolanos: 1108, Inzio_: 17347, CDmDqjjk: 6668, Nightpiers: 1000, Its_NaiferRbx: 1000 }, play: { fakemed1: 2706, ForteCa228: 2487, edazfetg4ooo: 1774, nag1bator12: 1675, Vityappro11: 1600, Inzio_: 1333, PixelReaper1337: 977, Varenyk: 915, aboba2032: 896, galavastik: 804, walleb0y: 742, '07_YM': 216 } },
  { date: '2025-04-15', players: { Vityappro11: 2410875, ForteCa228: 1808872, nag1bator12: 935484, Varenyk: 932867, collected: 597946, zxcnotezxc1: 452732, Paolo_Fermer: 254089, fakemed1: 247774, aboba2032: 191897, walleb0y: 173210, allcash: 158253, edazfetg4ooo: 133196, Genderpatty_2: 145000, Craz1k: 110142, night_850: 108665, CAT228sus1: 108115, DarkPuma69: 106000, PixelReaper1337: 104719, '07_YM': 99352, shurik_xx19: 96000, piromanyakk: 90000, galavastik: 88950, aetu: 86123, lukyan187: 84614, ItzFrillz: 77000, IlyaiyaYT: 76006, '05LONE12': 71000, wontz: 26751, '30FPS': 70426, aniqum: 70069, gord: 61550, Xeyo_pa: 58869, zxcnotezxc: 56737, masloprosto: 56000, dima111p: 51000, superholik: 51000, maun3914: 51000, nag1bator11: 50001, CherryKira: 46613, mykolanos: 1108, Inzio_: 17347, handbloood: 26000, Couldmind: 6568, Kira: 2216, CDmDqjjk: 6668, Nightpiers: 1000, Its_NaiferRbx: 1000, XdeadForMatvij41: 1000 }, play: { fakemed1: 2725, ForteCa228: 2538, edazfetg4ooo: 1804, Vityappro11: 1694, nag1bator12: 1679, Inzio_: 1333, Varenyk: 999, PixelReaper1337: 977, aboba2032: 896, galavastik: 804, walleb0y: 742, '07_YM': 216 } },
  { date: '2025-04-16', players: { Vityappro11: 2441192, ForteCa228: 1808872, nag1bator12: 925484, Varenyk: 933121, collected: 597946, zxcnotezxc1: 452732, Paolo_Fermer: 212236, fakemed1: 232150, aboba2032: 191897, walleb0y: 173210, allcash: 158253, edazfetg4ooo: 374332, Genderpatty_2: 145000, Craz1k: 110142, night_850: 108665, CAT228sus1: 108115, DarkPuma69: 106000, PixelReaper1337: 104719, '07_YM': 99352, Inzio_: 98447, shurik_xx19: 96000, galavastik: 88950, aetu: 86123, lukyan187: 84614, ItzFrillz: 77000, IlyaiyaYT: 76006, '05LONE12': 71000, '30FPS': 70426, aniqum: 70069, gord: 61550, Xeyo_pa: 58869, zxcnotezxc: 56737, masloprosto: 56000, Kira: 52187, dima111p: 51000, superholik: 51000, maun3914: 51000, nag1bator11: 50001, piromanyakk: 46418, CherryKira: 36613, BobrKyrba: 34847, handbloood: 1506, mykolanos: 1108, XdeadForMatvij41: 11000, Couldmind: 3576, CDmDqjjk: 6668, Nightpiers: 1000 }, play: { fakemed1: 2753, ForteCa228: 2563, edazfetg4ooo: 2016, Vityappro11: 1846, nag1bator12: 1813, Inzio_: 1333, Varenyk: 1067, Paolo_Fermer: 1013, PixelReaper1337: 977, aboba2032: 896, galavastik: 804, walleb0y: 742, '07_YM': 216 } },
  { date: '2025-04-17', players: { Vityappro11: 2479310, ForteCa228: 1810137, nag1bator12: 925484, Varenyk: 933121, collected: 597946, zxcnotezxc1: 452732, edazfetg4ooo: 430332, fakemed: 400000, fakemed1: 19150, Paolo_Fermer: 227236, aboba2032: 192147, walleb0y: 173210, allcash: 158253, Genderpatty_2: 145000, Craz1k: 110142, night_850: 108665, CAT228sus1: 108115, DarkPuma69: 106000, PixelReaper1337: 104719, '07_YM': 99352, shurik_xx19: 96000, galavastik: 88950, BobrKyrba: 87622, lukyan187: 84614, ItzFrillz: 77000, IlyaiyaYT: 76006, '30FPS': 70426, aniqum: 70069, gord: 61550, Xeyo_pa: 58869, zxcnotezxc: 56737, masloprosto: 56000, Kira: 52187, dima111p: 51000, superholik: 51000, maun3914: 51000, nag1bator11: 50001, piromanyakk: 46418, CherryKira: 36613, kasikm1: 31000, mykolanos: 14708, XdeadForMatvij41: 11000, aetu: 123, wontz: 6751, Couldmind: 20966, CDmDqjjk: 6668, handbloood: 4505, Nazarius6: 4054, '05LONE12': 2490, Its_NaiferRbx: 1000, Nightpiers: 1000, Stasichpek1: 1000, gorillaspidran: 1000, treaforik: 295, Inzio_: 254, f1hanom: 29 }, play: { fakemed1: 2789, ForteCa228: 2596, Vityappro11: 2063, Inzio_: 2056, edazfetg4ooo: 2024, nag1bator12: 1822, Varenyk: 1067, Paolo_Fermer: 1013, PixelReaper1337: 977, aboba2032: 896, galavastik: 804, walleb0y: 742, '07_YM': 216 } },
  { date: '2025-04-18', players: { Vityappro11: 2624695, ForteCa228: 2030137, Varenyk: 1173121, nag1bator12: 1095484, edazfetg4ooo: 497332, fakemed: 487500, zxcnotezxc1: 402732, aboba2032: 377647, Couldmind: 272186, handbloood: 254505, Paolo_Fermer: 227236, collected: 597946, walleb0y: 173210, Famt1ok: 156849, allcash: 158253, Genderpatty_2: 145000, Craz1k: 110142, night_850: 108665, CAT228sus1: 108115, DarkPuma69: 106000, lukyan187: 104614, PixelReaper1337: 104719, '07_YM': 99352, shurik_xx19: 96000, galavastik: 88950, BobrKyrba: 88622, ItzFrillz: 77000, IlyaiyaYT: 76006, '30FPS': 70426, aniqum: 70069, gord: 61550, Xeyo_pa: 58869, zxcnotezxc: 56737, masloprosto: 56000, Kira: 52187, piromanyakk: 46418, nag1bator11: 40001, mykolanos: 35378, ddddddxxxx: 32000, kasikm1: 6000, CDmDqjjk: 6668, wontz: 2821, '05LONE12': 26462, fakemed1: 24150, Kolya: 23720, IgkOWWtW: 17344, XdeadForMatvij41: 11000, Nazarius6: 5054, aetu: 123, Its_NaiferRbx: 1000, Nightpiers: 1000, Stasichpek1: 1000, gorillaspidran: 1000, treaforik: 295, Inzio_: 2059, dima111p: 51000, superholik: 51000, maun3914: 51000, CherryKira: 36613, f1hanom: 29 }, play: { fakemed1: 2789, ForteCa228: 2732, Vityappro11: 2212, edazfetg4ooo: 2062, nag1bator12: 2049, Inzio_: 2048, Varenyk: 1159, aboba2032: 1040, Paolo_Fermer: 1013, PixelReaper1337: 977, galavastik: 804, walleb0y: 742, '07_YM': 216 } },
  { date: '2025-04-19', players: { Vityappro11: 2690628, ForteCa228: 2030137, Varenyk: 1173121, nag1bator12: 1095484, edazfetg4ooo: 502832, fakemed: 462500, zxcnotezxc1: 402732, Paolo_Fermer: 337334, aboba2032: 377647, Couldmind: 272186, handbloood: 254505, collected: 597946, walleb0y: 173210, Famt1ok: 132106, allcash: 158253, Genderpatty_2: 145000, Craz1k: 110142, night_850: 108665, CAT228sus1: 108115, DarkPuma69: 106000, lukyan187: 105028, PixelReaper1337: 104719, '07_YM': 99352, shurik_xx19: 96000, galavastik: 88950, BobrKyrba: 88622, ItzFrillz: 77000, IlyaiyaYT: 76006, '30FPS': 70426, aniqum: 70069, gord: 61550, Xeyo_pa: 58869, zxcnotezxc: 56737, masloprosto: 56000, Axolotl_Games: 51000, Kira: 52187, piromanyakk: 46418, nag1bator11: 40001, mykolanos: 35378, kasikm1: 37000, ddddddxxxx: 32000, '05LONE12': 19667, fakemed1: 24150, Kolya: 23720, IgkOWWtW: 9073, XdeadForMatvij41: 11000, toplik567: 8702, CDmDqjjk: 6668, coZoinkk: 6000, Nazarius6: 5054, wontz: 2821, Inzio_: 2059, Its_NaiferRbx: 1000, Nightpiers: 1000, Stasichpek1: 1000, gorillaspidran: 1000, Nalzy: 1000, frgc: 500, treaforik: 295, aetu: 123, dima111p: 51000, superholik: 51000, maun3914: 51000, CherryKira: 36613, f1hanom: 29 }, play: { fakemed1: 2789, ForteCa228: 2736, Inzio_: 2653, Vityappro11: 2344, nag1bator12: 2080, edazfetg4ooo: 2070, Varenyk: 1159, Paolo_Fermer: 1069, aboba2032: 1040, PixelReaper1337: 977, galavastik: 804, walleb0y: 742, '07_YM': 216 } },
  { date: '2025-04-20', players: { Vityappro11: 2733328, ForteCa228: 2030137, Varenyk: 1173121, nag1bator12: 1075484, zxcnotezxc1: 402732, Paolo_Fermer: 578440, aboba2032: 377647, Couldmind: 302186, Famt1ok: 266531, handbloood: 254505, collected: 597946, walleb0y: 173210, allcash: 158253, fakemed: 123500, Genderpatty_2: 145000, Craz1k: 110142, night_850: 108665, CAT228sus1: 108115, DarkPuma69: 106000, lukyan187: 105028, PixelReaper1337: 104719, '07_YM': 99352, shurik_xx19: 96000, galavastik: 88950, BobrKyrba: 88622, ItzFrillz: 77000, IlyaiyaYT: 76006, '30FPS': 70426, aniqum: 70069, gord: 61550, Xeyo_pa: 58869, zxcnotezxc: 56737, masloprosto: 56000, Kira: 52187, Axolotl_Games: 51000, piromanyakk: 46418, nag1bator11: 40001, towerpvpTT: 36000, kasikm1: 37000, mykolanos: 35690, ddddddxxxx: 29406, edazfetg4ooo: 20228, FairDemonYT: 20000, '05LONE12': 15356, fakemed1: 24150, Kolya: 23720, IgkOWWtW: 9073, XdeadForMatvij41: 11000, toplik567: 8702, CDmDqjjk: 6668, coZoinkk: 6000, Treaforj: 5000, Nazarius6: 5054, wontz: 2821, Inzio_: 2059, Its_NaiferRbx: 1000, Nightpiers: 1000, Stasichpek1: 1000, gorillaspidran: 1000, Nalzy: 1000, frgc: 500, treaforik: 295, aetu: 123, dima111p: 51000, superholik: 51000, maun3914: 51000, CherryKira: 36613, f1hanom: 29 }, play: { fakemed1: 2789, Inzio_: 2759, ForteCa228: 2736, Vityappro11: 2431, nag1bator12: 2160, edazfetg4ooo: 2101, Varenyk: 1159, Paolo_Fermer: 1112, aboba2032: 1040, PixelReaper1337: 977, galavastik: 804, walleb0y: 742, '07_YM': 216 } },
  { date: '2025-04-21', players: { Vityappro11: 2339828, ForteCa228: 2030376, nag1bator12: 1106362, fakemed: 993556, Nazarius6: 627054, Paolo_Fermer: 603440, Famt1ok: 419531, zxcnotezxc1: 402732, Couldmind: 312035, ddddddxxxx: 130795, Varenyk: 1173121, aboba2032: 377647, handbloood: 254505, collected: 946, walleb0y: 173210, allcash: 158253, Genderpatty_2: 145000, Craz1k: 110142, '07_YM': 109934, night_850: 108665, CAT228sus1: 108115, DarkPuma69: 106000, lukyan187: 105028, PixelReaper1337: 104719, shurik_xx19: 96000, galavastik: 88950, BobrKyrba: 88622, '05LONE12': 78247, ItzFrillz: 77000, IlyaiyaYT: 76006, '30FPS': 70426, aniqum: 70069, gord: 61550, Xeyo_pa: 58869, zxcnotezxc: 56737, masloprosto: 56000, Kira: 52187, Axolotl_Games: 51000, piromanyakk: 46418, nag1bator11: 40001, kasikm1: 37000, towerpvpTT: 36000, mykolanos: 2921, FairDemonYT: 20000, edazfetg4ooo: 19309, dima111p: 51000, superholik: 51000, maun3914: 51000, CherryKira: 36613, fakemed1: 24150, Kolya: 26720, coZoinkk: 26000, IgkOWWtW: 9073, XdeadForMatvij41: 11000, toplik567: 8702, CDmDqjjk: 6668, Treaforj: 5000, wontz: 2821, Inzio_: 2059, Its_NaiferRbx: 1000, Nightpiers: 1000, Stasichpek1: 1000, gorillaspidran: 1000, Nalzy: 6000, frgc: 500, treaforik: 295, aetu: 123, f1hanom: 29 }, play: { fakemed1: 2789, Inzio_: 3102, ForteCa228: 2775, Vityappro11: 2561, nag1bator12: 2381, edazfetg4ooo: 2123, Varenyk: 1169, Paolo_Fermer: 1131, aboba2032: 1040, PixelReaper1337: 977, galavastik: 804, walleb0y: 742, '07_YM': 216 } },
  { date: '2025-04-22', players: { Vityappro11: 2689828, ForteCa228: 1960376, nag1bator12: 1126362, Varenyk: 1173121, fakemed: 856156, Nazarius6: 627054, Paolo_Fermer: 503440, Famt1ok: 419531, zxcnotezxc1: 402732, aboba2032: 377647, Couldmind: 312035, handbloood: 254505, collected: 946, Kira: 192461, walleb0y: 173210, allcash: 158253, Genderpatty_2: 145000, Craz1k: 110142, '07_YM': 109934, night_850: 108665, CAT228sus1: 108115, edazfetg4ooo: 105515, DarkPuma69: 106000, lukyan187: 105028, PixelReaper1337: 104719, shurik_xx19: 96000, ddddddxxxx: 94794, BobrKyrba: 88622, '05LONE12': 86781, ItzFrillz: 77000, IlyaiyaYT: 76006, '30FPS': 70426, aniqum: 70069, gord: 61550, Xeyo_pa: 58869, zxcnotezxc: 56737, masloprosto: 56000, dima111p: 51000, superholik: 51000, maun3914: 51000, Axolotl_Games: 51000, piromanyakk: 46418, nag1bator11: 40001, kasikm1: 37000, towerpvpTT: 36000, Nalzy: 27509, coZoinkk: 26000, FairDemonYT: 20000, mykolanos: 17143, CherryKira: 197, fakemed1: 24150, Kolya: 26720, IgkOWWtW: 9073, XdeadForMatvij41: 11000, toplik567: 8702, CDmDqjjk: 6668, Treaforj: 5000, wontz: 2821, Inzio_: 2059, Its_NaiferRbx: 1000, Nightpiers: 1000, Stasichpek1: 1000, gorillaspidran: 1000, frgc: 500, treaforik: 295, aetu: 123, f1hanom: 29 }, play: { Inzio_: 3639, fakemed: 1567, mykolanos: 1305, fakemed1: 2789, ForteCa228: 2907, Vityappro11: 2561, nag1bator12: 2397, edazfetg4ooo: 2144, Varenyk: 1169, Paolo_Fermer: 1131, aboba2032: 1040, PixelReaper1337: 977, galavastik: 804, walleb0y: 742, '07_YM': 216 } },
  { date: '2025-04-25', players: { Vityappro11: 94940, '05LONE12': 36003, ForteCa228: 33511, '07_YM': 9350, Nightpiers: 6942, lukyan187: 6928, crystalsbyangel: 3146, ddddddxxxx: 1615, edazfetg4ooo: 872, nag1bator12: 634, Paolo_Fermer: 250, IlyaiyaYT: 16 }, play: { IlyaiyaYT: 500, Inzio_: 282, towerpvpTT: 235, ForteCa228: 111, Vityappro11: 100, '05LONE12': 93, lukyan187: 84, crystalsbyangel: 80, Nightpiers: 65 } },
  { date: '2025-04-27', players: { Vityappro11: 118367, Paolo_Fermer: 50250, ForteCa228: 49374, ddddddxxxx: 35178, aboba2032: 35000, '05LONE12': 29148, nag1bator12: 16863, fakemed: 13804, '07_YM': 9350, BobrKyrba: 7247, Nightpiers: 6942, lukyan187: 6928, crystalsbyangel: 3146, edazfetg4ooo: 872, Famt1ok: 303, Nazarius6: 1, IlyaiyaYT: 16 }, play: { IlyaiyaYT: 1694, ddddddxxxx: 770, nag1bator12: 768, ForteCa228: 664, '05LONE12': 484, towerpvpTT: 429, Vityappro11: 367, fakemed: 351, Inzio_: 282, lukyan187: 84, crystalsbyangel: 80, Nightpiers: 65 } },
  { date: '2025-04-28', players: { Vityappro11: 120627, ForteCa228: 50670, Paolo_Fermer: 50250, ddddddxxxx: 35178, aboba2032: 35000, nag1bator12: 22863, '05LONE12': 22148, fakemed: 14804, '07_YM': 9350, lukyan187: 7438, BobrKyrba: 7247, Nightpiers: 6942, crystalsbyangel: 3146, edazfetg4ooo: 872, Famt1ok: 303, IlyaiyaYT: 16, Nazarius6: 1 }, play: { IlyaiyaYT: 2127, ForteCa228: 774, ddddddxxxx: 770, nag1bator12: 768, towerpvpTT: 578, '05LONE12': 521, Vityappro11: 482, fakemed: 351, Inzio_: 282, lukyan187: 84, crystalsbyangel: 80, Nightpiers: 65 } },
  { date: '2025-04-29', players: { Vityappro11: 121555, ForteCa228: 51966, ddddddxxxx: 35178, crystalsbyangel: 45977, aboba2032: 35000, nag1bator12: 22863, '05LONE12': 15148, fakemed: 14804, Paolo_Fermer: 50250, '07_YM': 10315, lukyan187: 7693, BobrKyrba: 7247, Nightpiers: 6942, edazfetg4ooo: 872, Famt1ok: 303, IlyaiyaYT: 16, Nazarius6: 1 }, play: { IlyaiyaYT: 2515, ForteCa228: 774, towerpvpTT: 703, ddddddxxxx: 770, nag1bator12: 768, Vityappro11: 605, '05LONE12': 558, fakemed: 351, Inzio_: 282, lukyan187: 84, crystalsbyangel: 80, Nightpiers: 65 } },
  { date: '2025-04-30', players: { Vityappro11: 150523, ForteCa228: 50670, ddddddxxxx: 35178, crystalsbyangel: 45977, aboba2032: 35000, nag1bator12: 22863, '05LONE12': 22148, fakemed: 14804, Paolo_Fermer: 50250, Famt1ok: 14585, '07_YM': 10315, lukyan187: 7693, jtx_by: 7753, BobrKyrba: 7247, Nightpiers: 6942, edazfetg4ooo: 872, IlyaiyaYT: 16, Nazarius6: 1 }, play: { IlyaiyaYT: 2662, towerpvpTT: 863, ForteCa228: 774, ddddddxxxx: 770, nag1bator12: 768, Vityappro11: 716, '05LONE12': 558, fakemed: 351, Inzio_: 282, lukyan187: 84, crystalsbyangel: 80, Nightpiers: 65 } },
  { date: '2025-05-01', players: { Vityappro11: 152440, crystalsbyangel: 90000, ForteCa228: 50670, ddddddxxxx: 36477, aboba2032: 35000, nag1bator12: 22863, '05LONE12': 22148, fakemed: 14804, Paolo_Fermer: 50250, Famt1ok: 14585, '07_YM': 10315, lukyan187: 7693, jtx_by: 7753, BobrKyrba: 7247, Nightpiers: 6942, edazfetg4ooo: 872, IlyaiyaYT: 16, Nazarius6: 1 }, play: { IlyaiyaYT: 2857, towerpvpTT: 918, Vityappro11: 784, ForteCa228: 774, ddddddxxxx: 770, nag1bator12: 768, '05LONE12': 558, fakemed: 351, Inzio_: 282, lukyan187: 84, crystalsbyangel: 80, Nightpiers: 65 } },
  { date: '2025-05-04', players: { Vityappro11: 156940, crystalsbyangel: 90000, ForteCa228: 50670, ddddddxxxx: 36477, aboba2032: 35000, nag1bator12: 22863, '05LONE12': 15312, fakemed: 14804, Paolo_Fermer: 50250, Famt1ok: 14585, '07_YM': 10315, jtx_by: 7793, lukyan187: 7693, BobrKyrba: 7247, Nightpiers: 6942, Varenyk: 4297, Nazarius6: 3001, edazfetg4ooo: 872, IlyaiyaYT: 16 }, play: { IlyaiyaYT: 3445, Vityappro11: 1048, towerpvpTT: 950, ForteCa228: 816, ddddddxxxx: 770, nag1bator12: 768, '05LONE12': 583, Inzio_: 388, fakemed: 351, lukyan187: 84, crystalsbyangel: 80, Nightpiers: 65 } },
  { date: '2025-05-05', players: { Vityappro11: 179458, crystalsbyangel: 90000, ForteCa228: 50670, ddddddxxxx: 33477, aboba2032: 34500, nag1bator12: 22863, PashokWW: 16000, Paolo_Fermer: 50250, Famt1ok: 14585, jtx_by: 11293, '07_YM': 10315, '05LONE12': 10162, bobrik: 10000, lukyan187: 7693, BobrKyrba: 7247, Nightpiers: 6942, fakemed: 5054, Varenyk: 4297, Nazarius6: 3001, MrBober228228: 1031, edazfetg4ooo: 872, IlyaiyaYT: 16 }, play: { IlyaiyaYT: 3256, Vityappro11: 1057, towerpvpTT: 960, ForteCa228: 816, ddddddxxxx: 787, nag1bator12: 768, '05LONE12': 652, fakemed: 480, Inzio_: 388, lukyan187: 84, crystalsbyangel: 80, Nightpiers: 65 } },
  { date: '2025-05-06', players: { Vityappro11: 192777, crystalsbyangel: 90000, aboba2032: 59500, ForteCa228: 50670, Paolo_Fermer: 50250, ddddddxxxx: 33477, Famt1ok: 29585, jtx_by: 23793, nag1bator12: 22863, PashokWW: 16000, fakemed: 11054, '05LONE12': 10662, '07_YM': 10315, bobrik: 10000, BobrKyrba: 8017, lukyan187: 7693, Nightpiers: 6942, Varenyk: 4297, MrBober228228: 4032, Nazarius6: 3001, edazfetg4ooo: 872, IlyaiyaYT: 16 }, play: { IlyaiyaYT: 3315, Vityappro11: 1092, towerpvpTT: 961, ddddddxxxx: 850, ForteCa228: 816, nag1bator12: 770, '05LONE12': 747, fakemed: 480, Inzio_: 388, lukyan187: 84, crystalsbyangel: 80, Nightpiers: 65 } },
  { date: '2025-05-07', players: { Vityappro11: 245283, crystalsbyangel: 90000, aboba2032: 59500, ForteCa228: 50670, Paolo_Fermer: 50250, fakemed: 46084, Varenyk: 37932, ddddddxxxx: 33477, Famt1ok: 29585, jtx_by: 23793, nag1bator12: 22863, PashokWW: 16000, '05LONE12': 10662, '07_YM': 10315, bobrik: 10000, BobrKyrba: 8017, lukyan187: 7693, Nightpiers: 6942, MrBober228228: 4032, Nazarius6: 3001, edazfetg4ooo: 872, Couldmind: 175, IlyaiyaYT: 16 }, play: { IlyaiyaYT: 3320, Vityappro11: 1194, towerpvpTT: 989, ddddddxxxx: 876, '05LONE12': 850, ForteCa228: 820, nag1bator12: 770, fakemed: 703, Inzio_: 388, lukyan187: 84, crystalsbyangel: 80, Nightpiers: 65 } },
  { date: '2025-05-08', players: { Vityappro11: 311272, Varenyk: 107064, fakemed: 103438, crystalsbyangel: 100000, aboba2032: 69500, ForteCa228: 60670, Paolo_Fermer: 60250, PashokWW: 51000, ddddddxxxx: 43477, Famt1ok: 39585, jtx_by: 33793, nag1bator12: 32863, MrBober228228: 25701, '05LONE12': 22782, '07_YM': 20315, bobrik: 20000, BobrKyrba: 18017, lukyan187: 17693, Nightpiers: 16942, towerpvpTT: 15000, Nazarius6: 13001, Nazar3321: 10943, edazfetg4ooo: 10872, cat3no4bed5: 10472, ne_domer_igrok0: 10250, Couldmind: 10175, IlyaiyaYT: 16 }, play: { IlyaiyaYT: 3323, maksik_paksik7: 2157, Vityappro11: 1260, towerpvpTT: 1053, '05LONE12': 954, ddddddxxxx: 876, ForteCa228: 820, fakemed: 809, nag1bator12: 770, handbloood: 753, Inzio_: 388, lukyan187: 84, crystalsbyangel: 80, Nightpiers: 65 } },
];

const donationByPlayer = {
  SIGMA: 'гравець', BEFF: 'гравець', kostya2103: 'гравець', maksyarosh: 'гравець', lukyan187: 'debryli',
  ForteCa228: 'keerinam', edazfetg4ooo: 'keerinam', aboba2032: 'keerinam',
  Vityappro11: 'debryli', Varenyk: 'debryli', treaforik: 'debryli', 'wontz': 'debryli', Vortex1k: 'debryli', hipoma: 'debryli',
  kasikm1: 'NINJA', jtx_by: 'GOD', Paolo_Fermer: 'GOD', kampys231231: 'GOD', FairDemonYT: 'moder', towerpvpTT: 'MODER',
  '07_YM': 'status', '05LONE12': 'debryli', shurik_xx19: 'status', nag1bator12: 'MEDIA',
  TIKTOK_BMW_EDIT: 'CONTENT', robot: 'гравець', Xeyo_pa: 'keerinam', Inzio_: 'TEX_ADMIN',
  maksik_paksik7: 'ADMIN', PravyiNosok777: 'ADMIN', aetu: 'status', fakemed1: 'debryli', IlyaiyaYT: 'TEX_ADMIN',
  walleb0y: 'status', PixelReaper1337: 'status', fakemed: 'debryli', zxcnotezxc1: 'status', piromanyakk: 'prista', crystalsbyangel: 'debryli', Couldmind: 'status', BobrKyrba: 'status', ne_domer_igrok0: 'keerinam'
};

const donationHistoryByPlayer = {
  // Можна додавати будь-якого гравця з датами зміни донату
  treaforik: [
    { from: '2025-02-21', donation: 'гравець' },
    { from: '2025-02-27', donation: 'debryli' },
    { from: '2025-03-24', donation: 'moder' },
  ],
  kasikm1: [
    { from: '2025-02-21', donation: 'GOD' },
    { from: '2025-04-17', donation: 'keerinam' },
    { from: '2025-04-18', donation: 'NINJA' },
  ],
  Vityappro11: [
    { from: '2025-02-21', donation: 'debryli' },
    { from: '2025-03-05', donation: 'GOD' },
    { from: '2025-03-08', donation: 'CONTENT' },
  ],
  ForteCa228: [
    { from: '2025-02-21', donation: 'keerinam' },
    { from: '2025-03-08', donation: 'DM+' },
    { from: '2025-03-31', donation: 'NINJA' },
  ],
  edazfetg4ooo: [
    { from: '2025-02-21', donation: 'keerinam' },
    { from: '2025-03-05', donation: 'prista' },
    { from: '2025-03-08', donation: 'DM+' },
    { from: '2025-03-31', donation: 'NINJA' },
  ],
  '07_YM': [
    { from: '2025-02-21', donation: 'status' },
    { from: '2025-03-10', donation: 'prista' },
    { from: '2025-04-08', donation: 'GOD' },
  ],
  FairDemonYT: [
    { from: '2025-02-21', donation: 'GOD' },
    { from: '2025-03-24', donation: 'moder' },
  ],
  shurik_xx19: [
    { from: '2025-03-31', donation: 'status' },
  ],
  lukyan187: [
    { from: '2025-02-21', donation: 'status' },
    { from: '2025-04-25', donation: 'debryli' },
  ],
  aetu: [
    { from: '2025-04-05', donation: 'status' },
  ],
  aboba2032: [
    { from: '2025-02-21', donation: 'keerinam' },
    { from: '2025-04-06', donation: 'prista' },
    { from: '2025-04-11', donation: 'DM+' },
  ],
  collected: [
    { from: '2025-04-11', donation: 'status' },
  ],
  Craz1k: [
    { from: '2025-04-11', donation: 'debryli' },
  ],
  Nazarius6: [
    { from: '2025-04-12', donation: 'status' },
  ],
  allcash: [
    { from: '2025-04-13', donation: 'prista' },
  ],
  TIKTOK_BMW_EDIT: [
    { from: '2025-03-08', donation: 'CONTENT' },
    { from: '2025-04-14', donation: 'гравець' },
  ],
  handbloood: [
    { from: '2025-04-15', donation: 'moder' },
    { from: '2025-04-27', donation: 'ADMIN' },
  ],
  mykolanos: [
    { from: '2025-04-13', donation: 'гравець' },
    { from: '2025-04-15', donation: 'prista' },
  ],
  IlyaiyaYT: [
    { from: '2025-04-25', donation: 'TEX_ADMIN' },
  ],
  crystalsbyangel: [
    { from: '2025-04-29', donation: 'debryli' },
  ],
  ddddddxxxx: [
    { from: '2025-04-18', donation: 'status' },
  ],
  Famt1ok: [
    { from: '2025-04-18', donation: 'status' },
  ],
  towerpvpTT: [
    { from: '2025-04-20', donation: 'MEDIA' },
    { from: '2025-04-27', donation: 'moder' },
  ],
  nag1bator12: [
    { from: '2025-04-10', donation: 'status' },
    { from: '2025-04-21', donation: 'MEDIA' },
  ],
  fakemed: [
    { from: '2025-02-21', donation: 'debryli' },
  ],
  zxcnotezxc1: [
    { from: '2025-02-21', donation: 'status' },
  ],
  piromanyakk: [
    { from: '2025-04-05', donation: 'prista' },
  ],
  '05LONE12': [
    { from: '2025-02-21', donation: 'status' },
    { from: '2025-04-19', donation: 'debryli' },
  ],
};

const clans = {
  Vitya: {
    createdAt: '2025-02-22',
    deletedAt: '2025-04-12',
    events: [
      { date: '2025-02-22', player: 'Vityappro11', role: 'leader', action: 'join' },
      { date: '2025-02-25', player: 'lukyan187', role: 'senior', action: 'join' },
      { date: '2025-02-26', player: 'SIGMA', role: 'senior', action: 'join' },
      { date: '2025-03-07', player: 'lukyan187', role: 'senior', action: 'leave' },
      { date: '2025-03-07', player: 'SIGMA', role: 'senior', action: 'leave' },
      { date: '2025-03-08', player: 'lukyan187', role: 'senior', action: 'join' },
      { date: '2025-03-09', player: 'robot', role: 'member', action: 'join' },
      { date: '2025-03-25', player: 'gord', role: 'member', action: 'join' },
      { date: '2025-03-31', player: 'robot', role: 'member', action: 'leave' },
      { date: '2025-04-05', player: 'ForteCa228', role: 'member', action: 'join' },
      { date: '2025-04-05', player: 'masloprosto', role: 'member', action: 'join' },
      { date: '2025-04-05', player: 'sigmakriper', role: 'member', action: 'join' },
      { date: '2025-04-06', player: 'lukyan187', role: 'senior', action: 'leave' },
      { date: '2025-04-06', player: 'gord', role: 'member', action: 'leave' },
      { date: '2025-04-06', player: 'ForteCa228', role: 'member', action: 'leave' },
      { date: '2025-04-06', player: 'masloprosto', role: 'member', action: 'leave' },
      { date: '2025-04-06', player: 'sigmakriper', role: 'member', action: 'leave' },
      { date: '2025-04-11', player: 'lukyan187', role: 'senior', action: 'join' },
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
    deletedAt: '2025-04-04',
    events: [
      { date: '2025-03-08', player: 'ForteCa228', role: 'leader', action: 'join' },
      { date: '2025-03-08', player: 'treaforik', role: 'member', action: 'join' },
      { date: '2025-03-31', player: 'treaforik', role: 'member', action: 'leave' },
      { date: '2025-04-04', player: 'ForteCa228', role: 'leader', action: 'leave' },
    ],
  },
  pipki: {
    createdAt: '2025-03-08',
    deletedAt: '2025-04-12',
    events: [
      { date: '2025-03-08', player: 'edazfetg4ooo', role: 'leader', action: 'join' },
    ],
  },
  '[n-word]': {
    createdAt: '2025-03-17',
    deletedAt: '2025-03-31',
    events: [
      { date: '2025-03-17', player: 'Inzio_', role: 'member', action: 'join' },
    ],
  },
  fermi: {
    createdAt: '2025-03-23',
    deletedAt: '2025-04-12',
    events: [
      { date: '2025-03-23', player: 'Paolo_Fermer', role: 'member', action: 'join' },
      { date: '2025-04-01', player: 'Paolo_Fermer', role: 'member', action: 'join' },
    ],
  },
  '[d-word]': {
    createdAt: '2025-04-04',
    deletedAt: '2025-04-10',
    events: [
      { date: '2025-04-04', player: 'ForteCa228', role: 'leader', action: 'join' },
      { date: '2025-04-04', player: 'Varenyk', role: 'member', action: 'join' },
      { date: '2025-04-05', player: 'ForteCa228', role: 'leader', action: 'leave' },
      { date: '2025-04-10', player: 'Varenyk', role: 'member', action: 'leave' },
    ],
  },
  '[g-word]': {
    createdAt: '2025-04-05',
    deletedAt: '2025-04-12',
    events: [
      { date: '2025-04-05', player: 'aetu', role: 'member', action: 'join' },
    ],
  },
  hahah: {
    createdAt: '2025-04-06',
    deletedAt: '2025-04-12',
    events: [
      { date: '2025-04-06', player: 'walleb0y', role: 'member', action: 'join' },
    ],
  },
  goga: {
    createdAt: '2025-04-09',
    deletedAt: '2025-04-12',
    events: [
      { date: '2025-04-09', player: 'PixelReaper1337', role: 'member', action: 'join' },
    ],
  },
  TS: {
    createdAt: '2025-04-10',
    deletedAt: '2025-04-12',
    events: [
      { date: '2025-04-10', player: 'Varenyk', role: 'leader', action: 'join' },
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
  { title: 'ВЕСНЯНА ГРА', period: '7 березня - 29 березня', start: '2025-03-07', end: '2025-03-29', items: ['Новий статус', 'Новий квест', 'Новий кейс', 'Новий Донат', 'Новий івент', 'Нові донат речі', 'Зміна сайту', 'Зміна цін привілегій', 'Видалення Талісмана Бога', 'Оновлення спавна', 'Оновлення ПвП арени', 'Скорборд у режимі ПвП', '18 березня — Новий Спавн, команда /worpes', '22 березня — Нові ТнТ'] },
  { title: 'VIPE GOOD', period: '29 березня - 25 квітня', start: '2025-03-29', end: '2025-04-25', items: ['Новий вайп: VIPE GOOD', '10 квітня — Добавили Афкзону', '12 квітня — Вхід з 1.16.5 до 1.21.5', '12 квітня — Топ по яйцях в честь пасхи', '12 квітня — Невелика зміна спавну', '12 квітня — Заміна купця', '13 квітня — Нова автошахта', '13 квітня — Нові Кастомні Зілля', '16 квітня — Оновлення статистики на сайті'] },
  { title: 'RED DAY', period: '25 квітня - 26 травня', start: '2025-04-25', end: '2025-05-26', items: ['Стався вайп', 'Добавили Титули', 'Добавили Квести', 'Добавили Нове Меню', 'Добавили ДонатШоп', 'Добавили Магазин', 'Оновлення кітів', 'Добавили ELO'] },
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


const demigrykyByDate = {
  '2025-03-17': { Vityappro11: 100, Paolo_Fermer: 100, '07_YM': 21, edazfetg4ooo: 2 },
  '2025-03-20': { Varenyk: 841, edazfetg4ooo: 500, Paolo_Fermer: 500, Vityappro11: 100, '07_YM': 21 },
  '2025-03-23': { Varenyk: 841, edazfetg4ooo: 500, Paolo_Fermer: 500, Vityappro11: 100, ForteCa228: 82, Xeyo_pa: 50, '07_YM': 21 },
  '2025-03-24': { Varenyk: 841, edazfetg4ooo: 500, Paolo_Fermer: 500, Vityappro11: 100, ForteCa228: 82, Xeyo_pa: 50, treaforik: 70, '07_YM': 21 },
  '2025-03-25': { Varenyk: 841, edazfetg4ooo: 500, Paolo_Fermer: 500, Vityappro11: 110, ForteCa228: 82, Xeyo_pa: 50, treaforik: 70, '07_YM': 21 },
  '2025-03-31': { Vityappro11: 3810, edazfetg4ooo: 485, Paolo_Fermer: 500, Varenyk: 341, ForteCa228: 82, Xeyo_pa: 0, treaforik: 70, '07_YM': 21 },
  '2025-04-01': { Vityappro11: 3810, edazfetg4ooo: 485, Paolo_Fermer: 485, Varenyk: 341, ForteCa228: 82, Xeyo_pa: 0, treaforik: 70, '07_YM': 21 },
  '2025-04-02': { Vityappro11: 3810, edazfetg4ooo: 485, Paolo_Fermer: 485, Varenyk: 341, ForteCa228: 82, Xeyo_pa: 2, treaforik: 70, '07_YM': 21 },
  '2025-04-18': { Vityappro11: 3810, Paolo_Fermer: 485, Varenyk: 341, Xeyo_pa: 2, treaforik: 70, '07_YM': 21, edazfetg4ooo: 350, ForteCa228: 282, aboba2032: 102 },
  '2025-04-19': { Vityappro11: 3930, Paolo_Fermer: 485, Varenyk: 341, Xeyo_pa: 2, treaforik: 70, '07_YM': 21, edazfetg4ooo: 350, ForteCa228: 337, aboba2032: 102, nag1bator12: 80 },
  '2025-04-20': { Vityappro11: 3930, Paolo_Fermer: 485, Varenyk: 341, Xeyo_pa: 2, treaforik: 70, '07_YM': 21, edazfetg4ooo: 350, ForteCa228: 392, aboba2032: 102, nag1bator12: 80 },
  '2025-04-21': { Vityappro11: 3930, Varenyk: 541, Xeyo_pa: 2, treaforik: 70, '07_YM': 21, ForteCa228: 447, aboba2032: 102, nag1bator12: 80 },
  '2025-04-25': { Vityappro11: 3956, Varenyk: 541, Xeyo_pa: 2, treaforik: 70, '07_YM': 21, ForteCa228: 492, aboba2032: 102, nag1bator12: 190 },
  '2025-04-27': { Vityappro11: 3818, Varenyk: 541, Xeyo_pa: 2, treaforik: 70, '07_YM': 21, ForteCa228: 492, aboba2032: 102, nag1bator12: 189, Famt1ok: 178 },
  '2025-04-30': { Vityappro11: 3818, Varenyk: 716, Xeyo_pa: 2, treaforik: 70, '07_YM': 21, ForteCa228: 492, aboba2032: 102, nag1bator12: 189, Famt1ok: 94 },
  '2025-05-05': { Vityappro11: 3803, Varenyk: 716, Xeyo_pa: 2, treaforik: 70, '07_YM': 21, ForteCa228: 492, aboba2032: 102, nag1bator12: 189, Famt1ok: 94 },
  '2025-05-07': { Vityappro11: 3778, Varenyk: 716, Xeyo_pa: 2, treaforik: 70, '07_YM': 21, ForteCa228: 492, aboba2032: 102, nag1bator12: 189, Famt1ok: 94, Nazarius6: 80 },
};

const killsByDate = {
  '2025-03-17': { Paolo_Fermer: 10, edazfetg4ooo: 8, TIKTOK_BMW_EDIT: 4, Vityappro11: 3, Inzio_: 1 },
  '2025-03-18': { Paolo_Fermer: 17, edazfetg4ooo: 12, TIKTOK_BMW_EDIT: 4, Vityappro11: 3, treaforik: 2, Inzio_: 1 },
  '2025-03-20': { Paolo_Fermer: 17, edazfetg4ooo: 15, illwix: 9, TIKTOK_BMW_EDIT: 4, Vityappro11: 3, Varenyk: 3, treaforik: 2, Inzio_: 1, Xeyo_pa: 1 },
  '2025-03-23': { edazfetg4ooo: 18, Paolo_Fermer: 17, TIKTOK_BMW_EDIT: 10, illwix: 9, ForteCa228: 4, Vityappro11: 3, Varenyk: 3, treaforik: 2, Inzio_: 1, Xeyo_pa: 1 },
  '2025-03-24': { edazfetg4ooo: 18, Paolo_Fermer: 17, TIKTOK_BMW_EDIT: 10, illwix: 10, ForteCa228: 4, Vityappro11: 3, Varenyk: 3, treaforik: 2, Inzio_: 1, Xeyo_pa: 1 },
  '2025-03-25': { edazfetg4ooo: 18, Paolo_Fermer: 17, treaforik: 13, TIKTOK_BMW_EDIT: 10, illwix: 10, ForteCa228: 4, Vityappro11: 4, Varenyk: 3, Xeyo_pa: 3, Inzio_: 1 },
  '2025-03-31': { edazfetg4ooo: 23, Paolo_Fermer: 17, treaforik: 13, TIKTOK_BMW_EDIT: 10, illwix: 10, ForteCa228: 4, Vityappro11: 4, SKAM3000: 3, Varenyk: 3, Xeyo_pa: 3, Inzio_: 1 },
  '2025-04-01': { edazfetg4ooo: 23, Paolo_Fermer: 17, treaforik: 13, TIKTOK_BMW_EDIT: 10, illwix: 10, ForteCa228: 4, Vityappro11: 4, SKAM3000: 3, Varenyk: 3, Xeyo_pa: 3, Inzio_: 1, ItzFrillz: 1 },
  '2025-04-04': { edazfetg4ooo: 23, Paolo_Fermer: 17, treaforik: 13, TIKTOK_BMW_EDIT: 10, illwix: 10, ForteCa228: 6, Vityappro11: 4, SKAM3000: 3, Varenyk: 3, Xeyo_pa: 3, Inzio_: 1, ItzFrillz: 1 },
  '2025-04-05': { edazfetg4ooo: 24, Paolo_Fermer: 17, treaforik: 13, TIKTOK_BMW_EDIT: 10, illwix: 10, ForteCa228: 9, Vityappro11: 5, SKAM3000: 3, Varenyk: 3, Xeyo_pa: 3, Inzio_: 1, ItzFrillz: 1 },
  '2025-04-06': { edazfetg4ooo: 25, Paolo_Fermer: 17, treaforik: 13, TIKTOK_BMW_EDIT: 10, illwix: 10, ForteCa228: 11, Vityappro11: 5, SKAM3000: 3, Varenyk: 10, Xeyo_pa: 3, Inzio_: 1, ItzFrillz: 1, fakemed1: 4, aboba2032: 3 },
  '2025-04-08': { edazfetg4ooo: 28, Paolo_Fermer: 17, treaforik: 18, TIKTOK_BMW_EDIT: 10, illwix: 10, ForteCa228: 11, Vityappro11: 5, SKAM3000: 3, Varenyk: 14, Xeyo_pa: 3, Inzio_: 16, ItzFrillz: 1, fakemed1: 51, aboba2032: 3, PixelReaper1337: 9 },
  '2025-04-09': { edazfetg4ooo: 41, Paolo_Fermer: 28, treaforik: 18, TIKTOK_BMW_EDIT: 10, illwix: 10, ForteCa228: 11, Vityappro11: 5, SKAM3000: 3, Varenyk: 14, Xeyo_pa: 3, Inzio_: 16, ItzFrillz: 1, fakemed1: 62, aboba2032: 3, PixelReaper1337: 9, sachakorpan: 7 },
  '2025-04-10': { edazfetg4ooo: 41, Paolo_Fermer: 28, treaforik: 18, TIKTOK_BMW_EDIT: 10, illwix: 10, ForteCa228: 11, Vityappro11: 5, SKAM3000: 3, Varenyk: 16, Xeyo_pa: 3, Inzio_: 16, ItzFrillz: 1, fakemed1: 62, aboba2032: 3, PixelReaper1337: 9, sachakorpan: 7, nag1bator12: 32 },
  '2025-04-11': { edazfetg4ooo: 43, Paolo_Fermer: 28, treaforik: 40, TIKTOK_BMW_EDIT: 10, illwix: 10, ForteCa228: 11, Vityappro11: 5, SKAM3000: 3, Varenyk: 16, Xeyo_pa: 3, Inzio_: 16, ItzFrillz: 1, fakemed1: 84, aboba2032: 3, PixelReaper1337: 9, sachakorpan: 7, nag1bator12: 66, collected: 10 },
  '2025-04-12': { edazfetg4ooo: 43, Paolo_Fermer: 28, treaforik: 41, TIKTOK_BMW_EDIT: 10, illwix: 10, ForteCa228: 11, Vityappro11: 5, SKAM3000: 3, Varenyk: 16, Xeyo_pa: 3, Inzio_: 16, ItzFrillz: 1, fakemed1: 85, aboba2032: 3, PixelReaper1337: 9, sachakorpan: 7, nag1bator12: 67, collected: 10 },
  '2025-04-13': { edazfetg4ooo: 55, Paolo_Fermer: 31, treaforik: 41, TIKTOK_BMW_EDIT: 10, illwix: 10, ForteCa228: 11, Vityappro11: 5, SKAM3000: 3, Varenyk: 16, Xeyo_pa: 3, Inzio_: 17, ItzFrillz: 1, fakemed1: 91, aboba2032: 3, PixelReaper1337: 9, sachakorpan: 7, nag1bator12: 69, collected: 10, Nazarius6: 13, zxcnotezxc1: 12 },
  '2025-04-14': { edazfetg4ooo: 55, Paolo_Fermer: 31, treaforik: 42, TIKTOK_BMW_EDIT: 10, illwix: 10, ForteCa228: 11, Vityappro11: 6, SKAM3000: 3, Varenyk: 16, Xeyo_pa: 3, Inzio_: 18, ItzFrillz: 1, fakemed1: 92, aboba2032: 3, PixelReaper1337: 9, sachakorpan: 7, nag1bator12: 71, collected: 10, Nazarius6: 13, zxcnotezxc1: 12 },
  '2025-04-15': { edazfetg4ooo: 55, Paolo_Fermer: 31, treaforik: 42, TIKTOK_BMW_EDIT: 10, illwix: 10, ForteCa228: 11, Vityappro11: 6, SKAM3000: 3, Varenyk: 16, Xeyo_pa: 3, Inzio_: 18, ItzFrillz: 1, fakemed1: 93, aboba2032: 3, PixelReaper1337: 9, sachakorpan: 7, nag1bator12: 71, collected: 10, Nazarius6: 13, zxcnotezxc1: 12 },
  '2025-04-16': { nag1bator12: 110, fakemed1: 101, edazfetg4ooo: 63, treaforik: 42, Paolo_Fermer: 31, Inzio_: 18, collected: 16, Varenyk: 16, Vityappro11: 6, ForteCa228: 11, TIKTOK_BMW_EDIT: 10, illwix: 10, PixelReaper1337: 9, sachakorpan: 7, SKAM3000: 3, Xeyo_pa: 3, aboba2032: 3, ItzFrillz: 1, Nazarius6: 13, zxcnotezxc1: 12 },
  '2025-04-17': { nag1bator12: 110, fakemed1: 102, edazfetg4ooo: 66, treaforik: 42, Paolo_Fermer: 31, Inzio_: 18, collected: 16, Varenyk: 16, Vityappro11: 7, ForteCa228: 11, TIKTOK_BMW_EDIT: 10, illwix: 10, PixelReaper1337: 9, sachakorpan: 7, SKAM3000: 3, Xeyo_pa: 3, aboba2032: 3, ItzFrillz: 1, Nazarius6: 13, zxcnotezxc1: 12 },
  '2025-04-18': { nag1bator12: 130, edazfetg4ooo: 75, fakemed: 23, zxcnotezxc1: 21, Varenyk: 24, nag1bator11: 20, Nazarius6: 20, LEGENDA: 17, fakemed1: 102, treaforik: 42, Paolo_Fermer: 31, Inzio_: 18, collected: 16, Vityappro11: 7, ForteCa228: 11, TIKTOK_BMW_EDIT: 10, illwix: 10, PixelReaper1337: 9, sachakorpan: 7, SKAM3000: 3, Xeyo_pa: 3, aboba2032: 3, ItzFrillz: 1 },
  '2025-04-19': { nag1bator12: 130, edazfetg4ooo: 75, Vityappro11: 41, Inzio_: 27, lukyan187: 26, zxcnotezxc1: 24, fakemed: 23, Varenyk: 24, nag1bator11: 20, Nazarius6: 20, LEGENDA: 17, fakemed1: 102, treaforik: 42, Paolo_Fermer: 31, collected: 16, ForteCa228: 11, TIKTOK_BMW_EDIT: 10, illwix: 10, PixelReaper1337: 9, sachakorpan: 7, SKAM3000: 3, Xeyo_pa: 3, aboba2032: 3, ItzFrillz: 1 },
  '2025-04-20': { nag1bator12: 130, edazfetg4ooo: 75, fakemed: 48, Vityappro11: 47, Inzio_: 29, lukyan187: 26, zxcnotezxc1: 24, Varenyk: 24, nag1bator11: 20, Nazarius6: 20, LEGENDA: 17, fakemed1: 102, treaforik: 42, Paolo_Fermer: 31, collected: 16, ForteCa228: 11, TIKTOK_BMW_EDIT: 10, illwix: 10, PixelReaper1337: 9, sachakorpan: 7, SKAM3000: 3, Xeyo_pa: 3, aboba2032: 3, ItzFrillz: 1 },
  '2025-04-21': { nag1bator12: 143, Vityappro11: 84, edazfetg4ooo: 76, fakemed: 50, Inzio_: 29, '05LONE12': 27, lukyan187: 26, zxcnotezxc1: 24, Varenyk: 24, nag1bator11: 20, Nazarius6: 20, LEGENDA: 17, fakemed1: 102, treaforik: 42, Paolo_Fermer: 31, collected: 16, ForteCa228: 11, TIKTOK_BMW_EDIT: 10, illwix: 10, PixelReaper1337: 9, sachakorpan: 7, SKAM3000: 3, Xeyo_pa: 3, aboba2032: 3, ItzFrillz: 1 },
  '2025-04-22': { nag1bator12: 143, Vityappro11: 84, edazfetg4ooo: 76, fakemed: 52, '05LONE12': 51, Inzio_: 29, lukyan187: 26, zxcnotezxc1: 24, Varenyk: 24, nag1bator11: 20, Nazarius6: 20, LEGENDA: 17, fakemed1: 102, treaforik: 42, Paolo_Fermer: 31, collected: 16, ForteCa228: 11, TIKTOK_BMW_EDIT: 10, illwix: 10, PixelReaper1337: 9, sachakorpan: 7, SKAM3000: 3, Xeyo_pa: 3, aboba2032: 3, ItzFrillz: 1 },
  '2025-04-25': { kasikm1: 9, towerpvpTT: 8, Nightpiers: 5, Vityappro11: 3, ForteCa228: 3, '05LONE12': 3, lukyan187: 2, ddddddxxxx: 2, IlyaiyaYT: 2 },
  '2025-04-27': { '05LONE12': 23, ddddddxxxx: 19, IlyaiyaYT: 18, nag1bator12: 14, towerpvpTT: 12, Nazarius6: 12, kasikm1: 9, ForteCa228: 9, Vityappro11: 8, Nightpiers: 5, lukyan187: 2 },
  '2025-04-28': { '05LONE12': 23, IlyaiyaYT: 21, ddddddxxxx: 19, nag1bator12: 14, towerpvpTT: 13, Nazarius6: 12, kasikm1: 9, ForteCa228: 9, Vityappro11: 8, Nightpiers: 5, lukyan187: 2 },
  '2025-04-29': { IlyaiyaYT: 26, '05LONE12': 23, ddddddxxxx: 19, nag1bator12: 14, towerpvpTT: 14, Nazarius6: 12, kasikm1: 9, ForteCa228: 9, Vityappro11: 8, Nightpiers: 5, lukyan187: 2 },
  '2025-05-01': { IlyaiyaYT: 27, '05LONE12': 23, ddddddxxxx: 19, nag1bator12: 14, towerpvpTT: 14, Nazarius6: 12, kasikm1: 9, ForteCa228: 9, Vityappro11: 8, Nightpiers: 5, lukyan187: 2 },
  '2025-05-04': { IlyaiyaYT: 27, '05LONE12': 23, ddddddxxxx: 19, nag1bator12: 14, towerpvpTT: 14, Nazarius6: 12, kasikm1: 9, ForteCa228: 9, Vityappro11: 12, Nightpiers: 5, lukyan187: 2 },
  '2025-05-05': { IlyaiyaYT: 27, PashokWW: 16, '05LONE12': 23, ddddddxxxx: 19, Nazarius6: 17, nag1bator12: 14, towerpvpTT: 14, Vityappro11: 8, kasikm1: 9, ForteCa228: 9, Nightpiers: 5, lukyan187: 2 },
  '2025-05-07': { IlyaiyaYT: 27, PashokWW: 17, '05LONE12': 23, ddddddxxxx: 19, Nazarius6: 17, nag1bator12: 14, towerpvpTT: 14, Vityappro11: 8, kasikm1: 9, ForteCa228: 9, Nightpiers: 5, lukyan187: 2 },
  '2025-05-08': { IlyaiyaYT: 27, PashokWW: 17, '05LONE12': 23, ddddddxxxx: 19, Nazarius6: 17, towerpvpTT: 15, nag1bator12: 14, Vityappro11: 8, kasikm1: 9, ForteCa228: 9, Nightpiers: 5, lukyan187: 2 },
};

const eggsByDate = {
  '2025-04-12': { treaforik: 19, nag1bator12: 17, fakemed1: 16, allcash: 13, edazfetg4ooo: 11, Paolo_Fermer: 8, Vityappro11: 6, '07_YM': 3 },
  '2025-04-13': { Vityappro11: 131, fakemed1: 115, nag1bator12: 85, ForteCa228: 56, IlyaiyaYT: 46, edazfetg4ooo: 27, treaforik: 20, allcash: 13, Paolo_Fermer: 8, '07_YM': 3 },
  '2025-04-14': { TIKTOK_BMW_EDIT: 244, Vityappro11: 221, nag1bator12: 85, ForteCa228: 100, IlyaiyaYT: 46, edazfetg4ooo: 43, treaforik: 20, allcash: 13, Paolo_Fermer: 8, '07_YM': 31, fakemed1: 115 },
  '2025-04-15': { Vityappro11: 378, TIKTOK_BMW_EDIT: 244, ForteCa228: 133, fakemed1: 115, nag1bator12: 85, CherryKira: 72, IlyaiyaYT: 46, edazfetg4ooo: 43, treaforik: 20, allcash: 13, Paolo_Fermer: 8, '07_YM': 31 },
  '2025-04-16': { Vityappro11: 390, nag1bator12: 329, TIKTOK_BMW_EDIT: 244, ForteCa228: 133, edazfetg4ooo: 128, fakemed1: 115, CherryKira: 72, IlyaiyaYT: 46, treaforik: 20, allcash: 13, Paolo_Fermer: 8, '07_YM': 31 },
  '2025-04-17': { Vityappro11: 597, nag1bator12: 373, ForteCa228: 307, TIKTOK_BMW_EDIT: 244, BobrKyrba: 228, edazfetg4ooo: 128, fakemed1: 127, CherryKira: 72, IlyaiyaYT: 46, treaforik: 20, allcash: 13, Paolo_Fermer: 8, '07_YM': 31 },
  '2025-04-18': { Vityappro11: 625, nag1bator12: 473, ForteCa228: 318, TIKTOK_BMW_EDIT: 244, BobrKyrba: 228, Famt1ok: 196, edazfetg4ooo: 128, fakemed1: 127, CherryKira: 72, IlyaiyaYT: 46, treaforik: 20, allcash: 13, Paolo_Fermer: 8, '07_YM': 31 },
  '2025-04-25': { Nightpiers: 53, nag1bator12: 43, Vityappro11: 17, Inzio_: 3, '07_YM': 2, Paolo_Fermer: 1 },
  '2025-04-27': { nag1bator12: 85, Vityappro11: 70, Nightpiers: 53, '05LONE12': 8, IlyaiyaYT: 4, Inzio_: 3, '07_YM': 2, BobrKyrba: 2, ForteCa228: 2, Paolo_Fermer: 1 },
  '2025-04-28': { Vityappro11: 89, nag1bator12: 85, Nightpiers: 53, '05LONE12': 8, IlyaiyaYT: 4, Inzio_: 3, '07_YM': 2, BobrKyrba: 2, ForteCa228: 2, Paolo_Fermer: 1 },
  '2025-04-29': { Vityappro11: 89, nag1bator12: 85, Nightpiers: 53, '05LONE12': 8, IlyaiyaYT: 4, Inzio_: 3, '07_YM': 2, BobrKyrba: 2, ForteCa228: 2, Paolo_Fermer: 1 },
  '2025-04-30': { Vityappro11: 102, nag1bator12: 85, Nightpiers: 53, '05LONE12': 8, IlyaiyaYT: 4, Inzio_: 3, '07_YM': 2, BobrKyrba: 2, ForteCa228: 2, YanePupsik: 2, Paolo_Fermer: 1 },
  '2025-05-04': { Vityappro11: 106, nag1bator12: 85, Nightpiers: 53, '05LONE12': 8, IlyaiyaYT: 4, Inzio_: 3, '07_YM': 2, BobrKyrba: 2, ForteCa228: 2, YanePupsik: 2, Paolo_Fermer: 1 },
  '2025-05-05': { Vityappro11: 117, nag1bator12: 85, Nightpiers: 53, IlyaiyaYT: 13, '05LONE12': 8, Inzio_: 3, '07_YM': 2, BobrKyrba: 2, ForteCa228: 2, YanePupsik: 2, Paolo_Fermer: 1 },
  '2025-05-07': { Vityappro11: 118, nag1bator12: 85, Nightpiers: 53, fakemed: 34, IlyaiyaYT: 13, '05LONE12': 8, Inzio_: 3, '07_YM': 2, BobrKyrba: 2, ForteCa228: 2, YanePupsik: 2, Paolo_Fermer: 1 },
};

const eloByDate = {
  '2025-04-28': { ForteCa228: 130, '05LONE12': 100, IlyaiyaYT: 100, ddddddxxxx: 100, towerpvpTT: 60 },
  '2025-04-29': { Couldmind: 162, ForteCa228: 130, '05LONE12': 100, IlyaiyaYT: 100, ddddddxxxx: 100, towerpvpTT: 60 },
  '2025-05-01': { Couldmind: 162, ForteCa228: 130, '05LONE12': 100, IlyaiyaYT: 100, ddddddxxxx: 100, towerpvpTT: 60, igrokNPC50: 49 },
};

const legacyEggsByDate = {
  '2025-04-12': { treaforik: 19, nag1bator12: 17, fakemed1: 16, allcash: 13, edazfetg4ooo: 11, Paolo_Fermer: 8, Vityappro11: 6, '07_YM': 3 },
  '2025-04-13': { Vityappro11: 131, fakemed1: 115, nag1bator12: 85, ForteCa228: 56, IlyaiyaYT: 46, edazfetg4ooo: 27, treaforik: 20, allcash: 13, Paolo_Fermer: 8, '07_YM': 3 },
  '2025-04-14': { TIKTOK_BMW_EDIT: 244, Vityappro11: 221, nag1bator12: 85, ForteCa228: 100, IlyaiyaYT: 46, edazfetg4ooo: 43, treaforik: 20, allcash: 13, Paolo_Fermer: 8, '07_YM': 31, fakemed1: 115 },
  '2025-04-15': { Vityappro11: 378, TIKTOK_BMW_EDIT: 244, ForteCa228: 133, fakemed1: 115, nag1bator12: 85, CherryKira: 72, IlyaiyaYT: 46, edazfetg4ooo: 43, treaforik: 20, allcash: 13, Paolo_Fermer: 8, '07_YM': 31 },
  '2025-04-16': { Vityappro11: 390, nag1bator12: 329, TIKTOK_BMW_EDIT: 244, ForteCa228: 133, edazfetg4ooo: 128, fakemed1: 115, CherryKira: 72, IlyaiyaYT: 46, treaforik: 20, allcash: 13, Paolo_Fermer: 8, '07_YM': 31 },
  '2025-04-17': { Vityappro11: 597, nag1bator12: 373, ForteCa228: 307, TIKTOK_BMW_EDIT: 244, BobrKyrba: 228, edazfetg4ooo: 128, fakemed1: 127, CherryKira: 72, IlyaiyaYT: 46, treaforik: 20, allcash: 13, Paolo_Fermer: 8, '07_YM': 31 },
  '2025-04-18': { Vityappro11: 625, nag1bator12: 473, ForteCa228: 318, TIKTOK_BMW_EDIT: 244, BobrKyrba: 228, Famt1ok: 196, edazfetg4ooo: 128, fakemed1: 127, CherryKira: 72, IlyaiyaYT: 46, treaforik: 20, allcash: 13, Paolo_Fermer: 8, '07_YM': 31 },
};

function latestStatsMapAtDate(mapByDate, date) {
  return Object.keys(mapByDate)
    .filter((d) => d <= date)
    .sort()
    .map((d) => mapByDate[d])
    .at(-1) || {};
}

function statAtDate(mapByDate, player, date) {
  return latestStatsMapAtDate(mapByDate, date)[player] || 0;
}

const legacyByPlayer = {
  treaforik: { droppedAt: '2025-04-15', balance: 295 },
};

function legacyEntryAtDate(player, date) {
  const entry = legacyByPlayer[player];
  if (!entry) return null;
  if (date < entry.droppedAt) return null;
  return top50NamesAtDate(date).has(player) ? null : entry;
}

function legacyRowsAtDate(date) {
  return Object.entries(legacyByPlayer)
    .filter(([, info]) => date >= info.droppedAt)
    .map(([name, info]) => ({ name, value: info.balance }));
}

function top50NamesAtDate(date) {
  const snap = getSnapshot(date);
  return new Set(
    Object.entries(snap.players)
      .filter(([name]) => !isHiddenFromBalanceLeaderboard(name))
      .sort((a, b) => b[1] - a[1])
      .slice(0, 50)
      .map(([name]) => name),
  );
}

function visibleLegacyRowsAtDate(date) {
  const top50 = top50NamesAtDate(date);
  return legacyRowsAtDate(date).filter((row) => !top50.has(row.name));
}

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
  { platform: 'tiktok', name: 'maksik_paksik7', followers: 137, videos: 72, streams: 13, url: 'https://www.tiktok.com/@maksik_paksik70?_r=1&_t=ZS-95fys06HUY8', owners: ['maksik_paksik7'], history: [{ date: '2025-04-18', followers: 133, videos: 69, streams: 13 }, { date: '2025-04-26', followers: 137, videos: 72, streams: 13 }] },
  { platform: 'tiktok', name: 'Vityappro11', followers: 56, videos: 10, streams: 0, url: 'https://www.tiktok.com/@vityapro132?_r=1&_t=ZS-95fz11PjFTA', owners: ['Vityappro11'], history: [{ date: '2025-04-18', followers: 55, videos: 8, streams: 0 }, { date: '2025-04-26', followers: 56, videos: 10, streams: 0 }] },
  { platform: 'tiktok', name: 'Nazarius6', followers: 29, videos: 4, streams: 0, url: 'https://www.tiktok.com/@kashatan67dexter?_r=1&_t=ZS-95fyGW0iZj2', owners: ['Nazarius6'], history: [{ date: '2025-04-18', followers: 21, videos: 4, streams: 0 }, { date: '2025-04-26', followers: 29, videos: 4, streams: 0 }] },
  { platform: 'tiktok', name: 'ForteCa228', followers: 14, videos: 9, streams: 0, url: 'https://www.tiktok.com/@forteca228?_r=1&_t=ZS-95fyaCqKtjp', owners: ['ForteCa228'], history: [{ date: '2025-04-18', followers: 9, videos: 5, streams: 0 }, { date: '2025-04-26', followers: 14, videos: 9, streams: 0 }] },
  { platform: 'tiktok', name: 'nag1bator12', followers: 23, videos: 8, streams: 0, url: 'https://www.tiktok.com/@chickennugget1996?_r=1&_t=ZS-95fykxJJmZY', owners: ['nag1bator12'], history: [{ date: '2025-04-18', followers: 18, videos: 7, streams: 0 }, { date: '2025-04-26', followers: 23, videos: 8, streams: 0 }] },
  { platform: 'tiktok', name: 'Varenyk', followers: 559, videos: 9, streams: 7, url: 'https://www.tiktok.com/@zadr1t?_r=1&_t=ZS-95fzCR3kJ7t', owners: ['Varenyk'], history: [{ date: '2025-04-18', followers: 560, videos: 9, streams: 7 }, { date: '2025-04-26', followers: 559, videos: 9, streams: 7 }] },
  { platform: 'youtube', name: 'Vityappro11', followers: 36, videos: 9, shorts: 9, longs: 0, streams: 0, url: 'https://youtube.com/channel/UCEOL6x4uzVT31SRwXBG1tRQ?si=8wMn5Ygb7sJmXaoX', owners: ['Vityappro11'], history: [{ date: '2025-04-20', followers: 35, videos: 7, shorts: 7, longs: 0, streams: 0 }, { date: '2025-04-26', followers: 36, videos: 9, shorts: 9, longs: 0, streams: 0 }] },
  { platform: 'youtube', name: 'maksik_paksik7', followers: 19, videos: 15, shorts: 8, longs: 7, streams: 0, url: 'https://youtube.com/@max1milian018?si=gpYA90bKmNJmC_bR', owners: ['maksik_paksik7'], history: [{ date: '2025-04-20', followers: 18, videos: 14, shorts: 8, longs: 6, streams: 0 }, { date: '2025-04-26', followers: 19, videos: 15, shorts: 8, longs: 7, streams: 0 }] },
];

const pvpFights = [
  { date: '5 березня', player1: 'treaforik', player2: 'kasikm1', winner: 'kasikm1' },
  { date: '8 березня', player1: 'Vityappro11', player2: 'Varenyk', winner: 'Vityappro11' },
  { date: '8 березня', player1: 'Vityappro11', player2: 'ForteCa228', winner: 'ForteCa228' },
  { date: '9 березня', player1: 'lukyan187', player2: 'robot', winner: 'lukyan187' },
  { date: '11 квітня', player1: 'Vityappro11', player2: 'collected', winner: 'collected' },
  { date: '11 квітня', player1: 'aboba2032', player2: 'zxcnotezxc1', winner: 'aboba2032' },
  { date: '11 квітня', player1: 'aboba2032', player2: 'collected', winner: 'collected' },
];


const medalsByPlayer = {
  Vityappro11: ['🥇 Баланс (золота)', '🥇 Баланс'],
  Varenyk: ['🥈 Баланс (срібна)', '🥇 Демігрики'],
  treaforik: ['🥉 Баланс (бронзова)', '🥉 Кіли'],
  edazfetg4ooo: ['🥇 Час (золота)', '🥇 Час', '🥈 Демігрики', '🥇 Кіли'],
  '07_YM': ['🥈 Час (срібна)'],
  ForteCa228: ['🥉 Час (бронзова)', '🥉 Час'],
  Paolo_Fermer: ['🥉 Демігрики', '🥈 Кіли'],
};

const pastWipeMedalHint = 'Вайп: ВЕСНЯНА ГРА (7 березня — 29 березня 2025)';
function medalBadgesHtml(player) {
  const medals = medalsByPlayer[player] || [];
  if (!medals.length) return 'Немає медалей';
  return medals.map((m) => {
    const title = /(Баланс|Час|Демігрики|Кіли)/.test(m) ? pastWipeMedalHint : 'Медаль';
    return `<span class="medal-chip" title="${title}">${m}</span>`;
  }).join(' ');
}

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
  Vityappro11: '2025-03-17', ForteCa228: '2025-03-09', treaforik: '2025-03-18', '07_YM': '2025-03-18',
  edazfetg4ooo: '2025-03-18', BEFF: '2025-03-09', Varenyk: '2025-03-17', TIKTOK_BMW_EDIT: '2025-03-18', hirtir: '2025-03-08',
  lukyan187: '2025-03-13', Paolo_Fermer: '2025-03-18', belui228: '2025-03-08', maksik_paksik7: '2025-03-12',
  PravyiNosok777: '2025-03-12', hipoma: '2025-03-07', wontz: '2025-03-07', kasikm1: '2025-03-01', robot: '2025-03-17', Topix__: '2025-03-10',
  Restioynik1: '2025-03-17', Bear228: '2025-03-12', ivan_strogo: '2025-03-14', dddooooppp: '2025-03-12', goiida11: '2025-03-13',
  XIN_jonu: '2025-03-14', illwix: '2025-03-14', ulquiorra2: '2025-03-17', kampys231231: '2025-03-14', Inzio_: '2025-03-18', _ilovemygf_: '2025-03-18',
  Varenyk: '2025-04-11', walleb0y: '2025-04-11', Genderpatty_2: '2025-04-11', Craz1k: '2025-04-11', night_850: '2025-04-11', CAT228sus1: '2025-04-11',
  PixelReaper1337: '2025-04-11', shurik_xx19: '2025-04-11', piromanyakk: '2025-04-11', galavastik: '2025-04-11', aetu: '2025-04-11', ItzFrillz: '2025-04-11',
  lukyan187: '2025-04-11', '30FPS': '2025-04-11', aniqum: '2025-04-11', gord: '2025-04-11', Xeyo_pa: '2025-04-11', aboba2032: '2025-04-11',
  zxcnotezxc: '2025-04-11', masloprosto: '2025-04-11', dima111p: '2025-04-11', superholik: '2025-04-11', maun3914: '2025-04-11', nag1bator11: '2025-04-11'
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
const compareSection = document.getElementById('compareSection');
const chartMetric = document.getElementById('chartMetric');
const compareSearch = document.getElementById('compareSearch');
const compareChoices = document.getElementById('compareChoices');
const compareChart = document.getElementById('compareChart');
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
const eventControls = document.getElementById('eventControls');
const eventCurrentBtn = document.getElementById('eventCurrentBtn');
const eventPastBtn = document.getElementById('eventPastBtn');
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
let contentType = 'channels';
let contentSort = 'views';
let eventMode = 'current';
let fullStatsPlayer = null;
let compareContext = null;

const dates = snapshots.map((s) => s.date);
const latestDate = dates[dates.length - 1];

const wipeRanges = {
  novaEra: { label: 'Нова Ера (14 лютого - 7 березня)', start: '2025-02-14', end: '2025-03-06' },
  springGame: { label: 'Весняна Гра (7 березня - 29 березня)', start: '2025-03-07', end: '2025-03-29' },
  vipeGood: { label: 'VIPE GOOD (29 березня - 24 квітня)', start: '2025-03-29', end: '2025-04-24' },
  redDay: { label: 'RED DAY (25 квітня - 26 травня)', start: '2025-04-25', end: '2025-05-26' },
  allTime: { label: 'За весь час', start: '2025-02-21', end: '2025-12-31' },
};

let activeWipe = 'redDay';

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
  return ['balance', 'play', 'clans', 'donates', 'eggs', 'elo'].includes(v);
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
  if (v === 'demigryky') return ['2025-03-17', '2025-03-18', '2025-03-20', '2025-03-23', '2025-03-24', '2025-03-25', '2025-03-31', '2025-04-01', '2025-04-02', '2025-04-18', '2025-04-19', '2025-04-20', '2025-04-21', '2025-04-22', '2025-04-25', '2025-04-27', '2025-04-30', '2025-05-05', '2025-05-07'];
  if (v === 'kills') return ['2025-03-17', '2025-03-18', '2025-03-20', '2025-03-23', '2025-03-24', '2025-03-25', '2025-03-31', '2025-04-01', '2025-04-02', '2025-04-04', '2025-04-05', '2025-04-06', '2025-04-08', '2025-04-09', '2025-04-10', '2025-04-11', '2025-04-12', '2025-04-13', '2025-04-14', '2025-04-15', '2025-04-16', '2025-04-17', '2025-04-18', '2025-04-19', '2025-04-20', '2025-04-21', '2025-04-22', '2025-04-25', '2025-04-27', '2025-04-28', '2025-04-29', '2025-05-01', '2025-05-04', '2025-05-05', '2025-05-07', '2025-05-08'];
  if (v === 'eggs') return eventMode === 'past' ? ['2025-04-12', '2025-04-13', '2025-04-14', '2025-04-15', '2025-04-16', '2025-04-17', '2025-04-18'] : ['2025-04-25', '2025-04-27', '2025-04-28', '2025-04-29', '2025-04-30', '2025-05-04', '2025-05-05', '2025-05-07'];
  if (v === 'elo') return ['2025-04-28', '2025-04-29', '2025-05-01'];

  let allowed = dates;
  if (v === 'play') allowed = dates.filter((d) => d >= '2025-03-02' && d <= '2025-05-08' && d !== '2025-03-07' && d !== '2025-03-31');
  if (v === 'clans') allowed = dates.filter((d) => d >= '2025-02-22' && d <= '2025-04-11');
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

function setupDetailsWipeOptions(type, id, preferredWipe = detailsWipeSelect.value) {
  const wipeIds = ['allTime', 'novaEra', 'springGame', 'vipeGood', 'redDay'];
  detailsWipeSelect.innerHTML = wipeIds
    .map((w) => `<option value="${w}" ${entityExistsInWipe(type, id, w) ? '' : 'disabled'}>${wipeRanges[w].label}</option>`)
    .join('');

  if (preferredWipe && entityExistsInWipe(type, id, preferredWipe)) {
    detailsWipeSelect.value = preferredWipe;
  } else if (entityExistsInWipe(type, id, activeWipe)) {
    detailsWipeSelect.value = activeWipe;
  } else {
    const fallback = wipeIds.find((w) => entityExistsInWipe(type, id, w)) || 'allTime';
    detailsWipeSelect.value = fallback;
  }
}

function getReputation(player) {
  const map = {
    GGlolick: 1, Varenyk228: 1, hirtir: 1,
    m0NESY: 2, Nazar3321: 2, kostya2103: 2, maksyarosh: 2,
    SIGMA: 3, kampys231231: 3, jtx_by: 3, '05LONE12': 3,
    BEFF: 4, Vortex1k: 4, belui228: 4,
    lukyan187: 4, FairDemonYT: 5, wontz: 5, TIKTOK_BMW_EDIT: 5,
    kasikm1: 6, aboba2032: 6, hipoma: 6, Varenyk: 6,
    PravyiNosok777: 7, edazfetg4ooo: 7, Paolo_Fermer: 7, '07_YM': 7, treaforik: 7,
    ForteCa228: 7,
    Vityappro11: 9,
    Restioynik1: 3, goiida11: 3, Bear228: 3, XIN_jonu: 2, illwix: 2,
    maksik_paksik7: 10,
  };
  const adjustments = {
    nag1bator12: 4, collected: 4, Inzio_: 4,
    walleb0y: 3, fakemed1: 3,
    GenderPatty_2: 2, Genderpatty_2: 2, CAT228sus1: 2, lukyan187: 2, PixelReaper1337: 2, piromanyakk: 2, galavastik: 2,
    ForteCa228: 1, Varenyk: 1, shurik_xx19: 1, aetu: 1, gord: 1,
    wontz: -2, '07_YM': -2,
  };
  const score = (map[player] ?? 1) + (adjustments[player] ?? 0);
  const color = score <= 2 ? '#7f1d1d' : score <= 4 ? '#dc2626' : score <= 6 ? '#f59e0b' : score <= 8 ? '#16a34a' : '#166534';
  return { score, color };
}

function fightDateToIso(dateText) {
  const text = (dateText || '').trim().toLowerCase();
  const mMarch = /^(\d+)\s+березня$/i.exec(text);
  if (mMarch) return `2025-03-${mMarch[1].padStart(2, '0')}`;
  const mApril = /^(\d+)\s+квітня$/i.exec(text);
  if (mApril) return `2025-04-${mApril[1].padStart(2, '0')}`;
  return '2025-03-01';
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

  let earnedAllTime = allBal.length ? allBal[0].v : 0;
  for (let i = 1; i < allBal.length; i++) {
    const diff = allBal[i].v - allBal[i - 1].v;
    if (diff > 0) earnedAllTime += diff;
  }

  let playIncAllTime = allPlay.length ? allPlay[0].v : 0;
  for (let i = 1; i < allPlay.length; i++) {
    playIncAllTime += Math.max(0, allPlay[i].v - allPlay[i - 1].v);
  }

  const fightsAllTime = pvpFights.filter((f) => f.player1 === player || f.player2 === player);
  const winsAllTime = fightsAllTime.filter((f) => f.winner === player).length;
  const clanJoinsAllTime = Object.values(clans)
    .flatMap((c) => c.events)
    .filter((e) => e.player === player && e.action === 'join').length;

  const xp = Math.floor(earnedAllTime / 30) + Math.floor(playIncAllTime / 3) + winsAllTime * 100 + clanJoinsAllTime * 100 + (extraXpByPlayer[player] || 0) + medalXpForPlayer(player);
  const thresholds = [0, 100, 150, 200, 250, 300, 400, 500, 600, 750, 1000, 1250, 1500, 1750, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 6000, 7000, 8000, 9000, 10000, 12000, 14000, 16000, 18000, 20000, 22500, 25000, 27500, 30000, 35000, 40000, 45000, 50000, 55000, 60000, 100000];
  let rawLevel = 0;
  for (let i = 0; i < thresholds.length; i++) if (xp >= thresholds[i]) rawLevel = i;
  const isMaxLevel = xp >= 100000;
  const level = isMaxLevel ? 40 : Math.min(rawLevel, 40);
  const toNext = isMaxLevel ? 0 : Math.max(0, thresholds[level + 1] - xp);
  const xpAfterMax = isMaxLevel ? xp - 100000 : 0;
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
    ? `max level (потрібно 100000 XP, XP після max level: ${stat.xpAfterMax})`
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
    <div class="medals-wrap">${medalBadgesHtml(player)}</div>
    <h3>Вимоги до нових рівнів</h3>
    <ul><li>31 — 22500 XP</li><li>32 — 25000 XP</li><li>33 — 27500 XP</li><li>34 — 30000 XP</li><li>35 — 35000 XP</li><li>36 — 40000 XP</li><li>37 — 45000 XP</li><li>38 — 50000 XP</li><li>39 — 55000 XP</li><li>40 — 60000 XP</li><li>max level — 100000 XP</li></ul>
  `;
}

function refreshWipeSelect() {
  const options = Object.entries(wipeRanges)
    .filter(([id]) => id !== 'allTime' && !(view === 'clans' && id === 'redDay'))
    .map(([id, info]) => `<option value="${id}">${info.label}</option>`)
    .join('');
  wipeSelect.innerHTML = options;
  detailsWipeSelect.innerHTML = options;
  if (!wipeSelect.querySelector(`option[value="${activeWipe}"]`)) {
    activeWipe = wipeSelect.options[0]?.value || activeWipe;
  }
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
  const show = ['balance', 'play', 'clans', 'donates'].includes(view);
  wipeSelectWrap.classList.toggle('hidden', !show);
}


function setDetailsWipeVisibility(visible) {
  detailsWipeWrap.classList.toggle('hidden', !visible);
  if (visible && !detailsWipeSelect.value) detailsWipeSelect.value = activeWipe;
}

function setContentControlsVisible(visible) {
  contentControls.classList.toggle('hidden', !visible);
}
function setEventControlsVisible(visible) {
  eventControls.classList.toggle('hidden', !visible);
}

function syncContentControlButtons() {
  contentPlatformTikTok.classList.toggle('active', contentPlatform === 'tiktok');
  contentPlatformYouTube.classList.toggle('active', contentPlatform === 'youtube');
  contentTypeVideos.classList.remove('active');
  contentTypeChannels.classList.add('active');
  contentTypeVideos.classList.add('hidden');
  contentTypeChannels.classList.add('hidden');
  videoSortControls.classList.remove('hidden');
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
  heroSubtitle.textContent = 'Сучасна панель перегляду статистики з 21 лютого — 8 травня.';
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

function isHiddenFromBalanceLeaderboard(name, date = currentDateInActiveWipe()) {
  if (name === 'maksik_paksik7') return true;
  const donation = donationOfAtDate(name, date).toUpperCase();
  return donation === 'ADMIN' || donation === 'TEX_ADMIN';
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
  if (player === 'maksik_paksik7') return dateLabel(snapshots.at(-1).date);

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

  const lastChanged = [lastPlayChange, lastBalanceChange].filter(Boolean).sort().at(-1);
  if (lastChanged) return dateLabel(lastChanged);

  const seen = snapshots.find((s) => s.players[player] !== undefined || s.play[player] !== undefined)?.date;
  return seen ? dateLabel(seen) : '—';
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

function hideCompareSection() {
  compareSection.classList.add('hidden');
  compareContext = null;
  compareChart.innerHTML = '';
  compareChoices.innerHTML = '';
}

function metricLabel(metric) {
  if (metric === 'balance') return 'Баланс';
  if (metric === 'play') return 'Час';
  if (metric === 'demigryky') return 'Демігрики';
  if (metric === 'kills') return 'Кіли';
  return 'Значення';
}

function formatMetricValue(metric, value) {
  if (metric === 'balance') return formatCurrency(value);
  if (metric === 'play') return formatPlay(value);
  return String(value);
}

function renderCompareChoices() {
  if (!compareContext) return;
  const q = (compareSearch.value || '').trim().toLowerCase();
  const filtered = compareContext.candidates.filter((name) => name.toLowerCase().includes(q)).slice(0, 40);
  compareChoices.innerHTML = filtered.map((name) => `
    <button type="button" class="compare-choice ${compareContext.selected.has(name) ? 'active' : ''}" data-name="${name}">${name}</button>
  `).join('') || '<span class="meta">Нічого не знайдено</span>';
}

function renderCompareChart() {
  if (!compareContext) return;
  const metric = chartMetric.value;
  const selectedNames = [...compareContext.selected];
  if (!selectedNames.length) {
    compareChart.innerHTML = '<p class="empty-state">Вибери хоча б одного учасника для графіка.</p>';
    return;
  }
  const datesInScope = snapshotsForWipe(compareContext.wipeId).map((s) => s.date);
  const palette = ['#22d3ee', '#f59e0b', '#a78bfa', '#34d399', '#f472b6', '#60a5fa'];
  const allValues = [];
  const series = selectedNames.map((name, i) => {
    const values = datesInScope.map((d) => compareContext.valueAt(name, metric, d));
    values.forEach((v) => { if (v !== null && v !== undefined) allValues.push(v); });
    return { name, color: palette[i % palette.length], values };
  });
  if (!allValues.length) {
    compareChart.innerHTML = '<p class="empty-state">Немає даних для побудови графіка.</p>';
    return;
  }
  const min = Math.min(...allValues);
  const max = Math.max(...allValues);
  const range = Math.max(1, max - min);
  const h = 220;
  const w = 1000;
  const pointsFor = (values) => values.map((v, idx) => {
    if (v === null || v === undefined) return null;
    const x = datesInScope.length <= 1 ? 0 : (idx / (datesInScope.length - 1)) * w;
    const y = h - ((v - min) / range) * h;
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).filter(Boolean).join(' ');

  const lines = series.map((s) => `<polyline points="${pointsFor(s.values)}" fill="none" stroke="${s.color}" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/>`).join('');
  const legend = series.map((s) => {
    const last = [...s.values].reverse().find((v) => v !== null && v !== undefined);
    return `<li><span style="color:${s.color}">●</span> ${s.name}: ${formatMetricValue(metric, last ?? 0)}</li>`;
  }).join('');

  compareChart.innerHTML = `
    <svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="none">
      <line x1="0" y1="${h}" x2="${w}" y2="${h}" stroke="rgba(148,163,184,.4)" />
      ${lines}
    </svg>
    <ul class="history-list">${legend}</ul>
  `;
}

function setupCompareContext(ctx) {
  compareContext = ctx;
  compareSection.classList.remove('hidden');
  chartMetric.innerHTML = ctx.metrics.map((m) => `<option value="${m}">${metricLabel(m)}</option>`).join('');
  chartMetric.value = ctx.metrics[0];
  compareSearch.value = '';
  renderCompareChoices();
  renderCompareChart();
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
  const balanceHistory = wipeSnapshots
    .filter((s) => s.players[player] !== undefined)
    .map((s) => ({ date: s.date, value: s.players[player] }));
  const playHistory = wipeSnapshots.filter((s) => s.play[player] !== undefined).map((s) => ({ date: s.date, value: s.play[player] }));
  const peakBalance = balanceHistory.reduce((m, x) => (x.value > m.value ? x : m), { value: -1, date: '' });
  const rankNow = rankMapForDate(getSnapshot(date).players)[player];
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
    { label: 'Демігрики', value: String(statAtDate(demigrykyByDate, player, date)) },
    { label: 'Кіли', value: String(statAtDate(killsByDate, player, date)) },
    { label: 'Статус топу', value: (rankNow && rankNow <= 50) ? `У топ 50 (#${rankNow})` : 'Поза топ 50' },
    { label: 'Медалі', value: medalBadgesHtml(player) },
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
  const allPlayers = [...new Set(snapshots.flatMap((s) => [...Object.keys(s.players), ...Object.keys(s.play)]))].sort();

  const channelRows = channels.map((c) => `<li>${c.platform === 'tiktok' ? 'TikTok' : 'YouTube'}: ${c.name} — відео: ${c.videos || 0}, слідкувачі: ${c.followers || 0}, стріми: ${c.streams || 0}${c.url ? ` • <a href="${c.url}" target="_blank" rel="noopener noreferrer">канал</a>` : ''}</li>`);

  history1.innerHTML = balanceRows.join('') || '<li>Немає даних</li>';
  history2.innerHTML = playRows.join('') || '<li>Немає Top Play даних</li>';
  history3.innerHTML = channelRows.join('') || '<li>Каналів не знайдено</li>';

  setupCompareContext({
    wipeId: scopeWipe,
    candidates: allPlayers,
    selected: new Set([player]),
    metrics: ['balance', 'play', 'demigryky', 'kills'],
    valueAt: (name, metric, date) => {
      const snap = getSnapshot(date);
      if (metric === 'balance') return snap.players[name] ?? null;
      if (metric === 'play') return snap.play[name] ?? null;
      if (metric === 'demigryky') return statAtDate(demigrykyByDate, name, date);
      if (metric === 'kills') return statAtDate(killsByDate, name, date);
      return null;
    },
  });
}


function hideThirdHistoryBlock() {
  openFullStatsBtn.classList.add('hidden');
  history3Title.classList.add('hidden');
  history3.classList.add('hidden');
  history3.innerHTML = '';
  setDetailsWipeVisibility(false);
  hideCompareSection();
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
  const wipeDates = snapshotsForWipe(scopeWipe).map((s) => s.date).filter((d) => d <= '2025-04-11');
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

  setupCompareContext({
    wipeId: scopeWipe,
    candidates: Object.keys(clans),
    selected: new Set([clanName]),
    metrics: ['balance'],
    valueAt: (name, _metric, d) => (d > '2025-04-11' ? null : (isClanActiveAtDate(name, d) ? clanBalanceAtDate(name, d) : null)),
  });
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

  const groups = [...new Set(snapshots.flatMap((s) => Object.keys(s.players).map((p) => donationOfAtDate(p, s.date))))].filter((g) => g !== 'ADMIN');
  setupCompareContext({
    wipeId: scopeWipe,
    candidates: groups.sort(),
    selected: new Set([group]),
    metrics: ['balance'],
    valueAt: (name, _metric, d) => donationBalanceAtDate(name, d),
  });
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

  detailsTitle.textContent = 'Контент';
  entityName.textContent = channel.name;
  metaInfo.textContent = `${channel.platform === 'tiktok' ? 'TikTok' : 'YouTube'} канал`;
  renderStats([
    { label: channel.platform === 'tiktok' ? 'Слідкувачі' : 'Підписники', value: new Intl.NumberFormat('uk-UA').format(channel.followers || 0) },
    { label: 'Кількість відео', value: String(channel.videos || 0) },
    { label: 'Стріми', value: String(channel.streams || 0) },
    ...(channel.platform === 'youtube'
      ? [{ label: 'YouTube формат', value: `${channel.shorts || 0} коротких • ${channel.longs || 0} довгих` }]
      : []),
  ]);

  history1Title.textContent = 'Історія каналу';
  history2Title.textContent = 'Посилання';
  history1.innerHTML = (channel.history || [])
    .map((h) => `<li>${dateLabel(h.date)} — відео: ${h.videos || 0}, слідкувачі: ${h.followers || 0}, стріми: ${h.streams || 0}</li>`)
    .join('') || '<li>Історії поки немає</li>';
  history2.innerHTML = channel.url
    ? `<li><a href="${channel.url}" target="_blank" rel="noopener noreferrer">Відкрити канал</a></li>`
    : '<li>Посилання відсутнє</li>';
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
    const topRows = Object.entries(snap.players).filter(([n]) => !isHiddenFromBalanceLeaderboard(n, date)).sort((a, b) => b[1] - a[1]).map(([n, v]) => ({ name: n, value: v, click: () => showPlayerDetails(n), display: formatCurrency(v) }));
    tableSubtitle.textContent = `Актуальні баланси на ${dateLabel(date)} • Всього на сервері: ${formatCurrency(totalMoneyAtDate(date))}`;
    rows = topRows;
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
  } else if (view === 'demigryky') {
    tableTitle.textContent = 'Топ Демігрики'; nameHeader.textContent = 'Гравець'; valueHeader.textContent = 'Демігрики';
    const points = latestStatsMapAtDate(demigrykyByDate, date);
    tableSubtitle.textContent = `${dateLabel(date)} • Топ за Демігриками`;
    rows = Object.entries(points).sort((a, b) => b[1] - a[1]).map(([n, v]) => ({ name: n, value: v, click: () => showPlayerDetails(n), display: String(v) }));
  } else if (view === 'kills') {
    tableTitle.textContent = 'Топ Кіли'; nameHeader.textContent = 'Гравець'; valueHeader.textContent = 'Кіли';
    const points = latestStatsMapAtDate(killsByDate, date);
    tableSubtitle.textContent = `${dateLabel(date)} • Топ за кількістю кілів`;
    rows = Object.entries(points).sort((a, b) => b[1] - a[1]).map(([n, v]) => ({ name: n, value: v, click: () => showPlayerDetails(n), display: String(v) }));
  } else if (view === 'eggs') {
    tableTitle.textContent = 'Свиновбивці'; nameHeader.textContent = 'Гравець'; valueHeader.textContent = 'Очки';
    const points = latestStatsMapAtDate(eventMode === 'past' ? legacyEggsByDate : eggsByDate, date);
    tableSubtitle.textContent = eventMode === 'past' ? `${dateLabel(date)} • Минула подія "Топ по Яйцях"` : `${dateLabel(date)} • Івент "Свиновбивці"`;
    rows = Object.entries(points).sort((a, b) => b[1] - a[1]).map(([n, v]) => ({ name: n, value: v, click: () => showPlayerDetails(n), display: String(v) }));
  } else if (view === 'elo') {
    tableTitle.textContent = 'ELO Top'; nameHeader.textContent = 'Гравець'; valueHeader.textContent = 'ELO';
    const points = latestStatsMapAtDate(eloByDate, date);
    tableSubtitle.textContent = `${dateLabel(date)} • Новий ELO рейтинг`;
    rows = Object.entries(points).sort((a, b) => b[1] - a[1]).map(([n, v]) => ({ name: n, value: v, click: () => showPlayerDetails(n), display: String(v) }));
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
    tableTitle.textContent = 'Канали гравців Демігро'; nameHeader.textContent = 'Канал'; valueHeader.textContent = contentSort === 'views' ? 'Слідкувачі' : 'Відео';
    tableSubtitle.textContent = `${contentPlatform === 'tiktok' ? 'TikTok' : 'YouTube'} • сортування: ${contentSort === 'views' ? 'за слідкувачами' : 'за відео'} • контент оновлюється кожну неділю`;
    const metric = contentSort === 'views' ? 'followers' : 'videos';
    const channels = contentChannels
      .filter((c) => c.platform === contentPlatform)
      .sort((a, b) => (b[metric] || 0) - (a[metric] || 0));
    rows = channels.map((c) => ({
      name: c.name,
      value: c[metric] || 0,
      click: () => showContentChannelDetails(c),
      display: metric === 'followers'
        ? `${new Intl.NumberFormat('uk-UA').format(c.followers || 0)}`
        : `${new Intl.NumberFormat('uk-UA').format(c.videos || 0)}`,
    }));
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
  setEventControlsVisible(view === 'eggs');
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
  chartMetric.addEventListener('change', renderCompareChart);
  compareSearch.addEventListener('input', () => {
    renderCompareChoices();
  });
  compareChoices.addEventListener('click', (e) => {
    const btn = e.target.closest('button.compare-choice');
    if (!btn || !compareContext) return;
    const { name } = btn.dataset;
    if (compareContext.selected.has(name)) compareContext.selected.delete(name);
    else compareContext.selected.add(name);
    renderCompareChoices();
    renderCompareChart();
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

  eventCurrentBtn.addEventListener('click', () => {
    eventMode = 'current';
    eventCurrentBtn.classList.add('active');
    eventPastBtn.classList.remove('active');
    refreshDateSelect();
    selected = null;
    renderLeaderboard();
  });
  eventPastBtn.addEventListener('click', () => {
    eventMode = 'past';
    eventPastBtn.classList.add('active');
    eventCurrentBtn.classList.remove('active');
    refreshDateSelect();
    selected = null;
    renderLeaderboard();
  });

  tabs.forEach((tab) => tab.addEventListener('click', () => {
    tabs.forEach((t) => t.classList.remove('active'));
    tab.classList.add('active');
    view = tab.dataset.view;
    if (view !== 'eggs') {
      eventMode = 'current';
      eventCurrentBtn.classList.add('active');
      eventPastBtn.classList.remove('active');
    }
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
