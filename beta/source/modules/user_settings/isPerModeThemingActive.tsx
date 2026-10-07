// Module ID: 4725
// Function ID: 4726
// Name: isPerModeThemingActive
// Dependencies: [1193, 1195, 1196, 2]
// Exports: isPerModeThemingActive

// Module 4725 (isPerModeThemingActive)
import ThemeConstants from "ThemeConstants" /* 1196 */;
import ThemeStore from "ThemeStore" /* 1193 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1195 */;
import size from "module_2" /* 2 */;

const SystemThemeState = ThemeConstants.SystemThemeState;
let result = size.fileFinishedImporting("modules/user_settings/isPerModeThemingActive.tsx");

export const isPerModeThemingActive = function isPerModeThemingActive() {
  const result = UnsyncedUserSettingsStore.useSystemTheme === SystemThemeState.ON && ThemeStore.isSameAsDeviceThemeEnabled();
  return result;
};
