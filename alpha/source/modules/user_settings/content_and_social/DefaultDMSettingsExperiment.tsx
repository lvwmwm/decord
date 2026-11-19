// Module ID: 17424
// Function ID: 17425
// Name: DefaultDMSettingsExperiment
// Dependencies: [5454, 6295, 6290, 2]
// Exports: shouldAgeVerifyForDMDefaultOff

// Module 17424 (DefaultDMSettingsExperiment)
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5454 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6290 */;
import AgeGatedFeature from "AgeGatedFeature" /* 6295 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx");

export function shouldAgeVerifyForDMDefaultOff() {
  const obj = RegionalFeatureConfigUtils;
  const isFeatureAgeGatedResult = obj.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.DM_PRIVACY_SETTINGS);
  const obj2 = AgeVerificationUtils;
  const tmp2 = obj2.needsAgeVerification() && isFeatureAgeGatedResult;
  return tmp2;
}
