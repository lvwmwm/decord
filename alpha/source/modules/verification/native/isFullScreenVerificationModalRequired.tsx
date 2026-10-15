// Module ID: 18475
// Function ID: 18476
// Name: isFullScreenVerificationModalRequired
// Dependencies: [502, 6495, 18476, 2]
// Exports: default

// Module 18475 (isFullScreenVerificationModalRequired)
import VerificationUtilsDefault from "VerificationUtils" /* 6495 */;
import SafetyFlowsLegacyRequiredActionsExperiment from "SafetyFlowsLegacyRequiredActionsExperiment" /* 18476 */;
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
