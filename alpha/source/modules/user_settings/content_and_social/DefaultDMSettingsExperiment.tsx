// Module ID: 16086
// Function ID: 16087
// Name: DefaultDMSettingsExperiment
// Dependencies: [5918, 5917, 5905, 2]
// Exports: shouldAgeVerifyForDMDefaultOff

// Module 16086 (DefaultDMSettingsExperiment)
import AgeVerificationUtils from "AgeVerificationUtils" /* 5905 */;
import AgeGatedFeature from "AgeGatedFeature" /* 5917 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5918 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx");

export const shouldAgeVerifyForDMDefaultOff = function shouldAgeVerifyForDMDefaultOff() {
  const obj = RegionalFeatureConfigUtils;
  const isFeatureAgeGatedResult = obj.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.DM_PRIVACY_SETTINGS);
  const obj2 = AgeVerificationUtils;
  const tmp2 = obj2.shouldShowTiggerPawtect() && isFeatureAgeGatedResult;
  return tmp2;
};
