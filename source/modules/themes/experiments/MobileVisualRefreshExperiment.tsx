// Module ID: 1324
// Function ID: 15546
// Name: useIsMobileVisualRefreshExperimentEnabled
// Dependencies: [1325, 2]
// Exports: default, isMobileVisualRefreshEnabled, resolveRefreshToken, useMobileVisualRefreshConfig

// Module 1324 (useIsMobileVisualRefreshExperimentEnabled)
const obj = { kind: "user", name: "2026-02-mobile-visual-refresh", defaultConfig: { enabled: false, chatInputFloating: false, chatInputLegacySendButton: false }, variations: { [0]: { enabled: false, chatInputFloating: false, chatInputLegacySendButton: false }, [1]: { enabled: true, chatInputFloating: false, chatInputLegacySendButton: false }, [2]: { enabled: true, chatInputFloating: true, chatInputLegacySendButton: false }, [3]: { enabled: true, chatInputFloating: true, chatInputLegacySendButton: false }, [4]: { enabled: true, chatInputFloating: true, chatInputLegacySendButton: true } } };
const tmp2 = require("getUnitId")(obj);
let closure_0 = tmp2;
const result = require("set").fileFinishedImporting("modules/themes/experiments/MobileVisualRefreshExperiment.tsx");

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
  return CHANNEL_SAFE_AREA_BOTTOM_BACKGROUND.resolve({ enabledExperiments: chatInputFloating ? ["mobile-visual-refresh"] : [] });
};
