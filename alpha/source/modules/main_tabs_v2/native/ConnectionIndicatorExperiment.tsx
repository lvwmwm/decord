// Module ID: 15535
// Function ID: 15536
// Name: ConnectionIndicatorExperiment
// Dependencies: [1448, 2]

// Module 15535 (ConnectionIndicatorExperiment)
import ApexExperiment from "ApexExperiment" /* 1448 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2025-12-connection-indicator", kind: "user", defaultConfig: { timeoutMs: "HermesInternal", hidden: null }, variations: obj2 };
obj2 = { 1: null, 2: { timeoutMs: 10000, hidden: false }, 3: { timeoutMs: 15000, hidden: false }, 4: { timeoutMs: 20000, hidden: false } };
obj2[4] = { timeoutMs: 10000, hidden: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/ConnectionIndicatorExperiment.tsx");

export default apexExperiment;
