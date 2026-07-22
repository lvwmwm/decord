// Module ID: 10226
// Function ID: 79024
// Name: apexExperiment
// Dependencies: []

// Module 10226 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { y: true, DateToSystemTimezoneSetter: true, defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/message_request/MessageRequestPushNotificationExperiment.tsx");

export default apexExperiment;
