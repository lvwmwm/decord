// Module ID: 12651
// Function ID: 97290
// Name: getSystemwideEchoCancellationExperimentConfig
// Dependencies: []
// Exports: getSystemwideEchoCancellationExperimentConfig

// Module 12651 (getSystemwideEchoCancellationExperimentConfig)
const _module = require(dependencyMap[0]);
const obj = { bottom: null, name: null, defaultConfig: { echoReferenceMode: "mix" }, variations: { [1]: { echoReferenceMode: "auto" } } };
let closure_0 = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/media_engine/SystemwideEchoCancellationExperiment.tsx");

export const getSystemwideEchoCancellationExperimentConfig = function getSystemwideEchoCancellationExperimentConfig(location) {
  return config.getConfig({ location: location.location });
};
