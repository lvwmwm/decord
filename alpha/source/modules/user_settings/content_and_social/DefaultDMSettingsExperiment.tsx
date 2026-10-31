// Module ID: 17910
// Function ID: 17911
// Name: DefaultDMSettingsExperiment
// Dependencies: [5693, 6731, 6726, 2]
// Exports: shouldAgeVerifyForDMDefaultOff

// Module 17910 (DefaultDMSettingsExperiment)
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5693 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6726 */;
import AgeGatedFeature from "AgeGatedFeature" /* 6731 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx");

export function shouldAgeVerifyForDMDefaultOff() {
  const obj = RegionalFeatureConfigUtils;
  const isFeatureAgeGatedResult = obj.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.DM_PRIVACY_SETTINGS);
  const obj2 = AgeVerificationUtils;
  const tmp2 = obj2.shouldShowTiggerPawtect() && isFeatureAgeGatedResult;
  return tmp2;
}
