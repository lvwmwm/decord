// Module ID: 4055
// Function ID: 33815
// Name: apexExperiment
// Dependencies: []

// Module 4055 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { "Bool(false)": "stable", "Bool(false)": "stable", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/premium/powerups/experiments/FileUploadPowerupHoldoutExperiment.tsx");

export const FileUploadPowerupHoldoutExperiment = apexExperiment;
