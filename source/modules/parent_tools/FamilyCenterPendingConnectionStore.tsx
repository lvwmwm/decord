// Module ID: 4344
// Function ID: 38434
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4344 (_isNativeReflectConstruct)
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
let closure_5 = null;
let tmp2 = (PersistedStore) => {
  class FamilyCenterPendingConnectionStore {
    constructor() {
      self = this;
      tmp = FamilyCenterPendingConnectionStore(this, FamilyCenterPendingConnectionStore);
      obj = closure_3(FamilyCenterPendingConnectionStore);
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
  let closure_0 = FamilyCenterPendingConnectionStore;
  callback2(FamilyCenterPendingConnectionStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(arg0) {
      let tmp = null;
      if (null != arg0) {
        tmp = arg0;
      }
    }
  };
  const items = [obj, , ];
  obj = {
    key: "getState",
    value() {
      return closure_5;
    }
  };
  items[1] = obj;
  obj = {
    key: "getPendingConnection",
    value() {
      return closure_5;
    }
  };
  items[2] = obj;
  return callback(FamilyCenterPendingConnectionStore, items);
}(importDefault(dependencyMap[5]).PersistedStore);
tmp2.displayName = "FamilyCenterPendingConnectionStore";
tmp2.persistKey = "FamilyCenterPendingConnectionStore";
tmp2 = new tmp2(importDefault(dependencyMap[6]), {
  FAMILY_CENTER_PENDING_CONNECTION_SET: function handleSet(teenId) {
    let closure_5 = { teenId: teenId.teenId, linkCode: teenId.linkCode };
  },
  FAMILY_CENTER_PENDING_CONNECTION_CLEAR: function handleClear() {
    let closure_5 = null;
  },
  LOGOUT: function handleLogout() {
    let closure_5 = null;
  }
});
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/parent_tools/FamilyCenterPendingConnectionStore.tsx");

export default tmp2;
