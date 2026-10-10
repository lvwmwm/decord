// Module ID: 7542
// Function ID: 7543
// Name: ManualAgeAssuranceFallbackExperiment
// Dependencies: [7536, 1453, 7511, 2]
// Exports: isManualAgeAssuranceFallbackEnabled

// Module 7542 (ManualAgeAssuranceFallbackExperiment)
import SafetyHubUtils from "SafetyHubUtils" /* 7511 */;
import SafetyHubStore from "SafetyHubStore" /* 7536 */;
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
