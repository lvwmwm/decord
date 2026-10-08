// Module ID: 7753
// Function ID: 7754
// Name: VideoFrameRateValidationExperiment
// Dependencies: [1452, 2]
// Exports: getVideoFrameRateValidationExperimentConfig

// Module 7753 (VideoFrameRateValidationExperiment)
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

let obj = { name: "2025-10-video-frame-rate-validation", kind: "user", defaultConfig: { enableFrameRateValidation: false }, variations: { 0: { enableFrameRateValidation: false }, 1: { enableFrameRateValidation: true } } };
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_uploads/experiments/VideoFrameRateValidationExperiment.tsx");

export const getVideoFrameRateValidationExperimentConfig = function getVideoFrameRateValidationExperimentConfig(location) {
  const obj = { location: location.location };
  return config.getConfig(obj);
};
