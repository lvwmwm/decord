// Module ID: 8486
// Function ID: 8487
// Name: VideoFrameRateValidationExperiment
// Dependencies: [1450, 2]
// Exports: getVideoFrameRateValidationExperimentConfig

// Module 8486 (VideoFrameRateValidationExperiment)
import ApexExperiment from "ApexExperiment" /* 1450 */;
import size from "module_2" /* 2 */;

let obj = { name: "2025-10-video-frame-rate-validation", kind: "user", defaultConfig: { enableFrameRateValidation: false }, variations: { 0: { enableFrameRateValidation: false }, 1: { enableFrameRateValidation: true } } };
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_uploads/experiments/VideoFrameRateValidationExperiment.tsx");

export function getVideoFrameRateValidationExperimentConfig(location) {
  const obj = { location: location.location };
  return config.getConfig(obj);
}
