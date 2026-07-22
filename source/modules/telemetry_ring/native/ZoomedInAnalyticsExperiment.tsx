// Module ID: 13004
// Function ID: 98929
// Name: apexExperiment
// Dependencies: []
// Exports: isZoomedExperimentEnabled

// Module 13004 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { "Bool(false)": true, "Bool(false)": true, defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/telemetry_ring/native/ZoomedInAnalyticsExperiment.tsx");

export default apexExperiment;
export const isZoomedExperimentEnabled = function isZoomedExperimentEnabled() {
  return apexExperiment.getConfig({ location: "zoomed_in_telemetry_consumer" }).enabled;
};
