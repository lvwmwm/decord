// Module ID: 16171
// Function ID: 125431
// Name: _isNativeReflectConstruct
// Dependencies: [7, 6, 15, 17, 18, 4810, 5078, 686, 2]

// Module 16171 (_isNativeReflectConstruct)
import dispatcher from "dispatcher";
import AutomaticLifecycleManager from "AutomaticLifecycleManager";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import tmp2 from "AutomaticLifecycleManager";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handleChange() {
  let obj = importDefault(686);
  obj = { type: "SELF_PRESENCE_STORE_UPDATE", status: store.getStatus(), activities: store.getActivities(true), hiddenActivities: store.getHiddenActivities() };
  obj.dispatch(obj);
}
tmp2 = new tmp2();
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/SelfPresenceStoreManager.tsx");

export default tmp2;
