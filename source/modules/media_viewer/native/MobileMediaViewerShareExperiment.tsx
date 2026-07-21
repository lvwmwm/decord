// Module ID: 8328
// Function ID: 66010
// Name: apexExperiment
// Dependencies: []
// Exports: getMobileMediaViewerShareExperimentEnabled

// Module 8328 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { 844175713: null, 1387159956: null, defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/media_viewer/native/MobileMediaViewerShareExperiment.tsx");

export const MobileMediaViewerShareExperiment = apexExperiment;
export const getMobileMediaViewerShareExperimentEnabled = function getMobileMediaViewerShareExperimentEnabled(shareMediaSource) {
  return apexExperiment.getConfig({ location: shareMediaSource }).enabled;
};
