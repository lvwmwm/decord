// Module ID: 17017
// Function ID: 17018
// Name: DefaultDMSettingsExperiment
// Dependencies: [5605, 6607, 6602, 2]
// Exports: shouldAgeVerifyForDMDefaultOff

// Module 17017 (DefaultDMSettingsExperiment)
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5605 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6602 */;
import AgeGatedFeature from "AgeGatedFeature" /* 6607 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx");

export const shouldAgeVerifyForDMDefaultOff = function shouldAgeVerifyForDMDefaultOff() {
  const obj = RegionalFeatureConfigUtils;
  const isFeatureAgeGatedResult = obj.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.DM_PRIVACY_SETTINGS);
  const obj2 = AgeVerificationUtils;
  const tmp2 = obj2.shouldShowTiggerPawtect() && isFeatureAgeGatedResult;
  return tmp2;
};
