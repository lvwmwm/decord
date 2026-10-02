// Module ID: 5480
// Function ID: 5481
// Name: IosJpegliExperiment
// Dependencies: [1441, 2]
// Exports: getIosJpegliConfig

// Module 5480 (IosJpegliExperiment)
import ApexExperiment from "ApexExperiment" /* 1441 */;
import size from "module_2" /* 2 */;

let obj = { name: "2025-11-enhanced-jpeg-encoding-on-ios", kind: "user", defaultConfig: { useJpegliEncoder: false }, variations: { 0: { useJpegliEncoder: false }, 1: { useJpegliEncoder: true } } };
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_uploads/experiments/IosJpegliExperiment.tsx");

export const getIosJpegliConfig = function getIosJpegliConfig(location) {
  const obj = { location: location.location };
  return config.getConfig(obj);
};
