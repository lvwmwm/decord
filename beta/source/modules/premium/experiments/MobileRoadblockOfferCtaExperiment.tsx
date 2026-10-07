// Module ID: 13139
// Function ID: 13140
// Name: MobileRoadblockOfferCtaExperiment
// Dependencies: [1440, 2]
// Exports: getMobileRoadblockOfferCtaEnabled

// Module 13139 (MobileRoadblockOfferCtaExperiment)
import ApexExperiment from "ApexExperiment" /* 1440 */;
import size from "module_2" /* 2 */;

const config = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-09-mobile-roadblock-offer-cta", defaultConfig: false, variations: { 0: false, 1: true } });
const result = size.fileFinishedImporting("modules/premium/experiments/MobileRoadblockOfferCtaExperiment.tsx");

export const getMobileRoadblockOfferCtaEnabled = function getMobileRoadblockOfferCtaEnabled() {
  return config.getConfig({ location: "native.PremiumUpsellActionSheet" });
};
