// Module ID: 16622
// Function ID: 16623
// Name: isParentalConsentWarningFetchEnabled
// Dependencies: [1471, 2]
// Exports: isParentalConsentWarningFetchEnabled

// Module 16622 (isParentalConsentWarningFetchEnabled)
import ApexExperiment from "ApexExperiment";

const obj = { 1: null };
obj[1] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-07-parental-consent-warning-fetch", defaultConfig: { enabled: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/parent_tools/ParentalConsentWarningFetchExperiment.tsx");

export const isParentalConsentWarningFetchEnabled = function isParentalConsentWarningFetchEnabled(parental_consent_warning_manager) {
  return config.getConfig({ location: parental_consent_warning_manager }).enabled;
};
