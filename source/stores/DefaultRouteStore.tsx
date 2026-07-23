// Module ID: 3951
// Function ID: 32630
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 653, 566, 587, 686, 2]

// Module 3951 (_isNativeReflectConstruct)
import initialize from "initialize";
import Storage from "Storage";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import { Routes } from "ME";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let obj = { lastViewedPath: null, lastViewedNonVoicePath: null };
let tmp2 = ((PersistedStore) => {
  class DefaultRouteStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, DefaultRouteStore);
      obj = outer1_5(DefaultRouteStore);
      tmp2 = outer1_4;
      if (outer1_10()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(DefaultRouteStore, PersistedStore);
  let obj = {
    key: "initialize",
    value() {
      let tmp = arg0;
      if (arg0 === undefined) {
        tmp = outer1_8;
      }
      if (null == tmp) {
        tmp = outer1_8;
      }
      const outer1_9 = tmp;
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "defaultRoute",
    get() {
      let ME = outer1_9.lastViewedPath;
      if (null == ME) {
        ME = outer1_7.ME;
      }
      return ME;
    }
  };
  items[1] = obj;
  obj = {
    key: "lastNonVoiceRoute",
    get() {
      let ME = outer1_9.lastViewedNonVoicePath;
      if (null == ME) {
        ME = outer1_7.ME;
      }
      return ME;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "fallbackRoute",
    get() {
      return outer1_7.ME;
    }
  };
  items[4] = {
    key: "getState",
    value() {
      return outer1_9;
    }
  };
  return callback(DefaultRouteStore, items);
})(require("initialize").PersistedStore);
tmp2.displayName = "DefaultRouteStore";
tmp2.persistKey = "DefaultRouteStore";
let items = [
  () => {
    const Storage = require(587) /* Storage */.Storage;
    const lastViewedPath = Storage.get("LAST_VIEWED_PATH", null);
    const Storage2 = require(587) /* Storage */.Storage;
    Storage2.remove("LAST_VIEWED_PATH");
    return { lastViewedPath };
  }
];
tmp2.migrations = items;
obj = {
  SAVE_LAST_ROUTE: function handleSaveRoute(path) {
    obj.lastViewedPath = path.path;
    return true;
  },
  SAVE_LAST_NON_VOICE_ROUTE: function handleSaveLastNonVoiceRoute(path) {
    obj.lastViewedNonVoicePath = path.path;
    return true;
  },
  LOGOUT: function handleLogout() {
    let closure_9 = { lastViewedPath: null, lastViewedNonVoicePath: null };
  }
};
tmp2 = new tmp2(require("dispatcher"), obj);
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/DefaultRouteStore.tsx");

export default tmp2;
