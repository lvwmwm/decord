// Module ID: 6860
// Function ID: 54284
// Name: importDefaultResult1
// Dependencies: []
// Exports: useGames

// Module 6860 (importDefaultResult1)
let closure_3 = importAll(dependencyMap[1]);
const importDefaultResult1 = importDefault(dependencyMap[2]);
let obj = arg1(dependencyMap[4]);
obj = {
  getQueryId: arg1(dependencyMap[3]).QueryIds.GAME,
  failureStaleAfter: 15 * importDefault(dependencyMap[5]).Seconds.SECOND,
  get(arg0) {
    if (null == arg0) {
      return null;
    } else if (importDefaultResult1.hasNoData(arg0)) {
      let NO_DATA = arg1(dependencyMap[4]).NO_DATA;
    } else {
      const game = importDefaultResult1.getGame(arg0);
      NO_DATA = null;
      if (null != game) {
        NO_DATA = game;
      }
    }
  }
};
let closure_2 = importDefault(dependencyMap[0])(async (arg0) => {
  if (null != arg0) {
    const items = [arg0];
    yield callback(closure_1[6]).fetchGamesWithSupplementalData(items);
    const obj = callback(closure_1[6]);
  }
});
obj.load = function() {
  return callback(...arguments);
};
obj.getIsLoading = function getIsLoading(wishlistId) {
  let isFetchingResult = null != wishlistId;
  if (isFetchingResult) {
    isFetchingResult = importDefaultResult1.isFetching(wishlistId);
  }
  return isFetchingResult;
};
obj.getError = function getError(arg0) {
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
const fetchStore = obj.createFetchStore(importDefaultResult1, obj);
const importDefaultResult = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/games/hooks/useGame.tsx");

export const useGame = fetchStore;
export const useGames = function useGames(memo) {
  const arg1 = memo;
  const items = [memo];
  const effect = React.useEffect(() => {
    const items = [
      ...closure_0.map((arg0) => {
        const items = [arg0];
        return items;
      })
    ];
    fetchMany.fetchMany.apply(items);
  }, items);
};
