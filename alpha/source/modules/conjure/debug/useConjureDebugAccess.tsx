// Module ID: 13192
// Function ID: 13193
// Name: useConjureDebugAccess
// Dependencies: [5068, 2]
// Exports: useConjureDebugPaneEnabled, useConjureTraceTabEnabled

// Module 13192 (useConjureDebugAccess)
import UserSettings from "UserSettings" /* 5068 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/debug/useConjureDebugAccess.tsx");

export function useConjureDebugPaneEnabled() {
  const DeveloperMode = UserSettings.DeveloperMode;
  const tmp = DeveloperMode.useSetting() || false;
  return tmp;
}
export function useConjureTraceTabEnabled() {
  const DeveloperMode = UserSettings.DeveloperMode;
  const tmp = DeveloperMode.useSetting() || false;
  return tmp;
}
