// Module ID: 4927
// Function ID: 4928
// Name: useMobileLosslessImageUploadV2Experiment
// Dependencies: [1471, 2]
// Exports: useMobileLosslessImageUploadV2Experiment

// Module 4927 (useMobileLosslessImageUploadV2Experiment)
import ApexExperiment from "ApexExperiment";

let closure_0 = ApexExperiment.createApexExperiment({ kind: "user", name: "2025-12-mobile-lossless-image-upload-v2", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = require("set").fileFinishedImporting("modules/image_upload/MobileLosslessImageUploadV2Experiment.tsx");

export const useMobileLosslessImageUploadV2Experiment = function useMobileLosslessImageUploadV2Experiment(location) {
  return config.getConfig({ location: location.location });
};
