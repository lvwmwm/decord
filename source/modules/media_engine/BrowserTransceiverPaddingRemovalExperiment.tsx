// Module ID: 12617
// Function ID: 97036
// Name: apexExperiment
// Dependencies: []

// Module 12617 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { 9223372036854775807: "user", 0: "2025-12-wmf-gpu-encode", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/media_engine/BrowserTransceiverPaddingRemovalExperiment.tsx");

export const BrowserTransceiverPaddingRemovalExperiment = apexExperiment;
