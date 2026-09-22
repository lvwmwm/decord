// Module ID: 4484
// Function ID: 4485
// Name: isPerModeThemingActive
// Dependencies: [1181, 1183, 1184, 2]
// Exports: isPerModeThemingActive

// Module 4484 (isPerModeThemingActive)
import ThemeStore from "ThemeStore" /* 1181 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1183 */;

const SystemThemeState = fn(1184).SystemThemeState;
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/isPerModeThemingActive.tsx");

export const isPerModeThemingActive = function isPerModeThemingActive() {
  let result = UnsyncedUserSettingsStore.useSystemTheme === SystemThemeState.ON;
  if (result) {
    result = ThemeStore.isSameAsDeviceThemeEnabled();
  }
  return result;
};
