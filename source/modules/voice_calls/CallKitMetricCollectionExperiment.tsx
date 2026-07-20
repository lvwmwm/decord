// Module ID: 14190
// Function ID: 107400
// Name: apexExperiment
// Dependencies: []

// Module 14190 (apexExperiment)
const _module = require(dependencyMap[0]);
const apexExperiment = _module.createApexExperiment({ defaultConfig: { enabled: true }, variations: { [1]: { enabled: false } } });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/voice_calls/CallKitMetricCollectionExperiment.tsx");

export default apexExperiment;
