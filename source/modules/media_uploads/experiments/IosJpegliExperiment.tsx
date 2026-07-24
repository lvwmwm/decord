// Module ID: 4702
// Function ID: 40940
// Name: getIosJpegliConfig
// Dependencies: [1428, 2]
// Exports: getIosJpegliConfig

// Module 4702 (getIosJpegliConfig)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2025-11-enhanced-jpeg-encoding-on-ios", kind: "user", defaultConfig: { useJpegliEncoder: false }, variations: { [0]: { useJpegliEncoder: false }, [1]: { useJpegliEncoder: true } } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/media_uploads/experiments/IosJpegliExperiment.tsx");

export const getIosJpegliConfig = function getIosJpegliConfig(location) {
  return config.getConfig({ location: location.location });
};
