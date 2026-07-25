// Module ID: 12894
// Function ID: 100230
// Name: getIOSAudioInterruptExperimentConfig
// Dependencies: [1428, 2]
// Exports: getIOSAudioInterruptExperimentConfig

// Module 12894 (getIOSAudioInterruptExperimentConfig)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-03-ios-audio-interrupt-handling", kind: "user", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/media_engine/IOSAudioInterruptExperiment.tsx");

export const getIOSAudioInterruptExperimentConfig = function getIOSAudioInterruptExperimentConfig(handleConnectionOpen) {
  return config.getConfig({ location: handleConnectionOpen });
};
