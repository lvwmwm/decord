// Module ID: 17325
// Function ID: 17326
// Name: DefaultDMSettingsExperiment
// Dependencies: [5645, 6660, 6655, 2]
// Exports: shouldAgeVerifyForDMDefaultOff

// Module 17325 (DefaultDMSettingsExperiment)
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5645 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6655 */;
import AgeGatedFeature from "AgeGatedFeature" /* 6660 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx");

export const shouldAgeVerifyForDMDefaultOff = function shouldAgeVerifyForDMDefaultOff() {
  const obj = RegionalFeatureConfigUtils;
  const isFeatureAgeGatedResult = obj.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.DM_PRIVACY_SETTINGS);
  const obj2 = AgeVerificationUtils;
  const tmp2 = obj2.shouldShowTiggerPawtect() && isFeatureAgeGatedResult;
  return tmp2;
};
