// Module ID: 15963
// Function ID: 122515
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 15963 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = require(dependencyMap[0]);
let closure_3 = require(dependencyMap[1]);
let closure_4 = require(dependencyMap[2]);
let closure_5 = require(dependencyMap[3]);
let closure_6 = require(dependencyMap[4]);
const tmp = (arg0) => {
  class TimeoutError {
    constructor(arg0) {
      self = this;
      tmp = closure_3(this, TimeoutError);
      items = [];
      items[0] = arg0;
      obj = closure_5(TimeoutError);
      tmp2 = closure_4;
      if (closure_8()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_5;
        constructResult = Reflect.construct(obj, items, closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.name = "TimeoutError";
      return tmp2Result;
    }
  }
  const require = TimeoutError;
  callback2(TimeoutError, arg0);
  return callback(TimeoutError);
}(require(dependencyMap[5])(Error));
function pTimeout(arg0, arg1, arg2) {
  const require = arg0;
  const dependencyMap = arg1;
  let closure_2 = arg2;
  return new Promise((arg0, arg1) => {
    if ("number" === typeof arg1) {
      if (arg1 >= 0) {
        if (arg1 !== Infinity) {
          const _setTimeout = setTimeout;
          const timeout = setTimeout(() => {
            if ("function" !== typeof callback) {
              const _Error = Error;
              if (callback instanceof Error) {
                let tmp6 = callback;
              } else {
                tmp6 = closure_7;
                if ("string" === typeof callback) {
                  let combined = callback;
                } else {
                  const _HermesInternal = HermesInternal;
                  combined = "Promise timed out after " + arg1 + " milliseconds";
                }
                const prototype = tmp6.prototype;
                tmp6 = new tmp6(combined);
              }
              if ("function" === typeof arg0.cancel) {
                arg0.cancel();
              }
              arg1(tmp6);
            } else {
              arg0(callback());
            }
          }, arg1);
          arg0(arg1[6])(arg0.then(arg0, arg1), () => {
            clearTimeout(closure_2);
          });
          const tmp8 = arg0(arg1[6]);
        } else {
          arg0(arg0);
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
