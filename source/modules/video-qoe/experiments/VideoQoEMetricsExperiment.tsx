// Module ID: 13909
// Function ID: 105760
// Name: getVideoQoEMetricsConfig
// Dependencies: []
// Exports: getVideoQoEMetricsConfig

// Module 13909 (getVideoQoEMetricsConfig)
const _module = require(dependencyMap[0]);
const obj = { -1269606814: 1, -1845285747: 3, defaultConfig: { externalAnalyticsEnabled: false }, variations: { [0]: { externalAnalyticsEnabled: false }, [1]: { externalAnalyticsEnabled: true } } };
let closure_0 = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/video-qoe/experiments/VideoQoEMetricsExperiment.tsx");

export const getVideoQoEMetricsConfig = function getVideoQoEMetricsConfig(location) {
  return config.getConfig({ location: location.location });
};
