// Module ID: 8837
// Function ID: 8838
// Name: ShopStandalonePdpMobileExperiment
// Dependencies: [1449, 2]
// Exports: useIsShopStandalonePdpMobileEnabled

// Module 8837 (ShopStandalonePdpMobileExperiment)
import ApexExperiment from "ApexExperiment" /* 1449 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-08-shop-standalone-pdp-mobile", kind: "user", defaultConfig: { standalonePdpEnabled: false }, variations: { 0: { standalonePdpEnabled: false }, 1: { standalonePdpEnabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/collectibles/experiments/ShopStandalonePdpMobileExperiment.tsx");

export default apexExperiment;
export function useIsShopStandalonePdpMobileEnabled(product_details_action_sheet) {
  const obj = { location: product_details_action_sheet };
  return apexExperiment.useConfig(obj).standalonePdpEnabled;
}
