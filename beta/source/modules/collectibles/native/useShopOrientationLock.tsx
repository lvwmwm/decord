// Module ID: 18190
// Function ID: 18191
// Name: useShopOrientationLock
// Dependencies: [19, 14970, 2]
// Exports: useShopOrientationLock

// Module 18190 (useShopOrientationLock)
import applyOrientationLock from "applyOrientationLock" /* 14970 */;
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
