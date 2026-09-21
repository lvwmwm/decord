// Module ID: 16223
// Function ID: 16224
// Name: ActivityPrivacyMatchingExperiment
// Dependencies: [1438, 558, 568, 13389, 2]
// Exports: getIsInActivityPrivacyUpsellExperiment

// Module 16223 (ActivityPrivacyMatchingExperiment)
import c from "c" /* 568 */;
import PrivateProfilesExperiment from "PrivateProfilesExperiment" /* 13389 */;
import ApexExperiment from "ApexExperiment" /* 1438 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_2 = ApexExperiment.createApexExperiment({ name: "2026-02-activity-privacy-matching", kind: "user", defaultConfig: { copyChanges: false, upsell: false }, variations: { 0: { copyChanges: false, upsell: false }, 1: { copyChanges: true, upsell: false }, 2: { copyChanges: true, upsell: true } } });
const result = size.fileFinishedImporting("modules/activity_privacy/ActivityPrivacyMatchingExperiment.tsx");

export const useIsInActivityPrivacyCopyExperiment = ReactCompilerGating.isReactCompilerEnabled() ? ((location) => {
  const cResult = c.c(2);
  let copyChanges = PrivateProfilesExperiment.useIsInPrivateProfilesExperiment(location);
  if (cResult[0] !== location) {
    const obj3 = { location };
    cResult[0] = location;
    cResult[1] = obj3;
    let tmp2 = obj3;
  } else {
    tmp2 = cResult[1];
  }
  if (!copyChanges) {
    copyChanges = closure_2.useConfig(tmp2).copyChanges;
  }
  return copyChanges;
}) : ((location) => {
  let copyChanges = PrivateProfilesExperiment.useIsInPrivateProfilesExperiment(location);
  if (!copyChanges) {
    copyChanges = closure_2.useConfig(obj2).copyChanges;
  }
  return copyChanges;
});
export const getIsInActivityPrivacyUpsellExperiment = function getIsInActivityPrivacyUpsellExperiment(ActivityPrivacyDefaultSharingSetting) {
  let upsell = PrivateProfilesExperiment.getIsInPrivateProfilesExperiment(ActivityPrivacyDefaultSharingSetting);
  if (!upsell) {
    const obj2 = { location: ActivityPrivacyDefaultSharingSetting };
    upsell = closure_2.getConfig(obj2).upsell;
  }
  return upsell;
};
