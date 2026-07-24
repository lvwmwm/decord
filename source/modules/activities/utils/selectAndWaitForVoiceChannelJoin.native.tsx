// Module ID: 10854
// Function ID: 84231
// Name: _isNativeReflectConstruct
// Dependencies: [5, 7, 6, 15, 17, 18, 162, 1906, 4944, 2]
// Exports: default

// Module 10854 (_isNativeReflectConstruct)
import _inherits from "_inherits";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _wrapNativeSuper from "_wrapNativeSuper";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import closure_7 from "_inherits";
import closure_8 from "_isNativeReflectConstruct";
import importDefaultResult from "_wrapNativeSuper";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _selectAndWaitForVoiceChannelJoin() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
let closure_9 = ((arg0) => {
  class JoinTimeoutError {
    constructor() {
      self = this;
      tmp = outer1_4(this, JoinTimeoutError);
      obj = outer1_6(JoinTimeoutError);
      tmp2 = outer1_5;
      if (outer1_10()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback3(JoinTimeoutError, arg0);
  return callback2(JoinTimeoutError);
})(require("_wrapNativeSuper")(Error));
let result = require("_classCallCheck").fileFinishedImporting("modules/activities/utils/selectAndWaitForVoiceChannelJoin.native.tsx");

export default function selectAndWaitForVoiceChannelJoin() {
  return _selectAndWaitForVoiceChannelJoin(...arguments);
};
