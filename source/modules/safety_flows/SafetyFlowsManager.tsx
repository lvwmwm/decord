// Module ID: 16613
// Function ID: 129635
// Name: _isNativeReflectConstruct
// Dependencies: [7, 6, 15, 17, 18, 16614, 5078, 2]

// Module 16613 (_isNativeReflectConstruct)
import set from "set";
import AutomaticLifecycleManager from "AutomaticLifecycleManager";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import tmp2 from "AutomaticLifecycleManager";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handleConnectionOpenSupplemental() {
  require(16614) /* _openSafetyFlow */.openSafetyFlow();
}
function handleSafetyFlowsModalOpen() {
  require(16614) /* _openSafetyFlow */.openSafetyFlow();
}
function handleUserRequiredActionUpdate(requiredAction) {
  require(16614) /* _openSafetyFlow */.openSafetyFlow({ requiredAction: requiredAction.requiredAction });
}
tmp2 = new tmp2();
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/safety_flows/SafetyFlowsManager.tsx");

export default tmp2;
