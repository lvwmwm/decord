// Module ID: 18325
// Function ID: 18326
// Name: SafetyFlowsManager
// Dependencies: [18326, 7395, 2]

// Module 18325 (SafetyFlowsManager)
import openSafetyFlow from "openSafetyFlow" /* 18326 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7395 */;

require = fn;
function handleConnectionOpenSupplemental() {
  openSafetyFlow.openSafetyFlow();
}
function handleSafetyFlowsModalOpen() {
  openSafetyFlow.openSafetyFlow();
}
function handleUserRequiredActionUpdate(requiredAction) {
  openSafetyFlow.openSafetyFlow({ requiredAction: requiredAction.requiredAction });
}
const prototype = function SafetyFlowsManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.actions = { CONNECTION_OPEN_SUPPLEMENTAL: handleConnectionOpenSupplemental, SAFETY_FLOWS_MODAL_OPEN: handleSafetyFlowsModalOpen, USER_REQUIRED_ACTION_UPDATE: handleUserRequiredActionUpdate };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
const prototype1 = new prototype();
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_flows/SafetyFlowsManager.tsx");

export default prototype1;
