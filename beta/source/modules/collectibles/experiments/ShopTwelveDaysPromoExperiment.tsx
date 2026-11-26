// Module ID: 17345
// Function ID: 17346
// Name: ShopTwelveDaysPromoExperiment
// Dependencies: [1450, 2]
// Exports: useShopTwelveDaysPromoConfig

// Module 17345 (ShopTwelveDaysPromoExperiment)
import ApexExperiment from "ApexExperiment" /* 1450 */;
import size from "module_2" /* 2 */;

let obj = { enabled: false };
const obj2 = { name: "2026-10-shop-twelve-days-promo", kind: "user", defaultConfig: obj, variations: { 0: obj, 1: { enabled: true } } };
let closure_0 = ApexExperiment.createApexExperiment(obj2);
const result = size.fileFinishedImporting("modules/collectibles/experiments/ShopTwelveDaysPromoExperiment.tsx");

export function useShopTwelveDaysPromoConfig(TwelveDaysHomeNagbar, autoTrackExposure) {
  const obj = { location: TwelveDaysHomeNagbar };
  return closure_0.useConfig(obj, autoTrackExposure);
}
