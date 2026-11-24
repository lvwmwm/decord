// Module ID: 9781
// Function ID: 9782
// Name: QuestSeriesExperiment
// Dependencies: [1450, 2]

// Module 9781 (QuestSeriesExperiment)
import ApexExperiment from "ApexExperiment" /* 1450 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-11-multiquest-client", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/quests/experiments/QuestSeriesExperiment.tsx");

export const QuestSeriesExperiment = apexExperiment;
