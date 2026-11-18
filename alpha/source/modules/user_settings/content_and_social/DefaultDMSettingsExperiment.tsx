// Module ID: 17431
// Function ID: 17432
// Name: DefaultDMSettingsExperiment
// Dependencies: [5485, 6324, 6319, 2]
// Exports: shouldAgeVerifyForDMDefaultOff

// Module 17431 (DefaultDMSettingsExperiment)
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5485 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6319 */;
import AgeGatedFeature from "AgeGatedFeature" /* 6324 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx");

export function shouldAgeVerifyForDMDefaultOff() {
  const obj = RegionalFeatureConfigUtils;
  const isFeatureAgeGatedResult = obj.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.DM_PRIVACY_SETTINGS);
  const obj2 = AgeVerificationUtils;
  const tmp2 = obj2.needsAgeVerification() && isFeatureAgeGatedResult;
  return tmp2;
}
