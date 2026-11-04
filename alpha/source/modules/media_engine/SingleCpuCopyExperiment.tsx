// Module ID: 6048
// Function ID: 6049
// Name: SingleCpuCopyExperiment
// Dependencies: [1449, 2]

// Module 6048 (SingleCpuCopyExperiment)
import ApexExperiment from "ApexExperiment" /* 1449 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-09-single-cpu-copy", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/SingleCpuCopyExperiment.tsx");

export const SingleCpuCopyExperiment = apexExperiment;
