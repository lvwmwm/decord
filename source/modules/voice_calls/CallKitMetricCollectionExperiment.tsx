// Module ID: 14758
// Function ID: 14759
// Name: apexExperiment
// Dependencies: [1471, 2]

// Module 14758 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { 1: null };
obj[1] = { enabled: false };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-02-callkit-metric-collection", kind: "user", defaultConfig: { enabled: true }, variations: obj });
const result = require("set").fileFinishedImporting("modules/voice_calls/CallKitMetricCollectionExperiment.tsx");

export default apexExperiment;
