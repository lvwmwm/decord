// Module ID: 15258
// Function ID: 15259
// Name: shouldAgeVerifyForDMDefaultOff
// Dependencies: [4140, 5319, 4686, 2]
// Exports: shouldAgeVerifyForDMDefaultOff

// Module 15258 (shouldAgeVerifyForDMDefaultOff)
import set from "set" /* 2 */;
import isFeatureAgeGated from "isFeatureAgeGated" /* 4140 */;
import useAgeVerificationRunner from "useAgeVerificationRunner" /* 4686 */;
import AgeGatedFeature from "AgeGatedFeature" /* 5319 */;

const result = set.fileFinishedImporting("modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx");

export const shouldAgeVerifyForDMDefaultOff = function shouldAgeVerifyForDMDefaultOff() {
  const obj = isFeatureAgeGated;
  const isFeatureAgeGatedResult = isFeatureAgeGated.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.DM_PRIVACY_SETTINGS);
  const obj2 = useAgeVerificationRunner;
  return useAgeVerificationRunner.shouldShowTiggerPawtect() && isFeatureAgeGatedResult;
};
