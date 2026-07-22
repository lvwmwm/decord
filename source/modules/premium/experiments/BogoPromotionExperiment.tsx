// Module ID: 12280
// Function ID: 94156
// Name: apexExperiment
// Dependencies: []
// Exports: getBogoPromotionGateEnabled, useBogoPromotionGateEnabled

// Module 12280 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { y: null, DateToSystemTimezoneSetter: null, isEligibleToBeVisible: null, variations: { [1]: true } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/premium/experiments/BogoPromotionExperiment.tsx");

export default apexExperiment;
export const useBogoPromotionGateEnabled = function useBogoPromotionGateEnabled(location) {
  return apexExperiment.useConfig({ location });
};
export const getBogoPromotionGateEnabled = function getBogoPromotionGateEnabled(location) {
  return apexExperiment.getConfig({ location });
};
