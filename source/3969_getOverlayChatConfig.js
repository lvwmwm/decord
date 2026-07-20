// Module ID: 3969
// Function ID: 32873
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
let obj = { -1269606814: false, -1845285747: false, defaultConfig: { keybindOverride: undefined }, variations: { [1]: { keybindOverride: "ctrl+tab" }, [2]: { keybindOverride: "alt+x" }, [3]: { keybindOverride: "ctrl+l" } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[0]);
const apexExperiment1 = _module1.createApexExperiment({ defaultConfig: { "Bool(true)": true, "Bool(true)": false, "Bool(true)": false }, variations: { [1]: {}, [2]: {}, [3]: {} } });
const _module2 = require(dependencyMap[0]);
obj = { -1269606814: "1 Month", -1845285747: "all", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment2 = _module2.createApexExperiment(obj);
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
