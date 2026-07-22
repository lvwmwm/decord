// Module ID: 14904
// Function ID: 112278
// Name: fetchUnclaimedGames
// Dependencies: []
// Exports: useHasUnclaimedGames

// Module 14904 (fetchUnclaimedGames)
function fetchUnclaimedGames() {
  return _fetchUnclaimedGames(...arguments);
}
function _fetchUnclaimedGames() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _fetchUnclaimedGames = obj;
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
let closure_3 = importDefault(dependencyMap[0]);
const importDefaultResult = importDefault(dependencyMap[1]);
const Endpoints = arg1(dependencyMap[2]).Endpoints;
let closure_6 = [];
let obj = arg1(dependencyMap[5]);
obj = {
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
  staleAfter: importDefault(dependencyMap[6]).Seconds.DAY,
  retryConfig: obj
};
obj = {
  backoff() {
    let tmp = importDefault(dependencyMap[7]);
    tmp = new tmp(5 * importDefault(dependencyMap[6]).Millis.MINUTE);
    return tmp;
  },
  maxRetries: 10
};
const fetchStore = obj.createFetchStore(importDefaultResult, obj);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/game_claim/UnclaimedGamesActionCreators.tsx");

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
