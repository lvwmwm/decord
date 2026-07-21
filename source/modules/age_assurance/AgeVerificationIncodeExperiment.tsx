// Module ID: 7549
// Function ID: 60413
// Name: useIsAgeVerificationIncodeEnabled
// Dependencies: []
// Exports: isAgeVerificationIncodeEnabled, useIsAgeVerificationIncodeEnabled

// Module 7549 (useIsAgeVerificationIncodeEnabled)
const _module = require(dependencyMap[0]);
const obj = { margin: "Array", paddingHorizontal: "gradientTop", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
let closure_0 = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/age_assurance/AgeVerificationIncodeExperiment.tsx");

export const useIsAgeVerificationIncodeEnabled = function useIsAgeVerificationIncodeEnabled(location) {
  return closure_0.useConfig({ location }).enabled;
};
export const isAgeVerificationIncodeEnabled = function isAgeVerificationIncodeEnabled(entryPoint) {
  return closure_0.getConfig({ location: entryPoint }).enabled;
};
