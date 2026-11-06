// Module ID: 18326
// Function ID: 18327
// Name: useOrientationLock
// Dependencies: [19, 5127, 1624, 7207, 8995, 2]
// Exports: default

// Module 18326 (useOrientationLock)
import DeviceUtils from "DeviceUtils" /* 5127 */;
import useWideAuthViewDefault from "useWideAuthView" /* 7207 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let tmp;
const MetaQuestUtils = tmp(1624);
const DeviceOrientation = tmp(8995);
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
