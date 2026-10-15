// Module ID: 16877
// Function ID: 16878
// Name: DefaultDMSettingsExperiment
// Dependencies: [6137, 6136, 6125, 2]
// Exports: shouldAgeVerifyForDMDefaultOff

// Module 16877 (DefaultDMSettingsExperiment)
import AgeVerificationUtils from "AgeVerificationUtils" /* 6125 */;
import AgeGatedFeature from "AgeGatedFeature" /* 6136 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 6137 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx");

export const shouldAgeVerifyForDMDefaultOff = function shouldAgeVerifyForDMDefaultOff() {
  const obj = RegionalFeatureConfigUtils;
  const isFeatureAgeGatedResult = obj.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.DM_PRIVACY_SETTINGS);
  const obj2 = AgeVerificationUtils;
  const tmp2 = obj2.shouldShowTiggerPawtect() && isFeatureAgeGatedResult;
  return tmp2;
};
