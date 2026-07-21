// Module ID: 4194
// Function ID: 36034
// Name: apexExperiment
// Dependencies: []

// Module 4194 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { margin: "timeStarted", paddingHorizontal: "universeid", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/clips/AutoclippingDefaultOverrideExperiment.tsx");

export const AutoclippingDefaultOverrideExperiment = apexExperiment;
