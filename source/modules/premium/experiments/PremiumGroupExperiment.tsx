// Module ID: 11851
// Function ID: 91845
// Name: usePremiumGroupExperiment
// Dependencies: [1428, 2]
// Exports: default

// Module 11851 (usePremiumGroupExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2025-12-katsudon", kind: "user", defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/premium/experiments/PremiumGroupExperiment.tsx");

export default function usePremiumGroupExperiment(location) {
  return closure_0.useConfig({ location: location.location }).enabled;
};
