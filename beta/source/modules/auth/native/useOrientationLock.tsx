// Module ID: 16335
// Function ID: 16336
// Name: useOrientationLock
// Dependencies: [19, 4767, 1609, 7219, 8635, 2]
// Exports: default

// Module 16335 (useOrientationLock)
import DeviceUtils from "DeviceUtils" /* 4767 */;
import useWideAuthViewDefault from "useWideAuthView" /* 7219 */;
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
      tmp4 = !tmp(1609).isMetaQuest();
      const tmpResult = tmp(1609);
    }
    if (tmp4) {
      tmp4 = !closure_0;
    }
    closure_0 = tmp4;
    if (tmp4) {
      tmp(8635).lockOrientation("PORTRAIT", false);
      const tmpResult2 = tmp(8635);
    }
    return () => {
      if (closure_0) {
        closure_0(dependencyMap[4]).unlockOrientation({ unlockAfterRotatingToPreviousLock: false });
        const obj = closure_0(dependencyMap[4]);
      }
    };
  }, items);
};
