// Module ID: 8551
// Function ID: 8552
// Name: VideoBackgroundProfileFetchExperiment
// Dependencies: [1449, 2]
// Exports: useIsVideoBackgroundProfileFetchEnabled

// Module 8551 (VideoBackgroundProfileFetchExperiment)
import ApexExperiment from "ApexExperiment" /* 1449 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-09-video-background-profile-fetch", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media/experiments/VideoBackgroundProfileFetchExperiment.tsx");

export function useIsVideoBackgroundProfileFetchEnabled(_location) {
  const obj = { location: _location };
  return closure_0.useConfig(obj).enabled;
}
