// Module ID: 8856
// Function ID: 8857
// Name: apexExperiment
// Dependencies: [1471, 2]
// Exports: useIsShopThisLookMobileEnabled

// Module 8856 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-07-shop-this-look-mobile", kind: "user", defaultConfig: { shopThisLookMobileEnabled: false }, variations: { 0: { shopThisLookMobileEnabled: false }, 1: { shopThisLookMobileEnabled: true } } });
const result = require("set").fileFinishedImporting("modules/collectibles/experiments/ShopThisLookMobileExperiment.tsx");

export default apexExperiment;
export const useIsShopThisLookMobileEnabled = function useIsShopThisLookMobileEnabled(UserProfileActionSheet) {
  return apexExperiment.useConfig({ location: UserProfileActionSheet }).shopThisLookMobileEnabled;
};
