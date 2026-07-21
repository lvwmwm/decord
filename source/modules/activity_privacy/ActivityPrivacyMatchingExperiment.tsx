// Module ID: 14443
// Function ID: 108854
// Name: useIsInActivityPrivacyCopyExperiment
// Dependencies: []
// Exports: getIsInActivityPrivacyUpsellExperiment, useIsInActivityPrivacyCopyExperiment

// Module 14443 (useIsInActivityPrivacyCopyExperiment)
const _module = require(dependencyMap[0]);
const obj = { 9223372036854775807: -1124073132, 0: 285213139, defaultConfig: { contentStyles: null, Millis: null }, variations: { [0]: { contentStyles: null, Millis: null }, [1]: { contentStyles: true, Millis: true }, [2]: { contentStyles: null, Millis: null } } };
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
