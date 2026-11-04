// Module ID: 14606
// Function ID: 14607
// Name: MobileRoadblockOfferCtaExperiment
// Dependencies: [1447, 2]
// Exports: getMobileRoadblockOfferCtaEnabled

// Module 14606 (MobileRoadblockOfferCtaExperiment)
import ApexExperiment from "ApexExperiment" /* 1447 */;
import size from "module_2" /* 2 */;

const config = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-09-mobile-roadblock-offer-cta", defaultConfig: false, variations: { 0: false, 1: true } });
const result = size.fileFinishedImporting("modules/premium/experiments/MobileRoadblockOfferCtaExperiment.tsx");

export function getMobileRoadblockOfferCtaEnabled() {
  return config.getConfig({ location: "native.PremiumUpsellActionSheet" });
}
