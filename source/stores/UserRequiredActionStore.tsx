// Module ID: 1342
// Function ID: 15810
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 566, 686, 2]

// Module 1342 (_isNativeReflectConstruct)
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
function handleRequiredAction(requiredAction) {
  requiredAction = requiredAction.requiredAction;
}
let c5 = null;
let tmp2 = ((Store) => {
  class UserRequiredActionStore {
    constructor() {
      self = this;
      tmp = UserRequiredActionStore(this, UserRequiredActionStore);
      obj = outer1_3(UserRequiredActionStore);
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
  callback2(UserRequiredActionStore, Store);
  let obj = {
    key: "hasAction",
    value() {
      return null != outer1_5;
    }
  };
  const items = [obj, ];
  obj = {
    key: "getAction",
    value() {
      return outer1_5;
    }
  };
  items[1] = obj;
  return callback(UserRequiredActionStore, items);
})(require("initialize").Store);
tmp2.displayName = "UserRequiredActionStore";
tmp2 = new tmp2(require("dispatcher"), { CONNECTION_OPEN: handleRequiredAction, USER_REQUIRED_ACTION_UPDATE: handleRequiredAction });
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/UserRequiredActionStore.tsx");

export default tmp2;
