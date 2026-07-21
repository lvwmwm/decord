// Module ID: 12645
// Function ID: 97263
// Name: apexExperiment
// Dependencies: []

// Module 12645 (apexExperiment)
const _module = require(dependencyMap[0]);
const apexExperiment = _module.createApexExperiment({ defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/media_engine/DisableHookFramePacerExperiment.tsx");

export const DisableHookFramePacerExperiment = apexExperiment;
