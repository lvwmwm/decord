// Module ID: 17247
// Function ID: 17248
// Name: DefaultDMSettingsExperiment
// Dependencies: [5642, 6657, 6652, 2]
// Exports: shouldAgeVerifyForDMDefaultOff

// Module 17247 (DefaultDMSettingsExperiment)
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5642 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6652 */;
import AgeGatedFeature from "AgeGatedFeature" /* 6657 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx");

export const shouldAgeVerifyForDMDefaultOff = function shouldAgeVerifyForDMDefaultOff() {
  const obj = RegionalFeatureConfigUtils;
  const isFeatureAgeGatedResult = obj.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.DM_PRIVACY_SETTINGS);
  const obj2 = AgeVerificationUtils;
  const tmp2 = obj2.shouldShowTiggerPawtect() && isFeatureAgeGatedResult;
  return tmp2;
};
