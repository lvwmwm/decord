// Module ID: 16201
// Function ID: 125581
// Name: isParentalConsentWarningFetchEnabled
// Dependencies: [1428, 2]
// Exports: isParentalConsentWarningFetchEnabled

// Module 16201 (isParentalConsentWarningFetchEnabled)
import ApexExperiment from "ApexExperiment";

const obj = { kind: "user", name: "2026-07-parental-consent-warning-fetch", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/parent_tools/ParentalConsentWarningFetchExperiment.tsx");

export const isParentalConsentWarningFetchEnabled = function isParentalConsentWarningFetchEnabled(parental_consent_warning_manager) {
  return config.getConfig({ location: parental_consent_warning_manager }).enabled;
};
