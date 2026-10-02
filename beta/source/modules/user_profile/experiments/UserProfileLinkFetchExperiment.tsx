// Module ID: 7629
// Function ID: 7630
// Name: UserProfileLinkFetchExperiment
// Dependencies: [1441, 2]
// Exports: getIsUserProfileLinkFetchEnabled

// Module 7629 (UserProfileLinkFetchExperiment)
import ApexExperiment from "ApexExperiment" /* 1441 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { name: "2026-09-profile-link-fetch", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/user_profile/experiments/UserProfileLinkFetchExperiment.tsx");

export const getIsUserProfileLinkFetchEnabled = function getIsUserProfileLinkFetchEnabled(showUserProfileActionSheet) {
  const obj = { location: showUserProfileActionSheet };
  return config.getConfig(obj).enabled;
};
