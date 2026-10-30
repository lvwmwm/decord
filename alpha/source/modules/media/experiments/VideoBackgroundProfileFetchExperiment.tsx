// Module ID: 8817
// Function ID: 8818
// Name: VideoBackgroundProfileFetchExperiment
// Dependencies: [1448, 2]
// Exports: useIsVideoBackgroundProfileFetchEnabled

// Module 8817 (VideoBackgroundProfileFetchExperiment)
import ApexExperiment from "ApexExperiment" /* 1448 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-09-video-background-profile-fetch", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media/experiments/VideoBackgroundProfileFetchExperiment.tsx");

export function useIsVideoBackgroundProfileFetchEnabled(_location) {
  const obj = { location: _location };
  return closure_0.useConfig(obj).enabled;
}
