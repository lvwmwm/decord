// Module ID: 17287
// Function ID: 17288
// Name: useShopOrientationLock
// Dependencies: [19, 13769, 2]
// Exports: useShopOrientationLock

// Module 17287 (useShopOrientationLock)
import applyOrientationLock from "applyOrientationLock" /* 13769 */;
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
