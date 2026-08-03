// Module ID: 9961
// Function ID: 9962
// Name: useIsEligibleForUserProfileWYSIWYGEditing
// Dependencies: [1452, 2]
// Exports: getIsEligibleForUserProfileWYSIWYGEditing, useIsEligibleForUserProfileWYSIWYGEditing

// Module 9961 (useIsEligibleForUserProfileWYSIWYGEditing)
import ApexExperiment from "ApexExperiment";

const obj = { 1: null };
obj[1] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-03-wysiwyg-user-profile-editing", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/user_profile/experiments/UserProfileWYSIWYGEditingExperiment.tsx");

export const useIsEligibleForUserProfileWYSIWYGEditing = function useIsEligibleForUserProfileWYSIWYGEditing(AutomodQuarantineUtils) {
  return closure_0.useConfig({ location: AutomodQuarantineUtils }).enabled;
};
export const getIsEligibleForUserProfileWYSIWYGEditing = function getIsEligibleForUserProfileWYSIWYGEditing(location) {
  return closure_0.getConfig({ location }).enabled;
};
