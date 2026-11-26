// Module ID: 18593
// Function ID: 18594
// Name: useConjureDebugAccess
// Dependencies: [4868, 2]
// Exports: canOpenConjureDebugPane, useConjureDebugPaneEnabled, useConjureTraceTabEnabled

// Module 18593 (useConjureDebugAccess)
import UserSettings from "UserSettings" /* 4868 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/debug/useConjureDebugAccess.tsx");

export function canOpenConjureDebugPane() {
  const DeveloperMode = UserSettings.DeveloperMode;
  const tmp = DeveloperMode.getSetting() || false;
  return tmp;
}
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
