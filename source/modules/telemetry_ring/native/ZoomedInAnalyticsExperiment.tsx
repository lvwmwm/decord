// Module ID: 13227
// Function ID: 101717
// Name: apexExperiment
// Dependencies: [1428, 2]
// Exports: isZoomedExperimentEnabled

// Module 13227 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { kind: "user", name: "2025-12-zoomed-analytics", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/telemetry_ring/native/ZoomedInAnalyticsExperiment.tsx");

export default apexExperiment;
export const isZoomedExperimentEnabled = function isZoomedExperimentEnabled() {
  return apexExperiment.getConfig({ location: "zoomed_in_telemetry_consumer" }).enabled;
};
