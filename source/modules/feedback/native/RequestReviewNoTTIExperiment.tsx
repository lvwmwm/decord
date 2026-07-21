// Module ID: 12501
// Function ID: 95801
// Name: apexExperiment
// Dependencies: []

// Module 12501 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { 9223372036854775807: "popcornBlue", 0: 128, defaultConfig: { skipTTICheck: false }, variations: { [0]: { skipTTICheck: false }, [1]: { skipTTICheck: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/feedback/native/RequestReviewNoTTIExperiment.tsx");

export const RequestReviewNoTTIExperiment = apexExperiment;
