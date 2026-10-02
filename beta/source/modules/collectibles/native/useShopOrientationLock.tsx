// Module ID: 15407
// Function ID: 15408
// Name: useShopOrientationLock
// Dependencies: [19, 558, 576, 10722, 2]

// Module 15407 (useShopOrientationLock)
import react2 from "react" /* 576 */;
import applyOrientationLock from "applyOrientationLock" /* 10722 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp2;
  let tmp3;
  let obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      let obj = applyOrientationLock;
      obj.applyOrientationLock("PORTRAIT", true);
      return () => {
        const obj = closure_1_0(closure_1_1[3]);
        const result = obj.releaseOrientationLock({ unlockAfterRotatingToPreviousLock: false });
      };
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp2 = fn;
    tmp3 = items;
  } else {
    [tmp2, tmp3] = cResult;
  }
  const effect = react.useEffect(tmp2, tmp3);
}) : (() => {
  const effect = react.useEffect(() => {
    let obj = applyOrientationLock;
    obj.applyOrientationLock("PORTRAIT", true);
    return () => {
      const obj = closure_1_0(closure_1_1[3]);
      const result = obj.releaseOrientationLock({ unlockAfterRotatingToPreviousLock: false });
    };
  }, []);
});
let result = size.fileFinishedImporting("modules/collectibles/native/useShopOrientationLock.tsx");

export const useShopOrientationLock = tmp2;
