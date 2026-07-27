// Module ID: 14384
// Function ID: 110109
// Name: apexExperiment
// Dependencies: [1428, 2]

// Module 14384 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-02-callkit-metric-collection", kind: "user", defaultConfig: { enabled: true }, variations: { [1]: { enabled: false } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/voice_calls/CallKitMetricCollectionExperiment.tsx");

export default apexExperiment;
