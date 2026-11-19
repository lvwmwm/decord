// Module ID: 20190
// Function ID: 20191
// Name: SafetyFlowsManager
// Dependencies: [20191, 7365, 2]

// Module 20190 (SafetyFlowsManager)
import openSafetyFlow from "openSafetyFlow" /* 20191 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7365 */;
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
