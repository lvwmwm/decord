// Module ID: 15537
// Function ID: 15538
// Name: NoFillExperiment
// Dependencies: [1434, 2]

// Module 15537 (NoFillExperiment)
import ApexExperiment from "ApexExperiment" /* 1434 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-08-no-fill-logging", kind: "user", defaultConfig: { enableNoFill: false }, variations: null };
const obj2 = { 1: null, 2: { enableNoFill: false } };
obj2[2] = { enableNoFill: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/quests/experiments/NoFillExperiment.tsx");

export default apexExperiment;
