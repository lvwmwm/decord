// Module ID: 6766
// Function ID: 6767
// Name: shouldAgeVerifyForAgeGate
// Dependencies: [6767, 5932, 6772, 2]
// Exports: shouldAgeVerifyForAgeGate, useShouldAgeVerifyForAgeGate

// Module 6766 (shouldAgeVerifyForAgeGate)
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5932 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6767 */;
import AgeGatedFeature from "AgeGatedFeature" /* 6772 */;
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
