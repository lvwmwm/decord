// Module ID: 9193
// Function ID: 9194
// Name: useGetGameForAppId
// Dependencies: [19, 2001, 6589, 6727, 1370, 504, 2]
// Exports: default, useGetGamesForAppIds

// Module 9193 (useGetGameForAppId)
import GlobalUtils from "GlobalUtils" /* 1370 */;
import useGetOrFetchApplications from "useGetOrFetchApplications" /* 6589 */;
import react from "react" /* 19 */;
import GameStore from "GameStore" /* 2001 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let tmp;
const useGame = tmp(6727);
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
export const useGetGamesForAppIds = function useGetGamesForAppIds(stateFromStoresArray) {
  let closure_0;
  let memo;
  const tmp = memo(6589)(stateFromStoresArray);
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
};
