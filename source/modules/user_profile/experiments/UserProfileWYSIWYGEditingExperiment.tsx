// Module ID: 9777
// Function ID: 76018
// Name: useIsEligibleForUserProfileWYSIWYGEditing
// Dependencies: []
// Exports: getIsEligibleForUserProfileWYSIWYGEditing, useIsEligibleForUserProfileWYSIWYGEditing

// Module 9777 (useIsEligibleForUserProfileWYSIWYGEditing)
const _module = require(dependencyMap[0]);
const obj = { y: "EMBEDDED_ACTIVITY_HAPPENING_NOW", DateToSystemTimezoneSetter: "sm", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
let closure_0 = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/user_profile/experiments/UserProfileWYSIWYGEditingExperiment.tsx");

export const useIsEligibleForUserProfileWYSIWYGEditing = function useIsEligibleForUserProfileWYSIWYGEditing(AutomodQuarantineUtils) {
  return closure_0.useConfig({ location: AutomodQuarantineUtils }).enabled;
};
export const getIsEligibleForUserProfileWYSIWYGEditing = function getIsEligibleForUserProfileWYSIWYGEditing(location) {
  return closure_0.getConfig({ location }).enabled;
};
