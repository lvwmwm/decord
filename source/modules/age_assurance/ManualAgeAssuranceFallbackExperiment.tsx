// Module ID: 13688
// Function ID: 13689
// Name: isManualAgeAssuranceFallbackEnabled
// Dependencies: [1468, 2]
// Exports: isManualAgeAssuranceFallbackEnabled

// Module 13688 (isManualAgeAssuranceFallbackEnabled)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1468 */;

const obj = { 1: null };
obj[1] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-07-manual-age-assurance-fallback", defaultConfig: { enabled: false }, variations: obj });
const result = set.fileFinishedImporting("modules/age_assurance/ManualAgeAssuranceFallbackExperiment.tsx");

export const isManualAgeAssuranceFallbackEnabled = function isManualAgeAssuranceFallbackEnabled(isAgeVerificationMessageWithManualReviewCta) {
  return config.getConfig({ location: isAgeVerificationMessageWithManualReviewCta }).enabled;
};
