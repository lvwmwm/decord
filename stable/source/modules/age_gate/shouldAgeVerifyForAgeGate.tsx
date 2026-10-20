// Module ID: 5908
// Function ID: 5909
// Name: shouldAgeVerifyForAgeGate
// Dependencies: [5909, 5921, 5920, 558, 2]
// Exports: shouldAgeVerifyForAgeGate

// Module 5908 (shouldAgeVerifyForAgeGate)
import AgeVerificationUtils from "AgeVerificationUtils" /* 5909 */;
import AgeGatedFeature from "AgeGatedFeature" /* 5920 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5921 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useShouldAgeVerifyForAgeGate() {
  const obj = RegionalFeatureConfigUtils;
  let isFeatureAgeGated = obj.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES);
  const obj2 = AgeVerificationUtils;
  if (isFeatureAgeGated) {
    isFeatureAgeGated = obj2.useShouldShowTiggerPawtect();
  }
  return isFeatureAgeGated;
}) : (function useShouldAgeVerifyForAgeGate() {
  const obj = RegionalFeatureConfigUtils;
  let isFeatureAgeGated = obj.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES);
  const obj2 = AgeVerificationUtils;
  if (isFeatureAgeGated) {
    isFeatureAgeGated = obj2.useShouldShowTiggerPawtect();
  }
  return isFeatureAgeGated;
});
let result = size.fileFinishedImporting("modules/age_gate/shouldAgeVerifyForAgeGate.tsx");

export const shouldAgeVerifyForAgeGate = function shouldAgeVerifyForAgeGate() {
  const obj = AgeVerificationUtils;
  const result = obj.shouldShowTiggerPawtect();
  const obj2 = RegionalFeatureConfigUtils;
  const tmp2 = obj2.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES) && result;
  return tmp2;
};
export const useShouldAgeVerifyForAgeGate = tmp2;
