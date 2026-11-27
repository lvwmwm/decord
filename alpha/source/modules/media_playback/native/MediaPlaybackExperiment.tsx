// Module ID: 8883
// Function ID: 8884
// Name: MediaPlaybackExperiment
// Dependencies: [1451, 8884, 2]
// Exports: initializeMediaPlaybackExperiment, isNativeMediaPlaybackEnabled

// Module 8883 (MediaPlaybackExperiment)
import react_nativeDefault from "react-native" /* 8884 */;
import ApexExperiment from "ApexExperiment" /* 1451 */;
import size from "module_2" /* 2 */;

let closure_2;

let obj = { kind: "user", name: "2026-10-mobile-media-playback", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const config = ApexExperiment.createApexExperiment(obj);
let result = size.fileFinishedImporting("modules/media_playback/native/MediaPlaybackExperiment.tsx");

export function initializeMediaPlaybackExperiment() {
  const enabled = config.getConfig({ location: "loaded" }).enabled;
  const obj = react_nativeDefault;
  const result = obj.setEnabledForNextLaunch(enabled);
}
export function isNativeMediaPlaybackEnabled() {
  if (closure_2 == null) {
    const obj = react_nativeDefault;
    closure_2 = obj.isEnabled();
  }
  return closure_2;
}
