// Module ID: 14833
// Function ID: 113098
// Name: usePortraitOrientationOnly
// Dependencies: [31, 4110, 1553, 9233, 8347, 2]
// Exports: default

// Module 14833 (usePortraitOrientationOnly)
import result from "result";

let require = arg1;
const result = require("isMetaQuest").fileFinishedImporting("modules/auth/native/useOrientationLock.tsx");

export default function usePortraitOrientationOnly() {
  let tmp = importDefault(9233)();
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
