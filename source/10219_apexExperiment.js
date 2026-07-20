// Module ID: 10219
// Function ID: 78981
// Name: apexExperiment
// Dependencies: []

// Module 10219 (apexExperiment)
const _module = require(dependencyMap[0]);
const apexExperiment = _module.createApexExperiment({ defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/message_request/MessageRequestPushNotificationExperiment.tsx");

export default apexExperiment;
