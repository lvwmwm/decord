// Module ID: 16292
// Function ID: 16293
// Name: DefaultDMSettingsExperiment
// Dependencies: [5728, 5729, 5041, 2]
// Exports: shouldAgeVerifyForDMDefaultOff

// Module 16292 (DefaultDMSettingsExperiment)
import AgeVerificationUtils from "AgeVerificationUtils" /* 5041 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5728 */;
import AgeGatedFeature from "AgeGatedFeature" /* 5729 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx");

export const shouldAgeVerifyForDMDefaultOff = function shouldAgeVerifyForDMDefaultOff() {
  const isFeatureAgeGatedResult = RegionalFeatureConfigUtils.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.DM_PRIVACY_SETTINGS);
  return AgeVerificationUtils.shouldShowTiggerPawtect() && isFeatureAgeGatedResult;
};
