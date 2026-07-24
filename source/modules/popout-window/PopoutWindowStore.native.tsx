// Module ID: 4310
// Function ID: 37747
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 566, 686, 2]

// Module 4310 (_isNativeReflectConstruct)
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
let closure_5 = {};
let tmp2 = ((PersistedStore) => {
  class PopoutWindowStore {
    constructor() {
      self = this;
      tmp = PopoutWindowStore(this, PopoutWindowStore);
      obj = outer1_3(PopoutWindowStore);
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
  callback2(PopoutWindowStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(arg0) {
      let obj = arg0;
      if (null == arg0) {
        obj = {};
      }
      const outer1_5 = obj;
    }
  };
  const items = [obj, , , , , , , , , , , ];
  obj = {
    key: "getWindow",
    value() {
      return null;
    }
  };
  items[1] = obj;
  obj = {
    key: "getWindowState",
    value() {
      return null;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getWindowKeys",
    value() {
      return [];
    }
  };
  items[4] = {
    key: "getWindowOpen",
    value() {
      return false;
    }
  };
  items[5] = {
    key: "getIsAlwaysOnTop",
    value() {
      return false;
    }
  };
  items[6] = {
    key: "getWindowFocused",
    value() {
      return false;
    }
  };
  items[7] = {
    key: "getWindowVisible",
    value() {
      return false;
    }
  };
  items[8] = {
    key: "getState",
    value() {
      return outer1_5;
    }
  };
  items[9] = {
    key: "isWindowFullyInitialized",
    value() {
      return false;
    }
  };
  items[10] = {
    key: "isWindowFullScreen",
    value() {
      return false;
    }
  };
  items[11] = {
    key: "unmountWindow",
    value() {

    }
  };
  return callback(PopoutWindowStore, items);
})(require("initialize").PersistedStore);
tmp2.displayName = "PopoutWindowStore";
tmp2.persistKey = "PopoutWindowStoreIOS";
tmp2 = new tmp2(require("dispatcher"), {});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/popout-window/PopoutWindowStore.native.tsx");

export default tmp2;
