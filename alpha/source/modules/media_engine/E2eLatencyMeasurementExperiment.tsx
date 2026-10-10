// Module ID: 14035
// Function ID: 14036
// Name: E2eLatencyMeasurementExperiment
// Dependencies: [1453, 2]

// Module 14035 (E2eLatencyMeasurementExperiment)
import ApexExperiment from "ApexExperiment" /* 1453 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-10-e2e-latency-measurement", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/E2eLatencyMeasurementExperiment.tsx");

export const E2eLatencyMeasurementExperiment = apexExperiment;
