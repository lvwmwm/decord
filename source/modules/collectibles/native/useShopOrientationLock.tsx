// Module ID: 14950
// Function ID: 14951
// Name: useShopOrientationLock
// Dependencies: [19, 10964, 2]
// Exports: useShopOrientationLock

// Module 14950 (useShopOrientationLock)
import noop from "noop";

const require = arg1;
let result = require("set").fileFinishedImporting("modules/collectibles/native/useShopOrientationLock.tsx");

export const useShopOrientationLock = function useShopOrientationLock() {
  const effect = React.useEffect(() => {
    callback(table[1]).applyOrientationLock("PORTRAIT", true);
    return () => {
      const result = callback(table[1]).releaseOrientationLock({ unlockAfterRotatingToPreviousLock: false });
    };
  }, []);
};
