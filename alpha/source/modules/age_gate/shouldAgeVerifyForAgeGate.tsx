// Module ID: 6289
// Function ID: 6290
// Name: shouldAgeVerifyForAgeGate
// Dependencies: [6290, 5454, 6295, 2]
// Exports: shouldAgeVerifyForAgeGate, useShouldAgeVerifyForAgeGate

// Module 6289 (shouldAgeVerifyForAgeGate)
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5454 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6290 */;
import AgeGatedFeature from "AgeGatedFeature" /* 6295 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_gate/shouldAgeVerifyForAgeGate.tsx");

export function shouldAgeVerifyForAgeGate() {
  const obj = AgeVerificationUtils;
  const needsAgeVerificationResult = obj.needsAgeVerification();
  const obj2 = RegionalFeatureConfigUtils;
  const tmp2 = obj2.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES) && needsAgeVerificationResult;
  return tmp2;
}
export function useShouldAgeVerifyForAgeGate() {
  const obj = RegionalFeatureConfigUtils;
  let isFeatureAgeGated = obj.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES);
  const obj2 = AgeVerificationUtils;
  if (isFeatureAgeGated) {
    isFeatureAgeGated = obj2.useNeedsAgeVerification();
  }
  return isFeatureAgeGated;
}
