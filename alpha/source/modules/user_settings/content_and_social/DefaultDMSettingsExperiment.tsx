// Module ID: 16924
// Function ID: 16925
// Name: DefaultDMSettingsExperiment
// Dependencies: [6140, 6139, 6128, 2]
// Exports: shouldAgeVerifyForDMDefaultOff

// Module 16924 (DefaultDMSettingsExperiment)
import AgeVerificationUtils from "AgeVerificationUtils" /* 6128 */;
import AgeGatedFeature from "AgeGatedFeature" /* 6139 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 6140 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx");

export const shouldAgeVerifyForDMDefaultOff = function shouldAgeVerifyForDMDefaultOff() {
  const obj = RegionalFeatureConfigUtils;
  const isFeatureAgeGatedResult = obj.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.DM_PRIVACY_SETTINGS);
  const obj2 = AgeVerificationUtils;
  const tmp2 = obj2.shouldShowTiggerPawtect() && isFeatureAgeGatedResult;
  return tmp2;
};
