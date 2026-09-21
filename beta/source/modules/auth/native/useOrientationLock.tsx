// Module ID: 16335
// Function ID: 16336
// Name: useOrientationLock
// Dependencies: [19, 4737, 1613, 558, 568, 7185, 8608, 2]

// Module 16335 (useOrientationLock)
import DeviceUtils from "DeviceUtils" /* 4737 */;
import useWideAuthViewDefault from "useWideAuthView" /* 7185 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/auth/native/useOrientationLock.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = require("c").c(3);
  const tmp2 = useWideAuthViewDefault();
  _require = tmp2;
  if (cResult[0] !== tmp2) {
    const fn = function o() {
      const isIpadOSResult = DeviceUtils.isIpadOS();
      let tmp4 = !isIpadOSResult;
      if (!isIpadOSResult) {
        tmp4 = !tmp(1613).isMetaQuest();
        const tmpResult = tmp(1613);
      }
      if (tmp4) {
        tmp4 = !closure_0;
      }
      closure_0 = tmp4;
      if (tmp4) {
        tmp(8608).lockOrientation("PORTRAIT", false);
        const tmpResult2 = tmp(8608);
      }
      return () => {
        if (closure_0) {
          closure_0(dependencyMap[6]).unlockOrientation({ unlockAfterRotatingToPreviousLock: false });
          const obj = closure_0(dependencyMap[6]);
        }
      };
    };
    const items = [tmp2];
    cResult[0] = tmp2;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp4 = items;
    let tmp3 = fn;
  } else {
    tmp3 = cResult[1];
    tmp4 = cResult[2];
  }
  const effect = noop.useEffect(tmp3, tmp4);
}) : (() => {
  const tmp = useWideAuthViewDefault();
  closure_0 = tmp;
  const items = [tmp];
  const effect = noop.useEffect(() => {
    const isIpadOSResult = DeviceUtils.isIpadOS();
    let tmp4 = !isIpadOSResult;
    if (!isIpadOSResult) {
      tmp4 = !tmp(1613).isMetaQuest();
      const tmpResult = tmp(1613);
    }
    if (tmp4) {
      tmp4 = !closure_0;
    }
    closure_0 = tmp4;
    if (tmp4) {
      tmp(8608).lockOrientation("PORTRAIT", false);
      const tmpResult2 = tmp(8608);
    }
    return () => {
      if (closure_0) {
        closure_0(dependencyMap[6]).unlockOrientation({ unlockAfterRotatingToPreviousLock: false });
        const obj = closure_0(dependencyMap[6]);
      }
    };
  }, items);
});
