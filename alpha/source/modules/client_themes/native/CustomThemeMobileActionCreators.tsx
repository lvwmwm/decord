// Module ID: 13697
// Function ID: 13698
// Name: CustomThemeMobileActionCreators
// Dependencies: [572, 2]
// Exports: clearPreviewTheme, previewCustomTheme, resetCustomTheme, updateCustomTheme

// Module 13697 (CustomThemeMobileActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/CustomThemeMobileActionCreators.tsx");

export function updateCustomTheme(customThemeSettings, customThemeBaseTheme) {
  const obj = DispatcherDefault;
  const obj2 = { type: "UPDATE_CUSTOM_THEME", customTheme: customThemeSettings, theme: customThemeBaseTheme };
  obj.dispatch(obj2);
}
export function resetCustomTheme() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "RESET_CUSTOM_THEME" });
}
export function previewCustomTheme(previewCustomTheme) {
  const obj = DispatcherDefault;
  const obj2 = { type: "PREVIEW_CUSTOM_THEME", previewCustomTheme };
  obj.dispatch(obj2);
}
export function clearPreviewTheme() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "CLEAR_PREVIEW_CUSTOM_THEME" });
}
