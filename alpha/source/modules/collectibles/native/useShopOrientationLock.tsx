// Module ID: 17971
// Function ID: 17972
// Name: useShopOrientationLock
// Dependencies: [19, 14836, 2]
// Exports: useShopOrientationLock

// Module 17971 (useShopOrientationLock)
import applyOrientationLock from "applyOrientationLock" /* 14836 */;
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
