// Module ID: 6819
// Function ID: 6820
// Name: shouldAgeVerifyForAgeGate
// Dependencies: [6820, 5985, 6825, 2]
// Exports: shouldAgeVerifyForAgeGate, useShouldAgeVerifyForAgeGate

// Module 6819 (shouldAgeVerifyForAgeGate)
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5985 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6820 */;
import AgeGatedFeature from "AgeGatedFeature" /* 6825 */;
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
