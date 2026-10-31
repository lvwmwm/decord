// Module ID: 5079
// Function ID: 5080
// Name: ThemeActionCreators
// Dependencies: [1194, 1195, 572, 1230, 2]
// Exports: clearSyncedClientThemes, clearThemeOverride, refreshTheme, setSameAsDeviceThemeEnabled, setSystemTheme, setSystemThemeIfNeeded, setThemeOverride, setUseSystemTheme, updateSyncedClientTheme, updateThemePreferences

// Module 5079 (ThemeActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import ThemeConstants from "ThemeConstants" /* 1195 */;
import getSystemThemeDefault from "getSystemTheme" /* 1230 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1194 */;
import size from "module_2" /* 2 */;

const SystemThemeState = ThemeConstants.SystemThemeState;
const result = size.fileFinishedImporting("modules/user_settings/ThemeActionCreators.tsx");

export function setSystemTheme(DARK) {
  const obj = DispatcherDefault;
  const obj2 = { type: "SYSTEM_THEME_CHANGE", systemTheme: DARK };
  obj.dispatch(obj2);
}
export function setSystemThemeIfNeeded() {
  if (UnsyncedUserSettingsStore.useSystemTheme !== SystemThemeState.OFF) {
    const obj2 = { type: "SYSTEM_THEME_CHANGE", systemTheme: getSystemThemeDefault() };
    const obj = DispatcherDefault;
    obj.dispatch(obj2);
  }
}
export function setUseSystemTheme(OFF) {
  let obj3;
  const obj2 = { type: "UNSYNCED_USER_SETTINGS_UPDATE", settings: obj3 };
  obj3 = { useSystemTheme: OFF };
  const obj = DispatcherDefault;
  obj.dispatch(obj2);
}
export function updateThemePreferences(preferences) {
  const obj = DispatcherDefault;
  const obj2 = { type: "UPDATE_THEME_PREFERENCES", preferences };
  obj.dispatch(obj2);
}
export function updateSyncedClientTheme(systemTheme, clientTheme) {
  const obj = DispatcherDefault;
  const obj2 = { type: "UPDATE_SYNCED_CLIENT_THEME", systemTheme, clientTheme };
  obj.dispatch(obj2);
}
export function clearSyncedClientThemes() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "CLEAR_SYNCED_CLIENT_THEMES" });
}
export function setSameAsDeviceThemeEnabled(enabled) {
  const obj = DispatcherDefault;
  const obj2 = { type: "SET_SAME_AS_DEVICE_THEME_ENABLED", enabled };
  obj.dispatch(obj2);
}
export function setThemeOverride(theme) {
  const obj = DispatcherDefault;
  const obj2 = { type: "SET_THEME_OVERRIDE", theme };
  obj.dispatch(obj2);
}
export function clearThemeOverride() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "CLEAR_THEME_OVERRIDE" });
}
export function refreshTheme() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "REFRESH_THEME" });
}
