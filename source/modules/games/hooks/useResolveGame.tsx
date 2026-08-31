// Module ID: 8768
// Function ID: 8769
// Name: useResolveGame
// Dependencies: [19, 5927, 6122, 2]
// Exports: default

// Module 8768 (useResolveGame)
import closure_2 from "noop" /* 19 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/games/hooks/useResolveGame.tsx");

export default function useResolveGame(arg0) {
  ({ applicationId, gameId } = arg0);
  let getOrFetchApplication;
  let obj = gameId(getOrFetchApplication[1]);
  let tmp3;
  if (null == gameId) {
    tmp3 = applicationId;
  }
  getOrFetchApplication = obj.useGetOrFetchApplication(tmp3);
  const items = [gameId, getOrFetchApplication];
  const memo = React.useMemo(() => {
    let tmp = gameId;
    if (null == gameId) {
      let canonicalGameId = null;
      if (null != getOrFetchApplication) {
        canonicalGameId = obj.getCanonicalGameId();
      }
      tmp = canonicalGameId;
      obj = getOrFetchApplication;
    }
    return tmp;
  }, items);
  const game = gameId(getOrFetchApplication[2]).useGame(memo);
  let data = game.data;
  obj = { gameId: memo, gameRecord: null, isLoading: null };
  if (data == null) {
    data = null;
  }
  obj[1] = data;
  obj[2] = null == gameId && null != applicationId && null == getOrFetchApplication || game.isLoading;
  return obj;
};
