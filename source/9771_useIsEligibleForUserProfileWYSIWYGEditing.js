// Module ID: 9771
// Function ID: 75978
// Name: useIsEligibleForUserProfileWYSIWYGEditing
// Dependencies: []
// Exports: getIsEligibleForUserProfileWYSIWYGEditing, useIsEligibleForUserProfileWYSIWYGEditing

// Module 9771 (useIsEligibleForUserProfileWYSIWYGEditing)
const _module = require(dependencyMap[0]);
const obj = { -1269606814: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000015137455593657162, -1845285747: 2798754.0078125, defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
let closure_0 = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/user_profile/experiments/UserProfileWYSIWYGEditingExperiment.tsx");

export const useIsEligibleForUserProfileWYSIWYGEditing = function useIsEligibleForUserProfileWYSIWYGEditing(AutomodQuarantineUtils) {
  return closure_0.useConfig({ location: AutomodQuarantineUtils }).enabled;
};
export const getIsEligibleForUserProfileWYSIWYGEditing = function getIsEligibleForUserProfileWYSIWYGEditing(location) {
  return closure_0.getConfig({ location }).enabled;
};
