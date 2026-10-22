// Module ID: 17203
// Function ID: 17204
// Name: DefaultDMSettingsExperiment
// Dependencies: [5630, 6644, 6639, 2]
// Exports: shouldAgeVerifyForDMDefaultOff

// Module 17203 (DefaultDMSettingsExperiment)
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5630 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6639 */;
import AgeGatedFeature from "AgeGatedFeature" /* 6644 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx");

export const shouldAgeVerifyForDMDefaultOff = function shouldAgeVerifyForDMDefaultOff() {
  const obj = RegionalFeatureConfigUtils;
  const isFeatureAgeGatedResult = obj.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.DM_PRIVACY_SETTINGS);
  const obj2 = AgeVerificationUtils;
  const tmp2 = obj2.shouldShowTiggerPawtect() && isFeatureAgeGatedResult;
  return tmp2;
};
