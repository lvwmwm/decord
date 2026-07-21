// Module ID: 10715
// Function ID: 83384
// Name: getWindowsAudioEffectsExperimentConfig
// Dependencies: []
// Exports: useWindowsAudioEffectsExperimentConfig

// Module 10715 (getWindowsAudioEffectsExperimentConfig)
function getWindowsAudioEffectsExperimentConfig(location) {
  return config.getConfig({ location: location.location });
}
let closure_2 = importDefault(dependencyMap[0]);
let obj = { preferSystemEffects: false };
let obj1 = arg1(dependencyMap[1]);
obj = { defaultConfig: obj };
obj = {};
obj1 = {};
const merged = Object.assign(obj);
obj1["preferSystemEffects"] = true;
obj[1] = obj1;
obj.variations = obj;
let closure_3 = obj1.createApexExperiment(obj);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/noise_cancellation/WindowsEffectsExperiment.tsx");

export { getWindowsAudioEffectsExperimentConfig };
export const useWindowsAudioEffectsExperimentConfig = function useWindowsAudioEffectsExperimentConfig(location) {
  const arg1 = location.location;
  const items = [closure_2];
  return arg1(dependencyMap[2]).useStateFromStores(items, () => callback({ location }));
};
