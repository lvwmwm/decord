// Module ID: 17124
// Function ID: 17125
// Name: useConjureDebugAccess
// Dependencies: [7408, 558, 2041, 576, 504, 2]
// Exports: useConjureDebugPaneEnabled

// Module 17124 (useConjureDebugAccess)
import react from "react" /* 576 */;
import UserSettings from "UserSettings" /* 2041 */;
import DeveloperExperimentStore from "DeveloperExperimentStore" /* 7408 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const get_initialized = tmp(504);
let c3 = false;
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = ReactCompilerGating_mod;
function useConjureDebugPaneEnabled() {
  const DeveloperMode = UserSettings.DeveloperMode;
  const tmp = DeveloperMode.useSetting() || c3;
  return tmp;
}
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureTraceTabEnabled() {
  let isDeveloper;
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [DeveloperExperimentStore];
    const fn = function t() {
      return isDeveloper.isDeveloper;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  const tmp7 = tmpResult.useStateFromStores(tmp4, tmp5) || c3;
  return tmp7;
}) : (function useConjureTraceTabEnabled() {
  let isDeveloper;
  const items = [DeveloperExperimentStore];
  const obj = get_initialized;
  const tmp = obj.useStateFromStores(items, () => isDeveloper.isDeveloper) || c3;
  return tmp;
});
const result1 = size.fileFinishedImporting("modules/conjure/debug/useConjureDebugAccess.tsx");

export { useConjureDebugPaneEnabled };
export const useConjureTraceTabEnabled = tmp3;
