// Module ID: 18107
// Function ID: 18108
// Name: useShopOrientationLock
// Dependencies: [19, 14930, 2]
// Exports: useShopOrientationLock

// Module 18107 (useShopOrientationLock)
import applyOrientationLock from "applyOrientationLock" /* 14930 */;
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
