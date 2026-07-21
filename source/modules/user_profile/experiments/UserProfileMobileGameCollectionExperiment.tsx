// Module ID: 11985
// Function ID: 92626
// Name: useIsMobileGameCollectionExperimentEnabled
// Dependencies: []
// Exports: useIsMobileGameCollectionExperimentEnabled

// Module 11985 (useIsMobileGameCollectionExperimentEnabled)
const _module = require(dependencyMap[0]);
const obj = { 9223372036854775807: "accessible", 0: "enabled", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
let closure_0 = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/user_profile/experiments/UserProfileMobileGameCollectionExperiment.tsx");

export const useIsMobileGameCollectionExperimentEnabled = function useIsMobileGameCollectionExperimentEnabled(UserProfileWidgetsBoard) {
  return closure_0.useConfig({ location: UserProfileWidgetsBoard }).enabled;
};
