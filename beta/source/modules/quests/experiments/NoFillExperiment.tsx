// Module ID: 14735
// Function ID: 14736
// Name: NoFillExperiment
// Dependencies: [1441, 2]

// Module 14735 (NoFillExperiment)
import ApexExperiment from "ApexExperiment" /* 1441 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-08-no-fill-logging", kind: "user", defaultConfig: { enableNoFill: false }, variations: obj2 };
obj2 = { 1: null, 2: { enableNoFill: false } };
obj2[2] = { enableNoFill: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/quests/experiments/NoFillExperiment.tsx");

export default apexExperiment;
