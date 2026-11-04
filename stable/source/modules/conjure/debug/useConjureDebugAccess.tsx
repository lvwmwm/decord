// Module ID: 12318
// Function ID: 12319
// Name: useConjureDebugAccess
// Dependencies: [558, 4831, 2]
// Exports: useConjureTraceTabEnabled

// Module 12318 (useConjureDebugAccess)
import UserSettings from "UserSettings" /* 4831 */;
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
