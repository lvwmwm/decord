// Module ID: 12508
// Function ID: 95851
// Name: apexExperiment
// Dependencies: []

// Module 12508 (apexExperiment)
const _module = require(dependencyMap[0]);
const apexExperiment = _module.createApexExperiment({ defaultConfig: { skipTTICheck: false }, variations: { [0]: { skipTTICheck: false }, [1]: { skipTTICheck: true } } });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/feedback/native/RequestReviewNoTTIExperiment.tsx");

export const RequestReviewNoTTIExperiment = apexExperiment;
