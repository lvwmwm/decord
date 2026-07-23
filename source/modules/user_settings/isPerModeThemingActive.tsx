// Module ID: 1323
// Function ID: 15543
// Name: isPerModeThemingActive
// Dependencies: [1278, 1280, 1281, 2]
// Exports: isPerModeThemingActive

// Module 1323 (isPerModeThemingActive)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_1 from "_isNativeReflectConstruct";
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
