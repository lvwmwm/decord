// Module ID: 18392
// Function ID: 18393
// Name: useConjureDebugAccess
// Dependencies: [4738, 2]
// Exports: useConjureDebugPaneEnabled, useConjureTraceTabEnabled

// Module 18392 (useConjureDebugAccess)
import UserSettings from "UserSettings" /* 4738 */;
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
