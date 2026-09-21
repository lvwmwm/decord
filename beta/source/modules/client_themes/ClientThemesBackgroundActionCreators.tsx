// Module ID: 15434
// Function ID: 15435
// Name: ClientThemesBackgroundActionCreators
// Dependencies: [577, 2]
// Exports: resetBackgroundGradientPreset, resetPreviewClientTheme, updateBackgroundGradientPreset, updateMobilePendingThemeIndex

// Module 15434 (ClientThemesBackgroundActionCreators)
import DispatcherDefault from "Dispatcher" /* 577 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/ClientThemesBackgroundActionCreators.tsx");

export const updateBackgroundGradientPreset = function updateBackgroundGradientPreset(id) {
  DispatcherDefault.dispatch({ type: "UPDATE_BACKGROUND_GRADIENT_PRESET", presetId: id });
};
export const updateMobilePendingThemeIndex = function updateMobilePendingThemeIndex(mobileThemesIndex) {
  DispatcherDefault.dispatch({ type: "UPDATE_MOBILE_PENDING_THEME_INDEX", mobileThemesIndex });
};
export const resetBackgroundGradientPreset = function resetBackgroundGradientPreset() {
  DispatcherDefault.dispatch({ type: "UPDATE_BACKGROUND_GRADIENT_PRESET", presetId: null });
};
export const resetPreviewClientTheme = function resetPreviewClientTheme() {
  DispatcherDefault.dispatch({ type: "RESET_PREVIEW_CLIENT_THEME" });
};
