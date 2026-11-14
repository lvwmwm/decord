// Module ID: 8586
// Function ID: 8587
// Name: ProfileFrameLayerPreloadMobileExperiment
// Dependencies: [1452, 2]
// Exports: useIsProfileFrameLayerPreloadEnabled

// Module 8586 (ProfileFrameLayerPreloadMobileExperiment)
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-09-profile-frame-layer-preload-mobile", kind: "user", defaultConfig: { profileFrameLayerPreloadEnabled: false }, variations: { 0: { profileFrameLayerPreloadEnabled: false }, 1: { profileFrameLayerPreloadEnabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/collectibles/experiments/ProfileFrameLayerPreloadMobileExperiment.tsx");

export default apexExperiment;
export function useIsProfileFrameLayerPreloadEnabled(usePreloadLayerImages) {
  const obj = { location: usePreloadLayerImages };
  return apexExperiment.useConfig(obj).profileFrameLayerPreloadEnabled;
}
