// Module ID: 15978
// Function ID: 15979
// Name: UserProfileMobileEditingRefreshExperiment
// Dependencies: [1450, 2]
// Exports: useIsUserProfileEditingRefreshEnabled

// Module 15978 (UserProfileMobileEditingRefreshExperiment)
import ApexExperiment from "ApexExperiment" /* 1450 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { name: "2026-11-user-profile-mobile-editing-refresh", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/user_profile/experiments/UserProfileMobileEditingRefreshExperiment.tsx");

export function useIsUserProfileEditingRefreshEnabled(ProfileCustomizationSettingScreenExperimentWrapper) {
  const obj = { location: ProfileCustomizationSettingScreenExperimentWrapper };
  return closure_0.useConfig(obj).enabled;
}
