// Module ID: 7487
// Function ID: 7488
// Name: MobileEmojiPickerUpsellRestyleExperiment
// Dependencies: [1440, 558, 576, 7483, 2]
// Exports: getMobileEmojiPickerUpsellRestyleEnabledForFeature

// Module 7487 (MobileEmojiPickerUpsellRestyleExperiment)
import react from "react" /* 576 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 7483 */;
import ApexExperiment from "ApexExperiment" /* 1440 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-08-mobile-emoji-picker-upsell-restyle", kind: "user", defaultConfig: false, variations: { 0: false, 1: true } });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((location) => {
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
}) : ((location) => {
  const obj = { location };
  return apexExperiment.useConfig(obj);
});
const items = [EntitlementFeatureNames.EntitlementFeatureNames.EMOJIS_EVERYWHERE, EntitlementFeatureNames.EntitlementFeatureNames.ANIMATED_EMOJIS];
const result = size.fileFinishedImporting("modules/premium/experiments/MobileEmojiPickerUpsellRestyleExperiment.tsx");

export const MobileEmojiPickerUpsellRestyleExperiment = apexExperiment;
export const useMobileEmojiPickerUpsellRestyleEnabled = tmp3;
export const getMobileEmojiPickerUpsellRestyleEnabledForFeature = function getMobileEmojiPickerUpsellRestyleEnabledForFeature(featureName, location) {
  let config = items.includes(featureName);
  if (config) {
    const obj = { location };
    config = apexExperiment.getConfig(obj);
  }
  return config;
};
