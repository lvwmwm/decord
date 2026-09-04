// Module ID: 14109
// Function ID: 14110
// Name: apexExperiment
// Dependencies: [1468, 2]
// Exports: isZoomedExperimentEnabled

// Module 14109 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1468 */;

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2025-12-zoomed-analytics", defaultConfig: { enabled: false }, variations: obj });
const result = set.fileFinishedImporting("modules/telemetry_ring/native/ZoomedInAnalyticsExperiment.tsx");

export default apexExperiment;
export const isZoomedExperimentEnabled = function isZoomedExperimentEnabled() {
  return apexExperiment.getConfig({ location: "zoomed_in_telemetry_consumer" }).enabled;
};
