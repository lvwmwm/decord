// Module ID: 16194
// Function ID: 16195
// Name: DefaultDMSettingsExperiment
// Dependencies: [5642, 5643, 4970, 2]
// Exports: shouldAgeVerifyForDMDefaultOff

// Module 16194 (DefaultDMSettingsExperiment)
import AgeVerificationUtils from "AgeVerificationUtils" /* 4970 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5642 */;
import AgeGatedFeature from "AgeGatedFeature" /* 5643 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx");

export const shouldAgeVerifyForDMDefaultOff = function shouldAgeVerifyForDMDefaultOff() {
  const isFeatureAgeGatedResult = RegionalFeatureConfigUtils.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.DM_PRIVACY_SETTINGS);
  return AgeVerificationUtils.shouldShowTiggerPawtect() && isFeatureAgeGatedResult;
};
