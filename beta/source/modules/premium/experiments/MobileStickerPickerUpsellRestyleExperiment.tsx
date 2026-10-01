// Module ID: 8622
// Function ID: 8623
// Name: MobileStickerPickerUpsellRestyleExperiment
// Dependencies: [1435, 7273, 2]
// Exports: getMobileStickerPickerUpsellRestyleEnabled, getMobileStickerPickerUpsellRestyleEnabledForFeature, useMobileStickerPickerUpsellRestyleEnabled

// Module 8622 (MobileStickerPickerUpsellRestyleExperiment)
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 7273 */;
import ApexExperiment from "ApexExperiment" /* 1435 */;
import size from "module_2" /* 2 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-09-mobile-sticker-picker-upsell-restyle", kind: "user", defaultConfig: false, variations: { 0: false, 1: true } });
const result = size.fileFinishedImporting("modules/premium/experiments/MobileStickerPickerUpsellRestyleExperiment.tsx");

export const MobileStickerPickerUpsellRestyleExperiment = apexExperiment;
export const useMobileStickerPickerUpsellRestyleEnabled = function useMobileStickerPickerUpsellRestyleEnabled(location) {
  const obj = { location };
  return apexExperiment.useConfig(obj);
};
export const getMobileStickerPickerUpsellRestyleEnabled = function getMobileStickerPickerUpsellRestyleEnabled(location) {
  const obj = { location };
  return apexExperiment.getConfig(obj);
};
export const getMobileStickerPickerUpsellRestyleEnabledForFeature = function getMobileStickerPickerUpsellRestyleEnabledForFeature(featureName, location) {
  let config = featureName === EntitlementFeatureNames.EntitlementFeatureNames.STICKERS_EVERYWHERE;
  if (config) {
    const obj = { location };
    config = apexExperiment.getConfig(obj);
  }
  return config;
};
