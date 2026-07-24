// Module ID: 7882
// Function ID: 62485
// Name: apexExperiment
// Dependencies: [1428, 2]
// Exports: getIsEligibleForSocialLayerStorefrontMobilePurchasing, useIsEligibleForSocialLayerStorefrontMobilePurchasing

// Module 7882 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-04-social-layer-storefront-mobile-purchasing", kind: "user", defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/slayer_storefront/experiments/SocialLayerStorefrontMobilePurchasingExperiment.tsx");

export const SocialLayerStorefrontMobilePurchasingExperiment = apexExperiment;
export const useIsEligibleForSocialLayerStorefrontMobilePurchasing = function useIsEligibleForSocialLayerStorefrontMobilePurchasing(location) {
  return apexExperiment.useConfig({ location: location.location }).enabled;
};
export const getIsEligibleForSocialLayerStorefrontMobilePurchasing = function getIsEligibleForSocialLayerStorefrontMobilePurchasing(location) {
  return apexExperiment.getConfig({ location: location.location }).enabled;
};
