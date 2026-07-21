// Module ID: 8168
// Function ID: 64501
// Name: apexExperiment
// Dependencies: []

// Module 8168 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { bottom: "hidden", name: 8, defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/dice_roll/DiceRollExperiment.tsx");

export default apexExperiment;
