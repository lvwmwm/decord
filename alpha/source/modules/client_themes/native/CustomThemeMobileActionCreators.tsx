// Module ID: 13512
// Function ID: 13513
// Name: CustomThemeMobileActionCreators
// Dependencies: [584, 2]
// Exports: clearPreviewTheme, previewCustomTheme, resetCustomTheme, updateCustomTheme

// Module 13512 (CustomThemeMobileActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/CustomThemeMobileActionCreators.tsx");

export function updateCustomTheme(customThemeSettings, first1) {
  const obj = DispatcherDefault;
  const obj2 = { type: "UPDATE_CUSTOM_THEME", customTheme: customThemeSettings, theme: first1 };
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
