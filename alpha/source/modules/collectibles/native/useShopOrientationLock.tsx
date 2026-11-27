// Module ID: 17490
// Function ID: 17491
// Name: useShopOrientationLock
// Dependencies: [19, 13855, 2]
// Exports: useShopOrientationLock

// Module 17490 (useShopOrientationLock)
import applyOrientationLock from "applyOrientationLock" /* 13855 */;
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
