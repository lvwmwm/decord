// Module ID: 10105
// Function ID: 10106
// Name: AppStoreOverlayCategoryMessages
// Dependencies: [1113, 2]
// Exports: getAppStoreOverlayCategoryLabel

// Module 10105 (AppStoreOverlayCategoryMessages)
import intl2 from "intl" /* 1113 */;
import size from "module_2" /* 2 */;

const obj = { 0: intl2.t.qiQEEG, 6000: null, 6001: null, 6002: null, 6003: null, 6004: null, 6005: null, 6006: null, 6007: null, 6008: null, 6009: null, 6010: null, 6011: null, 6012: null, 6013: null, 6014: null, 6015: null, 6016: null, 6017: null, 6018: null, 6020: null, 6021: null, 6023: null, 6024: null, 6026: null, 6027: null, 7001: null, 7002: null, 7003: null, 7004: null, 7005: null, 7006: null, 7009: null, 7011: null, 7012: null, 7013: null, 7014: null, 7015: null, 7016: null, 7017: null, 7018: null, 7019: null, 9007: null, 10000: null, 10001: null, 10002: null };
obj[6000] = intl2.t.BjcnZe;
obj[6001] = intl2.t.WLYsrm;
obj[6002] = intl2.t.RrUazY;
obj[6003] = intl2.t.m09gxk;
obj[6004] = intl2.t.ol1DZi;
obj[6005] = intl2.t.nD2jdc;
obj[6006] = intl2.t.oHl3cW;
obj[6007] = intl2.t["0YHc83"];
obj[6008] = intl2.t["20gQr6"];
obj[6009] = intl2.t["JNcKc/"];
obj[6010] = intl2.t.QndOVA;
obj[6011] = intl2.t.fVd6Y9;
obj[6012] = intl2.t.nMpxXQ;
obj[6013] = intl2.t["aV/tS7"];
obj[6014] = intl2.t.yLcpYu;
obj[6015] = intl2.t["l+LQ33"];
obj[6016] = intl2.t.TbmL5o;
obj[6017] = intl2.t.OjEg6f;
obj[6018] = intl2.t.lAPP2S;
obj[6020] = intl2.t.QHiEO7;
obj[6021] = intl2.t["8OiW5j"];
obj[6023] = intl2.t.GTux3m;
obj[6024] = intl2.t["6aqjT5"];
obj[6026] = intl2.t.FdsI7l;
obj[6027] = intl2.t.gf8ur7;
obj[7001] = intl2.t.S2T3CN;
obj[7002] = intl2.t.VTnPHB;
obj[7003] = intl2.t.qPsnag;
obj[7004] = intl2.t["2futlH"];
obj[7005] = intl2.t.mqseq1;
obj[7006] = intl2.t.GmALUA;
obj[7009] = intl2.t.ef7e1y;
obj[7011] = intl2.t.veG4Ye;
obj[7012] = intl2.t.voAhVA;
obj[7013] = intl2.t["4Xqdbd"];
obj[7014] = intl2.t.ronp3G;
obj[7015] = intl2.t["8l1hG5"];
obj[7016] = intl2.t["4zZBRW"];
obj[7017] = intl2.t.VGeSji;
obj[7018] = intl2.t["BcT/0i"];
obj[7019] = intl2.t.bgO6M4;
obj[9007] = intl2.t.DK8LfV;
obj[10000] = intl2.t.fNVoWB;
obj[10001] = intl2.t.K8d4pW;
obj[10002] = intl2.t["0YoQz+"];
const obj2 = { all: intl2.t.dCUOHL, application: intl2.t.oULhIG, art_and_design: intl2.t.HLP5P7, auto_and_vehicles: intl2.t.yiHgjP, beauty: intl2.t.ZyXLQV, books_and_reference: intl2.t["/AGTA5"], business: intl2.t.d9T77B, comics: intl2.t["/YnINt"], communication: intl2.t.G2YG8a, dating: intl2.t["0d3ghp"], education: intl2.t.N2vtK1, entertainment: intl2.t.X9hpbP, events: intl2.t.co5fAr, family: intl2.t.xGg2fl, family_action: intl2.t.OKVzxC, family_age_range1: intl2.t["2wVSVc"], family_age_range2: intl2.t["4mj/nQ"], family_age_range3: intl2.t.ZuiWjl, family_braingames: intl2.t.pnk71d, family_create: intl2.t.ncU4cZ, family_education: intl2.t["u09WC+"], family_musicvideo: intl2.t.b6SQe1, family_pretend: intl2.t.kOfi9u, finance: intl2.t.TnXliO, food_and_drink: intl2.t.Su22lS, game: intl2.t["noFp/w"], game_action: intl2.t["08xjzE"], game_adventure: intl2.t.vb4GkA, game_arcade: intl2.t.yNbZbw, game_board: intl2.t["H/i/OU"], game_card: intl2.t.emKYGF, game_casino: intl2.t["0oVJOO"], game_casual: intl2.t.YY79oH, game_educational: intl2.t["9zwp0t"], game_music: intl2.t["0NYXRg"], game_puzzle: intl2.t.M9OXD5, game_racing: intl2.t["EUkR+P"], game_role_playing: intl2.t.Q9FnQ3, game_simulation: intl2.t.uZ4M4k, game_sports: intl2.t["O7/cxq"], game_strategy: intl2.t.Dj7WeP, game_trivia: intl2.t.s4qNMT, game_word: intl2.t.c5okfk, health_and_fitness: intl2.t.xokyby, house_and_home: intl2.t["6vmnPC"], libraries_and_demo: intl2.t.eVHJAV, lifestyle: intl2.t.aTyGwD, maps_and_navigation: intl2.t["4voaxZ"], medical: intl2.t.rmPi3O, music_and_audio: intl2.t.IhEQqy, news_and_magazines: intl2.t.Ie7hgg, parenting: intl2.t.GRJxYm, personalization: intl2.t.UReTLX, photography: intl2.t.WskUKv, productivity: intl2.t.zorzEh, shopping: intl2.t.TELxyS, social: intl2.t.cwZA7u, sports: intl2.t.ahMZnt, tools: intl2.t.RyCBqh, travel_and_local: intl2.t["82E9aB"], video_players: intl2.t["5fdUQZ"], weather: intl2.t.irT3ud };
const result = size.fileFinishedImporting("modules/quests/native/AppStoreOverlay/AppStoreOverlayCategoryMessages.tsx");

export function getAppStoreOverlayCategoryLabel(os, category_id) {
  const tmp = ("ios" === os ? obj : obj2)[category_id];
  let stringResult = null;
  if (null != tmp) {
    const intl = intl2.intl;
    stringResult = intl.string(tmp);
  }
  return stringResult;
}
