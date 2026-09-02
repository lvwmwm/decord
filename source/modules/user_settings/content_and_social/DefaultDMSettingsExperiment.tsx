// Module ID: 15707
// Function ID: 15708
// Name: shouldAgeVerifyForDMDefaultOff
// Dependencies: [4172, 5375, 4733, 2]
// Exports: shouldAgeVerifyForDMDefaultOff

// Module 15707 (shouldAgeVerifyForDMDefaultOff)
import set from "set" /* 2 */;
import isFeatureAgeGated from "isFeatureAgeGated" /* 4172 */;
import useAgeVerificationRunner from "useAgeVerificationRunner" /* 4733 */;
import AgeGatedFeature from "AgeGatedFeature" /* 5375 */;

const result = set.fileFinishedImporting("modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx");

export const shouldAgeVerifyForDMDefaultOff = function shouldAgeVerifyForDMDefaultOff() {
  const obj = isFeatureAgeGated;
  const isFeatureAgeGatedResult = isFeatureAgeGated.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.DM_PRIVACY_SETTINGS);
  const obj2 = useAgeVerificationRunner;
  return useAgeVerificationRunner.shouldShowTiggerPawtect() && isFeatureAgeGatedResult;
};
