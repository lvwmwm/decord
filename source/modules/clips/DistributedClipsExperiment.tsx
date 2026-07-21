// Module ID: 4193
// Function ID: 36033
// Name: apexExperiment
// Dependencies: []

// Module 4193 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { margin: null, paddingHorizontal: null, defaultConfig: { enableDistributedClips: false }, variations: { [1]: { enableDistributedClips: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/clips/DistributedClipsExperiment.tsx");

export default apexExperiment;
