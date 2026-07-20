// Module ID: 12639
// Function ID: 97241
// Name: apexExperiment
// Dependencies: []

// Module 12639 (apexExperiment)
const _module = require(dependencyMap[0]);
const apexExperiment = _module.createApexExperiment({ defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/media_engine/VideoHookDX12Experiment.tsx");

export const VideoHookDX12Experiment = apexExperiment;
