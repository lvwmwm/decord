// Module ID: 15826
// Function ID: 15827
// Name: useOrientationLock
// Dependencies: [19, 4842, 1610, 6559, 7975, 2]
// Exports: default

// Module 15826 (useOrientationLock)
import DeviceUtils from "DeviceUtils" /* 4842 */;
import useWideAuthViewDefault from "useWideAuthView" /* 6559 */;
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
      tmp(7975).lockOrientation("PORTRAIT", false);
      const tmpResult2 = tmp(7975);
    }
    return () => {
      if (closure_0) {
        closure_0(dependencyMap[4]).unlockOrientation({ unlockAfterRotatingToPreviousLock: false });
        const obj = closure_0(dependencyMap[4]);
      }
    };
  }, items);
};
