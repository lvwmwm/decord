// Module ID: 4801
// Function ID: 41851
// Name: apexExperiment
// Dependencies: []

// Module 4801 (apexExperiment)
const _module = require(dependencyMap[0]);
const apexExperiment = _module.createApexExperiment({ defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("lib/EnsureReceivedMessagesAddedInOrderExperiment.tsx");

export default apexExperiment;
