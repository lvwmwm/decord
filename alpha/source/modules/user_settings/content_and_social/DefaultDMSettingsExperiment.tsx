// Module ID: 16217
// Function ID: 16218
// Name: DefaultDMSettingsExperiment
// Dependencies: [5642, 5643, 4969, 2]
// Exports: shouldAgeVerifyForDMDefaultOff

// Module 16217 (DefaultDMSettingsExperiment)
import AgeVerificationUtils from "AgeVerificationUtils" /* 4969 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5642 */;
import AgeGatedFeature from "AgeGatedFeature" /* 5643 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx");

export const shouldAgeVerifyForDMDefaultOff = function shouldAgeVerifyForDMDefaultOff() {
  const isFeatureAgeGatedResult = RegionalFeatureConfigUtils.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.DM_PRIVACY_SETTINGS);
  return AgeVerificationUtils.shouldShowTiggerPawtect() && isFeatureAgeGatedResult;
};
