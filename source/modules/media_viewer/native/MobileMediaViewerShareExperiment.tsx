// Module ID: 8867
// Function ID: 8868
// Name: apexExperiment
// Dependencies: [1452, 2]
// Exports: getMobileMediaViewerShareExperimentEnabled

// Module 8867 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-06-mobile-media-viewer-share", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/media_viewer/native/MobileMediaViewerShareExperiment.tsx");

export const MobileMediaViewerShareExperiment = apexExperiment;
export const getMobileMediaViewerShareExperimentEnabled = function getMobileMediaViewerShareExperimentEnabled(shareMediaSource) {
  return apexExperiment.getConfig({ location: shareMediaSource }).enabled;
};
