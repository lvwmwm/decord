// Module ID: 11612
// Function ID: 90202
// Name: apexExperiment
// Dependencies: []

// Module 11612 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { y: "FILE_UPLOAD_250_MB", DateToSystemTimezoneSetter: "qwJHjo", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/premium/powerups/experiments/ServerSetupBoostCtaExperiment.tsx");

export const ServerSetupBoostCtaExperiment = apexExperiment;
