// Module ID: 16984
// Function ID: 16985
// Name: DefaultDMSettingsExperiment
// Dependencies: [6177, 6176, 6165, 2]
// Exports: shouldAgeVerifyForDMDefaultOff

// Module 16984 (DefaultDMSettingsExperiment)
import AgeVerificationUtils from "AgeVerificationUtils" /* 6165 */;
import AgeGatedFeature from "AgeGatedFeature" /* 6176 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 6177 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx");

export const shouldAgeVerifyForDMDefaultOff = function shouldAgeVerifyForDMDefaultOff() {
  const obj = RegionalFeatureConfigUtils;
  const isFeatureAgeGatedResult = obj.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.DM_PRIVACY_SETTINGS);
  const obj2 = AgeVerificationUtils;
  const tmp2 = obj2.shouldShowTiggerPawtect() && isFeatureAgeGatedResult;
  return tmp2;
};
