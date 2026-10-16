// Module ID: 14772
// Function ID: 14773
// Name: E2eLatencyMeasurementExperiment
// Dependencies: [1455, 2]

// Module 14772 (E2eLatencyMeasurementExperiment)
import ApexExperiment from "ApexExperiment" /* 1455 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-10-e2e-latency-measurement", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/E2eLatencyMeasurementExperiment.tsx");

export const E2eLatencyMeasurementExperiment = apexExperiment;
