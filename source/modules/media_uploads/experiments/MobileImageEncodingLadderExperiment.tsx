// Module ID: 4889
// Function ID: 4890
// Name: getMobileImageEncodingLadderConfig
// Dependencies: [1452, 2]
// Exports: getMobileImageEncodingLadderConfig

// Module 4889 (getMobileImageEncodingLadderConfig)
import ApexExperiment from "ApexExperiment";

let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-01-image-optimized-encoding-ladder", kind: "user", defaultConfig: { useImageEncodingLadder: false }, variations: { 0: { useImageEncodingLadder: false }, 1: { useImageEncodingLadder: true } } });
const result = require("set").fileFinishedImporting("modules/media_uploads/experiments/MobileImageEncodingLadderExperiment.tsx");

export const getMobileImageEncodingLadderConfig = function getMobileImageEncodingLadderConfig(location) {
  return config.getConfig({ location: location.location });
};
