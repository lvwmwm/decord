// Module ID: 5487
// Function ID: 46778
// Name: experiment
// Dependencies: []

// Module 5487 (experiment)
const _module = require(dependencyMap[0]);
const items = [{ config: { tidaWebformEnabled: true } }];
const experiment = _module.createExperiment({ defaultConfig: { tidaWebformEnabled: false }, treatments: items });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/guild/TidaWebformExperiment.tsx");

export default experiment;
