// Module ID: 8652
// Function ID: 68482
// Name: _getShopCollection
// Dependencies: []
// Exports: getGameAnnouncements, getShopCollection

// Module 8652 (_getShopCollection)
function _getShopCollection() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _getShopCollection = obj;
  return obj(...arguments);
}
function _fetchSimilarGames() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _fetchSimilarGames = obj;
  return obj(...arguments);
}
function _getGameAnnouncements() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _getGameAnnouncements = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const importDefaultResult = importDefault(dependencyMap[2]);
const Endpoints = arg1(dependencyMap[3]).Endpoints;
let closure_7 = arg1(dependencyMap[4]).SIMILAR_GAMES_BLOCKED_GAME_IDS;
let obj = arg1(dependencyMap[8]);
obj = {
  getQueryId(arg0, arg1) {
    let combined = null;
    if (arg1) {
      const _HermesInternal = HermesInternal;
      combined = "similar-games:" + arg0;
    }
    return combined;
  },
  get(arg0) {
    const similarGames = importDefaultResult.getSimilarGames(arg0);
    let tmp2 = null;
    if (null != similarGames) {
      tmp2 = similarGames;
    }
    return tmp2;
  },
  load(arg0) {
    return function fetchSimilarGames(arg0) {
      return callback(...arguments);
    }(arg0);
  },
  retryConfig: obj,
  failureStaleAfter: importDefault(dependencyMap[10]).Seconds.MINUTE
};
obj = {
  backoff() {
    let tmp = importDefault(dependencyMap[9]);
    const result = 5 * importDefault(dependencyMap[10]).Millis.SECOND;
    tmp = new tmp(result, 5 * importDefault(dependencyMap[10]).Millis.MINUTE);
    return tmp;
  }
};
const fetchStore = obj.createFetchStore(importDefaultResult, obj);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/game_profile/GameProfileHttpUtils.tsx");

export const getShopCollection = function getShopCollection(arg0) {
  return _getShopCollection(...arguments);
};
export const useSimilarGameIds = fetchStore;
export const getGameAnnouncements = function getGameAnnouncements(arg0, arg1) {
  return _getGameAnnouncements(...arguments);
};
