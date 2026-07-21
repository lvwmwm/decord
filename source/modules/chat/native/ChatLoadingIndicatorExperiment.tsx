// Module ID: 10109
// Function ID: 78243
// Name: apexExperiment
// Dependencies: []

// Module 10109 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { 9223372036854775807: "appTransactionIds", 0: "isArrayBuffer", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/chat/native/ChatLoadingIndicatorExperiment.tsx");

export const ChatLoadingIndicatorExperiment = apexExperiment;
