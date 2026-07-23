// Module ID: 14040
// Function ID: 108011
// Name: getVideoQoEMetricsConfig
// Dependencies: [1428, 2]
// Exports: getVideoQoEMetricsConfig

// Module 14040 (getVideoQoEMetricsConfig)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2025-09-video-qoe-metrics-tracking", kind: "user", defaultConfig: { externalAnalyticsEnabled: false }, variations: { [0]: { externalAnalyticsEnabled: false }, [1]: { externalAnalyticsEnabled: true } } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/video-qoe/experiments/VideoQoEMetricsExperiment.tsx");

export const getVideoQoEMetricsConfig = function getVideoQoEMetricsConfig(location) {
  return config.getConfig({ location: location.location });
};
