// Module ID: 14148
// Function ID: 14149
// Name: SystemwideEchoCancellationExperiment
// Dependencies: [1452, 2]
// Exports: getSystemwideEchoCancellationExperimentConfig

// Module 14148 (SystemwideEchoCancellationExperiment)
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { kind: "user", name: "2026-06-systemwide-echo-cancellation-for-people-who-refuse-to-wear-headphones", defaultConfig: { echoReferenceMode: "mix" }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { echoReferenceMode: "auto" };
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/SystemwideEchoCancellationExperiment.tsx");

export const getSystemwideEchoCancellationExperimentConfig = function getSystemwideEchoCancellationExperimentConfig(location) {
  const obj = { location: location.location };
  return config.getConfig(obj);
};
