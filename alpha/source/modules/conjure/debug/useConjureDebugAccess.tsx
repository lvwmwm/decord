// Module ID: 12508
// Function ID: 12509
// Name: useConjureDebugAccess
// Dependencies: [4834, 2]
// Exports: useConjureDebugPaneEnabled, useConjureTraceTabEnabled

// Module 12508 (useConjureDebugAccess)
import UserSettings from "UserSettings" /* 4834 */;
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
