// Module ID: 9452
// Function ID: 9453
// Name: WindowsEffectsExperiment
// Dependencies: [1235, 1435, 504, 2]
// Exports: getWindowsAudioEffectsExperimentConfig, useWindowsAudioEffectsExperimentConfig

// Module 9452 (WindowsEffectsExperiment)
import ApexExperimentStore from "ApexExperimentStore" /* 1235 */;
import ApexExperiment from "ApexExperiment" /* 1435 */;
import size from "module_2" /* 2 */;

let obj3;
let obj = { preferSystemEffects: false };
const obj2 = { name: "2025-12-windows-audio-effects", kind: "user", defaultConfig: obj, variations: obj3 };
obj3 = { 1: null };
const createApexExperiment = ApexExperiment.createApexExperiment;
const obj4 = { preferSystemEffects: true };
const merged = Object.assign(obj);
obj3[1] = obj4;
const config = createApexExperiment(obj2);
const result = size.fileFinishedImporting("modules/noise_cancellation/WindowsEffectsExperiment.tsx");

export const getWindowsAudioEffectsExperimentConfig = function getWindowsAudioEffectsExperimentConfig(location) {
  const obj = { location: location.location };
  return config.getConfig(obj);
};
export const useWindowsAudioEffectsExperimentConfig = function useWindowsAudioEffectsExperimentConfig(location) {
  location = location.location;
  let obj = location(504);
  const items = [ApexExperimentStore];
  return obj.useStateFromStores(items, () => {
    const obj = { location };
    return config.getConfig(obj);
  });
};
