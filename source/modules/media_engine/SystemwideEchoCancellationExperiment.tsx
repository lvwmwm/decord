// Module ID: 13110
// Function ID: 13111
// Name: getSystemwideEchoCancellationExperimentConfig
// Dependencies: [1452, 2]
// Exports: getSystemwideEchoCancellationExperimentConfig

// Module 13110 (getSystemwideEchoCancellationExperimentConfig)
import ApexExperiment from "ApexExperiment";

const obj = { 1: null };
obj[1] = { echoReferenceMode: "auto" };
let closure_0 = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-06-systemwide-echo-cancellation-for-people-who-refuse-to-wear-headphones", defaultConfig: { echoReferenceMode: "mix" }, variations: obj });
const result = require("set").fileFinishedImporting("modules/media_engine/SystemwideEchoCancellationExperiment.tsx");

export const getSystemwideEchoCancellationExperimentConfig = function getSystemwideEchoCancellationExperimentConfig(location) {
  return config.getConfig({ location: location.location });
};
