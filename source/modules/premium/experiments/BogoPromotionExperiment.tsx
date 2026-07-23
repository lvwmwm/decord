// Module ID: 12394
// Function ID: 96307
// Name: apexExperiment
// Dependencies: [1428, 2]
// Exports: getBogoPromotionGateEnabled, useBogoPromotionGateEnabled

// Module 12394 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-03-bogo-promotion-gate-v2", kind: "user", defaultConfig: false, variations: { [1]: true } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/premium/experiments/BogoPromotionExperiment.tsx");

export default apexExperiment;
export const useBogoPromotionGateEnabled = function useBogoPromotionGateEnabled(location) {
  return apexExperiment.useConfig({ location });
};
export const getBogoPromotionGateEnabled = function getBogoPromotionGateEnabled(location) {
  return apexExperiment.getConfig({ location });
};
