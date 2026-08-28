// Module ID: 15410
// Function ID: 15411
// Name: shouldAgeVerifyForDMDefaultOff
// Dependencies: [4141, 5332, 4699, 2]
// Exports: shouldAgeVerifyForDMDefaultOff

// Module 15410 (shouldAgeVerifyForDMDefaultOff)
import set from "set" /* 2 */;
import isFeatureAgeGated from "isFeatureAgeGated" /* 4141 */;
import useAgeVerificationRunner from "useAgeVerificationRunner" /* 4699 */;
import AgeGatedFeature from "AgeGatedFeature" /* 5332 */;

const result = set.fileFinishedImporting("modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx");

export const shouldAgeVerifyForDMDefaultOff = function shouldAgeVerifyForDMDefaultOff() {
  const obj = isFeatureAgeGated;
  const isFeatureAgeGatedResult = isFeatureAgeGated.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.DM_PRIVACY_SETTINGS);
  const obj2 = useAgeVerificationRunner;
  return useAgeVerificationRunner.shouldShowTiggerPawtect() && isFeatureAgeGatedResult;
};
