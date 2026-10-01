// Module ID: 14747
// Function ID: 14748
// Name: NoFillExperiment
// Dependencies: [1435, 2]

// Module 14747 (NoFillExperiment)
import ApexExperiment from "ApexExperiment" /* 1435 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-08-no-fill-logging", kind: "user", defaultConfig: { enableNoFill: false }, variations: obj2 };
obj2 = { 1: null, 2: { enableNoFill: false } };
obj2[2] = { enableNoFill: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/quests/experiments/NoFillExperiment.tsx");

export default apexExperiment;
