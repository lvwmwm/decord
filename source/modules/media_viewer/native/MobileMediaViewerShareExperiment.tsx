// Module ID: 8379
// Function ID: 66287
// Name: apexExperiment
// Dependencies: [1428, 2]
// Exports: getMobileMediaViewerShareExperimentEnabled

// Module 8379 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-06-mobile-media-viewer-share", kind: "user", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/media_viewer/native/MobileMediaViewerShareExperiment.tsx");

export const MobileMediaViewerShareExperiment = apexExperiment;
export const getMobileMediaViewerShareExperimentEnabled = function getMobileMediaViewerShareExperimentEnabled(shareMediaSource) {
  return apexExperiment.getConfig({ location: shareMediaSource }).enabled;
};
