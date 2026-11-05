// Module ID: 18203
// Function ID: 18204
// Name: DefaultDMSettingsExperiment
// Dependencies: [5829, 6869, 6864, 2]
// Exports: shouldAgeVerifyForDMDefaultOff

// Module 18203 (DefaultDMSettingsExperiment)
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5829 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6864 */;
import AgeGatedFeature from "AgeGatedFeature" /* 6869 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx");

export function shouldAgeVerifyForDMDefaultOff() {
  const obj = RegionalFeatureConfigUtils;
  const isFeatureAgeGatedResult = obj.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.DM_PRIVACY_SETTINGS);
  const obj2 = AgeVerificationUtils;
  const tmp2 = obj2.needsAgeVerification() && isFeatureAgeGatedResult;
  return tmp2;
}
