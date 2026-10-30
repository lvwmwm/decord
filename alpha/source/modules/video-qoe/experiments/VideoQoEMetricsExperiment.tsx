// Module ID: 17050
// Function ID: 17051
// Name: VideoQoEMetricsExperiment
// Dependencies: [1448, 2]
// Exports: getVideoQoEMetricsConfig

// Module 17050 (VideoQoEMetricsExperiment)
import ApexExperiment from "ApexExperiment" /* 1448 */;
import size from "module_2" /* 2 */;

let obj = { name: "2025-09-video-qoe-metrics-tracking", kind: "user", defaultConfig: { externalAnalyticsEnabled: false }, variations: { 0: { externalAnalyticsEnabled: false }, 1: { externalAnalyticsEnabled: true } } };
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/video-qoe/experiments/VideoQoEMetricsExperiment.tsx");

export function getVideoQoEMetricsConfig(location) {
  const obj = { location: location.location };
  return config.getConfig(obj);
}
