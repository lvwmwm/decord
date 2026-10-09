// Module ID: 8306
// Function ID: 8307
// Name: UserProfilePerformanceAnalyticsExperiment
// Dependencies: [1453, 2]
// Exports: isUserProfilePerformanceAnalyticsEnabled

// Module 8306 (UserProfilePerformanceAnalyticsExperiment)
import ApexExperiment from "ApexExperiment" /* 1453 */;
import size from "module_2" /* 2 */;

let obj = { kind: "user", name: "2026-04-user-profile-performance-analytics", defaultConfig: { performanceAnalyticsEnabled: false }, variations: { 0: { performanceAnalyticsEnabled: false }, 1: { performanceAnalyticsEnabled: true } } };
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/user_profile/experiments/UserProfilePerformanceAnalyticsExperiment.tsx");

export const isUserProfilePerformanceAnalyticsEnabled = function isUserProfilePerformanceAnalyticsEnabled(UserProfileAnalyticsUtils) {
  const obj = { location: UserProfileAnalyticsUtils };
  return config.getConfig(obj).performanceAnalyticsEnabled;
};
