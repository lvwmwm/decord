// Module ID: 11473
// Function ID: 11474
// Name: useSafetyHubAccountStanding
// Dependencies: [7536, 558, 576, 504, 2]

// Module 11473 (useSafetyHubAccountStanding)
import react from "react" /* 576 */;
import SafetyHubStore from "SafetyHubStore" /* 7536 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const get_initialized = tmp(504);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSafetyHubAccountStanding() {
  let accountStanding;
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SafetyHubStore];
    const fn = function u() {
      return accountStanding.getAccountStanding();
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
}) : (function useSafetyHubAccountStanding() {
  let accountStanding;
  const items = [SafetyHubStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => accountStanding.getAccountStanding());
});
const result = size.fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubAccountStanding.tsx");

export const useSafetyHubAccountStanding = tmp2;
