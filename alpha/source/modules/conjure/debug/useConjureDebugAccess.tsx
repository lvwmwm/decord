// Module ID: 12404
// Function ID: 12405
// Name: useConjureDebugAccess
// Dependencies: [4966, 2]
// Exports: useConjureDebugPaneEnabled, useConjureTraceTabEnabled

// Module 12404 (useConjureDebugAccess)
import UserSettings from "UserSettings" /* 4966 */;
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
