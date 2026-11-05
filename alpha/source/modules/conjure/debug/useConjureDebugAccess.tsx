// Module ID: 12411
// Function ID: 12412
// Name: useConjureDebugAccess
// Dependencies: [4968, 2]
// Exports: useConjureDebugPaneEnabled, useConjureTraceTabEnabled

// Module 12411 (useConjureDebugAccess)
import UserSettings from "UserSettings" /* 4968 */;
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
