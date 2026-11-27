// Module ID: 17726
// Function ID: 17727
// Name: useOrientationLock
// Dependencies: [19, 5000, 1626, 7308, 8911, 2]
// Exports: default

// Module 17726 (useOrientationLock)
import DeviceUtils from "DeviceUtils" /* 5000 */;
import useWideAuthViewDefault from "useWideAuthView" /* 7308 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let tmp;
const MetaQuestUtils = tmp(1626);
const DeviceOrientation = tmp(8911);
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
