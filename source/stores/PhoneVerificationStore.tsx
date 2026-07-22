// Module ID: 16080
// Function ID: 123558
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 16080 (_isNativeReflectConstruct)
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
let tmp2 = (Store) => {
  class PhoneVerificationStore {
    constructor() {
      self = this;
      tmp = PhoneVerificationStore(this, PhoneVerificationStore);
      obj = closure_3(PhoneVerificationStore);
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
  let closure_0 = PhoneVerificationStore;
  callback2(PhoneVerificationStore, Store);
  const items = [
    {
      key: "getCountrySelectorOpened",
      value() {
        return closure_5;
      }
    }
  ];
  return callback(PhoneVerificationStore, items);
}(importDefault(dependencyMap[5]).Store);
tmp2.displayName = "PhoneVerificationStore";
tmp2 = new tmp2(importDefault(dependencyMap[6]), {
  VERIFICATION_OPEN_COUNTRY_SELECTOR: function handleOpenCountry() {
    let closure_5 = true;
  },
  VERIFICATION_CLOSE_COUNTRY_SELECTOR: function handleCloseCountrySelector() {
    let closure_5 = false;
  }
});
const result = arg1(dependencyMap[7]).fileFinishedImporting("stores/PhoneVerificationStore.tsx");

export default tmp2;
