// Module ID: 8738
// Function ID: 8739
// Name: useIsAgeVerificationExpressiveModalEverywhereEnabled
// Dependencies: [1467, 2]
// Exports: isAgeVerificationExpressiveModalEverywhereEnabled, useIsAgeVerificationExpressiveModalEverywhereEnabled

// Module 8738 (useIsAgeVerificationExpressiveModalEverywhereEnabled)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1467 */;

const obj = { 1: null };
obj[1] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment({ kind: "user", name: "2025-11-age-verification-expressive-everywhere", defaultConfig: { enabled: false }, variations: obj });
const result = set.fileFinishedImporting("modules/age_assurance/AgeVerificationExpressiveModalEverywhereExperiment.tsx");

export const useIsAgeVerificationExpressiveModalEverywhereEnabled = function useIsAgeVerificationExpressiveModalEverywhereEnabled(location) {
  return closure_0.useConfig({ location }).enabled;
};
export const isAgeVerificationExpressiveModalEverywhereEnabled = function isAgeVerificationExpressiveModalEverywhereEnabled(entryPoint) {
  return closure_0.getConfig({ location: entryPoint }).enabled;
};
