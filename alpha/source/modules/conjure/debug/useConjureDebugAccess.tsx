// Module ID: 18250
// Function ID: 18251
// Name: useConjureDebugAccess
// Dependencies: [4619, 2]
// Exports: useConjureDebugPaneEnabled, useConjureTraceTabEnabled

// Module 18250 (useConjureDebugAccess)
import UserSettings from "UserSettings" /* 4619 */;
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
