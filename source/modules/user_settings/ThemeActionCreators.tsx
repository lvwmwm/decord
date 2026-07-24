// Module ID: 3972
// Function ID: 32893
// Name: setSystemTheme
// Dependencies: [1280, 1281, 686, 1315, 2]
// Exports: clearSyncedClientThemes, clearThemeOverride, refreshTheme, setSameAsDeviceThemeEnabled, setSystemThemeIfNeeded, setThemeOverride, setUseSystemTheme, updateSyncedClientTheme, updateThemePreferences

// Module 3972 (setSystemTheme)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { SystemThemeState } from "SystemThemeState";

function setSystemTheme(DARK) {
  let obj = importDefault(686);
  obj = { type: "SYSTEM_THEME_CHANGE", systemTheme: DARK };
  obj.dispatch(obj);
}
const result = require("dispatcher").fileFinishedImporting("modules/user_settings/ThemeActionCreators.tsx");

export { setSystemTheme };
export const setSystemThemeIfNeeded = function setSystemThemeIfNeeded() {
  if (useSystemTheme.useSystemTheme !== SystemThemeState.OFF) {
    setSystemTheme(importDefault(1315)());
  }
};
export const setUseSystemTheme = function setUseSystemTheme(OFF) {
  let obj = importDefault(686);
  obj = { useSystemTheme: OFF };
  obj.dispatch({ type: "UNSYNCED_USER_SETTINGS_UPDATE", settings: obj });
};
export const updateThemePreferences = function updateThemePreferences(preferences) {
  let obj = importDefault(686);
  obj = { type: "UPDATE_THEME_PREFERENCES", preferences };
  obj.dispatch(obj);
};
export const updateSyncedClientTheme = function updateSyncedClientTheme(systemTheme, clientTheme) {
  let obj = importDefault(686);
  obj = { type: "UPDATE_SYNCED_CLIENT_THEME", systemTheme, clientTheme };
  obj.dispatch(obj);
};
export const clearSyncedClientThemes = function clearSyncedClientThemes() {
  importDefault(686).dispatch({ type: "CLEAR_SYNCED_CLIENT_THEMES" });
};
export const setSameAsDeviceThemeEnabled = function setSameAsDeviceThemeEnabled(enabled) {
  let obj = importDefault(686);
  obj = { type: "SET_SAME_AS_DEVICE_THEME_ENABLED", enabled };
  obj.dispatch(obj);
};
export const setThemeOverride = function setThemeOverride(theme) {
  let obj = importDefault(686);
  obj = { type: "SET_THEME_OVERRIDE", theme };
  obj.dispatch(obj);
};
export const clearThemeOverride = function clearThemeOverride() {
  importDefault(686).dispatch({ type: "CLEAR_THEME_OVERRIDE" });
};
export const refreshTheme = function refreshTheme() {
  importDefault(686).dispatch({ type: "REFRESH_THEME" });
};
