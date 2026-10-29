// Module ID: 19469
// Function ID: 19470
// Name: ParentalConsentWarningFetchExperiment
// Dependencies: [1453, 2]
// Exports: isParentalConsentWarningFetchEnabled

// Module 19469 (ParentalConsentWarningFetchExperiment)
import ApexExperiment from "ApexExperiment" /* 1453 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { kind: "user", name: "2026-07-parental-consent-warning-fetch", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/parent_tools/ParentalConsentWarningFetchExperiment.tsx");

export function isParentalConsentWarningFetchEnabled(parental_consent_warning_manager) {
  const obj = { location: parental_consent_warning_manager };
  return config.getConfig(obj).enabled;
}
