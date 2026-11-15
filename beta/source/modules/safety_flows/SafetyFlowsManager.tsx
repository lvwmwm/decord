// Module ID: 20529
// Function ID: 20530
// Name: SafetyFlowsManager
// Dependencies: [20530, 7383, 2]

// Module 20529 (SafetyFlowsManager)
import openSafetyFlow from "openSafetyFlow" /* 20530 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7383 */;
import size from "module_2" /* 2 */;

function handleConnectionOpenSupplemental() {
  const obj = openSafetyFlow;
  obj.openSafetyFlow();
}
function handleSafetyFlowsModalOpen() {
  const obj = openSafetyFlow;
  obj.openSafetyFlow();
}
function handleUserRequiredActionUpdate(requiredAction) {
  requiredAction = requiredAction.requiredAction;
  const obj = openSafetyFlow;
  obj.openSafetyFlow({ requiredAction });
}
class SafetyFlowsManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    const obj = { CONNECTION_OPEN_SUPPLEMENTAL: handleConnectionOpenSupplemental, SAFETY_FLOWS_MODAL_OPEN: handleSafetyFlowsModalOpen, USER_REQUIRED_ACTION_UPDATE: handleUserRequiredActionUpdate };
    applyArgumentsResult.actions = obj;
    return applyArgumentsResult;
  }
}
const safetyFlowsManager = new SafetyFlowsManager();
const result = size.fileFinishedImporting("modules/safety_flows/SafetyFlowsManager.tsx");

export default safetyFlowsManager;
