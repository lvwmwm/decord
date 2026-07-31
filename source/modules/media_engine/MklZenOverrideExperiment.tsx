// Module ID: 12982
// Function ID: 12983
// Name: getMklZenOverrideExperimentConfig
// Dependencies: [1452, 2]
// Exports: getMklZenOverrideExperimentConfig

// Module 12982 (getMklZenOverrideExperimentConfig)
import ApexExperiment from "ApexExperiment";

const obj = { 1: null };
obj[1] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-07-mkl-zen-cpu-dispatch-override", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/media_engine/MklZenOverrideExperiment.tsx");

export const getMklZenOverrideExperimentConfig = function getMklZenOverrideExperimentConfig(handleConnectionOpen) {
  return config.getConfig({ location: handleConnectionOpen });
};
