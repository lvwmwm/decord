// Module ID: 7892
// Function ID: 62811
// Name: apexExperiment
// Dependencies: []

// Module 7892 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { 9223372036854775807: null, 0: null, defaultConfig: { httpEngine: "default" }, variations: { [0]: { httpEngine: "default" }, [1]: { httpEngine: "okhttp" }, [2]: { httpEngine: "cronet" } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/media_uploads/experiments/AndroidExoPlayerHttpEngineExperiment.tsx");

export const AndroidExoPlayerHttpEngineExperiment = apexExperiment;
