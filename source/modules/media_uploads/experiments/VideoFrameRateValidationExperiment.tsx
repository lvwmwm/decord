// Module ID: 4759
// Function ID: 4760
// Name: getVideoFrameRateValidationExperimentConfig
// Dependencies: [1452, 2]
// Exports: getVideoFrameRateValidationExperimentConfig

// Module 4759 (getVideoFrameRateValidationExperimentConfig)
import ApexExperiment from "ApexExperiment";

let closure_0 = ApexExperiment.createApexExperiment({ name: "2025-10-video-frame-rate-validation", kind: "user", defaultConfig: { enableFrameRateValidation: false }, variations: { 0: { enableFrameRateValidation: false }, 1: { enableFrameRateValidation: true } } });
const result = require("set").fileFinishedImporting("modules/media_uploads/experiments/VideoFrameRateValidationExperiment.tsx");

export const getVideoFrameRateValidationExperimentConfig = function getVideoFrameRateValidationExperimentConfig(location) {
  return config.getConfig({ location: location.location });
};
