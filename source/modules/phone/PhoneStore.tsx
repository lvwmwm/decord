// Module ID: 9188
// Function ID: 71965
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 9188 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handleSetLocationMetadata(countryCode) {
  countryCode = countryCode.countryCode;
  if (null != countryCode) {
    let tmp2 = getCountryCodeByAlpha2(countryCode);
    if (null == tmp2) {
      tmp2 = getDefaultCountryCode();
    }
    let closure_8 = tmp2;
  }
}
let closure_1 = importDefault(dependencyMap[0]);
let closure_2 = importDefault(dependencyMap[1]);
let closure_3 = importDefault(dependencyMap[2]);
let closure_4 = importDefault(dependencyMap[3]);
let closure_5 = importDefault(dependencyMap[4]);
const tmp2 = arg1(dependencyMap[5]);
const getDefaultCountryCode = tmp2.getDefaultCountryCode;
const getCountryCodeByAlpha2 = tmp2.getCountryCodeByAlpha2;
let closure_8 = getDefaultCountryCode();
let tmp3 = (DeviceSettingsStore) => {
  class PhoneStore {
    constructor() {
      self = this;
      tmp = closure_1(this, PhoneStore);
      obj = closure_4(PhoneStore);
      tmp2 = closure_3;
      if (closure_9()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_4;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_4(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(PhoneStore, DeviceSettingsStore);
  let obj = {
    key: "initialize",
    value(selectedCountryCode) {
      if (null != selectedCountryCode) {
        const PhoneStore = selectedCountryCode.selectedCountryCode;
      }
    }
  };
  const items = [obj, , ];
  obj = {
    key: "getUserAgnosticState",
    value() {
      return { selectedCountryCode: PhoneStore };
    }
  };
  items[1] = obj;
  obj = {
    key: "getCountryCode",
    value() {
      return null != PhoneStore ? PhoneStore : closure_8;
    }
  };
  items[2] = obj;
  return callback(PhoneStore, items);
}(importDefault(dependencyMap[6]).DeviceSettingsStore);
tmp3.displayName = "PhoneStore";
tmp3.persistKey = "PhoneStore";
tmp3 = new tmp3(importDefault(dependencyMap[7]), {
  PHONE_SET_COUNTRY_CODE: function handleSetCountryCode(countryCode) {
    countryCode = countryCode.countryCode;
  },
  CONNECTION_OPEN: handleSetLocationMetadata,
  SET_LOCATION_METADATA: handleSetLocationMetadata
});
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/phone/PhoneStore.tsx");

export default tmp3;
