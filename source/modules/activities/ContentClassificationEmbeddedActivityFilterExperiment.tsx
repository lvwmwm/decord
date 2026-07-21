// Module ID: 10524
// Function ID: 82200
// Name: apexExperiment
// Dependencies: []

// Module 10524 (apexExperiment)
const _module = require(dependencyMap[0]);
const apexExperiment = _module.createApexExperiment({ defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/activities/ContentClassificationEmbeddedActivityFilterExperiment.tsx");

export const ContentClassificationEmbeddedActivityFilterExperiment = apexExperiment;
