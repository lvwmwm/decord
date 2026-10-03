// Module ID: 14943
// Function ID: 14944
// Name: VideoQoEMetricsExperiment
// Dependencies: [1440, 2]
// Exports: getVideoQoEMetricsConfig

// Module 14943 (VideoQoEMetricsExperiment)
import ApexExperiment from "ApexExperiment" /* 1440 */;
import size from "module_2" /* 2 */;

let obj = { name: "2025-09-video-qoe-metrics-tracking", kind: "user", defaultConfig: { externalAnalyticsEnabled: false }, variations: { 0: { externalAnalyticsEnabled: false }, 1: { externalAnalyticsEnabled: true } } };
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/video-qoe/experiments/VideoQoEMetricsExperiment.tsx");

export const getVideoQoEMetricsConfig = function getVideoQoEMetricsConfig(location) {
  const obj = { location: location.location };
  return config.getConfig(obj);
};
