// Module ID: 9448
// Function ID: 9449
// Name: CollectiblesStorefrontPricingIntegrationExperiment
// Dependencies: [1452, 2]
// Exports: getCollectiblesStorefrontPricingIntegrationEnabled, useCollectiblesStorefrontPricingIntegrationEnabled

// Module 9448 (CollectiblesStorefrontPricingIntegrationExperiment)
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-10-collectibles-storefront-pricing-integration", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/collectibles/experiments/CollectiblesStorefrontPricingIntegrationExperiment.tsx");

export function getCollectiblesStorefrontPricingIntegrationEnabled(location) {
  const obj = { location };
  return closure_0.getConfig(obj).enabled;
}
export function useCollectiblesStorefrontPricingIntegrationEnabled(collectibles_pricing_promotion_eligibility) {
  const obj = { location: collectibles_pricing_promotion_eligibility };
  return closure_0.useConfig(obj).enabled;
}
