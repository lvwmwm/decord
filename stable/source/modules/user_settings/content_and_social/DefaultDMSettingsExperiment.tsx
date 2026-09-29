// Module ID: 16209
// Function ID: 16210
// Name: DefaultDMSettingsExperiment
// Dependencies: [5672, 5673, 5000, 2]
// Exports: shouldAgeVerifyForDMDefaultOff

// Module 16209 (DefaultDMSettingsExperiment)
import AgeVerificationUtils from "AgeVerificationUtils" /* 5000 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5672 */;
import AgeGatedFeature from "AgeGatedFeature" /* 5673 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx");

export const shouldAgeVerifyForDMDefaultOff = function shouldAgeVerifyForDMDefaultOff() {
  const isFeatureAgeGatedResult = RegionalFeatureConfigUtils.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.DM_PRIVACY_SETTINGS);
  return AgeVerificationUtils.shouldShowTiggerPawtect() && isFeatureAgeGatedResult;
};
