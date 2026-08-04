// Module ID: 14235
// Function ID: 14236
// Name: apexExperiment
// Dependencies: [1452, 2]

// Module 14235 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-06-orbs-holdout", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = require("set").fileFinishedImporting("modules/quests/experiments/OrbsHoldoutExperiment.tsx");

export const OrbsHoldoutExperiment = apexExperiment;
