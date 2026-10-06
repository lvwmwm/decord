// Module ID: 17692
// Function ID: 17693
// Name: SafetyFlowsManager
// Dependencies: [17693, 6540, 2]

// Module 17692 (SafetyFlowsManager)
import openSafetyFlow from "openSafetyFlow" /* 17693 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6540 */;
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
