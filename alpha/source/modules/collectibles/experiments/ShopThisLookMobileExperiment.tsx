// Module ID: 8858
// Function ID: 8859
// Name: ShopThisLookMobileExperiment
// Dependencies: [1449, 2]
// Exports: useIsShopThisLookMobileEnabled

// Module 8858 (ShopThisLookMobileExperiment)
import ApexExperiment from "ApexExperiment" /* 1449 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-07-shop-this-look-mobile", kind: "user", defaultConfig: { shopThisLookMobileEnabled: false }, variations: { 0: { shopThisLookMobileEnabled: false }, 1: { shopThisLookMobileEnabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/collectibles/experiments/ShopThisLookMobileExperiment.tsx");

export default apexExperiment;
export function useIsShopThisLookMobileEnabled(UserProfileActionSheet) {
  const obj = { location: UserProfileActionSheet };
  return apexExperiment.useConfig(obj).shopThisLookMobileEnabled;
}
