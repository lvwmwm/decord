// Module ID: 16625
// Function ID: 129635
// Name: _isNativeReflectConstruct
// Dependencies: [7, 6, 15, 17, 18, 12122, 5078, 2]

// Module 16625 (_isNativeReflectConstruct)
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
function handleUserApplicationIdentityGatewayEvent(user_id) {
  const useUserApplicationIdentities = require(12122) /* fetchStore */.useUserApplicationIdentities;
  useUserApplicationIdentities.refetch(user_id.user_id);
}
tmp2 = new tmp2();
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/user_application_identity/UserApplicationIdentityManager.tsx");

export default tmp2;
