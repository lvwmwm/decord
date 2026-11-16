// Module ID: 7577
// Function ID: 7578
// Name: useGame
// Dependencies: [5, 19, 2138, 1072, 504, 1089, 7578, 2]
// Exports: useGames

// Module 7577 (useGame)
import Constants from "Constants" /* 1072 */;
import DurationsDefault from "Durations" /* 1089 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import GameStore from "GameStore" /* 2138 */;
import get_initialized from "get initialized" /* 504 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c4;

const QueryIds = Constants.QueryIds;
let obj = {
  getQueryId: QueryIds.GAME,
  failureStaleAfter: 15 * DurationsDefault.Seconds.SECOND,
  get(nextResult) {
    let tmp = null;
    if (null != nextResult) {
      let NO_DATA;
      const obj = GameStore;
      if (GameStore.hasNoData(nextResult)) {
        NO_DATA = require("get initialized").NO_DATA;
      } else {
        NO_DATA = obj.getGame(nextResult);
        if (NO_DATA == null) {
          NO_DATA = null;
        }
      }
      tmp = NO_DATA;
    }
    return tmp;
  },
  load() {
    return closure_2(...arguments);
  },
  getIsLoading(arg0) {
    const isFetchingResult = null != arg0 && GameStore.isFetching(arg0);
    return isFetchingResult;
  },
  getError(nextResult) {
    let error = null;
    if (null != nextResult) {
      error = null;
      if (GameStore.didFetchingFail(nextResult)) {
        const _Error = Error;
        const self = this;
        const self2 = this;
        error = new Error("Failed to fetch game data");
      }
    }
    return error;
  }
};
const createFetchStore = get_initialized.createFetchStore;
let closure_2 = _asyncToGenerator(async (arg0, value) => {
  let closure_3;
  let flag;
  let obj2;
  let closure_0 = arg0;
  let closure_1 = value;
  if (1 === c4) {
    if (arg0 === 1) {
      let c5 = 3;
      throw value;
    } else if (arg0 === 2) {
      c5 = 3;
      const obj5 = { value, done: true };
      return obj5;
    } else if (null != closure_0) {
      const items = [closure_0];
      c4 = 2;
      c5 = 1;
      const obj6 = { value: obj2.fetchGamesWithSupplementalData(items, flag), done: false };
      obj2 = closure_131_0(closure_131_1[6]);
      return obj6;
    }
  } else if (arg0 === 1) {
    c5 = 3;
    throw value;
  } else if (arg0 === 2) {
    c5 = 3;
    const obj = { value, done: true };
    return obj;
  }
  await "HermesInternal";
  flag = closure_1;
  if (closure_1 === undefined) {
    flag = false;
  }
  return "flexDirection";
});
const fetchStore = createFetchStore(GameStore, obj);
const result = size.fileFinishedImporting("modules/games/hooks/useGame.tsx");

export const useGame = fetchStore;
export function useGames(memo) {
  let items = [memo];
  const effect = react.useEffect(() => {
    let items = [
      ...closure_0.map((item) => {
        const items = [item];
        return items;
      })
    ];
    fetchStore.fetchMany.apply(items);
  }, items);
}
