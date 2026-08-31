// Module ID: 15443
// Function ID: 15444
// Name: shouldAgeVerifyForDMDefaultOff
// Dependencies: [4142, 5335, 4701, 2]
// Exports: shouldAgeVerifyForDMDefaultOff

// Module 15443 (shouldAgeVerifyForDMDefaultOff)
import set from "set" /* 2 */;
import isFeatureAgeGated from "isFeatureAgeGated" /* 4142 */;
import useAgeVerificationRunner from "useAgeVerificationRunner" /* 4701 */;
import AgeGatedFeature from "AgeGatedFeature" /* 5335 */;

const result = set.fileFinishedImporting("modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx");

export const shouldAgeVerifyForDMDefaultOff = function shouldAgeVerifyForDMDefaultOff() {
  const obj = isFeatureAgeGated;
  const isFeatureAgeGatedResult = isFeatureAgeGated.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.DM_PRIVACY_SETTINGS);
  const obj2 = useAgeVerificationRunner;
  return useAgeVerificationRunner.shouldShowTiggerPawtect() && isFeatureAgeGatedResult;
};
