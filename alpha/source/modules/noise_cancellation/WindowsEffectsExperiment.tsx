// Module ID: 11958
// Function ID: 11959
// Name: WindowsEffectsExperiment
// Dependencies: [1246, 1447, 504, 2]
// Exports: getWindowsAudioEffectsExperimentConfig, useWindowsAudioEffectsExperimentConfig

// Module 11958 (WindowsEffectsExperiment)
import ApexExperimentStore from "ApexExperimentStore" /* 1246 */;
import ApexExperiment from "ApexExperiment" /* 1447 */;
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

export function getWindowsAudioEffectsExperimentConfig(location) {
  const obj = { location: location.location };
  return config.getConfig(obj);
}
export function useWindowsAudioEffectsExperimentConfig(location) {
  location = location.location;
  let obj = location(504);
  const items = [ApexExperimentStore];
  return obj.useStateFromStores(items, () => {
    const obj = { location };
    return config.getConfig(obj);
  });
}
