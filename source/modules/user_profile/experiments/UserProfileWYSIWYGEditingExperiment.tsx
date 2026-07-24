// Module ID: 9816
// Function ID: 76253
// Name: useIsEligibleForUserProfileWYSIWYGEditing
// Dependencies: [1428, 2]
// Exports: getIsEligibleForUserProfileWYSIWYGEditing, useIsEligibleForUserProfileWYSIWYGEditing

// Module 9816 (useIsEligibleForUserProfileWYSIWYGEditing)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-03-wysiwyg-user-profile-editing", kind: "user", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/user_profile/experiments/UserProfileWYSIWYGEditingExperiment.tsx");

export const useIsEligibleForUserProfileWYSIWYGEditing = function useIsEligibleForUserProfileWYSIWYGEditing(AutomodQuarantineUtils) {
  return closure_0.useConfig({ location: AutomodQuarantineUtils }).enabled;
};
export const getIsEligibleForUserProfileWYSIWYGEditing = function getIsEligibleForUserProfileWYSIWYGEditing(location) {
  return closure_0.getConfig({ location }).enabled;
};
