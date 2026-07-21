// Module ID: 12647
// Function ID: 97285
// Name: apexExperiment
// Dependencies: []

// Module 12647 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { 844175713: "isArray", 1387159956: "skuId", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/media_engine/DisableHookFramePacerExperiment.tsx");

export const DisableHookFramePacerExperiment = apexExperiment;
