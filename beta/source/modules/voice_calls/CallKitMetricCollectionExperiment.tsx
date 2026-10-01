// Module ID: 15043
// Function ID: 15044
// Name: CallKitMetricCollectionExperiment
// Dependencies: [1435, 2]

// Module 15043 (CallKitMetricCollectionExperiment)
import ApexExperiment from "ApexExperiment" /* 1435 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-02-callkit-metric-collection", kind: "user", defaultConfig: { enabled: true }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: false };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/voice_calls/CallKitMetricCollectionExperiment.tsx");

export default apexExperiment;
