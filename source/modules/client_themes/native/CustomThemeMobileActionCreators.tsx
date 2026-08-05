// Module ID: 11239
// Function ID: 11240
// Name: updateCustomTheme
// Dependencies: [709, 2]
// Exports: clearPreviewTheme, previewCustomTheme, resetCustomTheme, updateCustomTheme

// Module 11239 (updateCustomTheme)
const result = require("set").fileFinishedImporting("modules/client_themes/native/CustomThemeMobileActionCreators.tsx");

export const updateCustomTheme = function updateCustomTheme(customThemeSettings, first1) {
  let obj = importDefault(709);
  obj = { type: "UPDATE_CUSTOM_THEME", customTheme: customThemeSettings, theme: first1 };
  obj.dispatch(obj);
};
export const resetCustomTheme = function resetCustomTheme() {
  importDefault(709).dispatch({ type: "RESET_CUSTOM_THEME" });
};
export const previewCustomTheme = function previewCustomTheme(previewCustomTheme) {
  let obj = importDefault(709);
  obj = { type: "PREVIEW_CUSTOM_THEME", previewCustomTheme };
  obj.dispatch(obj);
};
export const clearPreviewTheme = function clearPreviewTheme() {
  importDefault(709).dispatch({ type: "CLEAR_PREVIEW_CUSTOM_THEME" });
};
