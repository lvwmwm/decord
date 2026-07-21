// Module ID: 8585
// Function ID: 68147
// Name: useResolveGame
// Dependencies: [31, 8596, 8597, 8599]
// Exports: default

// Module 8585 (useResolveGame)
import module_31 from "module_31";
import useXboxGamePassStoreUrl from "useXboxGamePassStoreUrl";

const result = useXboxGamePassStoreUrl.fileFinishedImporting("modules/games/hooks/useResolveGame.tsx");

export default function useResolveGame(arg0) {
  let applicationId;
  let gameId;
  ({ applicationId, gameId } = arg0);
  const arg1 = gameId;
  let dependencyMap;
  let obj = arg1(dependencyMap[1]);
  let tmp;
  if (null == gameId) {
    tmp = applicationId;
  }
  const getOrFetchApplication = obj.useGetOrFetchApplication(tmp);
  dependencyMap = getOrFetchApplication;
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
  const game = arg1(dependencyMap[2]).useGame(memo);
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
