// Module ID: 10585
// Function ID: 10586
// Name: useGetGameForAppId
// Dependencies: [19, 2138, 7196, 9467, 1380, 504, 2]
// Exports: default, useGetGameResultsForAppIds, useGetGamesForAppIds

// Module 10585 (useGetGameForAppId)
import GlobalUtils from "GlobalUtils" /* 1380 */;
import useGetOrFetchApplications from "useGetOrFetchApplications" /* 7196 */;
import react from "react" /* 19 */;
import GameStore from "GameStore" /* 2138 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let tmp;
const useGame = tmp(9467);
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
  let memo;
  let stateFromStoresArray;
  let stateFromStoresArray1;
  let tmp = memo(stateFromStoresArray[2])(arg0);
  _require = tmp;
  const items = [tmp];
  memo = stateFromStoresArray1.useMemo(() => closure_0.map((getCanonicalGameId) => {
    let canonicalGameId;
    if (getCanonicalGameId != null) {
      canonicalGameId = getCanonicalGameId.getCanonicalGameId();
    }
    if (canonicalGameId == null) {
      canonicalGameId = null;
    }
    return canonicalGameId;
  }), items);
  const items1 = [memo];
  const memo1 = stateFromStoresArray1.useMemo(() => memo.filter(GlobalUtils.isNotNullish), items1);
  let obj = require("useGame");
  const games = obj.useGames(memo1);
  const items2 = [GameStore];
  const items3 = [memo];
  const obj2 = require("get initialized");
  stateFromStoresArray = obj2.useStateFromStoresArray(items2, () => memo.map((item) => {
    game = game.getGame(item);
    if (game == null) {
      game = null;
    }
    return game;
  }), items3);
  const items4 = [GameStore];
  const items5 = [memo];
  const obj3 = require("get initialized");
  stateFromStoresArray1 = obj3.useStateFromStoresArray(items4, () => memo.map((item) => {
    const tmp = null != item && null == closure_1_4.getGame(item) && !closure_1_4.hasNoData(item) && !closure_1_4.didFetchingFail(item);
    return tmp;
  }), items5);
  const items6 = [tmp, memo, stateFromStoresArray, stateFromStoresArray1];
  return stateFromStoresArray1.useMemo(() => closure_0.map((item, index) => {
    const obj = { gameId: memo[index], gameRecord: stateFromStoresArray[index], isLoading: tmp };
    return obj;
  }), items6);
}
export function useGetGamesForAppIds(stateFromStoresArray) {
  let closure_0;
  let memo;
  const tmp = memo(7196)(stateFromStoresArray);
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
