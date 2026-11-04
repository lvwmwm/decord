// Module ID: 20301
// Function ID: 20302
// Name: AutoclipsExperiment
// Dependencies: [1449, 2]

// Module 20301 (AutoclipsExperiment)
import ApexExperiment from "ApexExperiment" /* 1449 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { kind: "user", name: "2026-09-autoclips", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null, 2: { enabled: true } };
obj2[2] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/clips/AutoclipsExperiment.tsx");

export default apexExperiment;
