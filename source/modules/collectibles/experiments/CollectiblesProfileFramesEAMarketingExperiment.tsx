// Module ID: 15502
// Function ID: 118297
// Name: apexExperiment
// Dependencies: []
// Exports: getIsProfileFramesEAMarketingEnabled, useIsProfileFramesEAMarketingEnabled

// Module 15502 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { 9223372036854775807: "NavigatorHeader", 0: "isArray", defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } };
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
