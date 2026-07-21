// Module ID: 15623
// Function ID: 119288
// Name: apexExperiment
// Dependencies: []

// Module 15623 (apexExperiment)
const _module = require(dependencyMap[0]);
const apexExperiment = _module.createApexExperiment({ defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/soundboard/SoundboardFrequentlyUsedExperiment.tsx");

export default apexExperiment;
