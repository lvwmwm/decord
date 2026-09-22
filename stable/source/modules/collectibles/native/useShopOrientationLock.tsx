// Module ID: 15899
// Function ID: 15900
// Name: useShopOrientationLock
// Dependencies: [19, 11916, 2]
// Exports: useShopOrientationLock

// Module 15899 (useShopOrientationLock)
import applyOrientationLock from "applyOrientationLock" /* 11916 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/useShopOrientationLock.tsx");

export const useShopOrientationLock = function useShopOrientationLock() {
  const effect = noop.useEffect(() => {
    applyOrientationLock.applyOrientationLock("PORTRAIT", true);
    return () => {
      const result = closure_1_0(closure_1_1[1]).releaseOrientationLock({ unlockAfterRotatingToPreviousLock: false });
    };
  }, []);
};
