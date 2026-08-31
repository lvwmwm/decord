// Module ID: 12592
// Function ID: 12593
// Name: apexExperiment
// Dependencies: [1468, 2]
// Exports: useIsShopCardImpressionMobileEnabled

// Module 12592 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1468 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-04-shop-card-impression-mobile", kind: "user", defaultConfig: { enableShopCardImpression: false }, variations: { 0: { enableShopCardImpression: false }, 1: { enableShopCardImpression: true } } });
const result = set.fileFinishedImporting("modules/collectibles/experiments/CollectiblesShopCardImpressionMobileExperiment.tsx");

export default apexExperiment;
export const useIsShopCardImpressionMobileEnabled = function useIsShopCardImpressionMobileEnabled(CollectiblesShopCardV2) {
  return apexExperiment.useConfig({ location: CollectiblesShopCardV2 }).enableShopCardImpression;
};
