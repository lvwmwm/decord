// Module ID: 12365
// Function ID: 94570
// Name: apexExperiment
// Dependencies: []
// Exports: getMobileBoostingEnabled, getShouldRemoveYearlyUpsell

// Module 12365 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { 844175713: null, 1387159956: null, defaultConfig: { PREDICATE_FAILED: null, getEmbeddedActivityLaunchability: null }, variations: { [0]: { PREDICATE_FAILED: null, getEmbeddedActivityLaunchability: null }, [1]: { PREDICATE_FAILED: null, getEmbeddedActivityLaunchability: null }, [2]: { PREDICATE_FAILED: null, getEmbeddedActivityLaunchability: null } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/premium/powerups/experiments/MobileBoostingExperiment.tsx");

export default apexExperiment;
export const getShouldRemoveYearlyUpsell = function getShouldRemoveYearlyUpsell(PremiumPlanSelect) {
  return apexExperiment.getConfig({ location: PremiumPlanSelect }).removeYearlyUpsell;
};
export const getMobileBoostingEnabled = function getMobileBoostingEnabled(PremiumPlanSelect) {
  return apexExperiment.getConfig({ location: PremiumPlanSelect }).enabled;
};
