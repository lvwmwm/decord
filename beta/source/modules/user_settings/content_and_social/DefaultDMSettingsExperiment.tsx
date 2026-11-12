// Module ID: 18293
// Function ID: 18294
// Name: DefaultDMSettingsExperiment
// Dependencies: [5849, 6818, 6813, 2]
// Exports: shouldAgeVerifyForDMDefaultOff

// Module 18293 (DefaultDMSettingsExperiment)
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5849 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6813 */;
import AgeGatedFeature from "AgeGatedFeature" /* 6818 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx");

export function shouldAgeVerifyForDMDefaultOff() {
  const obj = RegionalFeatureConfigUtils;
  const isFeatureAgeGatedResult = obj.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.DM_PRIVACY_SETTINGS);
  const obj2 = AgeVerificationUtils;
  const tmp2 = obj2.needsAgeVerification() && isFeatureAgeGatedResult;
  return tmp2;
}
