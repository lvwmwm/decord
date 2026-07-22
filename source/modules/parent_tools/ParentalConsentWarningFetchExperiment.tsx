// Module ID: 16037
// Function ID: 123084
// Name: isParentalConsentWarningFetchEnabled
// Dependencies: []
// Exports: isParentalConsentWarningFetchEnabled

// Module 16037 (isParentalConsentWarningFetchEnabled)
const _module = require(dependencyMap[0]);
const obj = { "Bool(false)": null, "Bool(false)": null, defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
let closure_0 = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/parent_tools/ParentalConsentWarningFetchExperiment.tsx");

export const isParentalConsentWarningFetchEnabled = function isParentalConsentWarningFetchEnabled(parental_consent_warning_manager) {
  return config.getConfig({ location: parental_consent_warning_manager }).enabled;
};
