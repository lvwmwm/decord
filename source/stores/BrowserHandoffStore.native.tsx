// Module ID: 1195
// Function ID: 13731
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 566, 686, 2]

// Module 1195 (_isNativeReflectConstruct)
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
let tmp2 = ((Store) => {
  class BrowserHandoffStore {
    constructor() {
      self = this;
      tmp = BrowserHandoffStore(this, BrowserHandoffStore);
      obj = outer1_3(BrowserHandoffStore);
      tmp2 = outer1_2;
      if (outer1_5()) {
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
  callback2(BrowserHandoffStore, Store);
  let obj = {
    key: "initialize",
    value() {

    }
  };
  const items = [obj, , , ];
  obj = {
    key: "isHandoffAvailable",
    value() {
      return false;
    }
  };
  items[1] = obj;
  obj = {
    key: "user",
    get() {
      return null;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "key",
    get() {
      return null;
    }
  };
  return callback(BrowserHandoffStore, items);
})(require("initialize").Store);
tmp2.displayName = "BrowserHandoffStore";
tmp2 = new tmp2(require("dispatcher"), {});
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/BrowserHandoffStore.native.tsx");

export default tmp2;
