// Module ID: 18355
// Function ID: 18356
// Name: useShopOrientationLock
// Dependencies: [19, 15159, 2]
// Exports: useShopOrientationLock

// Module 18355 (useShopOrientationLock)
import applyOrientationLock from "applyOrientationLock" /* 15159 */;
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
