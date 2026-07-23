// Module ID: 9547
// Function ID: 74362
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 566, 686, 2]

// Module 9547 (_isNativeReflectConstruct)
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
let c6 = null;
let tmp2 = ((Store) => {
  class NativeMenuStore {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = NativeMenuStore(this, NativeMenuStore);
      items1 = [...items];
      obj = outer1_3(NativeMenuStore);
      tmp2 = outer1_2;
      if (outer1_7()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_3;
        constructResult = Reflect.construct(obj, items1, outer1_3(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.getMenu = () => outer2_5;
      tmp2Result.isOpen = () => null != outer2_5;
      tmp2Result.getKey = () => outer2_6;
      return tmp2Result;
    }
  }
  callback2(NativeMenuStore, Store);
  let items = [
    {
      key: "initialize",
      value() {

      }
    }
  ];
  return callback(NativeMenuStore, items);
})(require("initialize").Store);
tmp2.displayName = "NativeMenuStore";
tmp2 = new tmp2(require("dispatcher"), {
  SHOW_NATIVE_MENU: function handleShowNativeMenu(arg0) {
    let c5;
    let c6;
    ({ menu: c5, key: c6 } = arg0);
  },
  HIDE_NATIVE_MENU: function handleHideNativeMenu(key) {
    if (null != key.key) {
      if (key !== c6) {
        return false;
      }
    }
    let c5 = null;
    c6 = null;
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/native_menu/native/NativeMenuStore.tsx");

export default tmp2;
