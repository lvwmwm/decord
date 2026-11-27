// Module ID: 16802
// Function ID: 16803
// Name: QuestBarStartQuestOnClickExperiment
// Dependencies: [1451, 2]

// Module 16802 (QuestBarStartQuestOnClickExperiment)
import ApexExperiment from "ApexExperiment" /* 1451 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-11-quest-bar-start-quest-on-click", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/quests/experiments/QuestBarStartQuestOnClickExperiment.tsx");

export const QuestBarStartQuestOnClickExperiment = apexExperiment;
