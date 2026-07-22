// Module ID: 3969
// Function ID: 32880
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
let obj = { y: 49447680, DateToSystemTimezoneSetter: 49447680, defaultConfig: { keybindOverride: undefined }, variations: { [1]: { keybindOverride: "ctrl+tab" }, [2]: { keybindOverride: "alt+x" }, [3]: { keybindOverride: "ctrl+l" } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[0]);
obj = { y: "Canary", DateToSystemTimezoneSetter: "stable", defaultConfig: { "Bool(false)": true, "Bool(false)": false, "Bool(false)": false }, variations: { [1]: { "Bool(false)": "y", "Bool(false)": "isArray", "Bool(false)": "Reflect" }, [2]: {}, [3]: {} } };
const apexExperiment1 = _module1.createApexExperiment(obj);
const _module2 = require(dependencyMap[0]);
const obj1 = { y: "isArray", DateToSystemTimezoneSetter: "WireType", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
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
