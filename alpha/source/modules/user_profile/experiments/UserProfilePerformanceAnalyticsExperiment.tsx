// Module ID: 8769
// Function ID: 8770
// Name: UserProfilePerformanceAnalyticsExperiment
// Dependencies: [1447, 2]
// Exports: isUserProfilePerformanceAnalyticsEnabled

// Module 8769 (UserProfilePerformanceAnalyticsExperiment)
import ApexExperiment from "ApexExperiment" /* 1447 */;
import size from "module_2" /* 2 */;

let obj = { kind: "user", name: "2026-04-user-profile-performance-analytics", defaultConfig: { performanceAnalyticsEnabled: false }, variations: { 0: { performanceAnalyticsEnabled: false }, 1: { performanceAnalyticsEnabled: true } } };
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/user_profile/experiments/UserProfilePerformanceAnalyticsExperiment.tsx");

export function isUserProfilePerformanceAnalyticsEnabled(UserProfileAnalyticsUtils) {
  const obj = { location: UserProfileAnalyticsUtils };
  return config.getConfig(obj).performanceAnalyticsEnabled;
}
