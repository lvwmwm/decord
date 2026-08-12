// Module ID: 13238
// Function ID: 13239
// Name: getIOSAudioInterruptExperimentConfig
// Dependencies: [1471, 2]
// Exports: getIOSAudioInterruptExperimentConfig

// Module 13238 (getIOSAudioInterruptExperimentConfig)
import ApexExperiment from "ApexExperiment";

const obj = { 1: null };
obj[1] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-03-ios-audio-interrupt-handling", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/media_engine/IOSAudioInterruptExperiment.tsx");

export const getIOSAudioInterruptExperimentConfig = function getIOSAudioInterruptExperimentConfig(handleConnectionOpen) {
  return config.getConfig({ location: handleConnectionOpen });
};
