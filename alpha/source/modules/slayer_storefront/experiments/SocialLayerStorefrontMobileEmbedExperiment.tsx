// Module ID: 11709
// Function ID: 11710
// Name: SocialLayerStorefrontMobileEmbedExperiment
// Dependencies: [1449, 2]
// Exports: getIsEligibleForSocialLayerStorefrontMobileEmbed

// Module 11709 (SocialLayerStorefrontMobileEmbedExperiment)
import ApexExperiment from "ApexExperiment" /* 1449 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-08-social-layer-storefront-mobile-embed", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/slayer_storefront/experiments/SocialLayerStorefrontMobileEmbedExperiment.tsx");

export const SocialLayerStorefrontMobileEmbedExperiment = apexExperiment;
export function getIsEligibleForSocialLayerStorefrontMobileEmbed(autoTrackExposure) {
  autoTrackExposure = autoTrackExposure.autoTrackExposure;
  const _location = autoTrackExposure.location;
  if (autoTrackExposure === undefined) {
    autoTrackExposure = false;
  }
  return apexExperiment.getConfig({ location: _location }, { autoTrackExposure }).enabled;
}
