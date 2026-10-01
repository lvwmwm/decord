// Module ID: 15636
// Function ID: 15637
// Name: useShopOrientationLock
// Dependencies: [19, 10964, 2]
// Exports: useShopOrientationLock

// Module 15636 (useShopOrientationLock)
import applyOrientationLock from "applyOrientationLock" /* 10964 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/useShopOrientationLock.tsx");

export const useShopOrientationLock = function useShopOrientationLock() {
  const effect = noop.useEffect(() => {
    applyOrientationLock.applyOrientationLock("PORTRAIT", true);
    return applyOrientationLock.restoreDefaultOrientationLock;
  }, []);
};
