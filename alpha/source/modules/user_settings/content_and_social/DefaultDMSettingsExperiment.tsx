// Module ID: 17558
// Function ID: 17559
// Name: DefaultDMSettingsExperiment
// Dependencies: [5680, 6694, 6689, 2]
// Exports: shouldAgeVerifyForDMDefaultOff

// Module 17558 (DefaultDMSettingsExperiment)
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5680 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6689 */;
import AgeGatedFeature from "AgeGatedFeature" /* 6694 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx");

export const shouldAgeVerifyForDMDefaultOff = function shouldAgeVerifyForDMDefaultOff() {
  const obj = RegionalFeatureConfigUtils;
  const isFeatureAgeGatedResult = obj.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.DM_PRIVACY_SETTINGS);
  const obj2 = AgeVerificationUtils;
  const tmp2 = obj2.shouldShowTiggerPawtect() && isFeatureAgeGatedResult;
  return tmp2;
};
