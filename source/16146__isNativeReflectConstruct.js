// Module ID: 16146
// Function ID: 125124
// Name: _isNativeReflectConstruct
// Dependencies: [7, 6, 15, 17, 18, 162, 16147]

// Module 16146 (_isNativeReflectConstruct)
import _defineProperties from "_defineProperties";
import _classCallCheck from "module_16147";
import "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
const tmp = ((arg0) => {
  class TimeoutError {
    constructor(arg0) {
      self = this;
      tmp = outer1_3(this, TimeoutError);
      items = [];
      items[0] = arg0;
      obj = outer1_5(TimeoutError);
      tmp2 = outer1_4;
      if (outer1_8()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_5;
        constructResult = Reflect.construct(obj, items, outer1_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.name = "TimeoutError";
      return tmp2Result;
    }
  }
  _inherits(TimeoutError, arg0);
  return _defineProperties(TimeoutError);
})(require("_wrapNativeSuper")(Error));
let closure_7 = tmp;
function pTimeout(arg0, arg1, arg2) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let closure_2 = arg2;
  return new Promise((arg0, arg1) => {
    const table = arg1;
    if ("number" === typeof table) {
      if (table >= 0) {
        if (table !== Infinity) {
          const _setTimeout = setTimeout;
          const timeout = setTimeout(() => {
            if ("function" !== typeof callback2) {
              const _Error = Error;
              if (callback2 instanceof Error) {
                let tmp6 = callback2;
              } else {
                tmp6 = outer2_7;
                if ("string" === typeof callback2) {
                  let combined = callback2;
                } else {
                  const _HermesInternal = HermesInternal;
                  combined = "Promise timed out after " + callback + " milliseconds";
                }
                const prototype = tmp6.prototype;
                tmp6 = new tmp6(combined);
              }
              if ("function" === typeof lib.cancel) {
                lib.cancel();
              }
              callback(tmp6);
            } else {
              lib(callback2());
            }
          }, table);
          promise(table[6])(promise.then(arg0, arg1), () => {
            clearTimeout(closure_2);
          });
          const tmp8 = promise(table[6]);
        } else {
          arg0(promise);
        }
      }
    }
    const typeError = new TypeError("Expected `milliseconds` to be a positive number");
    throw typeError;
  });
}
module.exports.default = pTimeout;
module.exports.TimeoutError = tmp;

export default pTimeout;
