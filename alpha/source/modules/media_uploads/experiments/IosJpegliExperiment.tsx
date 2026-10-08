// Module ID: 7757
// Function ID: 7758
// Name: IosJpegliExperiment
// Dependencies: [1452, 2]
// Exports: getIosJpegliConfig

// Module 7757 (IosJpegliExperiment)
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

let obj = { name: "2025-11-enhanced-jpeg-encoding-on-ios", kind: "user", defaultConfig: { useJpegliEncoder: false }, variations: { 0: { useJpegliEncoder: false }, 1: { useJpegliEncoder: true } } };
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_uploads/experiments/IosJpegliExperiment.tsx");

export const getIosJpegliConfig = function getIosJpegliConfig(location) {
  const obj = { location: location.location };
  return config.getConfig(obj);
};
