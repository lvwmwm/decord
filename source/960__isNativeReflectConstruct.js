// Module ID: 960
// Function ID: 10387
// Name: _isNativeReflectConstruct
// Dependencies: [7, 6, 15, 17, 18, 162]

// Module 960 (_isNativeReflectConstruct)
import _defineProperties from "_defineProperties";
import _classCallCheck from "_classCallCheck";
import "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _wrapNativeSuper from "_wrapNativeSuper";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const SentryError = ((arg0) => {
  class SentryError {
    constructor(arg0) {
      self = this;
      str = "warn";
      if (arguments.length > 1) {
        str = "warn";
        if (undefined !== arguments[1]) {
          str = arguments[1];
        }
      }
      tmp = outer1_1(self, SentryError);
      items = [];
      items[0] = arg0;
      obj = outer1_3(SentryError);
      tmp2 = outer1_2;
      if (outer1_5()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_3;
        constructResult = Reflect.construct(obj, items, outer1_3(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.message = arg0;
      tmp2Result.logLevel = str;
      return tmp2Result;
    }
  }
  _inherits(SentryError, arg0);
  return SentryError(SentryError);
})(_wrapNativeSuper(Error));
