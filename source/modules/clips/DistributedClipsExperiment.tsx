// Module ID: 4193
// Function ID: 36048
// Name: apexExperiment
// Dependencies: []

// Module 4193 (apexExperiment)
const _module = require(dependencyMap[0]);
const apexExperiment = _module.createApexExperiment({ defaultConfig: { enableDistributedClips: false }, variations: { [1]: { enableDistributedClips: true } } });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/clips/DistributedClipsExperiment.tsx");

export default apexExperiment;
