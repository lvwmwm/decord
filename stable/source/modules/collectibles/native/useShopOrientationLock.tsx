// Module ID: 16129
// Function ID: 16130
// Name: useShopOrientationLock
// Dependencies: [19, 12065, 2]
// Exports: useShopOrientationLock

// Module 16129 (useShopOrientationLock)
import applyOrientationLock from "applyOrientationLock" /* 12065 */;
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
