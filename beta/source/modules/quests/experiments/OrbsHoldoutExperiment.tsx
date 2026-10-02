// Module ID: 14606
// Function ID: 14607
// Name: OrbsHoldoutExperiment
// Dependencies: [1441, 2]

// Module 14606 (OrbsHoldoutExperiment)
import ApexExperiment from "ApexExperiment" /* 1441 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-06-orbs-holdout", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/quests/experiments/OrbsHoldoutExperiment.tsx");

export const OrbsHoldoutExperiment = apexExperiment;
