// Module ID: 12709
// Function ID: 97571
// Name: getIOSAudioInterruptExperimentConfig
// Dependencies: []
// Exports: getIOSAudioInterruptExperimentConfig

// Module 12709 (getIOSAudioInterruptExperimentConfig)
const _module = require(dependencyMap[0]);
let closure_0 = _module.createApexExperiment({ defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/media_engine/IOSAudioInterruptExperiment.tsx");

export const getIOSAudioInterruptExperimentConfig = function getIOSAudioInterruptExperimentConfig(handleConnectionOpen) {
  return config.getConfig({ location: handleConnectionOpen });
};
