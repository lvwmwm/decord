// Module ID: 17995
// Function ID: 17996
// Name: useOrientationLock
// Dependencies: [19, 4966, 1623, 7105, 8894, 2]
// Exports: default

// Module 17995 (useOrientationLock)
import DeviceUtils from "DeviceUtils" /* 4966 */;
import useWideAuthViewDefault from "useWideAuthView" /* 7105 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let tmp;
const MetaQuestUtils = tmp(1623);
const DeviceOrientation = tmp(8894);
const result = size.fileFinishedImporting("modules/auth/native/useOrientationLock.tsx");

export default function usePortraitOrientationOnly() {
  let tmp = useWideAuthViewDefault();
  let closure_0 = tmp;
  const items = [tmp];
  const effect = react.useEffect(() => {
    let tmp = require;
    let obj = DeviceUtils;
    let tmp4 = !obj.isIpadOS();
    obj.isIpadOS();
    if (tmp4) {
      const tmpResult = MetaQuestUtils;
      tmp4 = !tmpResult.isMetaQuest();
    }
    if (tmp4) {
      tmp4 = !closure_0;
    }
    closure_0 = tmp4;
    if (closure_0) {
      const tmpResult2 = DeviceOrientation;
      tmpResult2.lockOrientation("PORTRAIT", false);
    }
    return () => {
      const tmp = closure_0;
      if (tmp) {
        const obj = closure_2_0(closure_2_2[4]);
        obj.unlockOrientation({ unlockAfterRotatingToPreviousLock: false });
      }
    };
  }, items);
};
