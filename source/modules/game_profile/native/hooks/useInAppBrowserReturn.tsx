// Module ID: 8602
// Function ID: 68308
// Name: useInAppBrowserReturn
// Dependencies: [31, 8596, 478, 4096, 8594, 8600, 2]
// Exports: default

// Module 8602 (useInAppBrowserReturn)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
let result = require("isWindows").fileFinishedImporting("modules/game_profile/native/hooks/useInAppBrowserReturn.tsx");

export default function useInAppBrowserReturn(gameId) {
  gameId = gameId.gameId;
  const scrollOffsetRef = gameId.scrollOffsetRef;
  const items = [gameId, scrollOffsetRef];
  const effect = React.useEffect(() => {
    if (null != c0) {
      if (obj.isIOS()) {
        c0 = false;
        let closure_1 = gameId(outer1_2[3]).subscribeToIsInAppBrowserOpen((arg0, arg1) => {
          if (!arg1) {
            if (arg0) {
              let c0 = true;
              let obj = scrollOffsetRef(outer2_2[4]);
              obj = { gameId: c0, initialScrollOffset: ref.current };
              const result = obj.setGameProfilePendingReturn(obj);
            }
          }
          if (arg1) {
            if (!arg0) {
              ref();
              c0 = false;
              const pendingReturn = outer2_4.getPendingReturn();
              if (null != pendingReturn) {
                obj = { gameId: pendingReturn.gameId, source: gameId(outer2_2[5]).GameProfileSources.InAppBrowserReturn, initialScrollOffset: pendingReturn.initialScrollOffset };
                scrollOffsetRef(outer2_2[4]).returnToGameProfile(obj);
                const obj3 = scrollOffsetRef(outer2_2[4]);
              }
            }
          }
        });
        return () => {
          if (!c0) {
            ref();
          }
        };
      }
      obj = gameId(outer1_2[2]);
    }
  }, items);
};
