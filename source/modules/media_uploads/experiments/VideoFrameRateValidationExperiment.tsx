// Module ID: 4696
// Function ID: 40891
// Name: getVideoFrameRateValidationExperimentConfig
// Dependencies: []
// Exports: getVideoFrameRateValidationExperimentConfig

// Module 4696 (getVideoFrameRateValidationExperimentConfig)
const _module = require(dependencyMap[0]);
let closure_0 = _module.createApexExperiment({ defaultConfig: { enableFrameRateValidation: false }, variations: { [0]: { enableFrameRateValidation: false }, [1]: { enableFrameRateValidation: true } } });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/media_uploads/experiments/VideoFrameRateValidationExperiment.tsx");

export const getVideoFrameRateValidationExperimentConfig = function getVideoFrameRateValidationExperimentConfig(location) {
  return config.getConfig({ location: location.location });
};
