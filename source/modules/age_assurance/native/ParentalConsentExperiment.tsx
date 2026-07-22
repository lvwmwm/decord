// Module ID: 16024
// Function ID: 122981
// Name: isParentalConsentCheckEnabled
// Dependencies: []
// Exports: isParentalConsentCheckEnabled

// Module 16024 (isParentalConsentCheckEnabled)
const _module = require(dependencyMap[0]);
const obj = { "Bool(false)": null, "Bool(false)": null, defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
let closure_0 = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/age_assurance/native/ParentalConsentExperiment.tsx");

export const isParentalConsentCheckEnabled = function isParentalConsentCheckEnabled(ParentalConsentManager) {
  return config.getConfig({ location: ParentalConsentManager }).enabled;
};
