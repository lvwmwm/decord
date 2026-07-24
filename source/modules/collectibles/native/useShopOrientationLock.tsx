// Module ID: 14522
// Function ID: 110875
// Name: useShopOrientationLock
// Dependencies: [31, 1553, 8347, 2]
// Exports: useShopOrientationLock

// Module 14522 (useShopOrientationLock)
import result from "result";

const require = arg1;
let c3 = 0;
const result = require("handleOrientationChange").fileFinishedImporting("modules/collectibles/native/useShopOrientationLock.tsx");

export const useShopOrientationLock = function useShopOrientationLock() {
  let closure_0 = React.useRef(false);
  const effect = React.useEffect(() => {
    if (!obj.isMetaQuest()) {
      if (0 === outer1_3) {
        callback(outer1_1[2]).lockOrientation("PORTRAIT", true);
        const obj2 = callback(outer1_1[2]);
      }
      callback.current = true;
      outer1_3 = outer1_3 + 1;
      return () => {
        if (outer1_0.current) {
          const diff = outer2_3 - 1;
          outer2_3 = diff;
          if (0 === diff) {
            let obj = callback(outer2_1[2]);
            obj = { unlockAfterRotatingToPreviousLock: false };
            obj.unlockOrientation(obj);
          }
          outer1_0.current = false;
        }
      };
    }
    obj = callback(outer1_1[1]);
  }, []);
};
