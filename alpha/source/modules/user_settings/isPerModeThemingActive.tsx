// Module ID: 5069
// Function ID: 5070
// Name: isPerModeThemingActive
// Dependencies: [1204, 1206, 1207, 2]
// Exports: isPerModeThemingActive

// Module 5069 (isPerModeThemingActive)
import ThemeConstants from "ThemeConstants" /* 1207 */;
import ThemeStore from "ThemeStore" /* 1204 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1206 */;
import size from "module_2" /* 2 */;

const SystemThemeState = ThemeConstants.SystemThemeState;
let result = size.fileFinishedImporting("modules/user_settings/isPerModeThemingActive.tsx");

export function isPerModeThemingActive() {
  const result = UnsyncedUserSettingsStore.useSystemTheme === SystemThemeState.ON && ThemeStore.isSameAsDeviceThemeEnabled();
  return result;
}
