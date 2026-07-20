// Module ID: 8260
// Function ID: 65186
// Name: isUserProfilePerformanceAnalyticsEnabled
// Dependencies: []
// Exports: isUserProfilePerformanceAnalyticsEnabled

// Module 8260 (isUserProfilePerformanceAnalyticsEnabled)
const _module = require(dependencyMap[0]);
const obj = { "Null": "%ArrayProto_keys%", "Null": "constructor", defaultConfig: { performanceAnalyticsEnabled: false }, variations: { [0]: { performanceAnalyticsEnabled: false }, [1]: { performanceAnalyticsEnabled: true } } };
let closure_0 = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/user_profile/experiments/UserProfilePerformanceAnalyticsExperiment.tsx");

export const isUserProfilePerformanceAnalyticsEnabled = function isUserProfilePerformanceAnalyticsEnabled(UserProfileAnalyticsUtils) {
  return config.getConfig({ location: UserProfileAnalyticsUtils }).performanceAnalyticsEnabled;
};
