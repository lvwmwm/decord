// Module ID: 8240
// Function ID: 65049
// Name: apexExperiment
// Dependencies: []
// Exports: useIsProfileFramesEnabled

// Module 8240 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { -1269606814: 1091658877, -1845285747: 151794, defaultConfig: { enableProfileFrames: false }, variations: { [0]: { enableProfileFrames: false }, [1]: { enableProfileFrames: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/collectibles/experiments/CollectiblesProfileFramesExperiment.tsx");

export default apexExperiment;
export const useIsProfileFramesEnabled = function useIsProfileFramesEnabled(location) {
  return apexExperiment.useConfig({ location }).enableProfileFrames;
};
