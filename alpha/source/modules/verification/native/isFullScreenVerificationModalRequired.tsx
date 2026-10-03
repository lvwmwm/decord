// Module ID: 17558
// Function ID: 17559
// Name: isFullScreenVerificationModalRequired
// Dependencies: [502, 6081, 17559, 2]
// Exports: default

// Module 17558 (isFullScreenVerificationModalRequired)
import VerificationUtilsDefault from "VerificationUtils" /* 6081 */;
import SafetyFlowsLegacyRequiredActionsExperiment from "SafetyFlowsLegacyRequiredActionsExperiment" /* 17559 */;
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
