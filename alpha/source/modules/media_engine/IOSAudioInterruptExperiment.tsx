// Module ID: 15370
// Function ID: 15371
// Name: IOSAudioInterruptExperiment
// Dependencies: [1455, 2]
// Exports: getIOSAudioInterruptExperimentConfig

// Module 15370 (IOSAudioInterruptExperiment)
import ApexExperiment from "ApexExperiment" /* 1455 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { name: "2026-03-ios-audio-interrupt-handling", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/IOSAudioInterruptExperiment.tsx");

export const getIOSAudioInterruptExperimentConfig = function getIOSAudioInterruptExperimentConfig(handleConnectionOpen) {
  const obj = { location: handleConnectionOpen };
  return config.getConfig(obj);
};
