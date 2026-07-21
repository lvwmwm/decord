// Module ID: 12363
// Function ID: 94548
// Name: apexExperiment
// Dependencies: []
// Exports: getMobileBoostingEnabled, getShouldRemoveYearlyUpsell

// Module 12363 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { 9223372036854775807: null, 0: null, defaultConfig: { 9223372036854775807: null, 0: null }, variations: { [0]: { 9223372036854775807: null, 0: null }, [1]: { 9223372036854775807: true, 0: true }, [2]: { 9223372036854775807: null, 0: null } } };
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
