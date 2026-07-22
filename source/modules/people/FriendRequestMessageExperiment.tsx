// Module ID: 12749
// Function ID: 97797
// Name: apexExperiment
// Dependencies: []

// Module 12749 (apexExperiment)
const _module = require(dependencyMap[0]);
const apexExperiment = _module.createApexExperiment({ defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/people/FriendRequestMessageExperiment.tsx");

export default apexExperiment;
