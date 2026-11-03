// Module ID: 14737
// Function ID: 14738
// Name: MobileRoadblockOfferCtaExperiment
// Dependencies: [1449, 2]
// Exports: getMobileRoadblockOfferCtaEnabled

// Module 14737 (MobileRoadblockOfferCtaExperiment)
import ApexExperiment from "ApexExperiment" /* 1449 */;
import size from "module_2" /* 2 */;

const config = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-09-mobile-roadblock-offer-cta", defaultConfig: false, variations: { 0: false, 1: true } });
const result = size.fileFinishedImporting("modules/premium/experiments/MobileRoadblockOfferCtaExperiment.tsx");

export function getMobileRoadblockOfferCtaEnabled() {
  return config.getConfig({ location: "native.PremiumUpsellActionSheet" });
}
