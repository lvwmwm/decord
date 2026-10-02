// Module ID: 7673
// Function ID: 7674
// Name: ProfileFrameLayerPreloadMobileExperiment
// Dependencies: [1441, 558, 576, 2]

// Module 7673 (ProfileFrameLayerPreloadMobileExperiment)
import react from "react" /* 576 */;
import ApexExperiment from "ApexExperiment" /* 1441 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-09-profile-frame-layer-preload-mobile", kind: "user", defaultConfig: { profileFrameLayerPreloadEnabled: false }, variations: { 0: { profileFrameLayerPreloadEnabled: false }, 1: { profileFrameLayerPreloadEnabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((location) => {
  let tmp2;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] !== location) {
    const obj2 = { location };
    cResult[0] = location;
    cResult[1] = obj2;
    tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  return apexExperiment.useConfig(tmp2).profileFrameLayerPreloadEnabled;
}) : ((location) => {
  const obj = { location };
  return apexExperiment.useConfig(obj).profileFrameLayerPreloadEnabled;
});
const result = size.fileFinishedImporting("modules/collectibles/experiments/ProfileFrameLayerPreloadMobileExperiment.tsx");

export default apexExperiment;
export const useIsProfileFrameLayerPreloadEnabled = tmp3;
