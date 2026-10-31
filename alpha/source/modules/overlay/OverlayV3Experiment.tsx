// Module ID: 5070
// Function ID: 5071
// Name: OverlayV3Experiment
// Dependencies: [1447, 2]
// Exports: getOverlayChatConfig, getOverlayDefaultKeybind, getOverlayNativeWindowRenderingConfig, getOverlayStreamerModeConfig, trackOverlayInitializedExperiments, useOverlayChat, useOverlayStreamerMode

// Module 5070 (OverlayV3Experiment)
import ApexExperiment_mod from "ApexExperiment" /* 1447 */;
import size from "module_2" /* 2 */;

let obj2;
let obj4;
let obj6;
let obj8;
let ApexExperiment = ApexExperiment_mod;
let obj = { name: "2026-03-overlay-default-keybind", kind: "user", defaultConfig: { keybindOverride: "Array" }, variations: obj2 };
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
ApexExperiment = ApexExperiment_mod;
const obj7 = { name: "2026-10-overlay-native-window-rendering", kind: "user", defaultConfig: { enabled: false, enableNVOverlay: false }, variations: obj8 };
obj8 = { 1: null, 2: { enabled: true, enableNVOverlay: false } };
obj8[2] = { enabled: true, enableNVOverlay: true };
const apexExperiment3 = ApexExperiment.createApexExperiment(obj7);
const result = size.fileFinishedImporting("modules/overlay/OverlayV3Experiment.tsx");

export const OverlayDefaultKeybindOverrideExperiment = apexExperiment;
export function getOverlayDefaultKeybind(location) {
  const obj = { location };
  return apexExperiment.getConfig(obj);
}
export const OverlayChatExperiment = apexExperiment1;
export function getOverlayChatConfig(location) {
  const obj = { location };
  return apexExperiment1.getConfig(obj);
}
export function useOverlayChat(location) {
  const obj = { location };
  return apexExperiment1.useConfig(obj);
}
export const OverlayStreamerModeExperiment = apexExperiment2;
export function getOverlayStreamerModeConfig(StreamerModeStore) {
  const obj = { location: StreamerModeStore };
  return apexExperiment2.getConfig(obj);
}
export function useOverlayStreamerMode(location) {
  const obj = { location };
  return apexExperiment2.useConfig(obj).enabled;
}
export function trackOverlayInitializedExperiments() {
  const config = apexExperiment1.getConfig({ location: "OVERLAY_INITIALIZED" });
  const config1 = apexExperiment2.getConfig({ location: "OVERLAY_INITIALIZED" });
}
export const OverlayNativeWindowRenderingExperiment = apexExperiment3;
export function getOverlayNativeWindowRenderingConfig(location) {
  const obj = { location };
  return apexExperiment3.getConfig(obj);
}
