// Module ID: 7669
// Function ID: 7670
// Name: ProfileFrameLayerPreloadMobileExperiment
// Dependencies: [1435, 2]
// Exports: useIsProfileFrameLayerPreloadEnabled

// Module 7669 (ProfileFrameLayerPreloadMobileExperiment)
import ApexExperiment from "ApexExperiment" /* 1435 */;
import size from "module_2" /* 2 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-09-profile-frame-layer-preload-mobile", kind: "user", defaultConfig: { profileFrameLayerPreloadEnabled: false }, variations: { 0: { profileFrameLayerPreloadEnabled: false }, 1: { profileFrameLayerPreloadEnabled: true } } });
const result = size.fileFinishedImporting("modules/collectibles/experiments/ProfileFrameLayerPreloadMobileExperiment.tsx");

export default apexExperiment;
export const useIsProfileFrameLayerPreloadEnabled = function useIsProfileFrameLayerPreloadEnabled(ProfileFrame) {
  return apexExperiment.useConfig({ location: ProfileFrame }).profileFrameLayerPreloadEnabled;
};
