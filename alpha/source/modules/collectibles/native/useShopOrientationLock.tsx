// Module ID: 18473
// Function ID: 18474
// Name: useShopOrientationLock
// Dependencies: [19, 15270, 2]
// Exports: useShopOrientationLock

// Module 18473 (useShopOrientationLock)
import applyOrientationLock from "applyOrientationLock" /* 15270 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/collectibles/native/useShopOrientationLock.tsx");

export function useShopOrientationLock() {
  const effect = react.useEffect(() => {
    const obj = applyOrientationLock;
    obj.applyOrientationLock("PORTRAIT", true);
    return applyOrientationLock.restoreDefaultOrientationLock;
  }, []);
}
