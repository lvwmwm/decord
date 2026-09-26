// Module ID: 9182
// Function ID: 9183
// Name: PremiumGroupExperiment
// Dependencies: [1434, 2]
// Exports: default

// Module 9182 (PremiumGroupExperiment)
import ApexExperiment from "ApexExperiment" /* 1434 */;
import size from "module_2" /* 2 */;

let closure_0 = ApexExperiment.createApexExperiment({ name: "2025-12-katsudon", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = size.fileFinishedImporting("modules/premium/experiments/PremiumGroupExperiment.tsx");

export default function usePremiumGroupExperiment(location) {
  return closure_0.useConfig({ location: location.location }).enabled;
};
