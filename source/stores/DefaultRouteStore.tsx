// Module ID: 3949
// Function ID: 32625
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 3949 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
const Routes = arg1(dependencyMap[5]).Routes;
let obj = { revision: "o", override: "o" };
let tmp2 = (PersistedStore) => {
  class DefaultRouteStore {
    constructor() {
      self = this;
      tmp = closure_2(this, DefaultRouteStore);
      obj = closure_5(DefaultRouteStore);
      tmp2 = closure_4;
      if (closure_10()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = DefaultRouteStore;
  callback2(DefaultRouteStore, PersistedStore);
  let obj = {
    key: "initialize",
    value() {
      let tmp = arg0;
      if (arg0 === undefined) {
        tmp = closure_8;
      }
      if (null == tmp) {
        tmp = closure_8;
      }
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "defaultRoute",
    get() {
      let ME = closure_9.lastViewedPath;
      if (null == ME) {
        ME = constants.ME;
      }
      return ME;
    }
  };
  items[1] = obj;
  obj = {
    key: "lastNonVoiceRoute",
    get() {
      let ME = closure_9.lastViewedNonVoicePath;
      if (null == ME) {
        ME = constants.ME;
      }
      return ME;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "fallbackRoute",
    get() {
      return constants.ME;
    }
  };
  items[4] = {
    key: "getState",
    value() {
      return closure_9;
    }
  };
  return callback(DefaultRouteStore, items);
}(importDefault(dependencyMap[6]).PersistedStore);
tmp2.displayName = "DefaultRouteStore";
tmp2.persistKey = "DefaultRouteStore";
const items = [
  () => {
    const Storage = arg1(dependencyMap[7]).Storage;
    const lastViewedPath = Storage.get("LAST_VIEWED_PATH", null);
    const Storage2 = arg1(dependencyMap[7]).Storage;
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
    let closure_9 = { revision: "o", override: "o" };
  }
};
tmp2 = new tmp2(importDefault(dependencyMap[8]), obj);
const result = arg1(dependencyMap[9]).fileFinishedImporting("stores/DefaultRouteStore.tsx");

export default tmp2;
