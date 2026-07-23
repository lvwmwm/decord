// Module ID: 7796
// Function ID: 62238
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 102, 18, 162, 2]

// Module 7796 (_isNativeReflectConstruct)
import _wrapNativeSuper from "_wrapNativeSuper";
import set from "set";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _get from "_get";
import _inherits from "_inherits";

function _isNativeReflectConstruct() {
  let _wrapNativeSuper = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return _wrapNativeSuper;
  }
  const result = _isNativeReflectConstruct();
}
const tmp2 = ((arg0) => {
  class LimitedMap {
    constructor(arg0) {
      self = this;
      tmp = LimitedMap(this, LimitedMap);
      obj = outer1_3(LimitedMap);
      tmp2 = outer1_2;
      if (outer1_6()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_3;
        constructResult = Reflect.construct(obj, [], outer1_3(self).constructor);
      } else {
        constructResult = obj.apply(self, undefined);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.maxSize = arg0;
      return tmp2Result;
    }
  }
  callback2(LimitedMap, arg0);
  let items = [
    {
      key: "set",
      value(arg0, arg1) {
        const self = this;
        if (this.size >= this.maxSize) {
          self.delete(self.keys().next().value);
          const iter = self.keys();
        }
        const items = [arg0, arg1];
        return (function _superPropGet(LimitedMap, set, self, arg3) {
          let _wrapNativeSuper = self;
          let prototype = LimitedMap;
          if (1) {
            prototype = LimitedMap.prototype;
          }
          const tmpResult = outer2_4(outer2_3(prototype), "set", self);
          let set = tmpResult;
          let fn = tmpResult;
          if (2) {
            fn = tmpResult;
            if ("function" === typeof tmpResult) {
              fn = (arg0) => tmpResult.apply(_wrapNativeSuper, arg0);
            }
          }
          return fn;
        })(LimitedMap, "set", self, 3)(items);
      }
    }
  ];
  return callback(LimitedMap, items);
})(require("_wrapNativeSuper")(Map));
let result = require("_possibleConstructorReturn").fileFinishedImporting("lib/LimitedMap.tsx");

export default tmp2;
