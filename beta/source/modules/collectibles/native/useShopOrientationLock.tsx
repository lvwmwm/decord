// Module ID: 15419
// Function ID: 15420
// Name: useShopOrientationLock
// Dependencies: [19, 10758, 2]
// Exports: useShopOrientationLock

// Module 15419 (useShopOrientationLock)
import applyOrientationLock from "applyOrientationLock" /* 10758 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/collectibles/native/useShopOrientationLock.tsx");

export const useShopOrientationLock = function useShopOrientationLock() {
  const effect = react.useEffect(() => {
    let obj = applyOrientationLock;
    obj.applyOrientationLock("PORTRAIT", true);
    return () => {
      const obj = closure_1_0(closure_1_1[1]);
      const result = obj.releaseOrientationLock({ unlockAfterRotatingToPreviousLock: false });
    };
  }, []);
};
