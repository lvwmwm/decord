// Module ID: 14850
// Function ID: 14851
// Name: useIsInActivityPrivacyCopyExperiment
// Dependencies: [1452, 12401, 2]
// Exports: getIsInActivityPrivacyUpsellExperiment, useIsInActivityPrivacyCopyExperiment

// Module 14850 (useIsInActivityPrivacyCopyExperiment)
import ApexExperiment from "ApexExperiment";

let closure_2 = ApexExperiment.createApexExperiment({ name: "2026-02-activity-privacy-matching", kind: "user", defaultConfig: { copyChanges: false, upsell: false }, variations: { 0: { copyChanges: false, upsell: false }, 1: { copyChanges: true, upsell: false }, 2: { copyChanges: true, upsell: true } } });
const result = require("set").fileFinishedImporting("modules/activity_privacy/ActivityPrivacyMatchingExperiment.tsx");

export const useIsInActivityPrivacyCopyExperiment = function useIsInActivityPrivacyCopyExperiment(ActivityPrivacyDefaultSharingSetting) {
  let obj = require(12401) /* apexExperiment */;
  let copyChanges = obj.useIsInPrivateProfilesExperiment(ActivityPrivacyDefaultSharingSetting);
  obj = { location: ActivityPrivacyDefaultSharingSetting };
  if (!copyChanges) {
    copyChanges = closure_2.useConfig(obj).copyChanges;
  }
  return copyChanges;
};
export const getIsInActivityPrivacyUpsellExperiment = function getIsInActivityPrivacyUpsellExperiment(ActivityPrivacyDefaultSharingSetting) {
  let obj = require(12401) /* apexExperiment */;
  let upsell = obj.getIsInPrivateProfilesExperiment(ActivityPrivacyDefaultSharingSetting);
  if (!upsell) {
    obj = { location: null };
    obj[0] = ActivityPrivacyDefaultSharingSetting;
    upsell = closure_2.getConfig(obj).upsell;
  }
  return upsell;
};
