// Module ID: 12004
// Function ID: 12005
// Name: apexExperiment
// Dependencies: [1472, 2]
// Exports: useIsShopCardImpressionMobileEnabled

// Module 12004 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-04-shop-card-impression-mobile", kind: "user", defaultConfig: { enableShopCardImpression: false }, variations: { 0: { enableShopCardImpression: false }, 1: { enableShopCardImpression: true } } });
const result = require("set").fileFinishedImporting("modules/collectibles/experiments/CollectiblesShopCardImpressionMobileExperiment.tsx");

export default apexExperiment;
export const useIsShopCardImpressionMobileEnabled = function useIsShopCardImpressionMobileEnabled(CollectiblesShopCardV2) {
  return apexExperiment.useConfig({ location: CollectiblesShopCardV2 }).enableShopCardImpression;
};
