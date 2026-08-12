// Module ID: 12806
// Function ID: 12807
// Name: apexExperiment
// Dependencies: [1471, 2]
// Exports: getBogoMarketingMaterialsEnabled, useBogoMarketingMaterialsEnabled

// Module 12806 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-03-bogo-promotion-marketing-materials-v2", kind: "user", defaultConfig: false, variations: { 1: true } });
const result = require("set").fileFinishedImporting("modules/premium/experiments/BOGOPromotionMarketingMaterialsExperiments.tsx");

export default apexExperiment;
export const useBogoMarketingMaterialsEnabled = function useBogoMarketingMaterialsEnabled(location) {
  return apexExperiment.useConfig({ location });
};
export const getBogoMarketingMaterialsEnabled = function getBogoMarketingMaterialsEnabled(location) {
  return apexExperiment.getConfig({ location });
};
