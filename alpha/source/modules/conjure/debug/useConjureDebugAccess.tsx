// Module ID: 12035
// Function ID: 12036
// Name: useConjureDebugAccess
// Dependencies: [558, 2044, 2]
// Exports: useConjureTraceTabEnabled

// Module 12035 (useConjureDebugAccess)
import UserSettings from "UserSettings" /* 2044 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c2 = false;
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
function useConjureDebugPaneEnabled() {
  const DeveloperMode = UserSettings.DeveloperMode;
  const tmp = DeveloperMode.useSetting() || c2;
  return tmp;
}
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result2 = size.fileFinishedImporting("modules/conjure/debug/useConjureDebugAccess.tsx");

export { useConjureDebugPaneEnabled };
export const useConjureTraceTabEnabled = function useConjureTraceTabEnabled() {
  if (typeof useConjureDebugPaneEnabled === "function") {
    const DeveloperMode = UserSettings.DeveloperMode;
    const tmp3 = DeveloperMode.useSetting() || c2;
    return tmp3;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
