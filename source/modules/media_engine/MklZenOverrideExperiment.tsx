// Module ID: 12833
// Function ID: 99784
// Name: getMklZenOverrideExperimentConfig
// Dependencies: [1428, 2]
// Exports: getMklZenOverrideExperimentConfig

// Module 12833 (getMklZenOverrideExperimentConfig)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-07-mkl-zen-cpu-dispatch-override", kind: "user", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/media_engine/MklZenOverrideExperiment.tsx");

export const getMklZenOverrideExperimentConfig = function getMklZenOverrideExperimentConfig(handleConnectionOpen) {
  return config.getConfig({ location: handleConnectionOpen });
};
