// Module ID: 5060
// Function ID: 5061
// Name: isPerModeThemingActive
// Dependencies: [1207, 1209, 1210, 2]
// Exports: isPerModeThemingActive

// Module 5060 (isPerModeThemingActive)
import ThemeConstants from "ThemeConstants" /* 1210 */;
import ThemeStore from "ThemeStore" /* 1207 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1209 */;
import size from "module_2" /* 2 */;

const SystemThemeState = ThemeConstants.SystemThemeState;
let result = size.fileFinishedImporting("modules/user_settings/isPerModeThemingActive.tsx");

export const isPerModeThemingActive = function isPerModeThemingActive() {
  const result = UnsyncedUserSettingsStore.useSystemTheme === SystemThemeState.ON && ThemeStore.isSameAsDeviceThemeEnabled();
  return result;
};
