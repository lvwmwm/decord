// Module ID: 8266
// Function ID: 65223
// Name: isUserProfilePerformanceAnalyticsEnabled
// Dependencies: []
// Exports: isUserProfilePerformanceAnalyticsEnabled

// Module 8266 (isUserProfilePerformanceAnalyticsEnabled)
const _module = require(dependencyMap[0]);
const obj = { "Bool(false)": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000017383389523691, "Bool(false)": 278976659548968400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, defaultConfig: { performanceAnalyticsEnabled: false }, variations: { [0]: { performanceAnalyticsEnabled: false }, [1]: { performanceAnalyticsEnabled: true } } };
let closure_0 = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/user_profile/experiments/UserProfilePerformanceAnalyticsExperiment.tsx");

export const isUserProfilePerformanceAnalyticsEnabled = function isUserProfilePerformanceAnalyticsEnabled(UserProfileAnalyticsUtils) {
  return config.getConfig({ location: UserProfileAnalyticsUtils }).performanceAnalyticsEnabled;
};
