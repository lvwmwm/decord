// Module ID: 12370
// Function ID: 94598
// Name: apexExperiment
// Dependencies: []
// Exports: getMobileBoostingEnabled, getShouldRemoveYearlyUpsell

// Module 12370 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { y: null, DateToSystemTimezoneSetter: null, defaultConfig: { 9223372036854775807: true, 9223372036854775807: true }, variations: { [0]: { 9223372036854775807: true, 9223372036854775807: true }, [1]: { 9223372036854775807: "<string:1040334421>", 9223372036854775807: "<string:1040334338>" }, [2]: { 9223372036854775807: null, 9223372036854775807: null } } };
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
