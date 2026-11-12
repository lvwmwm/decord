// Module ID: 10218
// Function ID: 10219
// Name: useInAppBrowserReturn
// Dependencies: [19, 10214, 1357, 5981, 10212, 10217, 2]
// Exports: default

// Module 10218 (useInAppBrowserReturn)
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 10212 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 10217 */;
import react from "react" /* 19 */;
import GameProfileStore from "GameProfileStore" /* 10214 */;
import size from "module_2" /* 2 */;

let c0;

let result = size.fileFinishedImporting("modules/game_profile/native/hooks/useInAppBrowserReturn.tsx");

export default function useInAppBrowserReturn(gameId) {
  gameId = gameId.gameId;
  const scrollY = gameId.scrollY;
  const items = [gameId, scrollY];
  const effect = react.useEffect(() => {
    if (null != c0) {
      let tmp = gameId;
      let obj = gameId(dependencyMap[2]);
      const tmp2 = dependencyMap;
      if (obj.isIOS()) {
        c0 = false;
        const tmpResult = tmp(tmp2[3]);
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
};
