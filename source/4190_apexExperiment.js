// Module ID: 4190
// Function ID: 35986
// Name: apexExperiment
// Dependencies: []

// Module 4190 (apexExperiment)
const _module = require(dependencyMap[0]);
const apexExperiment = _module.createApexExperiment({ defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/clips/AutoclippingDefaultOverrideExperiment.tsx");

export const AutoclippingDefaultOverrideExperiment = apexExperiment;
