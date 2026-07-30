// Module ID: 12956
// Function ID: 12957
// Name: getIOSAudioInterruptExperimentConfig
// Dependencies: [1452, 2]
// Exports: getIOSAudioInterruptExperimentConfig

// Module 12956 (getIOSAudioInterruptExperimentConfig)
import ApexExperiment from "ApexExperiment";

const obj = { 1: null };
obj[1] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-03-ios-audio-interrupt-handling", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/media_engine/IOSAudioInterruptExperiment.tsx");

export const getIOSAudioInterruptExperimentConfig = function getIOSAudioInterruptExperimentConfig(handleConnectionOpen) {
  return config.getConfig({ location: handleConnectionOpen });
};
