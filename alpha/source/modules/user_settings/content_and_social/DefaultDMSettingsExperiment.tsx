// Module ID: 18455
// Function ID: 18456
// Name: DefaultDMSettingsExperiment
// Dependencies: [5932, 6772, 6767, 2]
// Exports: shouldAgeVerifyForDMDefaultOff

// Module 18455 (DefaultDMSettingsExperiment)
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5932 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6767 */;
import AgeGatedFeature from "AgeGatedFeature" /* 6772 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx");

export function shouldAgeVerifyForDMDefaultOff() {
  const obj = RegionalFeatureConfigUtils;
  const isFeatureAgeGatedResult = obj.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.DM_PRIVACY_SETTINGS);
  const obj2 = AgeVerificationUtils;
  const tmp2 = obj2.needsAgeVerification() && isFeatureAgeGatedResult;
  return tmp2;
}
