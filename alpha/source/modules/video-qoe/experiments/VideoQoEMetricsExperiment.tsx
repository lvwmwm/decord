// Module ID: 16183
// Function ID: 16184
// Name: VideoQoEMetricsExperiment
// Dependencies: [1455, 2]
// Exports: getVideoQoEMetricsConfig

// Module 16183 (VideoQoEMetricsExperiment)
import ApexExperiment from "ApexExperiment" /* 1455 */;
import size from "module_2" /* 2 */;

let obj = { name: "2025-09-video-qoe-metrics-tracking", kind: "user", defaultConfig: { externalAnalyticsEnabled: false }, variations: { 0: { externalAnalyticsEnabled: false }, 1: { externalAnalyticsEnabled: true } } };
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/video-qoe/experiments/VideoQoEMetricsExperiment.tsx");

export const getVideoQoEMetricsConfig = function getVideoQoEMetricsConfig(location) {
  const obj = { location: location.location };
  return config.getConfig(obj);
};
