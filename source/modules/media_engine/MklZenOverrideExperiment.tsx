// Module ID: 12884
// Function ID: 100105
// Name: getMklZenOverrideExperimentConfig
// Dependencies: [1428, 2]
// Exports: getMklZenOverrideExperimentConfig

// Module 12884 (getMklZenOverrideExperimentConfig)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-07-mkl-zen-cpu-dispatch-override", kind: "user", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/media_engine/MklZenOverrideExperiment.tsx");

export const getMklZenOverrideExperimentConfig = function getMklZenOverrideExperimentConfig(handleConnectionOpen) {
  return config.getConfig({ location: handleConnectionOpen });
};
