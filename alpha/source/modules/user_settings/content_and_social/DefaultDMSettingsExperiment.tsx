// Module ID: 17415
// Function ID: 17416
// Name: DefaultDMSettingsExperiment
// Dependencies: [5579, 6704, 6699, 2]
// Exports: shouldAgeVerifyForDMDefaultOff

// Module 17415 (DefaultDMSettingsExperiment)
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5579 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6699 */;
import AgeGatedFeature from "AgeGatedFeature" /* 6704 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx");

export function shouldAgeVerifyForDMDefaultOff() {
  const obj = RegionalFeatureConfigUtils;
  const isFeatureAgeGatedResult = obj.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.DM_PRIVACY_SETTINGS);
  const obj2 = AgeVerificationUtils;
  const tmp2 = obj2.needsAgeVerification() && isFeatureAgeGatedResult;
  return tmp2;
}
