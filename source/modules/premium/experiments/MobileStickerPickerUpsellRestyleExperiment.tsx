// Module ID: 9250
// Function ID: 9251
// Name: apexExperiment
// Dependencies: [1468, 7785, 2]
// Exports: getMobileStickerPickerUpsellRestyleEnabled, getMobileStickerPickerUpsellRestyleEnabledForFeature, useMobileStickerPickerUpsellRestyleEnabled

// Module 9250 (apexExperiment)
import set from "set" /* 2 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 7785 */;
import ApexExperiment from "ApexExperiment" /* 1468 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-09-mobile-sticker-picker-upsell-restyle", kind: "user", defaultConfig: false, variations: { 0: false, 1: true } });
const result = set.fileFinishedImporting("modules/premium/experiments/MobileStickerPickerUpsellRestyleExperiment.tsx");

export const MobileStickerPickerUpsellRestyleExperiment = apexExperiment;
export const useMobileStickerPickerUpsellRestyleEnabled = function useMobileStickerPickerUpsellRestyleEnabled(location) {
  return apexExperiment.useConfig({ location });
};
export const getMobileStickerPickerUpsellRestyleEnabled = function getMobileStickerPickerUpsellRestyleEnabled(location) {
  return apexExperiment.getConfig({ location });
};
export const getMobileStickerPickerUpsellRestyleEnabledForFeature = function getMobileStickerPickerUpsellRestyleEnabledForFeature(featureName, arg1) {
  let config = featureName === EntitlementFeatureNames.EntitlementFeatureNames.STICKERS_EVERYWHERE;
  if (config) {
    const obj = { location: null };
    obj[0] = arg1;
    config = apexExperiment.getConfig(obj);
  }
  return config;
};
