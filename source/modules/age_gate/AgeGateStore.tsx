// Module ID: 14781
// Function ID: 112709
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1197, 566, 686, 2]

// Module 14781 (_isNativeReflectConstruct)
import initialize from "initialize";
import dispatcher from "dispatcher";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import { AGE_GATE_REGISTER_TIMEOUT_MS } from "result";

function _isNativeReflectConstruct() {
  let initialize = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return initialize;
  }
  const result = _isNativeReflectConstruct();
}
let c5 = false;
let tmp2 = ((Store) => {
  class AgeGateStore {
    constructor() {
      self = this;
      tmp = AgeGateStore(this, AgeGateStore);
      obj = outer1_3(AgeGateStore);
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
  callback2(AgeGateStore, Store);
  const items = [
    {
      key: "isUnderageAnonymous",
      value() {
        return outer1_5;
      }
    }
  ];
  return callback(AgeGateStore, items);
})(require("initialize").Store);
tmp2.displayName = "AgeGateStore";
tmp2 = new tmp2(require("dispatcher"), {
  AGE_GATE_PREVENT_UNDERAGE_REGISTRATION: function handleMarkUnderageAnonymous() {
    let c5 = true;
    const timestamp = Date.now();
  },
  LOGIN_SUCCESS: function handleLogin() {
    let c5 = false;
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/age_gate/AgeGateStore.tsx");

export default tmp2;
