// Module ID: 13034
// Function ID: 13035
// Name: apexExperiment
// Dependencies: [1471, 2]

// Module 13034 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { 1: null, 2: { timeoutMs: 10000, hidden: false }, 3: { timeoutMs: 15000, hidden: false }, 4: { timeoutMs: 20000, hidden: false } };
obj[4] = { timeoutMs: 10000, hidden: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2025-12-connection-indicator", kind: "user", defaultConfig: { timeoutMs: "HermesInternal", hidden: null }, variations: obj });
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/ConnectionIndicatorExperiment.tsx");

export default apexExperiment;
