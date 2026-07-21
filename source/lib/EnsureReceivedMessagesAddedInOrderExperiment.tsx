// Module ID: 4802
// Function ID: 41835
// Name: apexExperiment
// Dependencies: []

// Module 4802 (apexExperiment)
const _module = require(dependencyMap[0]);
const apexExperiment = _module.createApexExperiment({ defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("lib/EnsureReceivedMessagesAddedInOrderExperiment.tsx");

export default apexExperiment;
