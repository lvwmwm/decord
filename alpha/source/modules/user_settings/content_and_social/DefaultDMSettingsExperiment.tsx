// Module ID: 16910
// Function ID: 16911
// Name: DefaultDMSettingsExperiment
// Dependencies: [6139, 6138, 6127, 2]
// Exports: shouldAgeVerifyForDMDefaultOff

// Module 16910 (DefaultDMSettingsExperiment)
import AgeVerificationUtils from "AgeVerificationUtils" /* 6127 */;
import AgeGatedFeature from "AgeGatedFeature" /* 6138 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 6139 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx");

export const shouldAgeVerifyForDMDefaultOff = function shouldAgeVerifyForDMDefaultOff() {
  const obj = RegionalFeatureConfigUtils;
  const isFeatureAgeGatedResult = obj.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.DM_PRIVACY_SETTINGS);
  const obj2 = AgeVerificationUtils;
  const tmp2 = obj2.shouldShowTiggerPawtect() && isFeatureAgeGatedResult;
  return tmp2;
};
