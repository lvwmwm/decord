// Module ID: 12703
// Function ID: 97550
// Name: getMklZenOverrideExperimentConfig
// Dependencies: []
// Exports: getMklZenOverrideExperimentConfig

// Module 12703 (getMklZenOverrideExperimentConfig)
const _module = require(dependencyMap[0]);
const obj = { -1269606814: "r", -1845285747: "isArray", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
let closure_0 = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/media_engine/MklZenOverrideExperiment.tsx");

export const getMklZenOverrideExperimentConfig = function getMklZenOverrideExperimentConfig(handleConnectionOpen) {
  return config.getConfig({ location: handleConnectionOpen });
};
