// Module ID: 12236
// Function ID: 12237
// Name: apexExperiment
// Dependencies: [1471, 2]
// Exports: useIsShopStandalonePdpMobileEnabled

// Module 12236 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-08-shop-standalone-pdp-mobile", kind: "user", defaultConfig: { standalonePdpEnabled: false }, variations: { 0: { standalonePdpEnabled: false }, 1: { standalonePdpEnabled: true } } });
const result = require("set").fileFinishedImporting("modules/collectibles/experiments/ShopStandalonePdpMobileExperiment.tsx");

export default apexExperiment;
export const useIsShopStandalonePdpMobileEnabled = function useIsShopStandalonePdpMobileEnabled(product_details_action_sheet) {
  return apexExperiment.useConfig({ location: product_details_action_sheet }).standalonePdpEnabled;
};
