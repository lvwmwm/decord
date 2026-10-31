// Module ID: 16456
// Function ID: 16457
// Name: UserProfilePremiumTryItOutMobileRefreshExperiment
// Dependencies: [1447, 2]
// Exports: useTryItOutMobileRefreshConfig

// Module 16456 (UserProfilePremiumTryItOutMobileRefreshExperiment)
import ApexExperiment from "ApexExperiment" /* 1447 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { name: "2026-09-user-profile-premium-try-it-out-mobile-refresh", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null, 2: { enabled: true, shuffleButtonLocation: "header" } };
obj2[2] = { enabled: true, shuffleButtonLocation: "inline" };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/user_profile/experiments/UserProfilePremiumTryItOutMobileRefreshExperiment.tsx");

export function useTryItOutMobileRefreshConfig(DisplayNameStylesFlywheelMobileActionSheet) {
  const obj = { location: DisplayNameStylesFlywheelMobileActionSheet };
  return closure_0.useConfig(obj);
}
