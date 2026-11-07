// Module ID: 12374
// Function ID: 12375
// Name: useConjureDebugAccess
// Dependencies: [4965, 2]
// Exports: useConjureDebugPaneEnabled, useConjureTraceTabEnabled

// Module 12374 (useConjureDebugAccess)
import UserSettings from "UserSettings" /* 4965 */;
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
