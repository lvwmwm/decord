// Module ID: 14464
// Function ID: 14465
// Name: getVideoQoEMetricsConfig
// Dependencies: [1471, 2]
// Exports: getVideoQoEMetricsConfig

// Module 14464 (getVideoQoEMetricsConfig)
import ApexExperiment from "ApexExperiment";

let closure_0 = ApexExperiment.createApexExperiment({ name: "2025-09-video-qoe-metrics-tracking", kind: "user", defaultConfig: { externalAnalyticsEnabled: false }, variations: { 0: { externalAnalyticsEnabled: false }, 1: { externalAnalyticsEnabled: true } } });
const result = require("set").fileFinishedImporting("modules/video-qoe/experiments/VideoQoEMetricsExperiment.tsx");

export const getVideoQoEMetricsConfig = function getVideoQoEMetricsConfig(location) {
  return config.getConfig({ location: location.location });
};
