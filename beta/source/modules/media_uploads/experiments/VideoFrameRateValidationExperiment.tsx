// Module ID: 5476
// Function ID: 5477
// Name: VideoFrameRateValidationExperiment
// Dependencies: [1441, 2]
// Exports: getVideoFrameRateValidationExperimentConfig

// Module 5476 (VideoFrameRateValidationExperiment)
import ApexExperiment from "ApexExperiment" /* 1441 */;
import size from "module_2" /* 2 */;

let obj = { name: "2025-10-video-frame-rate-validation", kind: "user", defaultConfig: { enableFrameRateValidation: false }, variations: { 0: { enableFrameRateValidation: false }, 1: { enableFrameRateValidation: true } } };
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_uploads/experiments/VideoFrameRateValidationExperiment.tsx");

export const getVideoFrameRateValidationExperimentConfig = function getVideoFrameRateValidationExperimentConfig(location) {
  const obj = { location: location.location };
  return config.getConfig(obj);
};
