// Module ID: 11139
// Function ID: 11140
// Name: apexExperiment
// Dependencies: [1467, 2]

// Module 11139 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1467 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-01-less-personalized-ads", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = set.fileFinishedImporting("modules/quests/experiments/LessPersonalizedAdsExperiment.tsx");

export const LessPersonalizedAdsExperiment = apexExperiment;
