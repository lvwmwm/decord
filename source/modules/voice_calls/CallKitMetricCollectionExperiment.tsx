// Module ID: 14197
// Function ID: 107423
// Name: apexExperiment
// Dependencies: []

// Module 14197 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { 9223372036854775807: true, 0: true, defaultConfig: { enabled: true }, variations: { [1]: { enabled: false } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/voice_calls/CallKitMetricCollectionExperiment.tsx");

export default apexExperiment;
