// Module ID: 14825
// Function ID: 14826
// Name: useSafetyHubFetchError
// Dependencies: [5920, 558, 576, 504, 2]

// Module 14825 (useSafetyHubFetchError)
import react from "react" /* 576 */;
import SafetyHubStore from "SafetyHubStore" /* 5920 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const get_initialized = tmp(504);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSafetyHubFetchError() {
  let fetchError;
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SafetyHubStore];
    const fn = function u() {
      return fetchError.getFetchError();
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
}) : (function useSafetyHubFetchError() {
  let fetchError;
  const items = [SafetyHubStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => fetchError.getFetchError());
});
const result = size.fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubFetchError.tsx");

export const useSafetyHubFetchError = tmp2;
