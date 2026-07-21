// Module ID: 12649
// Function ID: 97268
// Name: getSystemwideEchoCancellationExperimentConfig
// Dependencies: []
// Exports: getSystemwideEchoCancellationExperimentConfig

// Module 12649 (getSystemwideEchoCancellationExperimentConfig)
const _module = require(dependencyMap[0]);
let closure_0 = _module.createApexExperiment({ defaultConfig: { echoReferenceMode: "mix" }, variations: { [1]: { echoReferenceMode: "auto" } } });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/media_engine/SystemwideEchoCancellationExperiment.tsx");

export const getSystemwideEchoCancellationExperimentConfig = function getSystemwideEchoCancellationExperimentConfig(location) {
  return config.getConfig({ location: location.location });
};
