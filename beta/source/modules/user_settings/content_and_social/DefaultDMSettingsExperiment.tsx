// Module ID: 16205
// Function ID: 16206
// Name: DefaultDMSettingsExperiment
// Dependencies: [5674, 5675, 5002, 2]
// Exports: shouldAgeVerifyForDMDefaultOff

// Module 16205 (DefaultDMSettingsExperiment)
import AgeVerificationUtils from "AgeVerificationUtils" /* 5002 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5674 */;
import AgeGatedFeature from "AgeGatedFeature" /* 5675 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx");

export const shouldAgeVerifyForDMDefaultOff = function shouldAgeVerifyForDMDefaultOff() {
  const isFeatureAgeGatedResult = RegionalFeatureConfigUtils.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.DM_PRIVACY_SETTINGS);
  return AgeVerificationUtils.shouldShowTiggerPawtect() && isFeatureAgeGatedResult;
};
