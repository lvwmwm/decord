// Module ID: 17526
// Function ID: 17527
// Name: DefaultDMSettingsExperiment
// Dependencies: [5674, 6799, 6794, 2]
// Exports: shouldAgeVerifyForDMDefaultOff

// Module 17526 (DefaultDMSettingsExperiment)
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5674 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6794 */;
import AgeGatedFeature from "AgeGatedFeature" /* 6799 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx");

export function shouldAgeVerifyForDMDefaultOff() {
  const obj = RegionalFeatureConfigUtils;
  const isFeatureAgeGatedResult = obj.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.DM_PRIVACY_SETTINGS);
  const obj2 = AgeVerificationUtils;
  const tmp2 = obj2.needsAgeVerification() && isFeatureAgeGatedResult;
  return tmp2;
}
