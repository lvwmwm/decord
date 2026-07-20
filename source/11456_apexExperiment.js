// Module ID: 11456
// Function ID: 89268
// Name: apexExperiment
// Dependencies: []

// Module 11456 (apexExperiment)
const _module = require(dependencyMap[0]);
const apexExperiment = _module.createApexExperiment({ defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/message_request/MessageRequestRestrictionExperiment.tsx");

export default apexExperiment;
