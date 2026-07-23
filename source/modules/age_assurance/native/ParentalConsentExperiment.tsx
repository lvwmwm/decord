// Module ID: 16141
// Function ID: 125154
// Name: isParentalConsentCheckEnabled
// Dependencies: [1428, 2]
// Exports: isParentalConsentCheckEnabled

// Module 16141 (isParentalConsentCheckEnabled)
import ApexExperiment from "ApexExperiment";

const obj = { kind: "user", name: "2026-01-age-and-parental-consent-check", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/age_assurance/native/ParentalConsentExperiment.tsx");

export const isParentalConsentCheckEnabled = function isParentalConsentCheckEnabled(ParentalConsentManager) {
  return config.getConfig({ location: ParentalConsentManager }).enabled;
};
