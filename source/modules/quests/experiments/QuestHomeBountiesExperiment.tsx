// Module ID: 10832
// Function ID: 84085
// Name: apexExperiment
// Dependencies: []

// Module 10832 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { y: false, DateToSystemTimezoneSetter: false, defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/quests/experiments/QuestHomeBountiesExperiment.tsx");

export const QuestHomeBountiesExperiment = apexExperiment;
