// Module ID: 18618
// Function ID: 18619
// Name: DefaultDMSettingsExperiment
// Dependencies: [5989, 6820, 6815, 2]
// Exports: shouldAgeVerifyForDMDefaultOff

// Module 18618 (DefaultDMSettingsExperiment)
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5989 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6815 */;
import AgeGatedFeature from "AgeGatedFeature" /* 6820 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx");

export function shouldAgeVerifyForDMDefaultOff() {
  const obj = RegionalFeatureConfigUtils;
  const isFeatureAgeGatedResult = obj.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.DM_PRIVACY_SETTINGS);
  const obj2 = AgeVerificationUtils;
  const tmp2 = obj2.needsAgeVerification() && isFeatureAgeGatedResult;
  return tmp2;
}
