// Module ID: 12543
// Function ID: 12544
// Name: useConjureDebugAccess
// Dependencies: [4839, 2]
// Exports: useConjureDebugPaneEnabled, useConjureTraceTabEnabled

// Module 12543 (useConjureDebugAccess)
import UserSettings from "UserSettings" /* 4839 */;
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
