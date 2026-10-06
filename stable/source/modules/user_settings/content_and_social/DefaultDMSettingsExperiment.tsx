// Module ID: 15486
// Function ID: 15487
// Name: DefaultDMSettingsExperiment
// Dependencies: [5736, 5737, 5049, 2]
// Exports: shouldAgeVerifyForDMDefaultOff

// Module 15486 (DefaultDMSettingsExperiment)
import AgeVerificationUtils from "AgeVerificationUtils" /* 5049 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5736 */;
import AgeGatedFeature from "AgeGatedFeature" /* 5737 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx");

export const shouldAgeVerifyForDMDefaultOff = function shouldAgeVerifyForDMDefaultOff() {
  const obj = RegionalFeatureConfigUtils;
  const isFeatureAgeGatedResult = obj.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.DM_PRIVACY_SETTINGS);
  const obj2 = AgeVerificationUtils;
  const tmp2 = obj2.shouldShowTiggerPawtect() && isFeatureAgeGatedResult;
  return tmp2;
};
