// Module ID: 16243
// Function ID: 16244
// Name: useAdPersonalizationTogglesDisabled
// Dependencies: [13955, 558, 576, 504, 2]

// Module 16243 (useAdPersonalizationTogglesDisabled)
import react from "react" /* 576 */;
import AdPersonalizationStore from "AdPersonalizationStore" /* 13955 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const get_initialized = tmp(504);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAdPersonalizationTogglesDisabled() {
  let tmp4;
  let tmp5;
  let togglesDisabled;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AdPersonalizationStore];
    const fn = function l() {
      return togglesDisabled.isTogglesDisabled();
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
}) : (function useAdPersonalizationTogglesDisabled() {
  let togglesDisabled;
  const items = [AdPersonalizationStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => togglesDisabled.isTogglesDisabled());
});
const result = size.fileFinishedImporting("modules/ads/hooks/useAdPersonalizationTogglesDisabled.tsx");

export const useAdPersonalizationTogglesDisabled = tmp2;
