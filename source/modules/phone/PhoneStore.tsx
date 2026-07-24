// Module ID: 9232
// Function ID: 72239
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 3811, 566, 686, 2]

// Module 9232 (_isNativeReflectConstruct)
import initialize from "initialize";
import dispatcher from "dispatcher";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import getCountryCodeByCountryName from "getCountryCodeByCountryName";

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
const getDefaultCountryCode = getCountryCodeByCountryName.getDefaultCountryCode;
const getCountryCodeByAlpha2 = getCountryCodeByCountryName.getCountryCodeByAlpha2;
let closure_8 = getDefaultCountryCode();
let tmp3 = ((DeviceSettingsStore) => {
  class PhoneStore {
    constructor() {
      self = this;
      tmp = outer1_1(this, PhoneStore);
      obj = outer1_4(PhoneStore);
      tmp2 = outer1_3;
      if (outer1_9()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_4;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_4(self).constructor);
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
      return null != PhoneStore ? PhoneStore : outer1_8;
    }
  };
  items[2] = obj;
  return callback(PhoneStore, items);
})(require("initialize").DeviceSettingsStore);
tmp3.displayName = "PhoneStore";
tmp3.persistKey = "PhoneStore";
tmp3 = new tmp3(require("dispatcher"), {
  PHONE_SET_COUNTRY_CODE: function handleSetCountryCode(countryCode) {
    countryCode = countryCode.countryCode;
  },
  CONNECTION_OPEN: handleSetLocationMetadata,
  SET_LOCATION_METADATA: handleSetLocationMetadata
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/phone/PhoneStore.tsx");

export default tmp3;
