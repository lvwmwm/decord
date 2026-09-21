// Module ID: 14284
// Function ID: 14285
// Name: SystemwideEchoCancellationExperiment
// Dependencies: [1438, 2]
// Exports: getSystemwideEchoCancellationExperimentConfig

// Module 14284 (SystemwideEchoCancellationExperiment)
import ApexExperiment from "ApexExperiment" /* 1438 */;
import size from "module_2" /* 2 */;

const obj = { kind: "user", name: "2026-06-systemwide-echo-cancellation-for-people-who-refuse-to-wear-headphones", defaultConfig: { echoReferenceMode: "mix" }, variations: null };
const obj2 = { 1: null };
obj2[1] = { echoReferenceMode: "auto" };
obj.variations = obj2;
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/SystemwideEchoCancellationExperiment.tsx");

export const getSystemwideEchoCancellationExperimentConfig = function getSystemwideEchoCancellationExperimentConfig(location) {
  return config.getConfig({ location: location.location });
};
