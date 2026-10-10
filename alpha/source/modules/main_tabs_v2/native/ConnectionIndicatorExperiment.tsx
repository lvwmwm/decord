// Module ID: 13958
// Function ID: 13959
// Name: ConnectionIndicatorExperiment
// Dependencies: [1453, 2]

// Module 13958 (ConnectionIndicatorExperiment)
import ApexExperiment from "ApexExperiment" /* 1453 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2025-12-connection-indicator", kind: "user", defaultConfig: { timeoutMs: "IconComponent", hidden: "+51" }, variations: obj2 };
obj2 = { 1: null, 2: { timeoutMs: 10000, hidden: false }, 3: { timeoutMs: 15000, hidden: false }, 4: { timeoutMs: 20000, hidden: false } };
obj2[4] = { timeoutMs: 10000, hidden: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/ConnectionIndicatorExperiment.tsx");

export default apexExperiment;
