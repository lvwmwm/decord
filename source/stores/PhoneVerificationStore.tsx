// Module ID: 16244
// Function ID: 126055
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 566, 686, 2]

// Module 16244 (_isNativeReflectConstruct)
import dispatcher from "dispatcher";
import set from "set";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

function _isNativeReflectConstruct() {
  let dispatcher = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return dispatcher;
  }
  const result = _isNativeReflectConstruct();
}
let c5 = false;
let tmp2 = ((Store) => {
  class PhoneVerificationStore {
    constructor() {
      self = this;
      tmp = PhoneVerificationStore(this, PhoneVerificationStore);
      obj = outer1_3(PhoneVerificationStore);
      tmp2 = outer1_2;
      if (outer1_6()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(PhoneVerificationStore, Store);
  const items = [
    {
      key: "getCountrySelectorOpened",
      value() {
        return outer1_5;
      }
    }
  ];
  return callback(PhoneVerificationStore, items);
})(require("initialize").Store);
tmp2.displayName = "PhoneVerificationStore";
tmp2 = new tmp2(require("dispatcher"), {
  VERIFICATION_OPEN_COUNTRY_SELECTOR: function handleOpenCountry() {
    let c5 = true;
  },
  VERIFICATION_CLOSE_COUNTRY_SELECTOR: function handleCloseCountrySelector() {
    let c5 = false;
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/PhoneVerificationStore.tsx");

export default tmp2;
