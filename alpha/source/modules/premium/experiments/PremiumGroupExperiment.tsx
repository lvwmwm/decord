// Module ID: 9708
// Function ID: 9709
// Name: PremiumGroupExperiment
// Dependencies: [1449, 2]
// Exports: default

// Module 9708 (PremiumGroupExperiment)
import ApexExperiment from "ApexExperiment" /* 1449 */;
import size from "module_2" /* 2 */;

let obj = { name: "2025-12-katsudon", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/premium/experiments/PremiumGroupExperiment.tsx");

export default function usePremiumGroupExperiment(location) {
  const obj = { location: location.location };
  return closure_0.useConfig(obj).enabled;
};
