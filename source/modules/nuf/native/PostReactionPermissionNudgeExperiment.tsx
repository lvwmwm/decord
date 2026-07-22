// Module ID: 11449
// Function ID: 89161
// Name: apexExperiment
// Dependencies: []

// Module 11449 (apexExperiment)
const _module = require(dependencyMap[0]);
const apexExperiment = _module.createApexExperiment({ defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/nuf/native/PostReactionPermissionNudgeExperiment.tsx");

export default apexExperiment;
