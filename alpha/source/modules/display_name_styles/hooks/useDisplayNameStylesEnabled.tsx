// Module ID: 5629
// Function ID: 5630
// Name: useDisplayNameStylesEnabled
// Dependencies: [19, 5081, 558, 576, 504, 5630, 2]

// Module 5629 (useDisplayNameStylesEnabled)
import react from "react" /* 19 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import react3 from "react" /* 5630 */;
import AccessibilityStore from "AccessibilityStore" /* 5081 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const useContext = react.useContext;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useDisplayNameStylesEnabled() {
  let tmp4;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function n() {
      return AccessibilityStore.displayNameStylesEnabled;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  const overrideSettings = tmpResult.useStateFromStores(tmp4, tmp5) || useContext(tmp(5630).DisplayNameStylesContext).overrideSettings;
  return overrideSettings;
}) : (function useDisplayNameStylesEnabled() {
  const items = [AccessibilityStore];
  const obj = get_initialized;
  const overrideSettings = obj.useStateFromStores(items, () => AccessibilityStore.displayNameStylesEnabled) || useContext(react3.DisplayNameStylesContext).overrideSettings;
  return overrideSettings;
});
const result = size.fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStylesEnabled.tsx");

export const useDisplayNameStylesEnabled = tmp2;
