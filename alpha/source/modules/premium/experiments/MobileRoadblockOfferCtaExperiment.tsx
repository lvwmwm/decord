// Module ID: 12887
// Function ID: 12888
// Name: MobileRoadblockOfferCtaExperiment
// Dependencies: [1453, 2]
// Exports: getMobileRoadblockOfferCtaEnabled

// Module 12887 (MobileRoadblockOfferCtaExperiment)
import ApexExperiment from "ApexExperiment" /* 1453 */;
import size from "module_2" /* 2 */;

const config = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-09-mobile-roadblock-offer-cta", defaultConfig: false, variations: { 0: false, 1: true } });
const result = size.fileFinishedImporting("modules/premium/experiments/MobileRoadblockOfferCtaExperiment.tsx");

export const getMobileRoadblockOfferCtaEnabled = function getMobileRoadblockOfferCtaEnabled() {
  return config.getConfig({ location: "native.PremiumUpsellActionSheet" });
};
