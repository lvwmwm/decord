// Module ID: 10498
// Function ID: 81994
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 10498 (_isNativeReflectConstruct)
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
let closure_5 = { usageByApplicationId: {}, shelfOrder: [] };
let tmp2 = (PersistedStore) => {
  class ActivityShelfStore {
    constructor() {
      self = this;
      tmp = ActivityShelfStore(this, ActivityShelfStore);
      obj = closure_3(ActivityShelfStore);
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
  let closure_0 = ActivityShelfStore;
  callback2(ActivityShelfStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(arg0) {
      let obj = arg0;
      obj = { usageByApplicationId: {}, shelfOrder: [] };
      if (null == arg0) {
        obj = {};
      }
      const merged = Object.assign(obj);
    }
  };
  const items = [obj, ];
  obj = {
    key: "getState",
    value() {
      return closure_5;
    }
  };
  items[1] = obj;
  return callback(ActivityShelfStore, items);
}(importDefault(dependencyMap[5]).PersistedStore);
tmp2.displayName = "ActivityShelfStore";
tmp2.persistKey = "ActivityShelfStore";
tmp2 = new tmp2(importDefault(dependencyMap[6]), {
  LOGOUT: function reset() {
    let closure_5 = { usageByApplicationId: {}, shelfOrder: [] };
  }
});
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/activities/ActivityShelfStore.tsx");

export default tmp2;
