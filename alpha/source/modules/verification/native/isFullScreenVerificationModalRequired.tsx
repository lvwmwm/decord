// Module ID: 17910
// Function ID: 17911
// Name: isFullScreenVerificationModalRequired
// Dependencies: [502, 6274, 17911, 2]
// Exports: default

// Module 17910 (isFullScreenVerificationModalRequired)
import VerificationUtilsDefault from "VerificationUtils" /* 6274 */;
import SafetyFlowsLegacyRequiredActionsExperiment from "SafetyFlowsLegacyRequiredActionsExperiment" /* 17911 */;
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
