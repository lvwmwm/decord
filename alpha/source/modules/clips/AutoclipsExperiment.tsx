// Module ID: 20133
// Function ID: 20134
// Name: AutoclipsExperiment
// Dependencies: [1452, 2]

// Module 20133 (AutoclipsExperiment)
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { kind: "user", name: "2026-09-autoclips", defaultConfig: { enabled: false, marketingEnabled: false }, variations: obj2 };
obj2 = { 1: null, 2: { enabled: true, marketingEnabled: false } };
obj2[2] = { enabled: true, marketingEnabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/clips/AutoclipsExperiment.tsx");

export default apexExperiment;
