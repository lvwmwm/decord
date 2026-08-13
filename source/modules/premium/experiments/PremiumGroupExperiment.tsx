// Module ID: 12243
// Function ID: 12244
// Name: usePremiumGroupExperiment
// Dependencies: [1471, 2]
// Exports: default

// Module 12243 (usePremiumGroupExperiment)
import ApexExperiment from "ApexExperiment";

let closure_0 = ApexExperiment.createApexExperiment({ name: "2025-12-katsudon", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = require("set").fileFinishedImporting("modules/premium/experiments/PremiumGroupExperiment.tsx");

export default function usePremiumGroupExperiment(location) {
  return closure_0.useConfig({ location: location.location }).enabled;
};
