// Module ID: 18925
// Function ID: 18926
// Name: ParentalConsentWarningFetchExperiment
// Dependencies: [1455, 2]
// Exports: isParentalConsentWarningFetchEnabled

// Module 18925 (ParentalConsentWarningFetchExperiment)
import ApexExperiment from "ApexExperiment" /* 1455 */;
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
