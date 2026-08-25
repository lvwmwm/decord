// Module ID: 7966
// Function ID: 7967
// Name: useIsAgeVerificationIncodeEnabled
// Dependencies: [1472, 2]
// Exports: isAgeVerificationIncodeEnabled, useIsAgeVerificationIncodeEnabled

// Module 7966 (useIsAgeVerificationIncodeEnabled)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const obj = { 1: null };
obj[1] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-06-age-verification-incode", defaultConfig: { enabled: false }, variations: obj });
const result = set.fileFinishedImporting("modules/age_assurance/AgeVerificationIncodeExperiment.tsx");

export const useIsAgeVerificationIncodeEnabled = function useIsAgeVerificationIncodeEnabled(location) {
  return closure_0.useConfig({ location }).enabled;
};
export const isAgeVerificationIncodeEnabled = function isAgeVerificationIncodeEnabled(entryPoint) {
  return closure_0.getConfig({ location: entryPoint }).enabled;
};
