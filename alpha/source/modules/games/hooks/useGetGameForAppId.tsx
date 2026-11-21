// Module ID: 9741
// Function ID: 9742
// Name: useGetGameForAppId
// Dependencies: [19, 2164, 2140, 6864, 9053, 504, 1254, 2]
// Exports: default, useGetGameResultsForAppIds, useGetGamesForAppIds

// Module 9741 (useGetGameForAppId)
import GlobalUtils from "GlobalUtils" /* 1254 */;
import useGetOrFetchApplications from "useGetOrFetchApplications" /* 6864 */;
import react from "react" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 2164 */;
import GameStore from "GameStore" /* 2140 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let tmp;
const useGame = tmp(9053);
const result = size.fileFinishedImporting("modules/games/hooks/useGetGameForAppId.tsx");

export default function useGetGameForAppId(applicationId) {
  let isLoading;
  const obj = useGetOrFetchApplications;
  const getOrFetchApplication = obj.useGetOrFetchApplication(applicationId);
  let canonicalGameId;
  if (getOrFetchApplication != null) {
    canonicalGameId = getOrFetchApplication.getCanonicalGameId();
  }
  if (canonicalGameId == null) {
    canonicalGameId = null;
  }
  const tmpResult = useGame;
  const game = tmpResult.useGame(canonicalGameId);
  let data = game.data;
  const obj2 = { gameId: canonicalGameId, gameRecord: data, isLoading: null != applicationId && null == getOrFetchApplication || isLoading };
  isLoading = game.isLoading;
  if (data == null) {
    data = null;
  }
  return obj2;
};
export function useGetGameResultsForAppIds(arg0) {
  let closure_0;
  let closure_1;
  let memo;
  let stateFromStoresArray;
  let stateFromStoresArray1;
  let stateFromStoresArray2;
  _require = arg0;
  let tmp = require("useGetOrFetchApplications")(arg0);
  importDefault = tmp;
  let obj = require("get initialized");
  const items = [stateFromStoresArray1];
  const items1 = [arg0];
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    let hydrated;
    return closure_0.map((item) => {
      const isHydratedResult = hydrated.isHydrated(item);
      const tmp2 = !isHydratedResult && !hydrated.didFetchingApplicationFail(item);
      return tmp2;
    });
  }, items1);
  const items2 = [tmp];
  memo = memo.useMemo(() => closure_1.map((getCanonicalGameId) => {
    let canonicalGameId;
    if (getCanonicalGameId != null) {
      canonicalGameId = getCanonicalGameId.getCanonicalGameId();
    }
    if (canonicalGameId == null) {
      canonicalGameId = null;
    }
    return canonicalGameId;
  }), items2);
  const items3 = [memo];
  const memo1 = memo.useMemo(() => memo.filter(GlobalUtils.isNotNullish), items3);
  const obj2 = require("useGame");
  const games = obj2.useGames(memo1);
  const items4 = [stateFromStoresArray2];
  const items5 = [memo];
  const obj3 = require("get initialized");
  stateFromStoresArray1 = obj3.useStateFromStoresArray(items4, () => memo.map((item) => {
    game = game.getGame(item);
    if (game == null) {
      game = null;
    }
    return game;
  }), items5);
  const items6 = [stateFromStoresArray2];
  const items7 = [memo];
  const obj4 = require("get initialized");
  stateFromStoresArray2 = obj4.useStateFromStoresArray(items6, () => memo.map((item) => {
    const tmp = null != item && null == stateFromStoresArray2.getGame(item) && !stateFromStoresArray2.hasNoData(item) && !stateFromStoresArray2.didFetchingFail(item);
    return tmp;
  }), items7);
  const items8 = [memo, stateFromStoresArray1, stateFromStoresArray, stateFromStoresArray2];
  return memo.useMemo(() => memo.map((gameId, index) => {
    const obj = { gameId, gameRecord: stateFromStoresArray1[index], isLoading: tmp };
    return obj;
  }), items8);
}
export function useGetGamesForAppIds(stateFromStoresArray) {
  let closure_0;
  let memo;
  const tmp = memo(6864)(stateFromStoresArray);
  _require = tmp;
  const items = [tmp];
  memo = react.useMemo(() => {
    const found = closure_0.filter(GlobalUtils.isNotNullish);
    const mapped = found.map((getCanonicalGameId) => getCanonicalGameId.getCanonicalGameId());
    return mapped.filter(GlobalUtils.isNotNullish);
  }, items);
  const obj = require("useGame");
  const games = obj.useGames(memo);
  const items1 = [GameStore];
  const obj2 = require("get initialized");
  return obj2.useStateFromStoresArray(items1, () => {
    let game;
    const mapped = memo.map((item) => game.getGame(item));
    return mapped.filter(GlobalUtils.isNotNullish);
  });
}
