// Module ID: 10524
// Function ID: 82211
// Name: apexExperiment
// Dependencies: []

// Module 10524 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { bottom: null, name: null, defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/activities/ContentClassificationEmbeddedActivityFilterExperiment.tsx");

export const ContentClassificationEmbeddedActivityFilterExperiment = apexExperiment;
