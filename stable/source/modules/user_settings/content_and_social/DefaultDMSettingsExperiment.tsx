// Module ID: 17321
// Function ID: 17322
// Name: DefaultDMSettingsExperiment
// Dependencies: [5676, 6691, 6686, 2]
// Exports: shouldAgeVerifyForDMDefaultOff

// Module 17321 (DefaultDMSettingsExperiment)
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5676 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6686 */;
import AgeGatedFeature from "AgeGatedFeature" /* 6691 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx");

export const shouldAgeVerifyForDMDefaultOff = function shouldAgeVerifyForDMDefaultOff() {
  const obj = RegionalFeatureConfigUtils;
  const isFeatureAgeGatedResult = obj.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.DM_PRIVACY_SETTINGS);
  const obj2 = AgeVerificationUtils;
  const tmp2 = obj2.shouldShowTiggerPawtect() && isFeatureAgeGatedResult;
  return tmp2;
};
