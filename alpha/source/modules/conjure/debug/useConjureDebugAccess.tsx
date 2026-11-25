// Module ID: 18530
// Function ID: 18531
// Name: useConjureDebugAccess
// Dependencies: [4837, 2]
// Exports: canOpenConjureDebugPane, useConjureDebugPaneEnabled, useConjureTraceTabEnabled

// Module 18530 (useConjureDebugAccess)
import UserSettings from "UserSettings" /* 4837 */;
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
