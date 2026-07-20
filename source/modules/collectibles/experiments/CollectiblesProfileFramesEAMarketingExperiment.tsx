// Module ID: 15495
// Function ID: 118273
// Name: apexExperiment
// Dependencies: []
// Exports: getIsProfileFramesEAMarketingEnabled, useIsProfileFramesEAMarketingEnabled

// Module 15495 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { -1269606814: true, -1845285747: true, defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/collectibles/experiments/CollectiblesProfileFramesEAMarketingExperiment.tsx");

export default apexExperiment;
export const getIsProfileFramesEAMarketingEnabled = function getIsProfileFramesEAMarketingEnabled(location) {
  return apexExperiment.getConfig({ location }).enabled;
};
export const useIsProfileFramesEAMarketingEnabled = function useIsProfileFramesEAMarketingEnabled(location) {
  return apexExperiment.useConfig({ location }).enabled;
};
