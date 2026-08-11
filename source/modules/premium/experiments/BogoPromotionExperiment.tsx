// Module ID: 12745
// Function ID: 12746
// Name: apexExperiment
// Dependencies: [1471, 2]
// Exports: getBogoPromotionGateEnabled, useBogoPromotionGateEnabled

// Module 12745 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-03-bogo-promotion-gate-v2", kind: "user", defaultConfig: false, variations: { 1: true } });
const result = require("set").fileFinishedImporting("modules/premium/experiments/BogoPromotionExperiment.tsx");

export default apexExperiment;
export const useBogoPromotionGateEnabled = function useBogoPromotionGateEnabled(location) {
  return apexExperiment.useConfig({ location });
};
export const getBogoPromotionGateEnabled = function getBogoPromotionGateEnabled(location) {
  return apexExperiment.getConfig({ location });
};
