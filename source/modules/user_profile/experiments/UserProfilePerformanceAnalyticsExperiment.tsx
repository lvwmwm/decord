// Module ID: 8265
// Function ID: 65211
// Name: isUserProfilePerformanceAnalyticsEnabled
// Dependencies: []
// Exports: isUserProfilePerformanceAnalyticsEnabled

// Module 8265 (isUserProfilePerformanceAnalyticsEnabled)
const _module = require(dependencyMap[0]);
let closure_0 = _module.createApexExperiment({ defaultConfig: { performanceAnalyticsEnabled: false }, variations: { [0]: { performanceAnalyticsEnabled: false }, [1]: { performanceAnalyticsEnabled: true } } });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/user_profile/experiments/UserProfilePerformanceAnalyticsExperiment.tsx");

export const isUserProfilePerformanceAnalyticsEnabled = function isUserProfilePerformanceAnalyticsEnabled(UserProfileAnalyticsUtils) {
  return config.getConfig({ location: UserProfileAnalyticsUtils }).performanceAnalyticsEnabled;
};
