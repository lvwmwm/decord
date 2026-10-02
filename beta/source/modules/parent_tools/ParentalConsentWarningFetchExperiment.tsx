// Module ID: 17238
// Function ID: 17239
// Name: ParentalConsentWarningFetchExperiment
// Dependencies: [1441, 2]
// Exports: isParentalConsentWarningFetchEnabled

// Module 17238 (ParentalConsentWarningFetchExperiment)
import ApexExperiment from "ApexExperiment" /* 1441 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { kind: "user", name: "2026-07-parental-consent-warning-fetch", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/parent_tools/ParentalConsentWarningFetchExperiment.tsx");

export const isParentalConsentWarningFetchEnabled = function isParentalConsentWarningFetchEnabled(parental_consent_warning_manager) {
  const obj = { location: parental_consent_warning_manager };
  return config.getConfig(obj).enabled;
};
