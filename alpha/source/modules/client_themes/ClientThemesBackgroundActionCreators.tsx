// Module ID: 16941
// Function ID: 16942
// Name: ClientThemesBackgroundActionCreators
// Dependencies: [572, 2]
// Exports: resetBackgroundGradientPreset, resetPreviewClientTheme, updateBackgroundGradientPreset, updateMobilePendingThemeIndex

// Module 16941 (ClientThemesBackgroundActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/ClientThemesBackgroundActionCreators.tsx");

export function updateBackgroundGradientPreset(id) {
  const obj = DispatcherDefault;
  const obj2 = { type: "UPDATE_BACKGROUND_GRADIENT_PRESET", presetId: id };
  obj.dispatch(obj2);
}
export function updateMobilePendingThemeIndex(mobileThemesIndex) {
  const obj = DispatcherDefault;
  const obj2 = { type: "UPDATE_MOBILE_PENDING_THEME_INDEX", mobileThemesIndex };
  obj.dispatch(obj2);
}
export function resetBackgroundGradientPreset() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "UPDATE_BACKGROUND_GRADIENT_PRESET", presetId: null });
}
export function resetPreviewClientTheme() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "RESET_PREVIEW_CLIENT_THEME" });
}
