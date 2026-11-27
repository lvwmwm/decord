// Module ID: 9923
// Function ID: 9924
// Name: QuestSeriesExperiment
// Dependencies: [1451, 2]

// Module 9923 (QuestSeriesExperiment)
import ApexExperiment from "ApexExperiment" /* 1451 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-11-multiquest-client", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/quests/experiments/QuestSeriesExperiment.tsx");

export const QuestSeriesExperiment = apexExperiment;
