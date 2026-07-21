// Module ID: 3969
// Function ID: 32878
// Name: getOverlayChatConfig
// Dependencies: []
// Exports: getOverlayDefaultKeybind, trackOverlayInitializedExperiments, useOverlayChat, useOverlayStreamerMode

// Module 3969 (getOverlayChatConfig)
function getOverlayChatConfig(OVERLAY_INITIALIZED) {
  return apexExperiment1.getConfig({ location: OVERLAY_INITIALIZED });
}
function getOverlayStreamerModeConfig(OVERLAY_INITIALIZED) {
  return apexExperiment2.getConfig({ location: OVERLAY_INITIALIZED });
}
const _module = require(dependencyMap[0]);
let obj = { 844175713: 49445120, 1387159956: 49445120, defaultConfig: { keybindOverride: undefined }, variations: { [1]: { keybindOverride: "ctrl+tab" }, [2]: { keybindOverride: "alt+x" }, [3]: { keybindOverride: "ctrl+l" } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[0]);
obj = { 844175713: "Canary", 1387159956: "stable", defaultConfig: { -2109259369: "#ffa813", -94240764: "absolute", -1158393461: null }, variations: { [1]: { -2109259369: true, -94240764: true, -1158393461: true }, [2]: { -2109259369: "sm", -94240764: "Placeholder", -1158393461: "Click" }, [3]: { -2109259369: "Small", -94240764: "sm", -1158393461: "Placeholder" } } };
const apexExperiment1 = _module1.createApexExperiment(obj);
const _module2 = require(dependencyMap[0]);
const obj1 = { 844175713: "<string:2221818624>", 1387159956: "<string:2221801474>", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment2 = _module2.createApexExperiment(obj1);
const _module3 = require(dependencyMap[1]);
const result = _module3.fileFinishedImporting("modules/overlay/OverlayV3Experiment.tsx");

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
