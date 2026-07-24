// Module ID: 9238
// Function ID: 72276
// Name: _isNativeReflectConstruct
// Dependencies: [7, 6, 15, 17, 18, 162, 2]

// Module 9238 (_isNativeReflectConstruct)
import _defineProperties from "_defineProperties";
import set from "set";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

function _isNativeReflectConstruct() {
  let _defineProperties = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return _defineProperties;
  }
  const result = _isNativeReflectConstruct();
}
const tmp2 = ((arg0) => {
  class IgnorableWebAuthnError {
    constructor() {
      self = this;
      tmp = outer1_1(this, IgnorableWebAuthnError);
      obj = outer1_3(IgnorableWebAuthnError);
      tmp2 = outer1_2;
      if (outer1_5()) {
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
  callback(IgnorableWebAuthnError, arg0);
  return IgnorableWebAuthnError(IgnorableWebAuthnError);
})(require("_wrapNativeSuper")(Error));
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/webauthn/WebAuthnTypes.tsx");

export const IgnorableWebAuthnError = tmp2;
