// Module ID: 5118
// Function ID: 5119
// Name: getIosJpegliConfig
// Dependencies: [1467, 2]
// Exports: getIosJpegliConfig

// Module 5118 (getIosJpegliConfig)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1467 */;

let closure_0 = ApexExperiment.createApexExperiment({ name: "2025-11-enhanced-jpeg-encoding-on-ios", kind: "user", defaultConfig: { useJpegliEncoder: false }, variations: { 0: { useJpegliEncoder: false }, 1: { useJpegliEncoder: true } } });
const result = set.fileFinishedImporting("modules/media_uploads/experiments/IosJpegliExperiment.tsx");

export const getIosJpegliConfig = function getIosJpegliConfig(location) {
  return config.getConfig({ location: location.location });
};
