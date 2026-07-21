// Module ID: 14611
// Function ID: 110181
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 14611 (_isNativeReflectConstruct)
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
const AGE_GATE_REGISTER_TIMEOUT_MS = arg1(dependencyMap[5]).AGE_GATE_REGISTER_TIMEOUT_MS;
let closure_5 = false;
let tmp2 = (Store) => {
  class AgeGateStore {
    constructor() {
      self = this;
      tmp = AgeGateStore(this, AgeGateStore);
      obj = closure_3(AgeGateStore);
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
  let closure_0 = AgeGateStore;
  callback2(AgeGateStore, Store);
  const items = [
    {
      key: "isUnderageAnonymous",
      value() {
        return closure_5;
      }
    }
  ];
  return callback(AgeGateStore, items);
}(importDefault(dependencyMap[6]).Store);
tmp2.displayName = "AgeGateStore";
tmp2 = new tmp2(importDefault(dependencyMap[7]), {
  AGE_GATE_PREVENT_UNDERAGE_REGISTRATION: function handleMarkUnderageAnonymous() {
    let closure_5 = true;
    const timestamp = Date.now();
  },
  LOGIN_SUCCESS: function handleLogin() {
    let closure_5 = false;
  }
});
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/age_gate/AgeGateStore.tsx");

export default tmp2;
