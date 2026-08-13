// Module ID: 16616
// Function ID: 16617
// Name: isParentalConsentCheckEnabled
// Dependencies: [1471, 2]
// Exports: isParentalConsentCheckEnabled

// Module 16616 (isParentalConsentCheckEnabled)
import ApexExperiment from "ApexExperiment";

const obj = { 1: null };
obj[1] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-01-age-and-parental-consent-check", defaultConfig: { enabled: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/age_assurance/native/ParentalConsentExperiment.tsx");

export const isParentalConsentCheckEnabled = function isParentalConsentCheckEnabled(ParentalConsentManager) {
  return config.getConfig({ location: ParentalConsentManager }).enabled;
};
