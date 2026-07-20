// Module ID: 1324
// Function ID: 15539
// Name: useIsMobileVisualRefreshExperimentEnabled
// Dependencies: []
// Exports: default, isMobileVisualRefreshEnabled, resolveRefreshToken, useMobileVisualRefreshConfig

// Module 1324 (useIsMobileVisualRefreshExperimentEnabled)
const obj = { "Null": null, "Null": null, defaultConfig: { "Bool(false)": true, error: false, accessibilityRole: false }, variations: { [0]: { "Bool(false)": true, error: false, accessibilityRole: false }, [1]: {}, [2]: {}, [3]: {}, [4]: {} } };
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
  return CHANNEL_SAFE_AREA_BOTTOM_BACKGROUND.resolve({ enabledExperiments: chatInputFloating ? ["Array"] : [] });
};
