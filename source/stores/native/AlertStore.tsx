// Module ID: 9527
// Function ID: 74165
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 566, 686, 2]

// Module 9527 (_isNativeReflectConstruct)
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
let c6 = -1;
let c7 = null;
let tmp2 = ((Store) => {
  class AlertStore {
    constructor() {
      self = this;
      tmp = AlertStore(this, AlertStore);
      obj = outer1_3(AlertStore);
      tmp2 = outer1_2;
      if (outer1_8()) {
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
  callback2(AlertStore, Store);
  let obj = {
    key: "getAlert",
    value() {
      return outer1_5;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "getAlertKey",
    value() {
      return "alert-store-" + outer1_6;
    }
  };
  items[1] = obj;
  obj = {
    key: "isAlertDismissable",
    value() {
      return outer1_7;
    }
  };
  items[2] = obj;
  return callback(AlertStore, items);
})(require("initialize").Store);
tmp2.displayName = "AlertStore";
tmp2 = new tmp2(require("dispatcher"), {
  ALERT_OPEN: function handleOpen(arg0) {
    let c5;
    let c7;
    closure_6 = closure_6 + 1;
    ({ alert: c5, isDismissable: c7 } = arg0);
  },
  ALERT_CLOSE: function handleClose() {
    let c5 = null;
    let c7 = null;
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/native/AlertStore.tsx");

export default tmp2;
