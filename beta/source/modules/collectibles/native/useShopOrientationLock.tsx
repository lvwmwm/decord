// Module ID: 18193
// Function ID: 18194
// Name: useShopOrientationLock
// Dependencies: [19, 14973, 2]
// Exports: useShopOrientationLock

// Module 18193 (useShopOrientationLock)
import applyOrientationLock from "applyOrientationLock" /* 14973 */;
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
