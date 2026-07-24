// Module ID: 12128
// Function ID: 95063
// Name: useIsMobileGameCollectionExperimentEnabled
// Dependencies: [1428, 2]
// Exports: useIsMobileGameCollectionExperimentEnabled

// Module 12128 (useIsMobileGameCollectionExperimentEnabled)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-07-mobile-game-collection", kind: "user", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/user_profile/experiments/UserProfileMobileGameCollectionExperiment.tsx");

export const useIsMobileGameCollectionExperimentEnabled = function useIsMobileGameCollectionExperimentEnabled(UserProfileWidgetsBoard) {
  return closure_0.useConfig({ location: UserProfileWidgetsBoard }).enabled;
};
