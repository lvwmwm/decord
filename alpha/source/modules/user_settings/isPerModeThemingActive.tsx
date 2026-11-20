// Module ID: 4853
// Function ID: 4854
// Name: isPerModeThemingActive
// Dependencies: [1191, 1193, 1194, 2]
// Exports: isPerModeThemingActive

// Module 4853 (isPerModeThemingActive)
import ThemeConstants from "ThemeConstants" /* 1194 */;
import ThemeStore from "ThemeStore" /* 1191 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1193 */;
import size from "module_2" /* 2 */;

const SystemThemeState = ThemeConstants.SystemThemeState;
let result = size.fileFinishedImporting("modules/user_settings/isPerModeThemingActive.tsx");

export function isPerModeThemingActive() {
  const result = UnsyncedUserSettingsStore.useSystemTheme === SystemThemeState.ON && ThemeStore.isSameAsDeviceThemeEnabled();
  return result;
}
