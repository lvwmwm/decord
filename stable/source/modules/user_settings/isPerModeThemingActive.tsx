// Module ID: 4683
// Function ID: 4684
// Name: isPerModeThemingActive
// Dependencies: [1194, 1196, 1197, 2]
// Exports: isPerModeThemingActive

// Module 4683 (isPerModeThemingActive)
import ThemeConstants from "ThemeConstants" /* 1197 */;
import ThemeStore from "ThemeStore" /* 1194 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1196 */;
import size from "module_2" /* 2 */;

const SystemThemeState = ThemeConstants.SystemThemeState;
let result = size.fileFinishedImporting("modules/user_settings/isPerModeThemingActive.tsx");

export const isPerModeThemingActive = function isPerModeThemingActive() {
  const result = UnsyncedUserSettingsStore.useSystemTheme === SystemThemeState.ON && ThemeStore.isSameAsDeviceThemeEnabled();
  return result;
};
