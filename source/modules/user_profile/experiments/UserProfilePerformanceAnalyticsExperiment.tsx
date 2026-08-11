// Module ID: 8800
// Function ID: 8801
// Name: isUserProfilePerformanceAnalyticsEnabled
// Dependencies: [1471, 2]
// Exports: isUserProfilePerformanceAnalyticsEnabled

// Module 8800 (isUserProfilePerformanceAnalyticsEnabled)
import ApexExperiment from "ApexExperiment";

let closure_0 = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-04-user-profile-performance-analytics", defaultConfig: { performanceAnalyticsEnabled: false }, variations: { 0: { performanceAnalyticsEnabled: false }, 1: { performanceAnalyticsEnabled: true } } });
const result = require("set").fileFinishedImporting("modules/user_profile/experiments/UserProfilePerformanceAnalyticsExperiment.tsx");

export const isUserProfilePerformanceAnalyticsEnabled = function isUserProfilePerformanceAnalyticsEnabled(UserProfileAnalyticsUtils) {
  return config.getConfig({ location: UserProfileAnalyticsUtils }).performanceAnalyticsEnabled;
};
