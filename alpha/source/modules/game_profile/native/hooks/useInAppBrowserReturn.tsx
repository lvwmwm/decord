// Module ID: 8862
// Function ID: 8863
// Name: useInAppBrowserReturn
// Dependencies: [19, 8858, 558, 576, 1382, 5051, 8856, 8850, 2]

// Module 8862 (useInAppBrowserReturn)
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8850 */;
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 8856 */;
import react from "react" /* 19 */;
import GameProfileStore from "GameProfileStore" /* 8858 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c0;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useInAppBrowserReturn(gameId) {
  let obj = gameId(576);
  const cResult = obj.c(4);
  gameId = gameId.gameId;
  const scrollY = gameId.scrollY;
  if (cResult[0] === gameId) {
    let tmp2;
    let tmp3;
    if (cResult[1] === scrollY) {
      tmp2 = cResult[2];
      tmp3 = cResult[3];
    }
    const effect = react.useEffect(tmp2, tmp3);
  }
  const fn = function s() {
    if (null != c0) {
      let tmp = gameId;
      let obj = gameId(dependencyMap[4]);
      const tmp2 = dependencyMap;
      if (obj.isIOS()) {
        c0 = false;
        const tmpResult = tmp(tmp2[5]);
        let closure_1 = tmpResult.subscribeToIsInAppBrowserOpen((arg0, arg1) => {
          const tmp = arg1;
          if (!tmp) {
            if (arg0) {
              c0 = true;
              const obj = { gameId, initialScrollOffset: scrollY.get() };
              const setGameProfilePendingReturn = GameProfileActionCreatorsDefault.setGameProfilePendingReturn;
              const result = setGameProfilePendingReturn(obj);
            }
          }
          if (arg1) {
            if (!arg0) {
              closure_1();
              c0 = false;
              const pendingReturn = GameProfileStore.getPendingReturn();
              if (null != pendingReturn) {
                const obj2 = { gameId: pendingReturn.gameId, source: GameProfileAnalyticUtils.GameProfileSources.InAppBrowserReturn, initialScrollOffset: pendingReturn.initialScrollOffset };
                const returnToGameProfile = GameProfileActionCreatorsDefault.returnToGameProfile;
                GameProfileActionCreatorsDefault;
                returnToGameProfile(obj2);
              }
            }
          }
        });
        return () => {
          const tmp = c0;
          if (!tmp) {
            closure_1();
          }
        };
      }
    }
  };
  const items = [gameId, scrollY];
  cResult[0] = gameId;
  cResult[1] = scrollY;
  cResult[2] = fn;
  cResult[3] = items;
  tmp3 = items;
  tmp2 = fn;
}) : (function useInAppBrowserReturn(gameId) {
  gameId = gameId.gameId;
  const scrollY = gameId.scrollY;
  const items = [gameId, scrollY];
  const effect = react.useEffect(() => {
    if (null != c0) {
      let tmp = gameId;
      let obj = gameId(dependencyMap[4]);
      const tmp2 = dependencyMap;
      if (obj.isIOS()) {
        c0 = false;
        const tmpResult = tmp(tmp2[5]);
        let closure_1 = tmpResult.subscribeToIsInAppBrowserOpen((arg0, arg1) => {
          const tmp = arg1;
          if (!tmp) {
            if (arg0) {
              c0 = true;
              const obj = { gameId, initialScrollOffset: scrollY.get() };
              const setGameProfilePendingReturn = GameProfileActionCreatorsDefault.setGameProfilePendingReturn;
              const result = setGameProfilePendingReturn(obj);
            }
          }
          if (arg1) {
            if (!arg0) {
              closure_1();
              c0 = false;
              const pendingReturn = GameProfileStore.getPendingReturn();
              if (null != pendingReturn) {
                const obj2 = { gameId: pendingReturn.gameId, source: GameProfileAnalyticUtils.GameProfileSources.InAppBrowserReturn, initialScrollOffset: pendingReturn.initialScrollOffset };
                const returnToGameProfile = GameProfileActionCreatorsDefault.returnToGameProfile;
                GameProfileActionCreatorsDefault;
                returnToGameProfile(obj2);
              }
            }
          }
        });
        return () => {
          const tmp = c0;
          if (!tmp) {
            closure_1();
          }
        };
      }
    }
  }, items);
});
let result = size.fileFinishedImporting("modules/game_profile/native/hooks/useInAppBrowserReturn.tsx");

export default tmp2;
