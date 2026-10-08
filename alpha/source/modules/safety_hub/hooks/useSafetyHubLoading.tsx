// Module ID: 14831
// Function ID: 14832
// Name: useSafetyHubLoading
// Dependencies: [5920, 558, 576, 504, 2]

// Module 14831 (useSafetyHubLoading)
import react from "react" /* 576 */;
import SafetyHubStore from "SafetyHubStore" /* 5920 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const get_initialized = tmp(504);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsSafetyHubLoading() {
  let fetching;
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SafetyHubStore];
    const fn = function o() {
      return fetching.isFetching();
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
}) : (function useIsSafetyHubLoading() {
  let fetching;
  const items = [SafetyHubStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => fetching.isFetching());
});
const result = size.fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubLoading.tsx");

export default tmp2;
