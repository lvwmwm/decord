// Module ID: 8156
// Function ID: 8157
// Name: AgeVerificationExpressiveModalEverywhereExperiment
// Dependencies: [1447, 2]
// Exports: isAgeVerificationExpressiveModalEverywhereEnabled, useIsAgeVerificationExpressiveModalEverywhereEnabled

// Module 8156 (AgeVerificationExpressiveModalEverywhereExperiment)
import ApexExperiment from "ApexExperiment" /* 1447 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { kind: "user", name: "2025-11-age-verification-expressive-everywhere", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/age_assurance/AgeVerificationExpressiveModalEverywhereExperiment.tsx");

export function useIsAgeVerificationExpressiveModalEverywhereEnabled(location) {
  const obj = { location };
  return closure_0.useConfig(obj).enabled;
}
export function isAgeVerificationExpressiveModalEverywhereEnabled(entryPoint) {
  const obj = { location: entryPoint };
  return closure_0.getConfig(obj).enabled;
}
