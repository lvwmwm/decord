// Module ID: 8244
// Function ID: 65061
// Name: apexExperiment
// Dependencies: []
// Exports: useIsProfileFramesEnabled

// Module 8244 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { 9223372036854775807: 1091680213, 0: 130354, defaultConfig: { enableProfileFrames: false }, variations: { [0]: { enableProfileFrames: false }, [1]: { enableProfileFrames: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/collectibles/experiments/CollectiblesProfileFramesExperiment.tsx");

export default apexExperiment;
export const useIsProfileFramesEnabled = function useIsProfileFramesEnabled(location) {
  return apexExperiment.useConfig({ location }).enableProfileFrames;
};
