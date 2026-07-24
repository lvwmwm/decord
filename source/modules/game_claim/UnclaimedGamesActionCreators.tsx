// Module ID: 15067
// Function ID: 114767
// Name: fetchUnclaimedGames
// Dependencies: [5, 15068, 653, 507, 686, 566, 664, 561, 2]
// Exports: useHasUnclaimedGames

// Module 15067 (fetchUnclaimedGames)
import closure_3 from "initialize";
import importDefaultResult from "_isNativeReflectConstruct";
import { Endpoints } from "ME";
import initialize from "initialize";

const require = arg1;
function fetchUnclaimedGames() {
  return _fetchUnclaimedGames(...arguments);
}
function _fetchUnclaimedGames() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function useUnclaimedGameIdsForGuild(id, flag) {
  if (flag === undefined) {
    flag = true;
  }
  const data = fetchStore(flag).data;
  let tmp;
  if (null != data) {
    tmp = data[id];
  }
  if (null == tmp) {
    tmp = closure_6;
  }
  return tmp;
}
let closure_6 = [];
initialize = {
  getQueryId(arg0) {
    let str = null;
    if (arg0) {
      str = "unclaimed-games";
    }
    return str;
  },
  get() {
    return importDefaultResult.getMap();
  },
  load() {
    return fetchUnclaimedGames();
  },
  staleAfter: require("set").Seconds.DAY,
  retryConfig: initialize
};
initialize = {
  backoff() {
    let tmp = importDefault(561);
    tmp = new tmp(5 * importDefault(664).Millis.MINUTE);
    return tmp;
  },
  maxRetries: 10
};
const fetchStore = initialize.createFetchStore(importDefaultResult, initialize);
const result = require("ME").fileFinishedImporting("modules/game_claim/UnclaimedGamesActionCreators.tsx");

export default { fetch: fetchUnclaimedGames };
export { fetchUnclaimedGames };
export const useUnclaimedGames = fetchStore;
export { useUnclaimedGameIdsForGuild };
export const useHasUnclaimedGames = function useHasUnclaimedGames(id, gameClaimCoachmarkEnabled) {
  let flag = gameClaimCoachmarkEnabled;
  if (gameClaimCoachmarkEnabled === undefined) {
    flag = true;
  }
  return useUnclaimedGameIdsForGuild(id, flag).length > 0;
};
