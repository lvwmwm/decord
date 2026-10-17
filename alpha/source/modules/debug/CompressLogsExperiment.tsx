// Module ID: 13568
// Function ID: 13569
// Name: CompressLogsExperiment
// Dependencies: [1455, 2]

// Module 13568 (CompressLogsExperiment)
import ApexExperiment from "ApexExperiment" /* 1455 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { kind: "user", name: "2026-08-compress-logs", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/debug/CompressLogsExperiment.tsx");

export default apexExperiment;
