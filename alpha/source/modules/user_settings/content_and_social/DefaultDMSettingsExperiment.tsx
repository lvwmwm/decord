// Module ID: 17867
// Function ID: 17868
// Name: DefaultDMSettingsExperiment
// Dependencies: [5688, 6725, 6720, 2]
// Exports: shouldAgeVerifyForDMDefaultOff

// Module 17867 (DefaultDMSettingsExperiment)
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5688 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6720 */;
import AgeGatedFeature from "AgeGatedFeature" /* 6725 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx");

export function shouldAgeVerifyForDMDefaultOff() {
  const obj = RegionalFeatureConfigUtils;
  const isFeatureAgeGatedResult = obj.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.DM_PRIVACY_SETTINGS);
  const obj2 = AgeVerificationUtils;
  const tmp2 = obj2.shouldShowTiggerPawtect() && isFeatureAgeGatedResult;
  return tmp2;
}
