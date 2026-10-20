// Module ID: 17036
// Function ID: 17037
// Name: DefaultDMSettingsExperiment
// Dependencies: [5605, 6610, 6605, 2]
// Exports: shouldAgeVerifyForDMDefaultOff

// Module 17036 (DefaultDMSettingsExperiment)
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5605 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6605 */;
import AgeGatedFeature from "AgeGatedFeature" /* 6610 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx");

export const shouldAgeVerifyForDMDefaultOff = function shouldAgeVerifyForDMDefaultOff() {
  const obj = RegionalFeatureConfigUtils;
  const isFeatureAgeGatedResult = obj.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.DM_PRIVACY_SETTINGS);
  const obj2 = AgeVerificationUtils;
  const tmp2 = obj2.shouldShowTiggerPawtect() && isFeatureAgeGatedResult;
  return tmp2;
};
