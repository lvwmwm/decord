// Module ID: 15972
// Function ID: 15973
// Name: DefaultDMSettingsExperiment
// Dependencies: [5504, 5505, 4849, 2]
// Exports: shouldAgeVerifyForDMDefaultOff

// Module 15972 (DefaultDMSettingsExperiment)
import AgeVerificationUtils from "AgeVerificationUtils" /* 4849 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5504 */;
import AgeGatedFeature from "AgeGatedFeature" /* 5505 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx");

export const shouldAgeVerifyForDMDefaultOff = function shouldAgeVerifyForDMDefaultOff() {
  const isFeatureAgeGatedResult = RegionalFeatureConfigUtils.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.DM_PRIVACY_SETTINGS);
  return AgeVerificationUtils.shouldShowTiggerPawtect() && isFeatureAgeGatedResult;
};
