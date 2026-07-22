// Module ID: 6783
// Function ID: 53564
// Name: apexExperiment
// Dependencies: []
// Exports: getIsCrepeEnabled, useIsCrepeEnabled

// Module 6783 (apexExperiment)
const _module = require(dependencyMap[0]);
const apexExperiment = _module.createApexExperiment({ defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/croissant/crepe/CrepeExperiment.tsx");

export default apexExperiment;
export const useIsCrepeEnabled = function useIsCrepeEnabled(location) {
  return apexExperiment.useConfig({ location }).enabled;
};
export const getIsCrepeEnabled = function getIsCrepeEnabled(canUseMonthlyOrbs) {
  return apexExperiment.getConfig({ location: canUseMonthlyOrbs }).enabled;
};
