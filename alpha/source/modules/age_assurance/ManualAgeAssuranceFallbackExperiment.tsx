// Module ID: 5919
// Function ID: 5920
// Name: ManualAgeAssuranceFallbackExperiment
// Dependencies: [5920, 1452, 5927, 2]
// Exports: isManualAgeAssuranceFallbackEnabled

// Module 5919 (ManualAgeAssuranceFallbackExperiment)
import SafetyHubUtils from "SafetyHubUtils" /* 5927 */;
import SafetyHubStore from "SafetyHubStore" /* 5920 */;
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { kind: "user", name: "2026-07-manual-age-assurance-fallback", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/age_assurance/ManualAgeAssuranceFallbackExperiment.tsx");

export const isManualAgeAssuranceFallbackEnabled = function isManualAgeAssuranceFallbackEnabled(isAgeVerificationMessageWithManualReviewCta) {
  let enabled;
  const obj = SafetyHubUtils;
  if (obj.isCurrentUserSuspended()) {
    enabled = SafetyHubStore.getIsManualReviewFallbackEnabled();
  } else {
    const obj2 = { location: isAgeVerificationMessageWithManualReviewCta };
    enabled = config.getConfig(obj2).enabled;
  }
  return enabled;
};
