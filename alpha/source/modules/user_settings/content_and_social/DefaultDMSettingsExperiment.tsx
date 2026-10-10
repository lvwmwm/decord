// Module ID: 16269
// Function ID: 16270
// Name: DefaultDMSettingsExperiment
// Dependencies: [5921, 5920, 5909, 2]
// Exports: shouldAgeVerifyForDMDefaultOff

// Module 16269 (DefaultDMSettingsExperiment)
import AgeVerificationUtils from "AgeVerificationUtils" /* 5909 */;
import AgeGatedFeature from "AgeGatedFeature" /* 5920 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5921 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx");

export const shouldAgeVerifyForDMDefaultOff = function shouldAgeVerifyForDMDefaultOff() {
  const obj = RegionalFeatureConfigUtils;
  const isFeatureAgeGatedResult = obj.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.DM_PRIVACY_SETTINGS);
  const obj2 = AgeVerificationUtils;
  const tmp2 = obj2.shouldShowTiggerPawtect() && isFeatureAgeGatedResult;
  return tmp2;
};
