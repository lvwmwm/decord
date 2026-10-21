// Module ID: 17112
// Function ID: 17113
// Name: DefaultDMSettingsExperiment
// Dependencies: [5626, 6638, 6633, 2]
// Exports: shouldAgeVerifyForDMDefaultOff

// Module 17112 (DefaultDMSettingsExperiment)
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5626 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6633 */;
import AgeGatedFeature from "AgeGatedFeature" /* 6638 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx");

export const shouldAgeVerifyForDMDefaultOff = function shouldAgeVerifyForDMDefaultOff() {
  const obj = RegionalFeatureConfigUtils;
  const isFeatureAgeGatedResult = obj.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.DM_PRIVACY_SETTINGS);
  const obj2 = AgeVerificationUtils;
  const tmp2 = obj2.shouldShowTiggerPawtect() && isFeatureAgeGatedResult;
  return tmp2;
};
