// Module ID: 14982
// Function ID: 14983
// Name: UserProfileRecentActivityMobileExperiment
// Dependencies: [1447, 2]
// Exports: useIsRecentActivityMobileEnabled

// Module 14982 (UserProfileRecentActivityMobileExperiment)
import ApexExperiment from "ApexExperiment" /* 1447 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { name: "2026-09-recent-activity-mobile", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/user_profile/experiments/UserProfileRecentActivityMobileExperiment.tsx");

export function useIsRecentActivityMobileEnabled(UserProfileContent) {
  const obj = { location: UserProfileContent };
  return closure_0.useConfig(obj).enabled;
}
