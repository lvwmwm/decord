// Module ID: 14620
// Function ID: 110269
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 14620 (_isNativeReflectConstruct)
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
let closure_5 = false;
let tmp2 = (PersistedStore) => {
  class ParentalConsentStore {
    constructor() {
      self = this;
      tmp = ParentalConsentStore(this, ParentalConsentStore);
      obj = closure_3(ParentalConsentStore);
      tmp2 = closure_2;
      if (closure_7()) {
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
  let closure_0 = ParentalConsentStore;
  callback2(ParentalConsentStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(shouldShowGuardianConnect) {
      let prop;
      if (null != shouldShowGuardianConnect) {
        prop = shouldShowGuardianConnect.shouldShowGuardianConnect;
      }
      let closure_5 = null != prop && prop;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "getShouldShowGuardianConnect",
    value() {
      return closure_5;
    }
  };
  items[1] = obj;
  obj = {
    key: "getState",
    value() {
      return { shouldShowGuardianConnect: closure_5 };
    }
  };
  items[2] = obj;
  return callback(ParentalConsentStore, items);
}(importDefault(dependencyMap[5]).PersistedStore);
tmp2.displayName = "ParentalConsentStore";
tmp2.persistKey = "ParentalConsentStore";
tmp2 = new tmp2(importDefault(dependencyMap[6]), {
  GUARDIAN_CONNECT_REQUIRED: function handleGuardianConnectRequired(shouldShowGuardianConnect) {
    let closure_5 = true === shouldShowGuardianConnect.shouldShowGuardianConnect;
    tmp2.persist();
  },
  GUARDIAN_CONNECT_CLEARED: function handleGuardianConnectCleared() {
    let closure_5 = false;
    tmp2.persist();
  },
  NUF_COMPLETE: function handleNUFCompleted() {
    let closure_5 = false;
    tmp2.persist();
  }
});
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/parent_tools/ParentalConsentStore.tsx");

export default tmp2;
