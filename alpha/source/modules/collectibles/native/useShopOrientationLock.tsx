// Module ID: 17313
// Function ID: 17314
// Name: useShopOrientationLock
// Dependencies: [19, 13673, 2]
// Exports: useShopOrientationLock

// Module 17313 (useShopOrientationLock)
import applyOrientationLock from "applyOrientationLock" /* 13673 */;
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
