// Module ID: 7615
// Function ID: 60637
// Name: useIsAgeVerificationExpressiveModalEverywhereEnabled
// Dependencies: [1428, 2]
// Exports: isAgeVerificationExpressiveModalEverywhereEnabled, useIsAgeVerificationExpressiveModalEverywhereEnabled

// Module 7615 (useIsAgeVerificationExpressiveModalEverywhereEnabled)
import ApexExperiment from "ApexExperiment";

const obj = { kind: "user", name: "2025-11-age-verification-expressive-everywhere", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/age_assurance/AgeVerificationExpressiveModalEverywhereExperiment.tsx");

export const useIsAgeVerificationExpressiveModalEverywhereEnabled = function useIsAgeVerificationExpressiveModalEverywhereEnabled(location) {
  return closure_0.useConfig({ location }).enabled;
};
export const isAgeVerificationExpressiveModalEverywhereEnabled = function isAgeVerificationExpressiveModalEverywhereEnabled(entryPoint) {
  return closure_0.getConfig({ location: entryPoint }).enabled;
};
