// Module ID: 14208
// Function ID: 107498
// Name: apexExperiment
// Dependencies: []

// Module 14208 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { y: "Text", DateToSystemTimezoneSetter: "keys", defaultConfig: { enabled: true }, variations: { [1]: { enabled: false } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/voice_calls/CallKitMetricCollectionExperiment.tsx");

export default apexExperiment;
