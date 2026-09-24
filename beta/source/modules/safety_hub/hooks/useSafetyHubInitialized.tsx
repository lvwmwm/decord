// Module ID: 12077
// Function ID: 12078
// Name: useSafetyHubInitialized
// Dependencies: [8739, 558, 568, 504, 2]

// Module 12077 (useSafetyHubInitialized)
import initialize from "initialize" /* 504 */;
import c from "c" /* 568 */;
import SafetyHubStore from "SafetyHubStore" /* 8739 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubInitialized.tsx");

export const useSafetyHubInitialized = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
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
  return initialize.useStateFromStores(tmp4, tmp5);
}) : (() => {
  const items = [SafetyHubStore];
  return initialize.useStateFromStores(items, () => initialized.isInitialized());
});
