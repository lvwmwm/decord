// Module ID: 9063
// Function ID: 9064
// Name: MobileMediaViewerShareExperiment
// Dependencies: [1449, 2]
// Exports: getMobileMediaViewerShareExperimentEnabled, useMobileMediaViewerShareExperimentEnabled

// Module 9063 (MobileMediaViewerShareExperiment)
import ApexExperiment from "ApexExperiment" /* 1449 */;
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
