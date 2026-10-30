// Module ID: 16995
// Function ID: 16996
// Name: OrbsHoldoutExperiment
// Dependencies: [1448, 2]

// Module 16995 (OrbsHoldoutExperiment)
import ApexExperiment from "ApexExperiment" /* 1448 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-06-orbs-holdout", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/quests/experiments/OrbsHoldoutExperiment.tsx");

export const OrbsHoldoutExperiment = apexExperiment;
