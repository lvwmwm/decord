// Module ID: 12707
// Function ID: 97563
// Name: apexExperiment
// Dependencies: []

// Module 12707 (apexExperiment)
const _module = require(dependencyMap[0]);
const apexExperiment = _module.createApexExperiment({ defaultConfig: { enableSimulcast: true }, variations: { [1]: { enableSimulcast: false } } });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/media_engine/DisableCameraSimulcastExperiment.tsx");

export const DisableCameraSimulcastExperiment = apexExperiment;
