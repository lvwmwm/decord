// Module ID: 12702
// Function ID: 97548
// Name: getIOSAudioInterruptExperimentConfig
// Dependencies: []
// Exports: getIOSAudioInterruptExperimentConfig

// Module 12702 (getIOSAudioInterruptExperimentConfig)
const _module = require(dependencyMap[0]);
let closure_0 = _module.createApexExperiment({ defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/media_engine/IOSAudioInterruptExperiment.tsx");

export const getIOSAudioInterruptExperimentConfig = function getIOSAudioInterruptExperimentConfig(handleConnectionOpen) {
  return config.getConfig({ location: handleConnectionOpen });
};
