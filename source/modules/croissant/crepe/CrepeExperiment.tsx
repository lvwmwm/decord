// Module ID: 6783
// Function ID: 53553
// Name: apexExperiment
// Dependencies: []
// Exports: getIsCrepeEnabled, useIsCrepeEnabled

// Module 6783 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { 844175713: false, 1387159956: false, defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/croissant/crepe/CrepeExperiment.tsx");

export default apexExperiment;
export const useIsCrepeEnabled = function useIsCrepeEnabled(location) {
  return apexExperiment.useConfig({ location }).enabled;
};
export const getIsCrepeEnabled = function getIsCrepeEnabled(canUseMonthlyOrbs) {
  return apexExperiment.getConfig({ location: canUseMonthlyOrbs }).enabled;
};
