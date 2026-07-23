// Module ID: 12484
// Function ID: 96754
// Name: apexExperiment
// Dependencies: [1428, 2]
// Exports: getMobileBoostingEnabled, getShouldRemoveYearlyUpsell

// Module 12484 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-07-mobile-boosting-optimizations", kind: "user", defaultConfig: { enabled: false, removeYearlyUpsell: false }, variations: { [0]: { enabled: false, removeYearlyUpsell: false }, [1]: { enabled: true, removeYearlyUpsell: false }, [2]: { enabled: true, removeYearlyUpsell: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/premium/powerups/experiments/MobileBoostingExperiment.tsx");

export default apexExperiment;
export const getShouldRemoveYearlyUpsell = function getShouldRemoveYearlyUpsell(PremiumPlanSelect) {
  return apexExperiment.getConfig({ location: PremiumPlanSelect }).removeYearlyUpsell;
};
export const getMobileBoostingEnabled = function getMobileBoostingEnabled(PremiumPlanSelect) {
  return apexExperiment.getConfig({ location: PremiumPlanSelect }).enabled;
};
