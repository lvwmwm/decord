// Module ID: 8246
// Function ID: 65086
// Name: apexExperiment
// Dependencies: []
// Exports: useIsProfileFramesEnabled

// Module 8246 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { y: 1091694070, DateToSystemTimezoneSetter: 94933, defaultConfig: { enableProfileFrames: false }, variations: { [0]: { enableProfileFrames: false }, [1]: { enableProfileFrames: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/collectibles/experiments/CollectiblesProfileFramesExperiment.tsx");

export default apexExperiment;
export const useIsProfileFramesEnabled = function useIsProfileFramesEnabled(location) {
  return apexExperiment.useConfig({ location }).enableProfileFrames;
};
