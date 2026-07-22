// Module ID: 9447
// Function ID: 73625
// Name: apexExperiment
// Dependencies: []

// Module 9447 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { y: "png", DateToSystemTimezoneSetter: true, defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/quests/experiments/LessPersonalizedAdsExperiment.tsx");

export const LessPersonalizedAdsExperiment = apexExperiment;
