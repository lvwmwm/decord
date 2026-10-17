// Module ID: 14007
// Function ID: 14008
// Name: AndroidMediaViewerFullResolutionExperiment
// Dependencies: [1455, 2]
// Exports: getAndroidMediaViewerFullResolutionEnabled

// Module 14007 (AndroidMediaViewerFullResolutionExperiment)
import ApexExperiment from "ApexExperiment" /* 1455 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { name: "2026-10-android-media-viewer-full-resolution", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_viewer/native/AndroidMediaViewerFullResolutionExperiment.tsx");

export const AndroidMediaViewerFullResolutionExperiment = apexExperiment;
export const getAndroidMediaViewerFullResolutionEnabled = function getAndroidMediaViewerFullResolutionEnabled(MediaModal) {
  const obj = { location: MediaModal };
  return apexExperiment.getConfig(obj).enabled;
};
