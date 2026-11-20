// Module ID: 17251
// Function ID: 17252
// Name: DefaultDMSettingsExperiment
// Dependencies: [5456, 6297, 6292, 2]
// Exports: shouldAgeVerifyForDMDefaultOff

// Module 17251 (DefaultDMSettingsExperiment)
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5456 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6292 */;
import AgeGatedFeature from "AgeGatedFeature" /* 6297 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx");

export function shouldAgeVerifyForDMDefaultOff() {
  const obj = RegionalFeatureConfigUtils;
  const isFeatureAgeGatedResult = obj.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.DM_PRIVACY_SETTINGS);
  const obj2 = AgeVerificationUtils;
  const tmp2 = obj2.needsAgeVerification() && isFeatureAgeGatedResult;
  return tmp2;
}
