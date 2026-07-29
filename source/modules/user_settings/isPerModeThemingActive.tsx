// Module ID: 1347
// Function ID: 1348
// Name: isPerModeThemingActive
// Dependencies: [1302, 1304, 1305, 2]
// Exports: isPerModeThemingActive

// Module 1347 (isPerModeThemingActive)
import handleThemeChange from "handleThemeChange";
import CHANNEL_SIDEBAR_WIDTH from "CHANNEL_SIDEBAR_WIDTH";
import { SystemThemeState } from "SystemThemeState";

let result = require("SystemThemeState").fileFinishedImporting("modules/user_settings/isPerModeThemingActive.tsx");

export const isPerModeThemingActive = function isPerModeThemingActive(isSyncedModeThemesEnabled) {
  let result = useSystemTheme.useSystemTheme === SystemThemeState.ON;
  if (result) {
    result = sameAsDeviceThemeEnabled.isSameAsDeviceThemeEnabled();
  }
  if (result) {
    result = isSyncedModeThemesEnabled();
  }
  return result;
};
