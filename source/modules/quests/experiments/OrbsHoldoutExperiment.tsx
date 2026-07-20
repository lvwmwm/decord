// Module ID: 13857
// Function ID: 104821
// Name: apexExperiment
// Dependencies: []

// Module 13857 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { -1269606814: false, -1845285747: false, defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/quests/experiments/OrbsHoldoutExperiment.tsx");

export const OrbsHoldoutExperiment = apexExperiment;
