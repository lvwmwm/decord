// Module ID: 14599
// Function ID: 110021
// Name: apexExperiment
// Dependencies: []
// Exports: useRiveAppStatePlaybackExperiment

// Module 14599 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { 9223372036854775807: 11, 0: 11, defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/design/RiveAppStatePlaybackExperiment.tsx");

export default apexExperiment;
export const useRiveAppStatePlaybackExperiment = function useRiveAppStatePlaybackExperiment(AppContainer) {
  return apexExperiment.useConfig({ location: AppContainer }).enabled;
};
