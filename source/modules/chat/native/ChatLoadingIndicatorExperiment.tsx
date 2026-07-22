// Module ID: 10110
// Function ID: 78267
// Name: apexExperiment
// Dependencies: []

// Module 10110 (apexExperiment)
const _module = require(dependencyMap[0]);
const apexExperiment = _module.createApexExperiment({ defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/chat/native/ChatLoadingIndicatorExperiment.tsx");

export const ChatLoadingIndicatorExperiment = apexExperiment;
