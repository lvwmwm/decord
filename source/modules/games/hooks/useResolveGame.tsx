// Module ID: 8593
// Function ID: 68210
// Name: useResolveGame
// Dependencies: [31, 5470, 6865, 2]
// Exports: default

// Module 8593 (useResolveGame)
import result from "result";

const require = arg1;
const result = require("importDefaultResult1").fileFinishedImporting("modules/games/hooks/useResolveGame.tsx");

export default function useResolveGame(arg0) {
  let applicationId;
  let gameId;
  ({ applicationId, gameId } = arg0);
  let getOrFetchApplication;
  let obj = gameId(getOrFetchApplication[1]);
  let tmp;
  if (null == gameId) {
    tmp = applicationId;
  }
  getOrFetchApplication = obj.useGetOrFetchApplication(tmp);
  const items = [gameId, getOrFetchApplication];
  const memo = React.useMemo(() => {
    if (null != gameId) {
      let canonicalGameId = gameId;
    } else {
      canonicalGameId = null;
      if (null != getOrFetchApplication) {
        canonicalGameId = getOrFetchApplication.getCanonicalGameId();
      }
    }
    return canonicalGameId;
  }, items);
  const game = gameId(getOrFetchApplication[2]).useGame(memo);
  const data = game.data;
  obj = { gameId: memo };
  let tmp5 = null;
  if (null != data) {
    tmp5 = data;
  }
  obj.gameRecord = tmp5;
  obj.isLoading = null == gameId && null != applicationId && null == getOrFetchApplication || game.isLoading;
  return obj;
};
