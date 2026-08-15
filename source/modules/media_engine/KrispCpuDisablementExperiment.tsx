// Module ID: 13119
// Function ID: 13120
// Name: getKrispCpuDisablementConfig
// Dependencies: [1472, 2]
// Exports: getKrispCpuDisablementConfig

// Module 13119 (getKrispCpuDisablementConfig)
import ApexExperiment from "ApexExperiment";

const obj = { 1: null, 2: { consecutiveFailures: 3 }, 3: { consecutiveFailures: 5 } };
obj[3] = { consecutiveFailures: 10 };
let closure_0 = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-07-krisp-cpu-disablement", defaultConfig: { consecutiveFailures: 1 }, variations: obj });
const result = require("set").fileFinishedImporting("modules/media_engine/KrispCpuDisablementExperiment.tsx");

export const getKrispCpuDisablementConfig = function getKrispCpuDisablementConfig(location) {
  return config.getConfig({ location: location.location });
};
