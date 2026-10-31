// Module ID: 17815
// Function ID: 17816
// Name: useShopOrientationLock
// Dependencies: [19, 14691, 2]
// Exports: useShopOrientationLock

// Module 17815 (useShopOrientationLock)
import applyOrientationLock from "applyOrientationLock" /* 14691 */;
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
