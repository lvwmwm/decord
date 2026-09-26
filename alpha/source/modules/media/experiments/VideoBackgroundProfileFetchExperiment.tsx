// Module ID: 7698
// Function ID: 7699
// Name: VideoBackgroundProfileFetchExperiment
// Dependencies: [1435, 2]
// Exports: useIsVideoBackgroundProfileFetchEnabled

// Module 7698 (VideoBackgroundProfileFetchExperiment)
import ApexExperiment from "ApexExperiment" /* 1435 */;
import size from "module_2" /* 2 */;

let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-09-video-background-profile-fetch", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = size.fileFinishedImporting("modules/media/experiments/VideoBackgroundProfileFetchExperiment.tsx");

export const useIsVideoBackgroundProfileFetchEnabled = function useIsVideoBackgroundProfileFetchEnabled(location) {
  return closure_0.useConfig({ location }).enabled;
};
