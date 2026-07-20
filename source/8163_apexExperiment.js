// Module ID: 8163
// Function ID: 64476
// Name: apexExperiment
// Dependencies: []

// Module 8163 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { "Null": "hidden", "Null": 8, defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/dice_roll/DiceRollExperiment.tsx");

export default apexExperiment;
