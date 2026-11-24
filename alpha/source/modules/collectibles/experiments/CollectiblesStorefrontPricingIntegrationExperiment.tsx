// Module ID: 11107
// Function ID: 11108
// Name: CollectiblesStorefrontPricingIntegrationExperiment
// Dependencies: [1450, 2]
// Exports: getCollectiblesStorefrontPricingFetchOnShopButtonPrefetch, useCollectiblesStorefrontPricingIntegrationEnabled

// Module 11107 (CollectiblesStorefrontPricingIntegrationExperiment)
import ApexExperiment from "ApexExperiment" /* 1450 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-10-collectibles-storefront-pricing-integration", kind: "user", defaultConfig: { enabled: false, fetchOnShopButtonPrefetch: false }, variations: { 0: { enabled: false, fetchOnShopButtonPrefetch: false }, 1: { enabled: true, fetchOnShopButtonPrefetch: true }, 2: { enabled: true, fetchOnShopButtonPrefetch: false } } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/collectibles/experiments/CollectiblesStorefrontPricingIntegrationExperiment.tsx");

export function getCollectiblesStorefrontPricingFetchOnShopButtonPrefetch(location) {
  const obj = { location };
  return closure_0.getConfig(obj).fetchOnShopButtonPrefetch;
}
export function useCollectiblesStorefrontPricingIntegrationEnabled(collectibles_discount_promotion_purchase_cta) {
  const obj = { location: collectibles_discount_promotion_purchase_cta };
  return closure_0.useConfig(obj).enabled;
}
