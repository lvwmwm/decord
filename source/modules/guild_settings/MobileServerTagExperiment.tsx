// Module ID: 8436
// Function ID: 67332
// Name: apexExperiment
// Dependencies: []

// Module 8436 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { y: 8, DateToSystemTimezoneSetter: 0, defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/guild_settings/MobileServerTagExperiment.tsx");

export default apexExperiment;
