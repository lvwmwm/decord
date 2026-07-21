// Module ID: 7551
// Function ID: 60427
// Name: useIsAgeVerificationExpressiveModalEverywhereEnabled
// Dependencies: []
// Exports: isAgeVerificationExpressiveModalEverywhereEnabled, useIsAgeVerificationExpressiveModalEverywhereEnabled

// Module 7551 (useIsAgeVerificationExpressiveModalEverywhereEnabled)
const _module = require(dependencyMap[0]);
const obj = { margin: false, paddingHorizontal: false, defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
let closure_0 = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/age_assurance/AgeVerificationExpressiveModalEverywhereExperiment.tsx");

export const useIsAgeVerificationExpressiveModalEverywhereEnabled = function useIsAgeVerificationExpressiveModalEverywhereEnabled(location) {
  return closure_0.useConfig({ location }).enabled;
};
export const isAgeVerificationExpressiveModalEverywhereEnabled = function isAgeVerificationExpressiveModalEverywhereEnabled(entryPoint) {
  return closure_0.getConfig({ location: entryPoint }).enabled;
};
