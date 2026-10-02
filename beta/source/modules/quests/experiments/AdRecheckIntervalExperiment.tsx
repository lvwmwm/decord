// Module ID: 14636
// Function ID: 14637
// Name: AdRecheckIntervalExperiment
// Dependencies: [1441, 2]

// Module 14636 (AdRecheckIntervalExperiment)
import ApexExperiment from "ApexExperiment" /* 1441 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-07-ad-recheck-interval-experiment", kind: "user", defaultConfig: { enableFastAdRecheck: false }, variations: obj2 };
obj2 = { 1: null, 2: { enableFastAdRecheck: false }, 3: { enableFastAdRecheck: true }, 4: { enableFastAdRecheck: true }, 5: { enableFastAdRecheck: true } };
obj2[5] = { enableFastAdRecheck: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/quests/experiments/AdRecheckIntervalExperiment.tsx");

export default apexExperiment;
