// Module ID: 16695
// Function ID: 16696
// Name: handleConnectionOpenSupplemental
// Dependencies: [16696, 5134, 2]

// Module 16695 (handleConnectionOpenSupplemental)
import "initialize";

const require = arg1;
function handleConnectionOpenSupplemental() {
  require(16696) /* _openSafetyFlow */.openSafetyFlow();
}
function handleSafetyFlowsModalOpen() {
  require(16696) /* _openSafetyFlow */.openSafetyFlow();
}
function handleUserRequiredActionUpdate(requiredAction) {
  require(16696) /* _openSafetyFlow */.openSafetyFlow({ requiredAction: requiredAction.requiredAction });
}
let prototype = function SafetyFlowsManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.actions = { CONNECTION_OPEN_SUPPLEMENTAL: handleConnectionOpenSupplemental, SAFETY_FLOWS_MODAL_OPEN: handleSafetyFlowsModalOpen, USER_REQUIRED_ACTION_UPDATE: handleUserRequiredActionUpdate };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
prototype = new prototype();
const result = require("set").fileFinishedImporting("modules/safety_flows/SafetyFlowsManager.tsx");

export default prototype;
