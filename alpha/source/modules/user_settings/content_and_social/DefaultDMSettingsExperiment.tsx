// Module ID: 17796
// Function ID: 17797
// Name: DefaultDMSettingsExperiment
// Dependencies: [5682, 6718, 6713, 2]
// Exports: shouldAgeVerifyForDMDefaultOff

// Module 17796 (DefaultDMSettingsExperiment)
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5682 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6713 */;
import AgeGatedFeature from "AgeGatedFeature" /* 6718 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx");

export function shouldAgeVerifyForDMDefaultOff() {
  const obj = RegionalFeatureConfigUtils;
  const isFeatureAgeGatedResult = obj.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.DM_PRIVACY_SETTINGS);
  const obj2 = AgeVerificationUtils;
  const tmp2 = obj2.shouldShowTiggerPawtect() && isFeatureAgeGatedResult;
  return tmp2;
}
