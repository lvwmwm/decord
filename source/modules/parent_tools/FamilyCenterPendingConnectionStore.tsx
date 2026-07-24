// Module ID: 4348
// Function ID: 38467
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 566, 686, 2]

// Module 4348 (_isNativeReflectConstruct)
import dispatcher from "dispatcher";
import set from "set";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

function _isNativeReflectConstruct() {
  let dispatcher = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return dispatcher;
  }
  const result = _isNativeReflectConstruct();
}
let c5 = null;
let tmp2 = ((PersistedStore) => {
  class FamilyCenterPendingConnectionStore {
    constructor() {
      self = this;
      tmp = FamilyCenterPendingConnectionStore(this, FamilyCenterPendingConnectionStore);
      obj = outer1_3(FamilyCenterPendingConnectionStore);
      tmp2 = outer1_2;
      if (outer1_6()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(FamilyCenterPendingConnectionStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(arg0) {
      let tmp = null;
      if (null != arg0) {
        tmp = arg0;
      }
      const outer1_5 = tmp;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "getState",
    value() {
      return outer1_5;
    }
  };
  items[1] = obj;
  obj = {
    key: "getPendingConnection",
    value() {
      return outer1_5;
    }
  };
  items[2] = obj;
  return callback(FamilyCenterPendingConnectionStore, items);
})(require("initialize").PersistedStore);
tmp2.displayName = "FamilyCenterPendingConnectionStore";
tmp2.persistKey = "FamilyCenterPendingConnectionStore";
tmp2 = new tmp2(require("dispatcher"), {
  FAMILY_CENTER_PENDING_CONNECTION_SET: function handleSet(teenId) {
    let closure_5 = { teenId: teenId.teenId, linkCode: teenId.linkCode };
  },
  FAMILY_CENTER_PENDING_CONNECTION_CLEAR: function handleClear() {
    let c5 = null;
  },
  LOGOUT: function handleLogout() {
    let c5 = null;
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/parent_tools/FamilyCenterPendingConnectionStore.tsx");

export default tmp2;
