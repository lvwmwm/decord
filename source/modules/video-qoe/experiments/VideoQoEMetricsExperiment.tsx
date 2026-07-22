// Module ID: 13926
// Function ID: 105855
// Name: getVideoQoEMetricsConfig
// Dependencies: []
// Exports: getVideoQoEMetricsConfig

// Module 13926 (getVideoQoEMetricsConfig)
const _module = require(dependencyMap[0]);
let closure_0 = _module.createApexExperiment({ defaultConfig: { externalAnalyticsEnabled: false }, variations: { [0]: { externalAnalyticsEnabled: false }, [1]: { externalAnalyticsEnabled: true } } });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/video-qoe/experiments/VideoQoEMetricsExperiment.tsx");

export const getVideoQoEMetricsConfig = function getVideoQoEMetricsConfig(location) {
  return config.getConfig({ location: location.location });
};
