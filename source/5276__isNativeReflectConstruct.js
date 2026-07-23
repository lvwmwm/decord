// Module ID: 5276
// Function ID: 45523
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 5256]

// Module 5276 (_isNativeReflectConstruct)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

function _isNativeReflectConstruct() {
  let _classCallCheck = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return _classCallCheck;
  }
  const result = _isNativeReflectConstruct();
}

export const NativeGesture = ((BaseGesture) => {
  class NativeGesture {
    constructor() {
      self = this;
      tmp = NativeGesture(this, NativeGesture);
      obj = outer1_3(NativeGesture);
      tmp2 = outer1_2;
      if (outer1_5()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_3;
        constructResult = Reflect.construct(obj, [], outer1_3(self).constructor);
      } else {
        constructResult = obj.apply(self, undefined);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.config = {};
      tmp2Result.handlerName = "NativeViewGestureHandler";
      return tmp2Result;
    }
  }
  callback2(NativeGesture, BaseGesture);
  let obj = {
    key: "shouldActivateOnStart",
    value: function shouldActivateOnStart(shouldActivateOnStart) {
      this.config.shouldActivateOnStart = shouldActivateOnStart;
      return this;
    }
  };
  const items = [obj, ];
  obj = {
    key: "disallowInterruption",
    value: function disallowInterruption(disallowInterruption) {
      this.config.disallowInterruption = disallowInterruption;
      return this;
    }
  };
  items[1] = obj;
  return callback(NativeGesture, items);
})(require("_callSuper").BaseGesture);
