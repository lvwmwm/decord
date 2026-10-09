// Module ID: 5920
// Function ID: 5921
// Name: ManualAgeAssuranceFallbackExperiment
// Dependencies: [5921, 1453, 5928, 2]
// Exports: isManualAgeAssuranceFallbackEnabled

// Module 5920 (ManualAgeAssuranceFallbackExperiment)
import SafetyHubUtils from "SafetyHubUtils" /* 5928 */;
import SafetyHubStore from "SafetyHubStore" /* 5921 */;
import ApexExperiment from "ApexExperiment" /* 1453 */;
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
