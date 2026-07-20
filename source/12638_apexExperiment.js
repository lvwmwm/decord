// Module ID: 12638
// Function ID: 97240
// Name: apexExperiment
// Dependencies: []

// Module 12638 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { -1269606814: "isArray", -1845285747: "skuId", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/media_engine/DisableHookFramePacerExperiment.tsx");

export const DisableHookFramePacerExperiment = apexExperiment;
