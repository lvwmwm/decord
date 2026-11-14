// Module ID: 10234
// Function ID: 10235
// Name: MobileMediaViewerShareExperiment
// Dependencies: [1452, 2]
// Exports: getMobileMediaViewerShareExperimentEnabled, useMobileMediaViewerShareExperimentEnabled

// Module 10234 (MobileMediaViewerShareExperiment)
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { name: "2026-06-mobile-media-viewer-share", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_viewer/native/MobileMediaViewerShareExperiment.tsx");

export const MobileMediaViewerShareExperiment = apexExperiment;
export function getMobileMediaViewerShareExperimentEnabled(shareMediaSource) {
  const obj = { location: shareMediaSource };
  return apexExperiment.getConfig(obj).enabled;
}
export function useMobileMediaViewerShareExperimentEnabled(mediaViewerCopyLink) {
  const obj = { location: mediaViewerCopyLink };
  return apexExperiment.useConfig(obj).enabled;
}
