// Module ID: 14341
// Function ID: 14342
// Name: IOSAudioInterruptExperiment
// Dependencies: [1434, 2]
// Exports: getIOSAudioInterruptExperimentConfig

// Module 14341 (IOSAudioInterruptExperiment)
import ApexExperiment from "ApexExperiment" /* 1434 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-03-ios-audio-interrupt-handling", kind: "user", defaultConfig: { enabled: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/IOSAudioInterruptExperiment.tsx");

export const getIOSAudioInterruptExperimentConfig = function getIOSAudioInterruptExperimentConfig(handleConnectionOpen) {
  return config.getConfig({ location: handleConnectionOpen });
};
