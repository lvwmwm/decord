// Module ID: 9152
// Function ID: 9153
// Name: UserProfilePremiumTryItOutMobileRefreshExperiment
// Dependencies: [1451, 2]
// Exports: useTryItOutMobileRefreshConfig

// Module 9152 (UserProfilePremiumTryItOutMobileRefreshExperiment)
import ApexExperiment from "ApexExperiment" /* 1451 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { name: "2026-09-user-profile-premium-try-it-out-mobile-refresh", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null, 2: { enabled: true, shuffleButtonLocation: "header" } };
obj2[2] = { enabled: true, shuffleButtonLocation: "inline", showNitroBasicPurchaseWarning: true };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/user_profile/experiments/UserProfilePremiumTryItOutMobileRefreshExperiment.tsx");

export function useTryItOutMobileRefreshConfig(DisplayNameStylesFlywheelMobileActionSheet, hasItem) {
  let autoTrackExposure = hasItem;
  if (hasItem === undefined) {
    autoTrackExposure = true;
  }
  const obj = { location: DisplayNameStylesFlywheelMobileActionSheet };
  return closure_0.useConfig(obj, { autoTrackExposure });
}
