// Module ID: 12988
// Function ID: 98851
// Name: apexExperiment
// Dependencies: []
// Exports: isZoomedExperimentEnabled

// Module 12988 (apexExperiment)
const _module = require(dependencyMap[0]);
const apexExperiment = _module.createApexExperiment({ defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/telemetry_ring/native/ZoomedInAnalyticsExperiment.tsx");

export default apexExperiment;
export const isZoomedExperimentEnabled = function isZoomedExperimentEnabled() {
  return apexExperiment.getConfig({ location: "zoomed_in_telemetry_consumer" }).enabled;
};
