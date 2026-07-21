// Module ID: 6881
// Function ID: 54575
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 6881 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handleCacheOrSocketLoaded() {
  let closure_7 = false;
  return handleUpdate();
}
function handleUpdate() {
  if (closure_7) {
    return false;
  } else {
    const tmp2 = guildCount.getGuildCount() > 0;
    let flag = false;
    if (tmp2 !== closure_8) {
      closure_8 = tmp2;
      flag = true;
    }
    if (tmp2 !== closure_9) {
      closure_9 = tmp2;
      flag = true;
    }
    return flag;
  }
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let closure_5 = importDefault(dependencyMap[5]);
let closure_6 = importDefault(dependencyMap[6]);
let closure_7 = false;
let closure_8 = false;
let closure_9 = false;
let tmp2 = (PersistedStore) => {
  class NUFStore {
    constructor() {
      self = this;
      tmp = NUFStore(this, NUFStore);
      obj = closure_3(NUFStore);
      tmp2 = closure_2;
      if (closure_10()) {
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
  let closure_0 = NUFStore;
  callback2(NUFStore, PersistedStore);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_6, closure_5);
      const items = [closure_6, closure_5];
      this.syncWith(items, closure_11);
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "getState",
    value() {
      return {};
    }
  };
  items[1] = obj;
  obj = {
    key: "showMentionsInNotificationTab",
    get() {
      return closure_9;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "showQuickSwitcher",
    get() {
      return closure_8;
    }
  };
  return callback(NUFStore, items);
}(importDefault(dependencyMap[7]).PersistedStore);
tmp2.displayName = "NUFStore";
tmp2.persistKey = "NUFStore";
tmp2 = new tmp2(importDefault(dependencyMap[8]), {
  CACHE_LOADED: function handleCacheLoaded() {
    let closure_7 = true;
  },
  CACHE_LOADED_LAZY: handleCacheOrSocketLoaded,
  CONNECTION_OPEN: handleCacheOrSocketLoaded
});
const result = arg1(dependencyMap[9]).fileFinishedImporting("stores/native/NUFStore.tsx");

export default tmp2;
