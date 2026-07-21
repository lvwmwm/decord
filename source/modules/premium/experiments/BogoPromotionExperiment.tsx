// Module ID: 12275
// Function ID: 94116
// Name: apexExperiment
// Dependencies: []
// Exports: getBogoPromotionGateEnabled, useBogoPromotionGateEnabled

// Module 12275 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { 9223372036854775807: null, 0: null, 9223372036854775807: null, variations: { [1]: true } };
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
