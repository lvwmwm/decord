// Module ID: 15962
// Function ID: 15963
// Name: useOrientationLock
// Dependencies: [19, 4872, 1615, 558, 576, 6439, 8018, 2]

// Module 15962 (useOrientationLock)
import DeviceUtils from "DeviceUtils" /* 4872 */;
import useWideAuthViewDefault from "useWideAuthView" /* 6439 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let tmp;
const MetaQuestUtils = tmp(1615);
const DeviceOrientation = tmp(8018);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp3;
  let tmp4;
  let obj = require("react");
  const cResult = obj.c(3);
  const tmp2 = useWideAuthViewDefault();
  _require = tmp2;
  if (cResult[0] !== tmp2) {
    const fn = function o() {
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
          const obj = closure_2_0(closure_2_2[6]);
          obj.unlockOrientation({ unlockAfterRotatingToPreviousLock: false });
        }
      };
    };
    const items = [tmp2];
    cResult[0] = tmp2;
    cResult[1] = fn;
    cResult[2] = items;
    tmp4 = items;
    tmp3 = fn;
  } else {
    tmp3 = cResult[1];
    tmp4 = cResult[2];
  }
  const effect = react.useEffect(tmp3, tmp4);
}) : (() => {
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
        const obj = closure_2_0(closure_2_2[6]);
        obj.unlockOrientation({ unlockAfterRotatingToPreviousLock: false });
      }
    };
  }, items);
});
const result = size.fileFinishedImporting("modules/auth/native/useOrientationLock.tsx");

export default tmp2;
