// Module ID: 6865
// Function ID: 54327
// Name: importDefaultResult1
// Dependencies: [5, 31, 4151, 653, 566, 664, 6866, 2]
// Exports: useGames

// Module 6865 (importDefaultResult1)
import result from "result";
import importDefaultResult1 from "_isNativeReflectConstruct";
import initialize from "initialize";
import importDefaultResult from "set";

const require = arg1;
initialize = {
  getQueryId: require("ME").QueryIds.GAME,
  failureStaleAfter: 15 * require("set").Seconds.SECOND,
  get(arg0) {
    if (null == arg0) {
      return null;
    } else if (importDefaultResult1.hasNoData(arg0)) {
      let NO_DATA = require(566) /* initialize */.NO_DATA;
    } else {
      const game = importDefaultResult1.getGame(arg0);
      NO_DATA = null;
      if (null != game) {
        NO_DATA = game;
      }
    }
  }
};
let closure_2 = require("set")(async (arg0) => {
  if (null != arg0) {
    const items = [arg0];
    yield outer1_0(outer1_1[6]).fetchGamesWithSupplementalData(items);
    const obj = outer1_0(outer1_1[6]);
  }
});
initialize.load = function() {
  return callback(...arguments);
};
initialize.getIsLoading = function getIsLoading(wishlistId) {
  let isFetchingResult = null != wishlistId;
  if (isFetchingResult) {
    isFetchingResult = importDefaultResult1.isFetching(wishlistId);
  }
  return isFetchingResult;
};
initialize.getError = function getError(arg0) {
  let error = null;
  if (null != arg0) {
    error = null;
    if (importDefaultResult1.didFetchingFail(arg0)) {
      const _Error = Error;
      error = new Error("Failed to fetch game data");
    }
  }
  return error;
};
const fetchStore = initialize.createFetchStore(importDefaultResult1, initialize);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/games/hooks/useGame.tsx");

export const useGame = fetchStore;
export const useGames = function useGames(memo) {
  let closure_0 = memo;
  let items = [memo];
  const effect = React.useEffect(() => {
    let items = [
      ...closure_0.map((arg0) => {
        const items = [arg0];
        return items;
      })
    ];
    outer1_5.fetchMany.apply(items);
  }, items);
};
