// Module ID: 9649
// Function ID: 9650
// Name: CompressLogsExperiment
// Dependencies: [1435, 2]

// Module 9649 (CompressLogsExperiment)
import ApexExperiment from "ApexExperiment" /* 1435 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { kind: "user", name: "2026-08-compress-logs", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/debug/CompressLogsExperiment.tsx");

export default apexExperiment;
