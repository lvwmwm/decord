// Module ID: 5021
// Function ID: 5022
// Name: isPerModeThemingActive
// Dependencies: [1205, 1207, 1208, 2]
// Exports: isPerModeThemingActive

// Module 5021 (isPerModeThemingActive)
import ThemeConstants from "ThemeConstants" /* 1208 */;
import ThemeStore from "ThemeStore" /* 1205 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1207 */;
import size from "module_2" /* 2 */;

const SystemThemeState = ThemeConstants.SystemThemeState;
let result = size.fileFinishedImporting("modules/user_settings/isPerModeThemingActive.tsx");

export const isPerModeThemingActive = function isPerModeThemingActive() {
  const result = UnsyncedUserSettingsStore.useSystemTheme === SystemThemeState.ON && ThemeStore.isSameAsDeviceThemeEnabled();
  return result;
};
