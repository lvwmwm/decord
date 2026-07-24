// Module ID: 11874
// Function ID: 92035
// Name: usePremiumGroupExperiment
// Dependencies: [1428, 2]
// Exports: default

// Module 11874 (usePremiumGroupExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2025-12-katsudon", kind: "user", defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/premium/experiments/PremiumGroupExperiment.tsx");

export default function usePremiumGroupExperiment(location) {
  return closure_0.useConfig({ location: location.location }).enabled;
};
