// Module ID: 1324
// Function ID: 15539
// Name: useIsMobileVisualRefreshExperimentEnabled
// Dependencies: []
// Exports: default, isMobileVisualRefreshEnabled, resolveRefreshToken, useMobileVisualRefreshConfig

// Module 1324 (useIsMobileVisualRefreshExperimentEnabled)
const obj = { margin: null, paddingHorizontal: null, defaultConfig: { "Null": true, "Null": false, "Null": false }, variations: { [0]: { "Null": true, "Null": false, "Null": false }, [1]: { "Null": true, "Null": true, "Null": true }, [2]: { "Null": true, "Null": true, "Null": true }, [3]: { "Null": true, "Null": true, "Null": true }, [4]: {} } };
const tmp2 = importDefault(dependencyMap[0])(obj);
const result = arg1(dependencyMap[1]).fileFinishedImporting("modules/themes/experiments/MobileVisualRefreshExperiment.tsx");

export default function useIsMobileVisualRefreshExperimentEnabled(location) {
  return tmp2.useConfig({ location }).enabled;
};
export const MobileVisualRefreshExperiment = tmp2;
export const useMobileVisualRefreshConfig = function useMobileVisualRefreshConfig(location) {
  return tmp2.useConfig({ location: location.location });
};
export const isMobileVisualRefreshEnabled = function isMobileVisualRefreshEnabled(YouBannerDecorations) {
  return tmp2.getConfig({ location: YouBannerDecorations }).enabled;
};
export const resolveRefreshToken = function resolveRefreshToken(CHANNEL_SAFE_AREA_BOTTOM_BACKGROUND, chatInputFloating) {
  return CHANNEL_SAFE_AREA_BOTTOM_BACKGROUND.resolve({ enabledExperiments: chatInputFloating ? ["EMAIL_VERIFICATION_MODAL_OPEN"] : [] });
};
