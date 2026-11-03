// Module ID: 18066
// Function ID: 18067
// Name: DefaultDMSettingsExperiment
// Dependencies: [5813, 6851, 6846, 2]
// Exports: shouldAgeVerifyForDMDefaultOff

// Module 18066 (DefaultDMSettingsExperiment)
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5813 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6846 */;
import AgeGatedFeature from "AgeGatedFeature" /* 6851 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx");

export function shouldAgeVerifyForDMDefaultOff() {
  const obj = RegionalFeatureConfigUtils;
  const isFeatureAgeGatedResult = obj.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.DM_PRIVACY_SETTINGS);
  const obj2 = AgeVerificationUtils;
  const tmp2 = obj2.shouldShowTiggerPawtect() && isFeatureAgeGatedResult;
  return tmp2;
}
