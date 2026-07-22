// Module ID: 11464
// Function ID: 89317
// Name: apexExperiment
// Dependencies: []

// Module 11464 (apexExperiment)
const _module = require(dependencyMap[0]);
const apexExperiment = _module.createApexExperiment({ defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/message_request/MessageRequestRestrictionExperiment.tsx");

export default apexExperiment;
