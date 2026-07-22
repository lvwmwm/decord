// Module ID: 12723
// Function ID: 97641
// Name: apexExperiment
// Dependencies: []

// Module 12723 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { y: false, DateToSystemTimezoneSetter: false, defaultConfig: { enableSimulcast: true }, variations: { [1]: { enableSimulcast: false } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/media_engine/DisableCameraSimulcastExperiment.tsx");

export const DisableCameraSimulcastExperiment = apexExperiment;
