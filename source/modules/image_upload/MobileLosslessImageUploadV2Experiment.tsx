// Module ID: 4700
// Function ID: 40937
// Name: useMobileLosslessImageUploadV2Experiment
// Dependencies: [1428, 2]
// Exports: useMobileLosslessImageUploadV2Experiment

// Module 4700 (useMobileLosslessImageUploadV2Experiment)
import ApexExperiment from "ApexExperiment";

const obj = { kind: "user", name: "2025-12-mobile-lossless-image-upload-v2", defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/image_upload/MobileLosslessImageUploadV2Experiment.tsx");

export const useMobileLosslessImageUploadV2Experiment = function useMobileLosslessImageUploadV2Experiment(location) {
  return config.getConfig({ location: location.location });
};
