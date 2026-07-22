// Module ID: 1324
// Function ID: 15544
// Name: useIsMobileVisualRefreshExperimentEnabled
// Dependencies: []
// Exports: default, isMobileVisualRefreshEnabled, resolveRefreshToken, useMobileVisualRefreshConfig

// Module 1324 (useIsMobileVisualRefreshExperimentEnabled)
const obj = { "Bool(false)": null, "Bool(false)": null, defaultConfig: { gopher: true, file: false, http:: false }, variations: { [0]: { gopher: true, file: false, http:: false }, [1]: { gopher: "y", file: "isArray", http:: "Reflect" }, [2]: {}, [3]: {}, [4]: {} } };
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
  return CHANNEL_SAFE_AREA_BOTTOM_BACKGROUND.resolve({ enabledExperiments: chatInputFloating ? [true] : [] });
};
