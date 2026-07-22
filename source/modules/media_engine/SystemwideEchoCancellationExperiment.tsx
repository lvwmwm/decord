// Module ID: 12658
// Function ID: 97323
// Name: getSystemwideEchoCancellationExperimentConfig
// Dependencies: []
// Exports: getSystemwideEchoCancellationExperimentConfig

// Module 12658 (getSystemwideEchoCancellationExperimentConfig)
const _module = require(dependencyMap[0]);
const obj = { "Bool(false)": 24, "Bool(false)": 24, defaultConfig: { echoReferenceMode: "mix" }, variations: { [1]: { echoReferenceMode: "auto" } } };
let closure_0 = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/media_engine/SystemwideEchoCancellationExperiment.tsx");

export const getSystemwideEchoCancellationExperimentConfig = function getSystemwideEchoCancellationExperimentConfig(location) {
  return config.getConfig({ location: location.location });
};
