// Module ID: 8431
// Function ID: 67297
// Name: apexExperiment
// Dependencies: []

// Module 8431 (apexExperiment)
const _module = require(dependencyMap[0]);
const apexExperiment = _module.createApexExperiment({ defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/guild_settings/MobileServerTagExperiment.tsx");

export default apexExperiment;
