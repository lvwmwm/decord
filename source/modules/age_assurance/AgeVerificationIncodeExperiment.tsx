// Module ID: 7759
// Function ID: 7760
// Name: useIsAgeVerificationIncodeEnabled
// Dependencies: [1452, 2]
// Exports: isAgeVerificationIncodeEnabled, useIsAgeVerificationIncodeEnabled

// Module 7759 (useIsAgeVerificationIncodeEnabled)
import ApexExperiment from "ApexExperiment";

const obj = { 1: null };
obj[1] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-06-age-verification-incode", defaultConfig: { enabled: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/age_assurance/AgeVerificationIncodeExperiment.tsx");

export const useIsAgeVerificationIncodeEnabled = function useIsAgeVerificationIncodeEnabled(location) {
  return closure_0.useConfig({ location }).enabled;
};
export const isAgeVerificationIncodeEnabled = function isAgeVerificationIncodeEnabled(entryPoint) {
  return closure_0.getConfig({ location: entryPoint }).enabled;
};
