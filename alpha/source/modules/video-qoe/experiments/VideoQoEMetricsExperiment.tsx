// Module ID: 17635
// Function ID: 17636
// Name: VideoQoEMetricsExperiment
// Dependencies: [1449, 2]
// Exports: getVideoQoEMetricsConfig

// Module 17635 (VideoQoEMetricsExperiment)
import ApexExperiment from "ApexExperiment" /* 1449 */;
import size from "module_2" /* 2 */;

let obj = { name: "2025-09-video-qoe-metrics-tracking", kind: "user", defaultConfig: { externalAnalyticsEnabled: false }, variations: { 0: { externalAnalyticsEnabled: false }, 1: { externalAnalyticsEnabled: true } } };
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/video-qoe/experiments/VideoQoEMetricsExperiment.tsx");

export function getVideoQoEMetricsConfig(location) {
  const obj = { location: location.location };
  return config.getConfig(obj);
}
