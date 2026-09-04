// Module ID: 15803
// Function ID: 15804
// Name: shouldAgeVerifyForDMDefaultOff
// Dependencies: [4172, 5384, 4741, 2]
// Exports: shouldAgeVerifyForDMDefaultOff

// Module 15803 (shouldAgeVerifyForDMDefaultOff)
import set from "set" /* 2 */;
import isFeatureAgeGated from "isFeatureAgeGated" /* 4172 */;
import useAgeVerificationRunner from "useAgeVerificationRunner" /* 4741 */;
import AgeGatedFeature from "AgeGatedFeature" /* 5384 */;

const result = set.fileFinishedImporting("modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx");

export const shouldAgeVerifyForDMDefaultOff = function shouldAgeVerifyForDMDefaultOff() {
  const obj = isFeatureAgeGated;
  const isFeatureAgeGatedResult = isFeatureAgeGated.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.DM_PRIVACY_SETTINGS);
  const obj2 = useAgeVerificationRunner;
  return useAgeVerificationRunner.shouldShowTiggerPawtect() && isFeatureAgeGatedResult;
};
