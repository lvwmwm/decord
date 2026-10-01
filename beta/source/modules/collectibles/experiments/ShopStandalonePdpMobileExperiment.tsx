// Module ID: 7619
// Function ID: 7620
// Name: ShopStandalonePdpMobileExperiment
// Dependencies: [1435, 2]
// Exports: useIsShopStandalonePdpMobileEnabled

// Module 7619 (ShopStandalonePdpMobileExperiment)
import ApexExperiment from "ApexExperiment" /* 1435 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-08-shop-standalone-pdp-mobile", kind: "user", defaultConfig: { standalonePdpEnabled: false }, variations: { 0: { standalonePdpEnabled: false }, 1: { standalonePdpEnabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/collectibles/experiments/ShopStandalonePdpMobileExperiment.tsx");

export default apexExperiment;
export const useIsShopStandalonePdpMobileEnabled = function useIsShopStandalonePdpMobileEnabled(product_details_action_sheet) {
  const obj = { location: product_details_action_sheet };
  return apexExperiment.useConfig(obj).standalonePdpEnabled;
};
