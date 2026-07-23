// Module ID: 8272
// Function ID: 65260
// Name: isUserProfilePerformanceAnalyticsEnabled
// Dependencies: [1428, 2]
// Exports: isUserProfilePerformanceAnalyticsEnabled

// Module 8272 (isUserProfilePerformanceAnalyticsEnabled)
import ApexExperiment from "ApexExperiment";

const obj = { kind: "user", name: "2026-04-user-profile-performance-analytics", defaultConfig: { performanceAnalyticsEnabled: false }, variations: { [0]: { performanceAnalyticsEnabled: false }, [1]: { performanceAnalyticsEnabled: true } } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/user_profile/experiments/UserProfilePerformanceAnalyticsExperiment.tsx");

export const isUserProfilePerformanceAnalyticsEnabled = function isUserProfilePerformanceAnalyticsEnabled(UserProfileAnalyticsUtils) {
  return config.getConfig({ location: UserProfileAnalyticsUtils }).performanceAnalyticsEnabled;
};
