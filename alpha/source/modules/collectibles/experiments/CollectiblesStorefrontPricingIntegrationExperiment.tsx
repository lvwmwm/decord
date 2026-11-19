// Module ID: 8844
// Function ID: 8845
// Name: CollectiblesStorefrontPricingIntegrationExperiment
// Dependencies: [1452, 2]
// Exports: getCollectiblesStorefrontPricingIntegrationEnabled, useCollectiblesStorefrontPricingIntegrationEnabled

// Module 8844 (CollectiblesStorefrontPricingIntegrationExperiment)
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-10-collectibles-storefront-pricing-integration", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/collectibles/experiments/CollectiblesStorefrontPricingIntegrationExperiment.tsx");

export function getCollectiblesStorefrontPricingIntegrationEnabled(location) {
  const obj = { location };
  return closure_0.getConfig(obj).enabled;
}
export function useCollectiblesStorefrontPricingIntegrationEnabled(collectibles_discount_promotion_purchase_cta) {
  const obj = { location: collectibles_discount_promotion_purchase_cta };
  return closure_0.useConfig(obj).enabled;
}
