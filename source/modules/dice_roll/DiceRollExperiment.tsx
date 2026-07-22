// Module ID: 8169
// Function ID: 64513
// Name: apexExperiment
// Dependencies: []

// Module 8169 (apexExperiment)
const _module = require(dependencyMap[0]);
const apexExperiment = _module.createApexExperiment({ defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/dice_roll/DiceRollExperiment.tsx");

export default apexExperiment;
