// Module ID: 8510
// Function ID: 8511
// Name: isUserProfilePerformanceAnalyticsEnabled
// Dependencies: [1472, 2]
// Exports: isUserProfilePerformanceAnalyticsEnabled

// Module 8510 (isUserProfilePerformanceAnalyticsEnabled)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

let closure_0 = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-04-user-profile-performance-analytics", defaultConfig: { performanceAnalyticsEnabled: false }, variations: { 0: { performanceAnalyticsEnabled: false }, 1: { performanceAnalyticsEnabled: true } } });
const result = set.fileFinishedImporting("modules/user_profile/experiments/UserProfilePerformanceAnalyticsExperiment.tsx");

export const isUserProfilePerformanceAnalyticsEnabled = function isUserProfilePerformanceAnalyticsEnabled(UserProfileAnalyticsUtils) {
  return config.getConfig({ location: UserProfileAnalyticsUtils }).performanceAnalyticsEnabled;
};
