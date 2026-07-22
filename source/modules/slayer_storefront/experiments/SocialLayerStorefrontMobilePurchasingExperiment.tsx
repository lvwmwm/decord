// Module ID: 7785
// Function ID: 62127
// Name: apexExperiment
// Dependencies: []
// Exports: getIsEligibleForSocialLayerStorefrontMobilePurchasing, useIsEligibleForSocialLayerStorefrontMobilePurchasing

// Module 7785 (apexExperiment)
const _module = require(dependencyMap[0]);
const apexExperiment = _module.createApexExperiment({ defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/slayer_storefront/experiments/SocialLayerStorefrontMobilePurchasingExperiment.tsx");

export const SocialLayerStorefrontMobilePurchasingExperiment = apexExperiment;
export const useIsEligibleForSocialLayerStorefrontMobilePurchasing = function useIsEligibleForSocialLayerStorefrontMobilePurchasing(location) {
  return apexExperiment.useConfig({ location: location.location }).enabled;
};
export const getIsEligibleForSocialLayerStorefrontMobilePurchasing = function getIsEligibleForSocialLayerStorefrontMobilePurchasing(location) {
  return apexExperiment.getConfig({ location: location.location }).enabled;
};
