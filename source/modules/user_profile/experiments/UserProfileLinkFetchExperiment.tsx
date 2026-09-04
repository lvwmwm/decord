// Module ID: 8111
// Function ID: 8112
// Name: getIsUserProfileLinkFetchEnabled
// Dependencies: [1468, 2]
// Exports: getIsUserProfileLinkFetchEnabled

// Module 8111 (getIsUserProfileLinkFetchEnabled)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1468 */;

const obj = { 1: null };
obj[1] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-09-profile-link-fetch", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = set.fileFinishedImporting("modules/user_profile/experiments/UserProfileLinkFetchExperiment.tsx");

export const getIsUserProfileLinkFetchEnabled = function getIsUserProfileLinkFetchEnabled(showUserProfileActionSheet) {
  return config.getConfig({ location: showUserProfileActionSheet }).enabled;
};
