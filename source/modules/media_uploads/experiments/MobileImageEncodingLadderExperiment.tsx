// Module ID: 4703
// Function ID: 40938
// Name: getMobileImageEncodingLadderConfig
// Dependencies: [1428, 2]
// Exports: getMobileImageEncodingLadderConfig

// Module 4703 (getMobileImageEncodingLadderConfig)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-01-image-optimized-encoding-ladder", kind: "user", defaultConfig: { useImageEncodingLadder: false }, variations: { [0]: { useImageEncodingLadder: false }, [1]: { useImageEncodingLadder: true } } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/media_uploads/experiments/MobileImageEncodingLadderExperiment.tsx");

export const getMobileImageEncodingLadderConfig = function getMobileImageEncodingLadderConfig(location) {
  return config.getConfig({ location: location.location });
};
