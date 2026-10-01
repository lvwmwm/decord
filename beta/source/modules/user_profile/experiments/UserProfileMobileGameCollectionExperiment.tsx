// Module ID: 12459
// Function ID: 12460
// Name: UserProfileMobileGameCollectionExperiment
// Dependencies: [1435, 2]
// Exports: useIsMobileGameCollectionExperimentEnabled

// Module 12459 (UserProfileMobileGameCollectionExperiment)
import ApexExperiment from "ApexExperiment" /* 1435 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { name: "2026-07-mobile-game-collection", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/user_profile/experiments/UserProfileMobileGameCollectionExperiment.tsx");

export const useIsMobileGameCollectionExperimentEnabled = function useIsMobileGameCollectionExperimentEnabled(UserProfileContent) {
  const obj = { location: UserProfileContent };
  return closure_0.useConfig(obj).enabled;
};
