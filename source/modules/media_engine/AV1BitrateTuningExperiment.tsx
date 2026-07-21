// Module ID: 12623
// Function ID: 97045
// Name: apexExperiment
// Dependencies: []

// Module 12623 (apexExperiment)
const _module = require(dependencyMap[0]);
const apexExperiment = _module.createApexExperiment({ defaultConfig: { bitrate: 3500000 }, variations: { [1]: { bitrate: 3000000 }, [2]: { bitrate: 2500000 } } });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/media_engine/AV1BitrateTuningExperiment.tsx");

export const AV1StreamBitrateReductionExperiment = apexExperiment;
