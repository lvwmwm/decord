// Module ID: 12435
// Function ID: 96494
// Name: apexExperiment
// Dependencies: [1428, 2]
// Exports: getBogoMarketingMaterialsEnabled, useBogoMarketingMaterialsEnabled

// Module 12435 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-03-bogo-promotion-marketing-materials-v2", kind: "user", defaultConfig: false, variations: { [1]: true } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/premium/experiments/BOGOPromotionMarketingMaterialsExperiments.tsx");

export default apexExperiment;
export const useBogoMarketingMaterialsEnabled = function useBogoMarketingMaterialsEnabled(location) {
  return apexExperiment.useConfig({ location });
};
export const getBogoMarketingMaterialsEnabled = function getBogoMarketingMaterialsEnabled(location) {
  return apexExperiment.getConfig({ location });
};
