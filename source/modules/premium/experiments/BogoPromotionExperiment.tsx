// Module ID: 12268
// Function ID: 94093
// Name: apexExperiment
// Dependencies: []
// Exports: getBogoPromotionGateEnabled, useBogoPromotionGateEnabled

// Module 12268 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { -1269606814: null, -1845285747: null, 1383489935: null, variations: { [1]: true } };
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
