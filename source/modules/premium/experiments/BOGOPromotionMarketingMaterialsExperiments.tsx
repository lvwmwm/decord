// Module ID: 12282
// Function ID: 94164
// Name: apexExperiment
// Dependencies: []
// Exports: getBogoMarketingMaterialsEnabled, useBogoMarketingMaterialsEnabled

// Module 12282 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { y: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004462167820292218, DateToSystemTimezoneSetter: -5647244921030311000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, isEligibleToBeVisible: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004273351844268577, variations: { [1]: true } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/premium/experiments/BOGOPromotionMarketingMaterialsExperiments.tsx");

export default apexExperiment;
export const useBogoMarketingMaterialsEnabled = function useBogoMarketingMaterialsEnabled(location) {
  return apexExperiment.useConfig({ location });
};
export const getBogoMarketingMaterialsEnabled = function getBogoMarketingMaterialsEnabled(location) {
  return apexExperiment.getConfig({ location });
};
