// Module ID: 13295
// Function ID: 13296
// Name: useConjureDebugAccess
// Dependencies: [5131, 2]
// Exports: useConjureDebugPaneEnabled, useConjureTraceTabEnabled

// Module 13295 (useConjureDebugAccess)
import UserSettings from "UserSettings" /* 5131 */;
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
