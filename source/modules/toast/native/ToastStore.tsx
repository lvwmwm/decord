// Module ID: 15636
// Function ID: 120584
// Name: _isNativeReflectConstruct
// Dependencies: [7, 6, 15, 17, 18, 566, 686, 2]

// Module 15636 (_isNativeReflectConstruct)
import set from "set";
import dispatcher from "dispatcher";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

function _isNativeReflectConstruct() {
  let set = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return set;
  }
  const result = _isNativeReflectConstruct();
}
let c5 = null;
let tmp2 = ((Store) => {
  class ToastStore {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = outer1_1(this, ToastStore);
      items1 = [...items];
      obj = outer1_3(ToastStore);
      tmp2 = outer1_2;
      if (outer1_6()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_3;
        constructResult = Reflect.construct(obj, items1, outer1_3(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.getContent = () => outer2_5;
      return tmp2Result;
    }
  }
  callback(ToastStore, Store);
  return ToastStore(ToastStore);
})(require("initialize").Store);
tmp2.displayName = "ToastStore";
tmp2 = new tmp2(require("dispatcher"), {
  TOAST_OPEN: function handleOpen(toastProps) {
    toastProps = toastProps.toastProps;
    let key;
    if (null != toastProps) {
      key = toastProps.key;
    }
    if (key === toastProps.key) {
      return false;
    }
  },
  TOAST_CLOSE: function handleClose() {
    let c5 = null;
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/toast/native/ToastStore.tsx");

export default tmp2;
