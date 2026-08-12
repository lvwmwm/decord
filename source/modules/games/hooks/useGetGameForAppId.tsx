// Module ID: 9287
// Function ID: 9288
// Name: useGetGameForAppId
// Dependencies: [19, 4365, 5773, 5965, 1370, 589, 2]
// Exports: default, useGetGamesForAppIds

// Module 9287 (useGetGameForAppId)
import noop from "noop";
import handleLoadMessages from "handleLoadMessages";

let require = arg1;
const result = require("useGetOrFetchApplications").fileFinishedImporting("modules/games/hooks/useGetGameForAppId.tsx");

export default function useGetGameForAppId(applicationId) {
  let obj = require(5773) /* useGetOrFetchApplications */;
  const getOrFetchApplication = obj.useGetOrFetchApplication(applicationId);
  let canonicalGameId;
  if (getOrFetchApplication != null) {
    canonicalGameId = getOrFetchApplication.getCanonicalGameId();
  }
  if (canonicalGameId == null) {
    canonicalGameId = null;
  }
  const game = require(5965) /* importDefaultResult1 */.useGame(canonicalGameId);
  let data = game.data;
  obj = { gameId: canonicalGameId, gameRecord: null, isLoading: null };
  if (data == null) {
    data = null;
  }
  obj[1] = data;
  obj[2] = null != applicationId && null == getOrFetchApplication || game.isLoading;
  return obj;
};
export const useGetGamesForAppIds = function useGetGamesForAppIds(stateFromStoresArray) {
  const tmp = memo(5773)(stateFromStoresArray);
  const require = tmp;
  const items = [tmp];
  memo = React.useMemo(() => {
    const found = tmp.filter(tmp(outer1_2[4]).isNotNullish);
    const mapped = found.map((getCanonicalGameId) => getCanonicalGameId.getCanonicalGameId());
    return mapped.filter(tmp(outer1_2[4]).isNotNullish);
  }, items);
  const games = require(5965) /* importDefaultResult1 */.useGames(memo);
  const obj = require(5965) /* importDefaultResult1 */;
  const items1 = [handleLoadMessages];
  return require(589) /* initialize */.useStateFromStoresArray(items1, () => {
    const mapped = memo.map((closure_0) => game.getGame(closure_0));
    return mapped.filter(tmp(outer1_2[4]).isNotNullish);
  });
};
