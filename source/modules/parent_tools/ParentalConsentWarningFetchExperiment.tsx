// Module ID: 16021
// Function ID: 122981
// Name: isParentalConsentWarningFetchEnabled
// Dependencies: []
// Exports: isParentalConsentWarningFetchEnabled

// Module 16021 (isParentalConsentWarningFetchEnabled)
const _module = require(dependencyMap[0]);
const obj = { margin: 285212672, paddingHorizontal: 38874433, defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
let closure_0 = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/parent_tools/ParentalConsentWarningFetchExperiment.tsx");

export const isParentalConsentWarningFetchEnabled = function isParentalConsentWarningFetchEnabled(parental_consent_warning_manager) {
  return config.getConfig({ location: parental_consent_warning_manager }).enabled;
};
