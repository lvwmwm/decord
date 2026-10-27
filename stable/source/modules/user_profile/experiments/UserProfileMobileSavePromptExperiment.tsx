// Module ID: 10852
// Function ID: 10853
// Name: UserProfileMobileSavePromptExperiment
// Dependencies: [1455, 2]
// Exports: getIsUserProfileMobileSavePromptEnabled

// Module 10852 (UserProfileMobileSavePromptExperiment)
import ApexExperiment from "ApexExperiment" /* 1455 */;
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
