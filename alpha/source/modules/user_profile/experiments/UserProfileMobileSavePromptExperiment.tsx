// Module ID: 11371
// Function ID: 11372
// Name: UserProfileMobileSavePromptExperiment
// Dependencies: [1448, 2]
// Exports: getIsUserProfileMobileSavePromptEnabled

// Module 11371 (UserProfileMobileSavePromptExperiment)
import ApexExperiment from "ApexExperiment" /* 1448 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { name: "2026-10-user-profile-mobile-save-prompt", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/user_profile/experiments/UserProfileMobileSavePromptExperiment.tsx");

export function getIsUserProfileMobileSavePromptEnabled(location) {
  const obj = { location };
  return config.getConfig(obj).enabled;
}
