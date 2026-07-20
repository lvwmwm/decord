// Module ID: 11075
// Function ID: 86147
// Name: updateCustomTheme
// Dependencies: []
// Exports: clearPreviewTheme, previewCustomTheme, resetCustomTheme, updateCustomTheme

// Module 11075 (updateCustomTheme)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/client_themes/native/CustomThemeMobileActionCreators.tsx");

export const updateCustomTheme = function updateCustomTheme(customThemeSettings, first1) {
  let obj = importDefault(dependencyMap[0]);
  obj = { type: "UPDATE_CUSTOM_THEME", customTheme: customThemeSettings, theme: first1 };
  obj.dispatch(obj);
};
export const resetCustomTheme = function resetCustomTheme() {
  importDefault(dependencyMap[0]).dispatch({ type: "RESET_CUSTOM_THEME" });
};
export const previewCustomTheme = function previewCustomTheme(previewCustomTheme) {
  let obj = importDefault(dependencyMap[0]);
  obj = { type: "PREVIEW_CUSTOM_THEME", previewCustomTheme };
  obj.dispatch(obj);
};
export const clearPreviewTheme = function clearPreviewTheme() {
  importDefault(dependencyMap[0]).dispatch({ type: "CLEAR_PREVIEW_CUSTOM_THEME" });
};
