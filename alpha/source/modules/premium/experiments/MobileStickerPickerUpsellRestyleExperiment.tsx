// Module ID: 9468
// Function ID: 9469
// Name: MobileStickerPickerUpsellRestyleExperiment
// Dependencies: [1452, 558, 576, 9219, 2]
// Exports: getMobileStickerPickerUpsellRestyleEnabled, getMobileStickerPickerUpsellRestyleEnabledForFeature

// Module 9468 (MobileStickerPickerUpsellRestyleExperiment)
import react from "react" /* 576 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 9219 */;
import ApexExperiment from "ApexExperiment" /* 1452 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-09-mobile-sticker-picker-upsell-restyle", kind: "user", defaultConfig: false, variations: { 0: false, 1: true } });
function getMobileStickerPickerUpsellRestyleEnabled(location) {
  const obj = { location };
  return apexExperiment.getConfig(obj);
}
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useMobileStickerPickerUpsellRestyleEnabled(location) {
  let tmp2;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] !== location) {
    const obj2 = { location };
    cResult[0] = location;
    cResult[1] = obj2;
    tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  return apexExperiment.useConfig(tmp2);
}) : (function useMobileStickerPickerUpsellRestyleEnabled(location) {
  const obj = { location };
  return apexExperiment.useConfig(obj);
});
const result = size.fileFinishedImporting("modules/premium/experiments/MobileStickerPickerUpsellRestyleExperiment.tsx");

export const MobileStickerPickerUpsellRestyleExperiment = apexExperiment;
export const useMobileStickerPickerUpsellRestyleEnabled = tmp3;
export { getMobileStickerPickerUpsellRestyleEnabled };
export const getMobileStickerPickerUpsellRestyleEnabledForFeature = function getMobileStickerPickerUpsellRestyleEnabledForFeature(featureName, location) {
  let config = featureName === EntitlementFeatureNames.EntitlementFeatureNames.STICKERS_EVERYWHERE;
  if (config) {
    const obj = { location };
    config = apexExperiment.getConfig(obj);
  }
  return config;
};
