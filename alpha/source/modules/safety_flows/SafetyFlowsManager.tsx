// Module ID: 19017
// Function ID: 19018
// Name: SafetyFlowsManager
// Dependencies: [19018, 7032, 2]

// Module 19017 (SafetyFlowsManager)
import openSafetyFlow from "openSafetyFlow" /* 19018 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7032 */;
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
