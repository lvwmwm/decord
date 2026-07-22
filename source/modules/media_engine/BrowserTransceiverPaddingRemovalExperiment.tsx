// Module ID: 12624
// Function ID: 97086
// Name: apexExperiment
// Dependencies: []

// Module 12624 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { y: "user", DateToSystemTimezoneSetter: "2025-08-browser-hevc", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/media_engine/BrowserTransceiverPaddingRemovalExperiment.tsx");

export const BrowserTransceiverPaddingRemovalExperiment = apexExperiment;
