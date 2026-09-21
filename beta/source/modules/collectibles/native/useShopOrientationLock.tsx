// Module ID: 16115
// Function ID: 16116
// Name: useShopOrientationLock
// Dependencies: [19, 558, 568, 11911, 2]

// Module 16115 (useShopOrientationLock)
import c from "c" /* 568 */;
import applyOrientationLock from "applyOrientationLock" /* 11911 */;
import noop from "module_19" /* 19 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/useShopOrientationLock.tsx");

export const useShopOrientationLock = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      applyOrientationLock.applyOrientationLock("PORTRAIT", true);
      return () => {
        const result = closure_1_0(closure_1_1[3]).releaseOrientationLock({ unlockAfterRotatingToPreviousLock: false });
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
  const effect = noop.useEffect(tmp2, tmp3);
}) : (() => {
  const effect = noop.useEffect(() => {
    applyOrientationLock.applyOrientationLock("PORTRAIT", true);
    return () => {
      const result = closure_1_0(closure_1_1[3]).releaseOrientationLock({ unlockAfterRotatingToPreviousLock: false });
    };
  }, []);
});
