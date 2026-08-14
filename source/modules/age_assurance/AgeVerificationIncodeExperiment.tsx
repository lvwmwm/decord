// Module ID: 7885
// Function ID: 7886
// Name: useIsAgeVerificationIncodeEnabled
// Dependencies: [1471, 2]
// Exports: isAgeVerificationIncodeEnabled, useIsAgeVerificationIncodeEnabled

// Module 7885 (useIsAgeVerificationIncodeEnabled)
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
