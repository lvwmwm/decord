// Module ID: 9555
// Function ID: 9556
// Name: FractionalNitroPricingExperiment
// Dependencies: [1448, 1075, 2]
// Exports: FractionalNitroPricingExposure, isFractionalNitroPricingSku

// Module 9555 (FractionalNitroPricingExperiment)
import FractionalPremiumSKUs from "FractionalPremiumSKUs" /* 1075 */;
import ApexExperiment from "ApexExperiment" /* 1448 */;
import size from "module_2" /* 2 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-10-fractional-nitro-pricing", kind: "user", defaultConfig: null, variations: { 0: null, 1: 2800, 2: 4200 } });
const result = size.fileFinishedImporting("modules/collectibles/experiments/FractionalNitroPricingExperiment.tsx");

export default apexExperiment;
export function isFractionalNitroPricingSku(skuId) {
  return skuId === FractionalPremiumSKUs.FractionalPremiumSKUs.PREMIUM_TIER_2_3_DAY;
}
export function FractionalNitroPricingExposure(location) {
  const obj = { location: location.location };
  const config = apexExperiment.useConfig(obj);
  return null;
}
