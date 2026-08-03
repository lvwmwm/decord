// Module ID: 14999
// Function ID: 15000
// Name: usePortraitOrientationOnly
// Dependencies: [19, 4235, 1577, 9375, 8478, 2]
// Exports: default

// Module 14999 (usePortraitOrientationOnly)
import noop from "noop";

let require = arg1;
const result = require("isMetaQuest").fileFinishedImporting("modules/auth/native/useOrientationLock.tsx");

export default function usePortraitOrientationOnly() {
  let tmp = importDefault(9375)();
  const require = tmp;
  const items = [tmp];
  const effect = React.useEffect(() => {
    const isIpadOSResult = tmp(outer1_2[1]).isIpadOS();
    let tmp4 = !isIpadOSResult;
    if (!isIpadOSResult) {
      let tmpResult = tmp(tmp2[2]);
      tmp4 = !tmpResult.isMetaQuest();
    }
    if (tmp4) {
      tmp4 = !tmp;
    }
    tmp = tmp4;
    if (tmp4) {
      tmpResult = tmp(tmp2[4]);
      tmpResult.lockOrientation("PORTRAIT", false);
    }
    return () => {
      if (tmp4) {
        tmp4(outer1_2[4]).unlockOrientation({ unlockAfterRotatingToPreviousLock: false });
        const obj = tmp4(outer1_2[4]);
      }
    };
  }, items);
};
