// Module ID: 14436
// Function ID: 108831
// Name: useIsInActivityPrivacyCopyExperiment
// Dependencies: []
// Exports: getIsInActivityPrivacyUpsellExperiment, useIsInActivityPrivacyCopyExperiment

// Module 14436 (useIsInActivityPrivacyCopyExperiment)
const _module = require(dependencyMap[0]);
const obj = { -1269606814: null, -1845285747: null, defaultConfig: {}, variations: { [0]: {}, [1]: { 223468870: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000021043611947808288, -1955763765: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000053357352779429986 }, [2]: { 223468870: null, -1955763765: null } } };
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
