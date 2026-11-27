// Module ID: 14854
// Function ID: 14855
// Name: ShopThisLookMobileExperiment
// Dependencies: [1451, 2]
// Exports: useIsShopThisLookMobileEnabled

// Module 14854 (ShopThisLookMobileExperiment)
import ApexExperiment from "ApexExperiment" /* 1451 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-07-shop-this-look-mobile", kind: "user", defaultConfig: { shopThisLookMobileEnabled: false }, variations: { 0: { shopThisLookMobileEnabled: false }, 1: { shopThisLookMobileEnabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/collectibles/experiments/ShopThisLookMobileExperiment.tsx");

export default apexExperiment;
export function useIsShopThisLookMobileEnabled(UserProfileActionSheet) {
  const obj = { location: UserProfileActionSheet };
  return apexExperiment.useConfig(obj).shopThisLookMobileEnabled;
}
