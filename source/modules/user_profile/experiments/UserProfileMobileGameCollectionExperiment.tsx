// Module ID: 12338
// Function ID: 12339
// Name: useIsMobileGameCollectionExperimentEnabled
// Dependencies: [1452, 2]
// Exports: useIsMobileGameCollectionExperimentEnabled

// Module 12338 (useIsMobileGameCollectionExperimentEnabled)
import ApexExperiment from "ApexExperiment";

const obj = { 1: null };
obj[1] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-07-mobile-game-collection", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/user_profile/experiments/UserProfileMobileGameCollectionExperiment.tsx");

export const useIsMobileGameCollectionExperimentEnabled = function useIsMobileGameCollectionExperimentEnabled(UserProfileWidgetsBoard) {
  return closure_0.useConfig({ location: UserProfileWidgetsBoard }).enabled;
};
