// Module ID: 15514
// Function ID: 15515
// Name: ActivityPrivacyMatchingExperiment
// Dependencies: [1441, 558, 576, 12669, 2]
// Exports: getIsInActivityPrivacyUpsellExperiment

// Module 15514 (ActivityPrivacyMatchingExperiment)
import react from "react" /* 576 */;
import PrivateProfilesExperiment from "PrivateProfilesExperiment" /* 12669 */;
import ApexExperiment from "ApexExperiment" /* 1441 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-02-activity-privacy-matching", kind: "user", defaultConfig: { copyChanges: false, upsell: false }, variations: { 0: { copyChanges: false, upsell: false }, 1: { copyChanges: true, upsell: false }, 2: { copyChanges: true, upsell: true } } };
let closure_2 = ApexExperiment.createApexExperiment(obj);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((location) => {
  let tmp2;
  const obj = react;
  const cResult = obj.c(2);
  const obj2 = PrivateProfilesExperiment;
  let copyChanges = obj2.useIsInPrivateProfilesExperiment(location);
  if (cResult[0] !== location) {
    const obj3 = { location };
    cResult[0] = location;
    cResult[1] = obj3;
    tmp2 = obj3;
  } else {
    tmp2 = cResult[1];
  }
  if (!copyChanges) {
    copyChanges = closure_2.useConfig(tmp2).copyChanges;
  }
  return copyChanges;
}) : ((location) => {
  const obj = PrivateProfilesExperiment;
  let copyChanges = obj.useIsInPrivateProfilesExperiment(location);
  const obj2 = { location };
  if (!copyChanges) {
    copyChanges = closure_2.useConfig(obj2).copyChanges;
  }
  return copyChanges;
});
const result = size.fileFinishedImporting("modules/activity_privacy/ActivityPrivacyMatchingExperiment.tsx");

export const useIsInActivityPrivacyCopyExperiment = tmp2;
export const getIsInActivityPrivacyUpsellExperiment = function getIsInActivityPrivacyUpsellExperiment(ActivityPrivacyDefaultSharingSetting) {
  const obj = PrivateProfilesExperiment;
  let upsell = obj.getIsInPrivateProfilesExperiment(ActivityPrivacyDefaultSharingSetting);
  if (!upsell) {
    const obj2 = { location: ActivityPrivacyDefaultSharingSetting };
    upsell = closure_2.getConfig(obj2).upsell;
  }
  return upsell;
};
