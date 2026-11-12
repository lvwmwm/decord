// Module ID: 18350
// Function ID: 18351
// Name: useShopOrientationLock
// Dependencies: [19, 15156, 2]
// Exports: useShopOrientationLock

// Module 18350 (useShopOrientationLock)
import applyOrientationLock from "applyOrientationLock" /* 15156 */;
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
