// Module ID: 5894
// Function ID: 5895
// Name: SingleCpuCopyExperiment
// Dependencies: [1448, 2]

// Module 5894 (SingleCpuCopyExperiment)
import ApexExperiment from "ApexExperiment" /* 1448 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-09-single-cpu-copy", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/SingleCpuCopyExperiment.tsx");

export const SingleCpuCopyExperiment = apexExperiment;
