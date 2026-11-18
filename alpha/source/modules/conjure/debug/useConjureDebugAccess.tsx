// Module ID: 18406
// Function ID: 18407
// Name: useConjureDebugAccess
// Dependencies: [4648, 2]
// Exports: useConjureDebugPaneEnabled, useConjureTraceTabEnabled

// Module 18406 (useConjureDebugAccess)
import UserSettings from "UserSettings" /* 4648 */;
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
