// Module ID: 12718
// Function ID: 97626
// Name: getIOSAudioInterruptExperimentConfig
// Dependencies: []
// Exports: getIOSAudioInterruptExperimentConfig

// Module 12718 (getIOSAudioInterruptExperimentConfig)
const _module = require(dependencyMap[0]);
const obj = { y: null, DateToSystemTimezoneSetter: null, defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
let closure_0 = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/media_engine/IOSAudioInterruptExperiment.tsx");

export const getIOSAudioInterruptExperimentConfig = function getIOSAudioInterruptExperimentConfig(handleConnectionOpen) {
  return config.getConfig({ location: handleConnectionOpen });
};
