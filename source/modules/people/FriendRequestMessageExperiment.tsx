// Module ID: 12742
// Function ID: 97764
// Name: apexExperiment
// Dependencies: []

// Module 12742 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { bottom: "Array", name: "isArray", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/people/FriendRequestMessageExperiment.tsx");

export default apexExperiment;
