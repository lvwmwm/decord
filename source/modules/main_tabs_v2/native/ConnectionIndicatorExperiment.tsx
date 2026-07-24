// Module ID: 12664
// Function ID: 98274
// Name: apexExperiment
// Dependencies: [1428, 2]

// Module 12664 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2025-12-connection-indicator", kind: "user", defaultConfig: { timeoutMs: undefined, hidden: true }, variations: { [1]: { timeoutMs: 10000, hidden: false }, [2]: { timeoutMs: 15000, hidden: false }, [3]: { timeoutMs: 20000, hidden: false }, [4]: { timeoutMs: 10000, hidden: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/ConnectionIndicatorExperiment.tsx");

export default apexExperiment;
