// Module ID: 9153
// Function ID: 9154
// Name: LessPersonalizedAdsExperiment
// Dependencies: [1453, 2]

// Module 9153 (LessPersonalizedAdsExperiment)
import ApexExperiment from "ApexExperiment" /* 1453 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-01-less-personalized-ads", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/quests/experiments/LessPersonalizedAdsExperiment.tsx");

export const LessPersonalizedAdsExperiment = apexExperiment;
