// Module ID: 3971
// Function ID: 32886
// Name: getOverlayChatConfig
// Dependencies: [1428, 2]
// Exports: getOverlayDefaultKeybind, trackOverlayInitializedExperiments, useOverlayChat, useOverlayStreamerMode

// Module 3971 (getOverlayChatConfig)
import ApexExperiment from "ApexExperiment";
import ApexExperiment from "ApexExperiment";
import ApexExperiment from "ApexExperiment";

function getOverlayChatConfig(OVERLAY_INITIALIZED) {
  return apexExperiment1.getConfig({ location: OVERLAY_INITIALIZED });
}
function getOverlayStreamerModeConfig(OVERLAY_INITIALIZED) {
  return apexExperiment2.getConfig({ location: OVERLAY_INITIALIZED });
}
let obj = { name: "2026-03-overlay-default-keybind", kind: "user", defaultConfig: { keybindOverride: undefined }, variations: { [1]: { keybindOverride: "ctrl+tab" }, [2]: { keybindOverride: "alt+x" }, [3]: { keybindOverride: "ctrl+l" } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
obj = { name: "2025-11-overlay-chat", kind: "user", defaultConfig: { hasChat: false, hasFriendList: false, showNowPlayingForDifferentGames: false }, variations: { [1]: { hasChat: true, hasFriendList: false, showNowPlayingForDifferentGames: false }, [2]: { hasChat: true, hasFriendList: true, showNowPlayingForDifferentGames: false }, [3]: { hasChat: true, hasFriendList: true, showNowPlayingForDifferentGames: true } } };
const apexExperiment1 = ApexExperiment.createApexExperiment(obj);
const obj1 = { name: "2026-04-overlay-streamer-mode", kind: "user", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment2 = ApexExperiment.createApexExperiment(obj1);
const result = require("set").fileFinishedImporting("modules/overlay/OverlayV3Experiment.tsx");

export const OverlayDefaultKeybindOverrideExperiment = apexExperiment;
export const getOverlayDefaultKeybind = function getOverlayDefaultKeybind(location) {
  return apexExperiment.getConfig({ location });
};
export const OverlayChatExperiment = apexExperiment1;
export { getOverlayChatConfig };
export const useOverlayChat = function useOverlayChat(location) {
  return apexExperiment1.useConfig({ location });
};
export const OverlayStreamerModeExperiment = apexExperiment2;
export { getOverlayStreamerModeConfig };
export const useOverlayStreamerMode = function useOverlayStreamerMode(location) {
  return apexExperiment2.useConfig({ location }).enabled;
};
export const trackOverlayInitializedExperiments = function trackOverlayInitializedExperiments() {
  getOverlayChatConfig("OVERLAY_INITIALIZED");
  getOverlayStreamerModeConfig("OVERLAY_INITIALIZED");
};
