// Module ID: 14038
// Function ID: 107395
// Name: apexExperiment
// Dependencies: [1428, 2]

// Module 14038 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-06-orbs-holdout", kind: "user", defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/quests/experiments/OrbsHoldoutExperiment.tsx");

export const OrbsHoldoutExperiment = apexExperiment;
