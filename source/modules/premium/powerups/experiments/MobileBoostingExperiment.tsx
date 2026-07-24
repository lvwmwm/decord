// Module ID: 12537
// Function ID: 97077
// Name: apexExperiment
// Dependencies: [1428, 2]
// Exports: getMobileBoostingEnabled, getRecommendedBoostCount, getShouldRemoveYearlyUpsell

// Module 12537 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-07-mobile-boosting-optimizations", kind: "user", defaultConfig: { enabled: false, removeYearlyUpsell: false, recommendedBoostCount: null }, variations: { [0]: { enabled: false, removeYearlyUpsell: false, recommendedBoostCount: null }, [1]: { enabled: true, removeYearlyUpsell: false, recommendedBoostCount: 2 }, [2]: { enabled: true, removeYearlyUpsell: true, recommendedBoostCount: 2 }, [3]: { enabled: true, removeYearlyUpsell: false, recommendedBoostCount: 3 }, [4]: { enabled: true, removeYearlyUpsell: true, recommendedBoostCount: 3 } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/premium/powerups/experiments/MobileBoostingExperiment.tsx");

export default apexExperiment;
export const getShouldRemoveYearlyUpsell = function getShouldRemoveYearlyUpsell(PremiumPlanSelect) {
  return apexExperiment.getConfig({ location: PremiumPlanSelect }).removeYearlyUpsell;
};
export const getMobileBoostingEnabled = function getMobileBoostingEnabled(PremiumPlanSelect) {
  return apexExperiment.getConfig({ location: PremiumPlanSelect }).enabled;
};
export const getRecommendedBoostCount = function getRecommendedBoostCount(PremiumPlanSelect) {
  return apexExperiment.getConfig({ location: PremiumPlanSelect }).recommendedBoostCount;
};
