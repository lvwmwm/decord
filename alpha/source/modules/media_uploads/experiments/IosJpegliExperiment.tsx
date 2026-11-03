// Module ID: 8360
// Function ID: 8361
// Name: IosJpegliExperiment
// Dependencies: [1449, 2]
// Exports: getIosJpegliConfig

// Module 8360 (IosJpegliExperiment)
import ApexExperiment from "ApexExperiment" /* 1449 */;
import size from "module_2" /* 2 */;

let obj = { name: "2025-11-enhanced-jpeg-encoding-on-ios", kind: "user", defaultConfig: { useJpegliEncoder: false }, variations: { 0: { useJpegliEncoder: false }, 1: { useJpegliEncoder: true } } };
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_uploads/experiments/IosJpegliExperiment.tsx");

export function getIosJpegliConfig(location) {
  const obj = { location: location.location };
  return config.getConfig(obj);
}
