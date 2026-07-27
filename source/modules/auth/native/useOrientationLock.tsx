// Module ID: 14845
// Function ID: 113231
// Name: usePortraitOrientationOnly
// Dependencies: [31, 4111, 1553, 9125, 8105, 2]
// Exports: default

// Module 14845 (usePortraitOrientationOnly)
import result from "result";

let require = arg1;
const result = require("isMetaQuest").fileFinishedImporting("modules/auth/native/useOrientationLock.tsx");

export default function usePortraitOrientationOnly() {
  let tmp = importDefault(9125)();
  const require = tmp;
  const items = [tmp];
  const effect = React.useEffect(() => {
    tmp = !tmp(outer1_2[1]).isIpadOS();
    if (tmp) {
      tmp = !tmp(outer1_2[2]).isMetaQuest();
      const obj2 = tmp(outer1_2[2]);
    }
    if (tmp) {
      tmp = !tmp;
    }
    if (tmp) {
      tmp(outer1_2[4]).lockOrientation("PORTRAIT", false);
      const obj3 = tmp(outer1_2[4]);
    }
    return () => {
      if (tmp) {
        let obj = tmp(outer2_2[4]);
        obj = { unlockAfterRotatingToPreviousLock: false };
        obj.unlockOrientation(obj);
      }
    };
  }, items);
};
