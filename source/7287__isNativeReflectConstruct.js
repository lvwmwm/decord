// Module ID: 7287
// Function ID: 58789
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 7287 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_0 = require(dependencyMap[0]);
let closure_1 = require(dependencyMap[1]);
let closure_2 = require(dependencyMap[2]);
let closure_3 = require(dependencyMap[3]);
let closure_4 = require(dependencyMap[4]);
const _module = require(dependencyMap[5]);

export const SentryError = (arg0) => {
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
      tmp = closure_1(self, SentryError);
      items = [];
      items[0] = arg0;
      obj = closure_3(SentryError);
      tmp2 = closure_2;
      if (closure_5()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_3;
        constructResult = Reflect.construct(obj, items, closure_3(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.message = arg0;
      tmp2Result.logLevel = str;
      return tmp2Result;
    }
  }
  const callback = SentryError;
  callback2(SentryError, arg0);
  return callback(SentryError);
}(_module(Error));
