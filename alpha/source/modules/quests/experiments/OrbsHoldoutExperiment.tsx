// Module ID: 15341
// Function ID: 15342
// Name: OrbsHoldoutExperiment
// Dependencies: [1453, 2]

// Module 15341 (OrbsHoldoutExperiment)
import ApexExperiment from "ApexExperiment" /* 1453 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-06-orbs-holdout", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/quests/experiments/OrbsHoldoutExperiment.tsx");

export const OrbsHoldoutExperiment = apexExperiment;
