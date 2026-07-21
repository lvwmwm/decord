// Module ID: 12716
// Function ID: 97608
// Name: apexExperiment
// Dependencies: []

// Module 12716 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { 844175713: -1774059518, 1387159956: -335543710, defaultConfig: { enableSimulcast: true }, variations: { [1]: { enableSimulcast: false } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/media_engine/DisableCameraSimulcastExperiment.tsx");

export const DisableCameraSimulcastExperiment = apexExperiment;
