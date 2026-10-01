// Module ID: 7698
// Function ID: 7699
// Name: VideoBackgroundProfileFetchExperiment
// Dependencies: [1435, 2]
// Exports: useIsVideoBackgroundProfileFetchEnabled

// Module 7698 (VideoBackgroundProfileFetchExperiment)
import ApexExperiment from "ApexExperiment" /* 1435 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-09-video-background-profile-fetch", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media/experiments/VideoBackgroundProfileFetchExperiment.tsx");

export const useIsVideoBackgroundProfileFetchEnabled = function useIsVideoBackgroundProfileFetchEnabled(_location) {
  const obj = { location: _location };
  return closure_0.useConfig(obj).enabled;
};
