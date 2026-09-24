// Module ID: 8981
// Function ID: 8982
// Name: useResolveGame
// Dependencies: [19, 558, 568, 7447, 7585, 2]

// Module 8981 (useResolveGame)
import c from "c" /* 568 */;
import useGetOrFetchApplications from "useGetOrFetchApplications" /* 7447 */;
import noop from "module_19" /* 19 */;

const useGame = tmp(7585);
require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/games/hooks/useResolveGame.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(6);
  ({ applicationId, gameId } = arg0);
  let tmp4;
  if (null == gameId) {
    tmp4 = applicationId;
  }
  const getOrFetchApplication = useGetOrFetchApplications.useGetOrFetchApplication(tmp4);
  let tmp5 = gameId;
  if (null == gameId) {
    tmp5 = null;
    if (null != getOrFetchApplication) {
      if (cResult[0] !== getOrFetchApplication) {
        const canonicalGameId = getOrFetchApplication.getCanonicalGameId();
        cResult[0] = getOrFetchApplication;
        cResult[1] = canonicalGameId;
      }
    }
  }
  const game = useGame.useGame(tmp5);
  ({ data, isLoading } = game);
  if (data == null) {
    data = null;
  }
  if (cResult[2] === tmp5) {
    if (cResult[3] === data) {
      if (cResult[4] === tmp10) {
        let tmp11 = cResult[5];
      }
      return tmp11;
    }
  }
  const obj3 = { gameId: tmp5, gameRecord: data, isLoading: null == gameId && null != applicationId && null == getOrFetchApplication || isLoading };
  cResult[2] = tmp5;
  cResult[3] = data;
  cResult[4] = null == gameId && null != applicationId && null == getOrFetchApplication || isLoading;
  cResult[5] = obj3;
  tmp11 = obj3;
}) : ((arg0) => {
  ({ applicationId, gameId } = arg0);
  let getOrFetchApplication;
  let tmp3;
  if (null == gameId) {
    tmp3 = applicationId;
  }
  getOrFetchApplication = useGetOrFetchApplications.useGetOrFetchApplication(tmp3);
  const items = [gameId, getOrFetchApplication];
  const memo = noop.useMemo(() => {
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
  const game = useGame.useGame(memo);
  let data = game.data;
  const obj2 = { gameId: memo, gameRecord: null, isLoading: null };
  if (data == null) {
    data = null;
  }
  obj2.gameRecord = data;
  obj2.isLoading = null == gameId && null != applicationId && null == getOrFetchApplication || game.isLoading;
  return obj2;
});
