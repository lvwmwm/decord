// Module ID: 11077
// Function ID: 11078
// Name: useIsVideoBackgroundSupported
// Dependencies: [2012, 558, 576, 5268, 504, 2]

// Module 11077 (useIsVideoBackgroundSupported)
import react from "react" /* 576 */;
import isVideoBackgroundSupportedDefault from "isVideoBackgroundSupported" /* 5268 */;
import MediaEngineStore from "MediaEngineStore" /* 2012 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const get_initialized = tmp(504);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsVideoBackgroundSupported() {
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MediaEngineStore];
    const fn = function u() {
      return isVideoBackgroundSupportedDefault(MediaEngineStore);
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  return tmpResult.useStateFromStores(tmp4, tmp5);
}) : (function useIsVideoBackgroundSupported() {
  const items = [MediaEngineStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => isVideoBackgroundSupportedDefault(MediaEngineStore));
});
const result = size.fileFinishedImporting("modules/video_backgrounds/useIsVideoBackgroundSupported.tsx");

export default tmp2;
