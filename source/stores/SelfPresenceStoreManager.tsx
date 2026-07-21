// Module ID: 16046
// Function ID: 123216
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 16046 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handleChange() {
  let obj = importDefault(dependencyMap[7]);
  obj = { type: "SELF_PRESENCE_STORE_UPDATE", status: store.getStatus(), activities: store.getActivities(true), hiddenActivities: store.getHiddenActivities() };
  obj.dispatch(obj);
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let tmp2 = (arg0) => {
  class SelfPresenceStoreManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_3(this, SelfPresenceStoreManager);
      items1 = [...items];
      obj = closure_5(SelfPresenceStoreManager);
      tmp2 = closure_4;
      if (closure_8()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_5;
        constructResult = Reflect.construct(obj, items1, closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      map = new Map();
      tmp2Result.stores = map.set(closure_7, closure_9);
      return tmp2Result;
    }
  }
  const importDefault = SelfPresenceStoreManager;
  callback2(SelfPresenceStoreManager, arg0);
  return callback(SelfPresenceStoreManager);
}(importDefault(dependencyMap[6]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[8]).fileFinishedImporting("stores/SelfPresenceStoreManager.tsx");

export default tmp2;
