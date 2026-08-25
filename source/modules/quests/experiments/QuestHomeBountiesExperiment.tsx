// Module ID: 11071
// Function ID: 11072
// Name: apexExperiment
// Dependencies: [1472, 2]

// Module 11071 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-03-quest-home-bounties", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = set.fileFinishedImporting("modules/quests/experiments/QuestHomeBountiesExperiment.tsx");

export const QuestHomeBountiesExperiment = apexExperiment;
