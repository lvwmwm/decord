// Module ID: 8590
// Function ID: 68233
// Name: useInAppBrowserReturn
// Dependencies: []
// Exports: default

// Module 8590 (useInAppBrowserReturn)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/game_profile/native/hooks/useInAppBrowserReturn.tsx");

export default function useInAppBrowserReturn(gameId) {
  gameId = gameId.gameId;
  const arg1 = gameId;
  const scrollOffsetRef = gameId.scrollOffsetRef;
  const importDefault = scrollOffsetRef;
  const items = [gameId, scrollOffsetRef];
  const effect = React.useEffect(() => {
    if (null != gameId) {
      if (obj.isIOS()) {
        const gameId = false;
        let closure_1 = gameId(closure_2[3]).subscribeToIsInAppBrowserOpen((arg0, arg1) => {
          if (!arg1) {
            if (arg0) {
              let callback = true;
              let obj = ref(closure_2[4]);
              obj = { gameId: callback, initialScrollOffset: ref.current };
              const result = obj.setGameProfilePendingReturn(obj);
            }
          }
          if (arg1) {
            if (!arg0) {
              ref();
              callback = false;
              const pendingReturn = pendingReturn.getPendingReturn();
              if (null != pendingReturn) {
                obj = { gameId: pendingReturn.gameId, source: callback(closure_2[5]).GameProfileSources.InAppBrowserReturn, initialScrollOffset: pendingReturn.initialScrollOffset };
                ref(closure_2[4]).returnToGameProfile(obj);
                const obj3 = ref(closure_2[4]);
              }
            }
          }
        });
        return () => {
          if (!closure_0) {
            ref();
          }
        };
      }
      const obj = gameId(closure_2[2]);
    }
  }, items);
};
