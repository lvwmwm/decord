// Module ID: 8245
// Function ID: 65074
// Name: apexExperiment
// Dependencies: []
// Exports: useIsProfileFramesEnabled

// Module 8245 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { 844175713: 1091687288, 1387159956: 94756, defaultConfig: { enableProfileFrames: false }, variations: { [0]: { enableProfileFrames: false }, [1]: { enableProfileFrames: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/collectibles/experiments/CollectiblesProfileFramesExperiment.tsx");

export default apexExperiment;
export const useIsProfileFramesEnabled = function useIsProfileFramesEnabled(location) {
  return apexExperiment.useConfig({ location }).enableProfileFrames;
};
