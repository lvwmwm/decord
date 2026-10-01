// Module ID: 15824
// Function ID: 15825
// Name: UnclaimedGamesActionCreators
// Dependencies: [5, 15825, 1074, 1271, 573, 504, 1091, 559, 2]
// Exports: useHasUnclaimedGames, useUnclaimedGameIdsForGuild

// Module 15824 (UnclaimedGamesActionCreators)
import BackoffDefault from "Backoff" /* 559 */;
import Constants from "Constants" /* 1074 */;
import DurationsDefault from "Durations" /* 1091 */;
import HTTPUtils from "HTTPUtils" /* 1271 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import UnclaimedGamesStore from "UnclaimedGamesStore" /* 15825 */;
import get_initialized from "get initialized" /* 504 */;
import size from "module_2" /* 2 */;

let c2, c3;

function fetchUnclaimedGames() {
  return obj(...arguments);
}
let obj = function _fetchUnclaimedGames() {
  obj = _asyncToGenerator(async (arg0, value) => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        let body;
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_1 = tmp;
            let closure_0 = tmp4;
            body = undefined;
            const HTTP = HTTPUtils.HTTP;
            const obj4 = { url: constants.UNCLAIMED_GAMES, oldFormErrors: true, rejectWithError: false };
            c2 = 1;
            c3 = 1;
            const obj5 = { value: HTTP.get(obj4), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          body = value.body;
          const obj7 = { type: "UNCLAIMED_GAMES_FETCH_SUCCESS", guildIdToGameIds: body };
          obj = closure_129_1(closure_129_2[4]);
          obj.dispatch(obj7);
          c3 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp14) {
        c3 = 3;
        throw tmp14;
      }
    }
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
let closure_6 = [];
obj = {
  getQueryId(arg0) {
    let str = null;
    if (arg0) {
      str = "unclaimed-games";
    }
    return str;
  },
  get() {
    return UnclaimedGamesStore.getMap();
  },
  load() {
    return fetchUnclaimedGames();
  },
  staleAfter: DurationsDefault.Seconds.DAY,
  retryConfig: {
    backoff() {
      const tmp = BackoffDefault;
      const tmp2 = new tmp(5 * DurationsDefault.Millis.MINUTE);
      return tmp2;
    },
    maxRetries: 10
  }
};
const fetchStore = get_initialized.createFetchStore(UnclaimedGamesStore, obj);
const result = size.fileFinishedImporting("modules/game_claim/UnclaimedGamesActionCreators.tsx");

export default { fetch: fetchUnclaimedGames };
export { fetchUnclaimedGames };
export const useUnclaimedGames = fetchStore;
export const useUnclaimedGameIdsForGuild = function useUnclaimedGameIdsForGuild(id) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  const data = fetchStore(flag).data;
  let tmp;
  if (data != null) {
    tmp = data[id];
  }
  if (tmp == null) {
    tmp = closure_6;
  }
  return tmp;
};
export const useHasUnclaimedGames = function useHasUnclaimedGames(id, gameClaimCoachmarkEnabled) {
  let flag = gameClaimCoachmarkEnabled;
  if (gameClaimCoachmarkEnabled === undefined) {
    flag = true;
  }
  if (flag === undefined) {
    flag = true;
  }
  const data = fetchStore(flag).data;
  let tmp;
  if (data != null) {
    tmp = data[id];
  }
  if (tmp == null) {
    tmp = closure_6;
  }
  return tmp.length > 0;
};
