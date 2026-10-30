// Module ID: 10025
// Function ID: 10026
// Name: MobileStickerPickerUpsellRestyleExperiment
// Dependencies: [1448, 5068, 2]
// Exports: getMobileStickerPickerUpsellRestyleEnabled, getMobileStickerPickerUpsellRestyleEnabledForFeature, useMobileStickerPickerUpsellRestyleEnabled

// Module 10025 (MobileStickerPickerUpsellRestyleExperiment)
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 5068 */;
import ApexExperiment from "ApexExperiment" /* 1448 */;
import size from "module_2" /* 2 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-09-mobile-sticker-picker-upsell-restyle", kind: "user", defaultConfig: false, variations: { 0: false, 1: true } });
const result = size.fileFinishedImporting("modules/premium/experiments/MobileStickerPickerUpsellRestyleExperiment.tsx");

export const MobileStickerPickerUpsellRestyleExperiment = apexExperiment;
export function useMobileStickerPickerUpsellRestyleEnabled(location) {
  const obj = { location };
  return apexExperiment.useConfig(obj);
}
export function getMobileStickerPickerUpsellRestyleEnabled(location) {
  const obj = { location };
  return apexExperiment.getConfig(obj);
}
export function getMobileStickerPickerUpsellRestyleEnabledForFeature(featureName, location) {
  let config = featureName === EntitlementFeatureNames.EntitlementFeatureNames.STICKERS_EVERYWHERE;
  if (config) {
    const obj = { location };
    config = apexExperiment.getConfig(obj);
  }
  return config;
}
