// Module ID: 14454
// Function ID: 108929
// Name: useIsInActivityPrivacyCopyExperiment
// Dependencies: []
// Exports: getIsInActivityPrivacyUpsellExperiment, useIsInActivityPrivacyCopyExperiment

// Module 14454 (useIsInActivityPrivacyCopyExperiment)
const _module = require(dependencyMap[0]);
const obj = { y: "Array", DateToSystemTimezoneSetter: "maxMediaHeight", defaultConfig: { "Bool(false)": true, "Bool(false)": true }, variations: { [0]: { "Bool(false)": true, "Bool(false)": true }, [1]: { "Bool(false)": "<string:1040334421>", "Bool(false)": "<string:1040334338>" }, [2]: { "Bool(false)": null, "Bool(false)": null } } };
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
