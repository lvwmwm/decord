// Module ID: 12636
// Function ID: 97238
// Name: apexExperiment
// Dependencies: []

// Module 12636 (apexExperiment)
const _module = require(dependencyMap[0]);
const apexExperiment = _module.createApexExperiment({ defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/media_engine/WGCDirtyRegionsExperiment.tsx");

export const WGCDirtyRegionsExperiment = apexExperiment;
