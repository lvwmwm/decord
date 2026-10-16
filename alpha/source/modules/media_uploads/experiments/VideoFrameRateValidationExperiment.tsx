// Module ID: 8002
// Function ID: 8003
// Name: VideoFrameRateValidationExperiment
// Dependencies: [1455, 2]
// Exports: getVideoFrameRateValidationExperimentConfig

// Module 8002 (VideoFrameRateValidationExperiment)
import ApexExperiment from "ApexExperiment" /* 1455 */;
import size from "module_2" /* 2 */;

let obj = { name: "2025-10-video-frame-rate-validation", kind: "user", defaultConfig: { enableFrameRateValidation: false }, variations: { 0: { enableFrameRateValidation: false }, 1: { enableFrameRateValidation: true } } };
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_uploads/experiments/VideoFrameRateValidationExperiment.tsx");

export const getVideoFrameRateValidationExperimentConfig = function getVideoFrameRateValidationExperimentConfig(location) {
  const obj = { location: location.location };
  return config.getConfig(obj);
};
