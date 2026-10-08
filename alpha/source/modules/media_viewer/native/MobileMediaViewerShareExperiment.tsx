// Module ID: 8461
// Function ID: 8462
// Name: MobileMediaViewerShareExperiment
// Dependencies: [1452, 558, 576, 2]
// Exports: getMobileMediaViewerShareExperimentEnabled

// Module 8461 (MobileMediaViewerShareExperiment)
import react from "react" /* 576 */;
import ApexExperiment from "ApexExperiment" /* 1452 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { name: "2026-06-mobile-media-viewer-share", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useMobileMediaViewerShareExperimentEnabled(location) {
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
  return apexExperiment.useConfig(tmp2).enabled;
}) : (function useMobileMediaViewerShareExperimentEnabled(location) {
  const obj = { location };
  return apexExperiment.useConfig(obj).enabled;
});
const result = size.fileFinishedImporting("modules/media_viewer/native/MobileMediaViewerShareExperiment.tsx");

export const MobileMediaViewerShareExperiment = apexExperiment;
export const getMobileMediaViewerShareExperimentEnabled = function getMobileMediaViewerShareExperimentEnabled(shareMediaSource) {
  const obj = { location: shareMediaSource };
  return apexExperiment.getConfig(obj).enabled;
};
export const useMobileMediaViewerShareExperimentEnabled = tmp3;
