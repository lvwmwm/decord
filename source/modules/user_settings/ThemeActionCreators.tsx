// Module ID: 3970
// Function ID: 32885
// Name: setSystemTheme
// Dependencies: []
// Exports: clearSyncedClientThemes, clearThemeOverride, refreshTheme, setSameAsDeviceThemeEnabled, setSystemThemeIfNeeded, setThemeOverride, setUseSystemTheme, updateSyncedClientTheme, updateThemePreferences

// Module 3970 (setSystemTheme)
function setSystemTheme(DARK) {
  let obj = importDefault(dependencyMap[2]);
  obj = { type: "SYSTEM_THEME_CHANGE", systemTheme: DARK };
  obj.dispatch(obj);
}
let closure_2 = importDefault(dependencyMap[0]);
const SystemThemeState = arg1(dependencyMap[1]).SystemThemeState;
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/user_settings/ThemeActionCreators.tsx");

export { setSystemTheme };
export const setSystemThemeIfNeeded = function setSystemThemeIfNeeded() {
  if (useSystemTheme.useSystemTheme !== SystemThemeState.OFF) {
    setSystemTheme(importDefault(dependencyMap[3])());
  }
};
export const setUseSystemTheme = function setUseSystemTheme(OFF) {
  let obj = importDefault(dependencyMap[2]);
  obj = { useSystemTheme: OFF };
  obj.dispatch({ type: "UNSYNCED_USER_SETTINGS_UPDATE", settings: obj });
};
export const updateThemePreferences = function updateThemePreferences(preferences) {
  let obj = importDefault(dependencyMap[2]);
  obj = { type: "UPDATE_THEME_PREFERENCES", preferences };
  obj.dispatch(obj);
};
export const updateSyncedClientTheme = function updateSyncedClientTheme(systemTheme, clientTheme) {
  let obj = importDefault(dependencyMap[2]);
  obj = { type: "UPDATE_SYNCED_CLIENT_THEME", systemTheme, clientTheme };
  obj.dispatch(obj);
};
export const clearSyncedClientThemes = function clearSyncedClientThemes() {
  importDefault(dependencyMap[2]).dispatch({ type: "CLEAR_SYNCED_CLIENT_THEMES" });
};
export const setSameAsDeviceThemeEnabled = function setSameAsDeviceThemeEnabled(enabled) {
  let obj = importDefault(dependencyMap[2]);
  obj = { type: "SET_SAME_AS_DEVICE_THEME_ENABLED", enabled };
  obj.dispatch(obj);
};
export const setThemeOverride = function setThemeOverride(theme) {
  let obj = importDefault(dependencyMap[2]);
  obj = { type: "SET_THEME_OVERRIDE", theme };
  obj.dispatch(obj);
};
export const clearThemeOverride = function clearThemeOverride() {
  importDefault(dependencyMap[2]).dispatch({ type: "CLEAR_THEME_OVERRIDE" });
};
export const refreshTheme = function refreshTheme() {
  importDefault(dependencyMap[2]).dispatch({ type: "REFRESH_THEME" });
};
