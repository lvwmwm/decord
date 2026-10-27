// Module ID: 11076
// Function ID: 11077
// Name: UserProfileMobileSavePromptExperiment
// Dependencies: [1452, 2]
// Exports: getIsUserProfileMobileSavePromptEnabled

// Module 11076 (UserProfileMobileSavePromptExperiment)
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { name: "2026-10-user-profile-mobile-save-prompt", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/user_profile/experiments/UserProfileMobileSavePromptExperiment.tsx");

export const getIsUserProfileMobileSavePromptEnabled = function getIsUserProfileMobileSavePromptEnabled(location) {
  const obj = { location };
  return config.getConfig(obj).enabled;
};
