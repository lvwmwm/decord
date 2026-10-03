// Module ID: 13137
// Function ID: 13138
// Name: MobileRoadblockOfferCtaExperiment
// Dependencies: [1440, 2]
// Exports: getMobileRoadblockOfferCtaEnabled

// Module 13137 (MobileRoadblockOfferCtaExperiment)
import ApexExperiment from "ApexExperiment" /* 1440 */;
import size from "module_2" /* 2 */;

const config = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-09-mobile-roadblock-offer-cta", defaultConfig: false, variations: { 0: false, 1: true } });
const result = size.fileFinishedImporting("modules/premium/experiments/MobileRoadblockOfferCtaExperiment.tsx");

export const getMobileRoadblockOfferCtaEnabled = function getMobileRoadblockOfferCtaEnabled() {
  return config.getConfig({ location: "native.PremiumUpsellActionSheet" });
};
