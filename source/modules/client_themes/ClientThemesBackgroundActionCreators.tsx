// Module ID: 13952
// Function ID: 106044
// Name: updateBackgroundGradientPreset
// Dependencies: [646840323, 899088385]
// Exports: resetBackgroundGradientPreset, resetPreviewClientTheme, updateBackgroundGradientPreset, updateMobilePendingThemeIndex

// Module 13952 (updateBackgroundGradientPreset)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/client_themes/ClientThemesBackgroundActionCreators.tsx");

export const updateBackgroundGradientPreset = function updateBackgroundGradientPreset(id) {
  let obj = importDefault(dependencyMap[0]);
  obj = { type: "UPDATE_BACKGROUND_GRADIENT_PRESET", presetId: id };
  obj.dispatch(obj);
};
export const updateMobilePendingThemeIndex = function updateMobilePendingThemeIndex(mobileThemesIndex) {
  let obj = importDefault(dependencyMap[0]);
  obj = { type: "UPDATE_MOBILE_PENDING_THEME_INDEX", mobileThemesIndex };
  obj.dispatch(obj);
};
export const resetBackgroundGradientPreset = function resetBackgroundGradientPreset() {
  importDefault(dependencyMap[0]).dispatch({});
};
export const resetPreviewClientTheme = function resetPreviewClientTheme() {
  importDefault(dependencyMap[0]).dispatch({ type: "RESET_PREVIEW_CLIENT_THEME" });
};
