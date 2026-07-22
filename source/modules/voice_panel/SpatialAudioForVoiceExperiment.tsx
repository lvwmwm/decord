// Module ID: 12642
// Function ID: 97290
// Name: apexExperiment
// Dependencies: []

// Module 12642 (apexExperiment)
const _module = require(dependencyMap[0]);
const apexExperiment = _module.createApexExperiment({ defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/voice_panel/SpatialAudioForVoiceExperiment.tsx");

export default apexExperiment;
