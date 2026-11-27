// Module ID: 14850
// Function ID: 14851
// Name: UserProfilePerformanceAnalyticsExperiment
// Dependencies: [1451, 2]
// Exports: isUserProfilePerformanceAnalyticsEnabled

// Module 14850 (UserProfilePerformanceAnalyticsExperiment)
import ApexExperiment from "ApexExperiment" /* 1451 */;
import size from "module_2" /* 2 */;

let obj = { kind: "user", name: "2026-04-user-profile-performance-analytics", defaultConfig: { performanceAnalyticsEnabled: false }, variations: { 0: { performanceAnalyticsEnabled: false }, 1: { performanceAnalyticsEnabled: true } } };
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/user_profile/experiments/UserProfilePerformanceAnalyticsExperiment.tsx");

export function isUserProfilePerformanceAnalyticsEnabled(UserProfileAnalyticsUtils) {
  const obj = { location: UserProfileAnalyticsUtils };
  return config.getConfig(obj).performanceAnalyticsEnabled;
}
