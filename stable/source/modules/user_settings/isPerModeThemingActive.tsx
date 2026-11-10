// Module ID: 5078
// Function ID: 5079
// Name: isPerModeThemingActive
// Dependencies: [1192, 1194, 1195, 2]
// Exports: isPerModeThemingActive

// Module 5078 (isPerModeThemingActive)
import ThemeConstants from "ThemeConstants" /* 1195 */;
import ThemeStore from "ThemeStore" /* 1192 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1194 */;
import size from "module_2" /* 2 */;

const SystemThemeState = ThemeConstants.SystemThemeState;
let result = size.fileFinishedImporting("modules/user_settings/isPerModeThemingActive.tsx");

export function isPerModeThemingActive() {
  const result = UnsyncedUserSettingsStore.useSystemTheme === SystemThemeState.ON && ThemeStore.isSameAsDeviceThemeEnabled();
  return result;
}
