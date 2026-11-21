// Module ID: 19599
// Function ID: 19600
// Name: isFullScreenVerificationModalRequired
// Dependencies: [502, 7359, 19600, 2]
// Exports: default

// Module 19599 (isFullScreenVerificationModalRequired)
import VerificationUtilsDefault from "VerificationUtils" /* 7359 */;
import SafetyFlowsLegacyRequiredActionsExperiment from "SafetyFlowsLegacyRequiredActionsExperiment" /* 19600 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/verification/native/isFullScreenVerificationModalRequired.tsx");

export default function isFullScreenVerificationModalRequired(requiredAction, location) {
  const obj = VerificationUtilsDefault;
  let result = obj.isFullScreenVerification(requiredAction) && null != AuthenticationStore.getToken();
  if (result) {
    const obj3 = { location, requiredAction };
    const obj2 = SafetyFlowsLegacyRequiredActionsExperiment;
    result = !obj2.shouldUseSafetyFlowsForRequiredAction(obj3);
  }
  return result;
};
