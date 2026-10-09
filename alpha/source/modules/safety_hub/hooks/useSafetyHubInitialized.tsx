// Module ID: 11462
// Function ID: 11463
// Name: useSafetyHubInitialized
// Dependencies: [5921, 558, 576, 504, 2]

// Module 11462 (useSafetyHubInitialized)
import react from "react" /* 576 */;
import SafetyHubStore from "SafetyHubStore" /* 5921 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const get_initialized = tmp(504);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSafetyHubInitialized() {
  let initialized;
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SafetyHubStore];
    const fn = function s() {
      return initialized.isInitialized();
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
}) : (function useSafetyHubInitialized() {
  let initialized;
  const items = [SafetyHubStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => initialized.isInitialized());
});
const result = size.fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubInitialized.tsx");

export const useSafetyHubInitialized = tmp2;
