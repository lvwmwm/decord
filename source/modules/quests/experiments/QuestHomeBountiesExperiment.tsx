// Module ID: 10842
// Function ID: 84134
// Name: apexExperiment
// Dependencies: [1428, 2]

// Module 10842 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-03-quest-home-bounties", kind: "user", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/quests/experiments/QuestHomeBountiesExperiment.tsx");

export const QuestHomeBountiesExperiment = apexExperiment;
