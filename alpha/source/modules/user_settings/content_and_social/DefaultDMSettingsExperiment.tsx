// Module ID: 18175
// Function ID: 18176
// Name: DefaultDMSettingsExperiment
// Dependencies: [5827, 6866, 6861, 2]
// Exports: shouldAgeVerifyForDMDefaultOff

// Module 18175 (DefaultDMSettingsExperiment)
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5827 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6861 */;
import AgeGatedFeature from "AgeGatedFeature" /* 6866 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx");

export function shouldAgeVerifyForDMDefaultOff() {
  const obj = RegionalFeatureConfigUtils;
  const isFeatureAgeGatedResult = obj.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.DM_PRIVACY_SETTINGS);
  const obj2 = AgeVerificationUtils;
  const tmp2 = obj2.shouldShowTiggerPawtect() && isFeatureAgeGatedResult;
  return tmp2;
}
