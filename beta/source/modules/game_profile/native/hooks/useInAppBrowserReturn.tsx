// Module ID: 8988
// Function ID: 8989
// Name: useInAppBrowserReturn
// Dependencies: [19, 8984, 558, 568, 1369, 4754, 8982, 8976, 2]

// Module 8988 (useInAppBrowserReturn)
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8976 */;
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 8982 */;
import noop from "module_19" /* 19 */;
import GameProfileStore from "GameProfileStore" /* 8984 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/game_profile/native/hooks/useInAppBrowserReturn.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((gameId) => {
  const cResult = gameId(568).c(4);
  gameId = gameId.gameId;
  const scrollY = gameId.scrollY;
  if (cResult[0] === gameId) {
    if (cResult[1] === scrollY) {
      let tmp2 = cResult[2];
      let tmp3 = cResult[3];
    }
    const effect = noop.useEffect(tmp2, tmp3);
  }
  const fn = function s() {
    if (null != c0) {
      if (obj.isIOS()) {
        c0 = false;
        closure_1 = tmp(tmp2[5]).subscribeToIsInAppBrowserOpen((arg0, arg1) => {
          if (!arg1) {
            if (arg0) {
              c0 = true;
              const obj2 = { gameId, initialScrollOffset: scrollY.get() };
              const result = GameProfileActionCreatorsDefault.setGameProfilePendingReturn(obj2);
            }
          }
          if (arg1) {
            if (!arg0) {
              closure_1();
              c0 = false;
              const pendingReturn = GameProfileStore.getPendingReturn();
              if (null != pendingReturn) {
                const obj4 = { gameId: pendingReturn.gameId, source: GameProfileAnalyticUtils.GameProfileSources.InAppBrowserReturn, initialScrollOffset: pendingReturn.initialScrollOffset };
                GameProfileActionCreatorsDefault.returnToGameProfile(obj4);
              }
            }
          }
        });
        return () => {
          if (!c0) {
            closure_1();
          }
        };
      }
      obj = gameId(dependencyMap[4]);
      tmp = gameId;
      tmp2 = dependencyMap;
    }
  };
  const items = [gameId, scrollY];
  cResult[0] = gameId;
  cResult[1] = scrollY;
  cResult[2] = fn;
  cResult[3] = items;
  tmp3 = items;
  tmp2 = fn;
}) : ((gameId) => {
  gameId = gameId.gameId;
  const scrollY = gameId.scrollY;
  const items = [gameId, scrollY];
  const effect = noop.useEffect(() => {
    if (null != c0) {
      if (obj.isIOS()) {
        c0 = false;
        closure_1 = tmp(tmp2[5]).subscribeToIsInAppBrowserOpen((arg0, arg1) => {
          if (!arg1) {
            if (arg0) {
              c0 = true;
              const obj2 = { gameId, initialScrollOffset: scrollY.get() };
              const result = GameProfileActionCreatorsDefault.setGameProfilePendingReturn(obj2);
            }
          }
          if (arg1) {
            if (!arg0) {
              closure_1();
              c0 = false;
              const pendingReturn = GameProfileStore.getPendingReturn();
              if (null != pendingReturn) {
                const obj4 = { gameId: pendingReturn.gameId, source: GameProfileAnalyticUtils.GameProfileSources.InAppBrowserReturn, initialScrollOffset: pendingReturn.initialScrollOffset };
                GameProfileActionCreatorsDefault.returnToGameProfile(obj4);
              }
            }
          }
        });
        return () => {
          if (!c0) {
            closure_1();
          }
        };
      }
      obj = gameId(dependencyMap[4]);
      tmp = gameId;
      tmp2 = dependencyMap;
    }
  }, items);
});
