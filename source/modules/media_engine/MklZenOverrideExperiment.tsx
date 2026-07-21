// Module ID: 12710
// Function ID: 97573
// Name: getMklZenOverrideExperimentConfig
// Dependencies: []
// Exports: getMklZenOverrideExperimentConfig

// Module 12710 (getMklZenOverrideExperimentConfig)
const _module = require(dependencyMap[0]);
const obj = { 9223372036854775807: "r", 0: "isArray", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
let closure_0 = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/media_engine/MklZenOverrideExperiment.tsx");

export const getMklZenOverrideExperimentConfig = function getMklZenOverrideExperimentConfig(handleConnectionOpen) {
  return config.getConfig({ location: handleConnectionOpen });
};
