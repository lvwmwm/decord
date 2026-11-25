// Module ID: 17385
// Function ID: 17386
// Name: DefaultDMSettingsExperiment
// Dependencies: [5575, 6416, 6411, 2]
// Exports: shouldAgeVerifyForDMDefaultOff

// Module 17385 (DefaultDMSettingsExperiment)
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5575 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6411 */;
import AgeGatedFeature from "AgeGatedFeature" /* 6416 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx");

export function shouldAgeVerifyForDMDefaultOff() {
  const obj = RegionalFeatureConfigUtils;
  const isFeatureAgeGatedResult = obj.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.DM_PRIVACY_SETTINGS);
  const obj2 = AgeVerificationUtils;
  const tmp2 = obj2.needsAgeVerification() && isFeatureAgeGatedResult;
  return tmp2;
}
