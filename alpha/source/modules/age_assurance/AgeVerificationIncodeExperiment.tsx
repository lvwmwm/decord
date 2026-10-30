// Module ID: 7983
// Function ID: 7984
// Name: AgeVerificationIncodeExperiment
// Dependencies: [1448, 2]
// Exports: isAgeVerificationIncodeEnabled, useIsAgeVerificationIncodeEnabled

// Module 7983 (AgeVerificationIncodeExperiment)
import ApexExperiment from "ApexExperiment" /* 1448 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { kind: "user", name: "2026-06-age-verification-incode", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/age_assurance/AgeVerificationIncodeExperiment.tsx");

export function useIsAgeVerificationIncodeEnabled(location) {
  const obj = { location };
  return closure_0.useConfig(obj).enabled;
}
export function isAgeVerificationIncodeEnabled(entryPoint) {
  const obj = { location: entryPoint };
  return closure_0.getConfig(obj).enabled;
}
