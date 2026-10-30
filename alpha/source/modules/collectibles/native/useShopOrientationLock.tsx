// Module ID: 17771
// Function ID: 17772
// Name: useShopOrientationLock
// Dependencies: [19, 14653, 2]
// Exports: useShopOrientationLock

// Module 17771 (useShopOrientationLock)
import applyOrientationLock from "applyOrientationLock" /* 14653 */;
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
