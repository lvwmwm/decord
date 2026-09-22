// Module ID: 8963
// Function ID: 8964
// Name: useInAppBrowserReturn
// Dependencies: [19, 8958, 1365, 4721, 8956, 8962, 2]
// Exports: default

// Module 8963 (useInAppBrowserReturn)
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 8956 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8962 */;
import noop from "module_19" /* 19 */;
import GameProfileStore from "GameProfileStore" /* 8958 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/game_profile/native/hooks/useInAppBrowserReturn.tsx");

export default function useInAppBrowserReturn(gameId) {
  gameId = gameId.gameId;
  const scrollY = gameId.scrollY;
  const items = [gameId, scrollY];
  const effect = noop.useEffect(() => {
    if (null != c0) {
      if (obj.isIOS()) {
        c0 = false;
        closure_1 = tmp(tmp2[3]).subscribeToIsInAppBrowserOpen((arg0, arg1) => {
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
      obj = gameId(dependencyMap[2]);
      tmp = gameId;
      tmp2 = dependencyMap;
    }
  }, items);
};
