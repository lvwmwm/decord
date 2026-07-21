// Module ID: 8167
// Function ID: 64488
// Name: apexExperiment
// Dependencies: []

// Module 8167 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { margin: "hidden", paddingHorizontal: 8, defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/dice_roll/DiceRollExperiment.tsx");

export default apexExperiment;
