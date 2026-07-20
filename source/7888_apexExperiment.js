// Module ID: 7888
// Function ID: 62799
// Name: apexExperiment
// Dependencies: []

// Module 7888 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { -1269606814: true, -1845285747: true, defaultConfig: { httpEngine: "default" }, variations: { [0]: { httpEngine: "default" }, [1]: { httpEngine: "okhttp" }, [2]: { httpEngine: "cronet" } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/media_uploads/experiments/AndroidExoPlayerHttpEngineExperiment.tsx");

export const AndroidExoPlayerHttpEngineExperiment = apexExperiment;
