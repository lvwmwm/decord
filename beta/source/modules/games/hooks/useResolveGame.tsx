// Module ID: 9319
// Function ID: 9320
// Name: useResolveGame
// Dependencies: [19, 7330, 7480, 2]
// Exports: default

// Module 9319 (useResolveGame)
import useGetOrFetchApplications from "useGetOrFetchApplications" /* 7330 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let tmp;
const useGame = tmp(7480);
const result = size.fileFinishedImporting("modules/games/hooks/useResolveGame.tsx");

export default function useResolveGame(arg0) {
  let applicationId;
  let gameId;
  let isLoading;
  ({ applicationId, gameId } = arg0);
  let getOrFetchApplication;
  let tmp = require;
  let tmp4;
  const useGetOrFetchApplication = useGetOrFetchApplications.useGetOrFetchApplication;
  useGetOrFetchApplications;
  if (null == gameId) {
    tmp4 = applicationId;
  }
  getOrFetchApplication = useGetOrFetchApplication(tmp4);
  const items = [gameId, getOrFetchApplication];
  const memo = react.useMemo(() => {
    let tmp = gameId;
    if (null == gameId) {
      let canonicalGameId = null;
      const obj = getOrFetchApplication;
      if (null != getOrFetchApplication) {
        canonicalGameId = obj.getCanonicalGameId();
      }
      tmp = canonicalGameId;
    }
    return tmp;
  }, items);
  const tmpResult = useGame;
  const game = tmpResult.useGame(memo);
  let data = game.data;
  let obj = { gameId: memo, gameRecord: data, isLoading: null == gameId && null != applicationId && null == getOrFetchApplication || isLoading };
  isLoading = game.isLoading;
  if (data == null) {
    data = null;
  }
  return obj;
};
