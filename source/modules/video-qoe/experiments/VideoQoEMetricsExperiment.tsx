// Module ID: 14451
// Function ID: 14452
// Name: getVideoQoEMetricsConfig
// Dependencies: [1471, 2]
// Exports: getVideoQoEMetricsConfig

// Module 14451 (getVideoQoEMetricsConfig)
import ApexExperiment from "ApexExperiment";

let closure_0 = ApexExperiment.createApexExperiment({ name: "2025-09-video-qoe-metrics-tracking", kind: "user", defaultConfig: { externalAnalyticsEnabled: false }, variations: { 0: { externalAnalyticsEnabled: false }, 1: { externalAnalyticsEnabled: true } } });
const result = require("set").fileFinishedImporting("modules/video-qoe/experiments/VideoQoEMetricsExperiment.tsx");

export const getVideoQoEMetricsConfig = function getVideoQoEMetricsConfig(location) {
  return config.getConfig({ location: location.location });
};
