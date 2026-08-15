// Module ID: 13559
// Function ID: 13560
// Name: apexExperiment
// Dependencies: [1472, 2]
// Exports: isZoomedExperimentEnabled

// Module 13559 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2025-12-zoomed-analytics", defaultConfig: { enabled: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/telemetry_ring/native/ZoomedInAnalyticsExperiment.tsx");

export default apexExperiment;
export const isZoomedExperimentEnabled = function isZoomedExperimentEnabled() {
  return apexExperiment.getConfig({ location: "zoomed_in_telemetry_consumer" }).enabled;
};
