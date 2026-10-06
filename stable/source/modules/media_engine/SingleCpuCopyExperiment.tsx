// Module ID: 13361
// Function ID: 13362
// Name: SingleCpuCopyExperiment
// Dependencies: [1441, 2]

// Module 13361 (SingleCpuCopyExperiment)
import ApexExperiment from "ApexExperiment" /* 1441 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-09-single-cpu-copy", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/SingleCpuCopyExperiment.tsx");

export const SingleCpuCopyExperiment = apexExperiment;
