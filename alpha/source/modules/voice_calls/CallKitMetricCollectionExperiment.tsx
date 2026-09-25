// Module ID: 15017
// Function ID: 15018
// Name: CallKitMetricCollectionExperiment
// Dependencies: [1434, 2]

// Module 15017 (CallKitMetricCollectionExperiment)
import ApexExperiment from "ApexExperiment" /* 1434 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-02-callkit-metric-collection", kind: "user", defaultConfig: { enabled: true }, variations: null };
const obj2 = { 1: null };
obj2[1] = { enabled: false };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/voice_calls/CallKitMetricCollectionExperiment.tsx");

export default apexExperiment;
