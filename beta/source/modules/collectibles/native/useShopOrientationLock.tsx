// Module ID: 18191
// Function ID: 18192
// Name: useShopOrientationLock
// Dependencies: [19, 14971, 2]
// Exports: useShopOrientationLock

// Module 18191 (useShopOrientationLock)
import applyOrientationLock from "applyOrientationLock" /* 14971 */;
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
