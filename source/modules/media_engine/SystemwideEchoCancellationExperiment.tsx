// Module ID: 12823
// Function ID: 99800
// Name: getSystemwideEchoCancellationExperimentConfig
// Dependencies: [1428, 2]
// Exports: getSystemwideEchoCancellationExperimentConfig

// Module 12823 (getSystemwideEchoCancellationExperimentConfig)
import ApexExperiment from "ApexExperiment";

const obj = { kind: "user", name: "2026-06-systemwide-echo-cancellation-for-people-who-refuse-to-wear-headphones", defaultConfig: { echoReferenceMode: "mix" }, variations: { [1]: { echoReferenceMode: "auto" } } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/media_engine/SystemwideEchoCancellationExperiment.tsx");

export const getSystemwideEchoCancellationExperimentConfig = function getSystemwideEchoCancellationExperimentConfig(location) {
  return config.getConfig({ location: location.location });
};
