// Module ID: 4699
// Function ID: 40942
// Name: getVideoFrameRateValidationExperimentConfig
// Dependencies: [1428, 2]
// Exports: getVideoFrameRateValidationExperimentConfig

// Module 4699 (getVideoFrameRateValidationExperimentConfig)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2025-10-video-frame-rate-validation", kind: "user", defaultConfig: { enableFrameRateValidation: false }, variations: { [0]: { enableFrameRateValidation: false }, [1]: { enableFrameRateValidation: true } } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/media_uploads/experiments/VideoFrameRateValidationExperiment.tsx");

export const getVideoFrameRateValidationExperimentConfig = function getVideoFrameRateValidationExperimentConfig(location) {
  return config.getConfig({ location: location.location });
};
