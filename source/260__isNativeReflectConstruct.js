// Module ID: 260
// Function ID: 3334
// Name: _isNativeReflectConstruct
// Dependencies: [7, 6, 15, 17, 18, 162]

// Module 260 (_isNativeReflectConstruct)
import _defineProperties from "_defineProperties";
import _classCallCheck from "_classCallCheck";
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

export default ((arg0) => {
  class HeadlessJsTaskError {
    constructor() {
      self = this;
      tmp = outer1_1(this, HeadlessJsTaskError);
      obj = outer1_3(HeadlessJsTaskError);
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
  callback(HeadlessJsTaskError, arg0);
  return HeadlessJsTaskError(HeadlessJsTaskError);
})(require("_wrapNativeSuper")(Error));
