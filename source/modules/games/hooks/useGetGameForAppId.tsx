// Module ID: 9247
// Function ID: 9248
// Name: useGetGameForAppId
// Dependencies: [19, 4324, 5734, 5926, 1370, 589, 2]
// Exports: default, useGetGamesForAppIds

// Module 9247 (useGetGameForAppId)
import noop from "noop";
import handleLoadMessages from "handleLoadMessages";

let require = arg1;
const result = require("useGetOrFetchApplications").fileFinishedImporting("modules/games/hooks/useGetGameForAppId.tsx");

export default function useGetGameForAppId(applicationId) {
  let obj = require(5734) /* useGetOrFetchApplications */;
  const getOrFetchApplication = obj.useGetOrFetchApplication(applicationId);
  let canonicalGameId;
  if (getOrFetchApplication != null) {
    canonicalGameId = getOrFetchApplication.getCanonicalGameId();
  }
  if (canonicalGameId == null) {
    canonicalGameId = null;
  }
  const game = require(5926) /* importDefaultResult1 */.useGame(canonicalGameId);
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
  const tmp = memo(5734)(stateFromStoresArray);
  const require = tmp;
  const items = [tmp];
  memo = React.useMemo(() => {
    const found = tmp.filter(tmp(outer1_2[4]).isNotNullish);
    const mapped = found.map((getCanonicalGameId) => getCanonicalGameId.getCanonicalGameId());
    return mapped.filter(tmp(outer1_2[4]).isNotNullish);
  }, items);
  const games = require(5926) /* importDefaultResult1 */.useGames(memo);
  const obj = require(5926) /* importDefaultResult1 */;
  const items1 = [handleLoadMessages];
  return require(589) /* initialize */.useStateFromStoresArray(items1, () => {
    const mapped = memo.map((closure_0) => game.getGame(closure_0));
    return mapped.filter(tmp(outer1_2[4]).isNotNullish);
  });
};
