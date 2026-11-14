// Module ID: 12436
// Function ID: 12437
// Name: SocialLayerStorefrontMobileMultiSkuEmbedExperiment
// Dependencies: [1452, 2]
// Exports: getIsEligibleForSocialLayerStorefrontMobileMultiSkuEmbed

// Module 12436 (SocialLayerStorefrontMobileMultiSkuEmbedExperiment)
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-10-social-layer-storefront-mobile-multi-sku-embed", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/slayer_storefront/experiments/SocialLayerStorefrontMobileMultiSkuEmbedExperiment.tsx");

export const SocialLayerStorefrontMobileMultiSkuEmbedExperiment = apexExperiment;
export function getIsEligibleForSocialLayerStorefrontMobileMultiSkuEmbed(autoTrackExposure) {
  autoTrackExposure = autoTrackExposure.autoTrackExposure;
  const _location = autoTrackExposure.location;
  if (autoTrackExposure === undefined) {
    autoTrackExposure = false;
  }
  return apexExperiment.getConfig({ location: _location }, { autoTrackExposure }).enabled;
}
