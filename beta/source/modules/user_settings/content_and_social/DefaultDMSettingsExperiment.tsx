// Module ID: 18255
// Function ID: 18256
// Name: DefaultDMSettingsExperiment
// Dependencies: [5817, 6786, 6781, 2]
// Exports: shouldAgeVerifyForDMDefaultOff

// Module 18255 (DefaultDMSettingsExperiment)
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5817 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6781 */;
import AgeGatedFeature from "AgeGatedFeature" /* 6786 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx");

export function shouldAgeVerifyForDMDefaultOff() {
  const obj = RegionalFeatureConfigUtils;
  const isFeatureAgeGatedResult = obj.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.DM_PRIVACY_SETTINGS);
  const obj2 = AgeVerificationUtils;
  const tmp2 = obj2.needsAgeVerification() && isFeatureAgeGatedResult;
  return tmp2;
}
