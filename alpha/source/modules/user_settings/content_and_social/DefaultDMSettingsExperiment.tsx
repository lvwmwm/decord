// Module ID: 18575
// Function ID: 18576
// Name: DefaultDMSettingsExperiment
// Dependencies: [5995, 6835, 6830, 2]
// Exports: shouldAgeVerifyForDMDefaultOff

// Module 18575 (DefaultDMSettingsExperiment)
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5995 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6830 */;
import AgeGatedFeature from "AgeGatedFeature" /* 6835 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx");

export function shouldAgeVerifyForDMDefaultOff() {
  const obj = RegionalFeatureConfigUtils;
  const isFeatureAgeGatedResult = obj.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.DM_PRIVACY_SETTINGS);
  const obj2 = AgeVerificationUtils;
  const tmp2 = obj2.needsAgeVerification() && isFeatureAgeGatedResult;
  return tmp2;
}
