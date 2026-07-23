// Module ID: 11844
// Function ID: 91785
// Name: apexExperiment
// Dependencies: [1428, 2]
// Exports: useIsShopCardImpressionMobileEnabled

// Module 11844 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-04-shop-card-impression-mobile", kind: "user", defaultConfig: { enableShopCardImpression: false }, variations: { [0]: { enableShopCardImpression: false }, [1]: { enableShopCardImpression: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/collectibles/experiments/CollectiblesShopCardImpressionMobileExperiment.tsx");

export default apexExperiment;
export const useIsShopCardImpressionMobileEnabled = function useIsShopCardImpressionMobileEnabled(CollectiblesShopCardV2) {
  return apexExperiment.useConfig({ location: CollectiblesShopCardV2 }).enableShopCardImpression;
};
