// Module ID: 9454
// Function ID: 73666
// Name: apexExperiment
// Dependencies: [1428, 2]

// Module 9454 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-01-less-personalized-ads", kind: "user", defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/quests/experiments/LessPersonalizedAdsExperiment.tsx");

export const LessPersonalizedAdsExperiment = apexExperiment;
