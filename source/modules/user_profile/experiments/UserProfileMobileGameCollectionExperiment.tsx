// Module ID: 12525
// Function ID: 12526
// Name: useIsMobileGameCollectionExperimentEnabled
// Dependencies: [1471, 2]
// Exports: useIsMobileGameCollectionExperimentEnabled

// Module 12525 (useIsMobileGameCollectionExperimentEnabled)
import ApexExperiment from "ApexExperiment";

const obj = { 1: null };
obj[1] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-07-mobile-game-collection", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/user_profile/experiments/UserProfileMobileGameCollectionExperiment.tsx");

export const useIsMobileGameCollectionExperimentEnabled = function useIsMobileGameCollectionExperimentEnabled(UserProfileWidgetsBoard) {
  return closure_0.useConfig({ location: UserProfileWidgetsBoard }).enabled;
};
