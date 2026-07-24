// Module ID: 11119
// Function ID: 86433
// Name: updateCustomTheme
// Dependencies: [686, 2]
// Exports: clearPreviewTheme, previewCustomTheme, resetCustomTheme, updateCustomTheme

// Module 11119 (updateCustomTheme)
const result = require("set").fileFinishedImporting("modules/client_themes/native/CustomThemeMobileActionCreators.tsx");

export const updateCustomTheme = function updateCustomTheme(customThemeSettings, first1) {
  let obj = importDefault(686);
  obj = { type: "UPDATE_CUSTOM_THEME", customTheme: customThemeSettings, theme: first1 };
  obj.dispatch(obj);
};
export const resetCustomTheme = function resetCustomTheme() {
  importDefault(686).dispatch({ type: "RESET_CUSTOM_THEME" });
};
export const previewCustomTheme = function previewCustomTheme(previewCustomTheme) {
  let obj = importDefault(686);
  obj = { type: "PREVIEW_CUSTOM_THEME", previewCustomTheme };
  obj.dispatch(obj);
};
export const clearPreviewTheme = function clearPreviewTheme() {
  importDefault(686).dispatch({ type: "CLEAR_PREVIEW_CUSTOM_THEME" });
};
