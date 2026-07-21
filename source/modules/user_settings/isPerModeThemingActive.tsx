// Module ID: 1323
// Function ID: 15542
// Name: isPerModeThemingActive
// Dependencies: []
// Exports: isPerModeThemingActive

// Module 1323 (isPerModeThemingActive)
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
const SystemThemeState = arg1(dependencyMap[2]).SystemThemeState;
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/user_settings/isPerModeThemingActive.tsx");

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
