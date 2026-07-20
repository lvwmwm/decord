// Module ID: 12356
// Function ID: 94525
// Name: apexExperiment
// Dependencies: []
// Exports: getMobileBoostingEnabled, getShouldRemoveYearlyUpsell

// Module 12356 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { -1269606814: null, -1845285747: null, defaultConfig: {}, variations: { [0]: {}, [1]: { currentPayload: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000021043611947808288, upcomingState: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000053357352779429986 }, [2]: { currentPayload: null, upcomingState: null } } };
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
