// Module ID: 14340
// Function ID: 108301
// Name: useShopOrientationLock
// Dependencies: []
// Exports: useShopOrientationLock

// Module 14340 (useShopOrientationLock)
let closure_2 = importAll(dependencyMap[0]);
let closure_3 = 0;
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/collectibles/native/useShopOrientationLock.tsx");

export const useShopOrientationLock = function useShopOrientationLock() {
  let closure_0 = React.useRef(false);
  const effect = React.useEffect(() => {
    if (!obj.isMetaQuest()) {
      if (0 === closure_3) {
        callback(closure_1[2]).lockOrientation("PORTRAIT", true);
        const obj2 = callback(closure_1[2]);
      }
      callback.current = true;
      closure_3 = closure_3 + 1;
      return () => {
        if (ref.current) {
          const diff = closure_3 - 1;
          closure_3 = diff;
          if (0 === diff) {
            let obj = ref(closure_1[2]);
            obj = { unlockAfterRotatingToPreviousLock: false };
            obj.unlockOrientation(obj);
          }
          ref.current = false;
        }
      };
    }
    const obj = callback(closure_1[1]);
  }, []);
};
