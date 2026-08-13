// Module ID: 17020
// Function ID: 17021
// Name: handleConnectionOpenSupplemental
// Dependencies: [17021, 5301, 2]

// Module 17020 (handleConnectionOpenSupplemental)
import "initialize";

const require = arg1;
function handleConnectionOpenSupplemental() {
  require(17021) /* _openSafetyFlow */.openSafetyFlow();
}
function handleSafetyFlowsModalOpen() {
  require(17021) /* _openSafetyFlow */.openSafetyFlow();
}
function handleUserRequiredActionUpdate(requiredAction) {
  require(17021) /* _openSafetyFlow */.openSafetyFlow({ requiredAction: requiredAction.requiredAction });
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
