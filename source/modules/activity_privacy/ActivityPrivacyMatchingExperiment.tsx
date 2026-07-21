// Module ID: 14446
// Function ID: 108886
// Name: useIsInActivityPrivacyCopyExperiment
// Dependencies: []
// Exports: getIsInActivityPrivacyUpsellExperiment, useIsInActivityPrivacyCopyExperiment

// Module 14446 (useIsInActivityPrivacyCopyExperiment)
const _module = require(dependencyMap[0]);
const obj = { 844175713: "Array", 1387159956: "LAUNCH_PAD_END_TRANSLATION_THRESHOLD", defaultConfig: { style: null, nativeID: null }, variations: { [0]: { style: null, nativeID: null }, [1]: { style: null, nativeID: null }, [2]: { style: null, nativeID: null } } };
let closure_2 = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[2]);
const result = _module1.fileFinishedImporting("modules/activity_privacy/ActivityPrivacyMatchingExperiment.tsx");

export const useIsInActivityPrivacyCopyExperiment = function useIsInActivityPrivacyCopyExperiment(ActivityPrivacyDefaultSharingSetting) {
  let obj = require(dependencyMap[1]);
  let copyChanges = obj.useIsInPrivateProfilesExperiment(ActivityPrivacyDefaultSharingSetting);
  obj = { location: ActivityPrivacyDefaultSharingSetting };
  if (!copyChanges) {
    copyChanges = closure_2.useConfig(obj).copyChanges;
  }
  return copyChanges;
};
export const getIsInActivityPrivacyUpsellExperiment = function getIsInActivityPrivacyUpsellExperiment(ActivityPrivacyDefaultSharingSetting) {
  let obj = require(dependencyMap[1]);
  let upsell = obj.getIsInPrivateProfilesExperiment(ActivityPrivacyDefaultSharingSetting);
  if (!upsell) {
    obj = { location: ActivityPrivacyDefaultSharingSetting };
    upsell = closure_2.getConfig(obj).upsell;
  }
  return upsell;
};
