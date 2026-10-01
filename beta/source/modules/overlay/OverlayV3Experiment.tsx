// Module ID: 4680
// Function ID: 4681
// Name: OverlayV3Experiment
// Dependencies: [1435, 2]
// Exports: getOverlayChatConfig, getOverlayDefaultKeybind, getOverlayStreamerModeConfig, trackOverlayInitializedExperiments, useOverlayChat, useOverlayStreamerMode

// Module 4680 (OverlayV3Experiment)
import ApexExperiment_mod from "ApexExperiment" /* 1435 */;
import size from "module_2" /* 2 */;

let obj2;
let obj4;
let obj6;
let ApexExperiment = ApexExperiment_mod;
let obj = { name: "2026-03-overlay-default-keybind", kind: "user", defaultConfig: { keybindOverride: "Path" }, variations: obj2 };
obj2 = { 1: null, 2: { keybindOverride: "ctrl+tab" }, 3: { keybindOverride: "alt+x" } };
obj2[3] = { keybindOverride: "ctrl+l" };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
ApexExperiment = ApexExperiment_mod;
const obj3 = { name: "2025-11-overlay-chat", kind: "user", defaultConfig: { hasChat: false, hasFriendList: false, showNowPlayingForDifferentGames: false }, variations: obj4 };
obj4 = { 1: null, 2: { hasChat: true, hasFriendList: false, showNowPlayingForDifferentGames: false }, 3: { hasChat: true, hasFriendList: true, showNowPlayingForDifferentGames: false } };
obj4[3] = { hasChat: true, hasFriendList: true, showNowPlayingForDifferentGames: true };
const apexExperiment1 = ApexExperiment.createApexExperiment(obj3);
ApexExperiment = ApexExperiment_mod;
const obj5 = { name: "2026-04-overlay-streamer-mode", kind: "user", defaultConfig: { enabled: false }, variations: obj6 };
obj6 = { 1: null };
obj6[1] = { enabled: true };
const apexExperiment2 = ApexExperiment.createApexExperiment(obj5);
const result = size.fileFinishedImporting("modules/overlay/OverlayV3Experiment.tsx");

export const OverlayDefaultKeybindOverrideExperiment = apexExperiment;
export const getOverlayDefaultKeybind = function getOverlayDefaultKeybind(location) {
  const obj = { location };
  return apexExperiment.getConfig(obj);
};
export const OverlayChatExperiment = apexExperiment1;
export const getOverlayChatConfig = function getOverlayChatConfig(location) {
  const obj = { location };
  return apexExperiment1.getConfig(obj);
};
export const useOverlayChat = function useOverlayChat(location) {
  const obj = { location };
  return apexExperiment1.useConfig(obj);
};
export const OverlayStreamerModeExperiment = apexExperiment2;
export const getOverlayStreamerModeConfig = function getOverlayStreamerModeConfig(StreamerModeStore) {
  const obj = { location: StreamerModeStore };
  return apexExperiment2.getConfig(obj);
};
export const useOverlayStreamerMode = function useOverlayStreamerMode(location) {
  const obj = { location };
  return apexExperiment2.useConfig(obj).enabled;
};
export const trackOverlayInitializedExperiments = function trackOverlayInitializedExperiments() {
  const config = apexExperiment1.getConfig({ location: "OVERLAY_INITIALIZED" });
  const config1 = apexExperiment2.getConfig({ location: "OVERLAY_INITIALIZED" });
};
