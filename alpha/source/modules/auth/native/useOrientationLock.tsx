// Module ID: 15842
// Function ID: 15843
// Name: useOrientationLock
// Dependencies: [19, 4821, 1610, 6549, 7962, 2]
// Exports: default

// Module 15842 (useOrientationLock)
import DeviceUtils from "DeviceUtils" /* 4821 */;
import useWideAuthViewDefault from "useWideAuthView" /* 6549 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/auth/native/useOrientationLock.tsx");

export default function usePortraitOrientationOnly() {
  const tmp = useWideAuthViewDefault();
  closure_0 = tmp;
  const items = [tmp];
  const effect = noop.useEffect(() => {
    const isIpadOSResult = DeviceUtils.isIpadOS();
    let tmp4 = !isIpadOSResult;
    if (!isIpadOSResult) {
      tmp4 = !tmp(1610).isMetaQuest();
      const tmpResult = tmp(1610);
    }
    if (tmp4) {
      tmp4 = !closure_0;
    }
    closure_0 = tmp4;
    if (tmp4) {
      tmp(7962).lockOrientation("PORTRAIT", false);
      const tmpResult2 = tmp(7962);
    }
    return () => {
      if (closure_0) {
        closure_0(dependencyMap[4]).unlockOrientation({ unlockAfterRotatingToPreviousLock: false });
        const obj = closure_0(dependencyMap[4]);
      }
    };
  }, items);
};
