// Module ID: 9228
// Function ID: 9229
// Name: UserProfileWYSIWYGEditingExperiment
// Dependencies: [1435, 2]
// Exports: getIsEligibleForUserProfileWYSIWYGEditing, useIsEligibleForUserProfileWYSIWYGEditing

// Module 9228 (UserProfileWYSIWYGEditingExperiment)
import ApexExperiment from "ApexExperiment" /* 1435 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { name: "2026-03-wysiwyg-user-profile-editing", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/user_profile/experiments/UserProfileWYSIWYGEditingExperiment.tsx");

export const useIsEligibleForUserProfileWYSIWYGEditing = function useIsEligibleForUserProfileWYSIWYGEditing(AutomodQuarantineUtils) {
  const obj = { location: AutomodQuarantineUtils };
  return closure_0.useConfig(obj).enabled;
};
export const getIsEligibleForUserProfileWYSIWYGEditing = function getIsEligibleForUserProfileWYSIWYGEditing(location) {
  const obj = { location };
  return closure_0.getConfig(obj).enabled;
};
