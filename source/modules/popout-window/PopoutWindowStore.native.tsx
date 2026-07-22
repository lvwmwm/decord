// Module ID: 4306
// Function ID: 37714
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4306 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let closure_5 = {};
let tmp2 = (PersistedStore) => {
  class PopoutWindowStore {
    constructor() {
      self = this;
      tmp = PopoutWindowStore(this, PopoutWindowStore);
      obj = closure_3(PopoutWindowStore);
      tmp2 = closure_2;
      if (closure_6()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  let closure_0 = PopoutWindowStore;
  callback2(PopoutWindowStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(arg0) {
      let obj = arg0;
      if (null == arg0) {
        obj = {};
      }
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
      return closure_5;
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
}(importDefault(dependencyMap[5]).PersistedStore);
tmp2.displayName = "PopoutWindowStore";
tmp2.persistKey = "PopoutWindowStoreIOS";
tmp2 = new tmp2(importDefault(dependencyMap[6]), {});
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/popout-window/PopoutWindowStore.native.tsx");

export default tmp2;
