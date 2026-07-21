// Module ID: 13864
// Function ID: 104844
// Name: apexExperiment
// Dependencies: []

// Module 13864 (apexExperiment)
const _module = require(dependencyMap[0]);
const apexExperiment = _module.createApexExperiment({ defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/quests/experiments/OrbsHoldoutExperiment.tsx");

export const OrbsHoldoutExperiment = apexExperiment;
