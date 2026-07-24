// Module ID: 10755
// Function ID: 83649
// Name: getWindowsAudioEffectsExperimentConfig
// Dependencies: [1188, 1428, 566, 2]
// Exports: useWindowsAudioEffectsExperimentConfig

// Module 10755 (getWindowsAudioEffectsExperimentConfig)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ApexExperiment from "ApexExperiment";

const require = arg1;
function getWindowsAudioEffectsExperimentConfig(location) {
  return config.getConfig({ location: location.location });
}
let obj = { preferSystemEffects: false };
obj = { name: "2025-12-windows-audio-effects", kind: "user" };
obj.defaultConfig = obj;
obj = {};
ApexExperiment = {};
const merged = Object.assign(obj);
ApexExperiment["preferSystemEffects"] = true;
obj[1] = ApexExperiment;
obj.variations = obj;
let closure_3 = ApexExperiment.createApexExperiment(obj);
const result = require("initialize").fileFinishedImporting("modules/noise_cancellation/WindowsEffectsExperiment.tsx");

export { getWindowsAudioEffectsExperimentConfig };
export const useWindowsAudioEffectsExperimentConfig = function useWindowsAudioEffectsExperimentConfig(location) {
  location = location.location;
  const items = [_isNativeReflectConstruct];
  return location(566).useStateFromStores(items, () => outer1_4({ location }));
};
