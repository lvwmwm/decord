// Module ID: 16638
// Function ID: 16639
// Name: DefaultDMSettingsExperiment
// Dependencies: [5926, 5925, 5914, 2]
// Exports: shouldAgeVerifyForDMDefaultOff

// Module 16638 (DefaultDMSettingsExperiment)
import AgeVerificationUtils from "AgeVerificationUtils" /* 5914 */;
import AgeGatedFeature from "AgeGatedFeature" /* 5925 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5926 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx");

export const shouldAgeVerifyForDMDefaultOff = function shouldAgeVerifyForDMDefaultOff() {
  const obj = RegionalFeatureConfigUtils;
  const isFeatureAgeGatedResult = obj.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.DM_PRIVACY_SETTINGS);
  const obj2 = AgeVerificationUtils;
  const tmp2 = obj2.shouldShowTiggerPawtect() && isFeatureAgeGatedResult;
  return tmp2;
};
