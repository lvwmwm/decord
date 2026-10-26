// Module ID: 17283
// Function ID: 17284
// Name: DefaultDMSettingsExperiment
// Dependencies: [5644, 6659, 6654, 2]
// Exports: shouldAgeVerifyForDMDefaultOff

// Module 17283 (DefaultDMSettingsExperiment)
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5644 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6654 */;
import AgeGatedFeature from "AgeGatedFeature" /* 6659 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx");

export const shouldAgeVerifyForDMDefaultOff = function shouldAgeVerifyForDMDefaultOff() {
  const obj = RegionalFeatureConfigUtils;
  const isFeatureAgeGatedResult = obj.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.DM_PRIVACY_SETTINGS);
  const obj2 = AgeVerificationUtils;
  const tmp2 = obj2.shouldShowTiggerPawtect() && isFeatureAgeGatedResult;
  return tmp2;
};
