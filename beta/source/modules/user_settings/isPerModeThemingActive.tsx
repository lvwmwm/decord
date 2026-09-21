// Module ID: 4606
// Function ID: 4607
// Name: isPerModeThemingActive
// Dependencies: [1186, 1188, 1189, 2]
// Exports: isPerModeThemingActive

// Module 4606 (isPerModeThemingActive)
import ThemeStore from "ThemeStore" /* 1186 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1188 */;

const SystemThemeState = fn(1189).SystemThemeState;
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/isPerModeThemingActive.tsx");

export const isPerModeThemingActive = function isPerModeThemingActive() {
  let result = UnsyncedUserSettingsStore.useSystemTheme === SystemThemeState.ON;
  if (result) {
    result = ThemeStore.isSameAsDeviceThemeEnabled();
  }
  return result;
};
