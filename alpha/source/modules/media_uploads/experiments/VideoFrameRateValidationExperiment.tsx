// Module ID: 5381
// Function ID: 5382
// Name: VideoFrameRateValidationExperiment
// Dependencies: [1434, 2]
// Exports: getVideoFrameRateValidationExperimentConfig

// Module 5381 (VideoFrameRateValidationExperiment)
import ApexExperiment from "ApexExperiment" /* 1434 */;
import size from "module_2" /* 2 */;

const config = ApexExperiment.createApexExperiment({ name: "2025-10-video-frame-rate-validation", kind: "user", defaultConfig: { enableFrameRateValidation: false }, variations: { 0: { enableFrameRateValidation: false }, 1: { enableFrameRateValidation: true } } });
const result = size.fileFinishedImporting("modules/media_uploads/experiments/VideoFrameRateValidationExperiment.tsx");

export const getVideoFrameRateValidationExperimentConfig = function getVideoFrameRateValidationExperimentConfig(location) {
  return config.getConfig({ location: location.location });
};
