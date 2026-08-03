// Module ID: 11020
// Function ID: 11021
// Name: apexExperiment
// Dependencies: [1452, 2]

// Module 11020 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-03-quest-home-bounties", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/quests/experiments/QuestHomeBountiesExperiment.tsx");

export const QuestHomeBountiesExperiment = apexExperiment;
