// Module ID: 8700
// Function ID: 68742
// Name: _getShopCollection
// Dependencies: [5, 1921, 8638, 653, 8701, 686, 4369, 507, 566, 561, 664, 8695, 2]
// Exports: getGameAnnouncements, getShopCollection

// Module 8700 (_getShopCollection)
import dispatcher from "dispatcher";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import importDefaultResult from "_isNativeReflectConstruct";
import { Endpoints } from "ME";
import { SIMILAR_GAMES_BLOCKED_GAME_IDS as closure_7 } from "set";
import initialize from "initialize";

const require = arg1;
function _getShopCollection() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _fetchSimilarGames() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _getGameAnnouncements() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
initialize = {
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
    return (function fetchSimilarGames(arg0) {
      return outer1_9(...arguments);
    })(arg0);
  },
  retryConfig: initialize,
  failureStaleAfter: require("set").Seconds.MINUTE
};
initialize = {
  backoff() {
    let tmp = importDefault(561);
    const result = 5 * importDefault(664).Millis.SECOND;
    tmp = new tmp(result, 5 * importDefault(664).Millis.MINUTE);
    return tmp;
  }
};
const fetchStore = initialize.createFetchStore(importDefaultResult, initialize);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/game_profile/GameProfileHttpUtils.tsx");

export const getShopCollection = function getShopCollection(closure_0) {
  return _getShopCollection(...arguments);
};
export const useSimilarGameIds = fetchStore;
export const getGameAnnouncements = function getGameAnnouncements(closure_0, arg1) {
  return _getGameAnnouncements(...arguments);
};
