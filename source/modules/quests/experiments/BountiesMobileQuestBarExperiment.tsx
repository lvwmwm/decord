// Module ID: 10445
// Function ID: 10446
// Name: apexExperiment
// Dependencies: [1471, 2]

// Module 10445 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-08-bounties-mobile-quest-bar", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/quests/experiments/BountiesMobileQuestBarExperiment.tsx");

export const BountiesMobileQuestBarExperiment = apexExperiment;
