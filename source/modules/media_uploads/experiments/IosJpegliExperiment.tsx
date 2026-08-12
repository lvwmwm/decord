// Module ID: 4928
// Function ID: 4929
// Name: getIosJpegliConfig
// Dependencies: [1471, 2]
// Exports: getIosJpegliConfig

// Module 4928 (getIosJpegliConfig)
import ApexExperiment from "ApexExperiment";

let closure_0 = ApexExperiment.createApexExperiment({ name: "2025-11-enhanced-jpeg-encoding-on-ios", kind: "user", defaultConfig: { useJpegliEncoder: false }, variations: { 0: { useJpegliEncoder: false }, 1: { useJpegliEncoder: true } } });
const result = require("set").fileFinishedImporting("modules/media_uploads/experiments/IosJpegliExperiment.tsx");

export const getIosJpegliConfig = function getIosJpegliConfig(location) {
  return config.getConfig({ location: location.location });
};
