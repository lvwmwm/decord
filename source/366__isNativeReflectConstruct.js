// Module ID: 366
// Function ID: 5422
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 102, 18, 354, 357]

// Module 366 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _get from "_get";
import _inherits from "_inherits";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _superPropGet(arg0, arg1, arg2, arg3) {
  let closure_0 = arg2;
  let prototype = arg0;
  if (1) {
    prototype = arg0.prototype;
  }
  const tmpResult = _get(_getPrototypeOf(prototype), arg1, arg2);
  const dependencyMap = tmpResult;
  let fn = tmpResult;
  if (2) {
    fn = tmpResult;
    if ("function" === typeof tmpResult) {
      fn = (arg0) => tmpResult.apply(closure_0, arg0);
    }
  }
  return fn;
}

export default ((arg0) => {
  class AnimatedDiffClamp {
    constructor(arg0, arg1, arg2, arg3) {
      self = this;
      tmp = outer1_2(this, AnimatedDiffClamp);
      items = [];
      items[0] = arg3;
      obj = outer1_5(AnimatedDiffClamp);
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
      tmp2Result._a = arg0;
      tmp2Result._min = arg1;
      tmp2Result._max = arg2;
      _a = tmp2Result._a;
      __getValueResult = _a.__getValue();
      tmp2Result._lastValue = __getValueResult;
      tmp2Result._value = __getValueResult;
      return tmp2Result;
    }
  }
  callback2(AnimatedDiffClamp, arg0);
  let obj = {
    key: "__makeNative",
    value: function __makeNative(arg0) {
      const _a = this._a;
      _a.__makeNative(arg0);
      const items = [arg0];
      outer1_9(AnimatedDiffClamp, "__makeNative", this, 3)(items);
    }
  };
  let items = [obj, , , , , ];
  obj = {
    key: "interpolate",
    value: function interpolate(arg0) {
      let tmp = AnimatedDiffClamp(outer1_1[6]);
      tmp = new tmp(this, arg0);
      return tmp;
    }
  };
  items[1] = obj;
  obj = {
    key: "__getValue",
    value: function __getValue() {
      const _a = this._a;
      const __getValueResult = _a.__getValue();
      this._lastValue = __getValueResult;
      this._value = Math.min(Math.max(this._value + (__getValueResult - this._lastValue), this._min), this._max);
      return this._value;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "__attach",
    value: function __attach() {
      const _a = this._a;
      _a.__addChild(this);
      outer1_9(AnimatedDiffClamp, "__attach", this, 3)([]);
    }
  };
  items[4] = {
    key: "__detach",
    value: function __detach() {
      const _a = this._a;
      _a.__removeChild(this);
      outer1_9(AnimatedDiffClamp, "__detach", this, 3)([]);
    }
  };
  items[5] = {
    key: "__getNativeConfig",
    value: function __getNativeConfig() {
      const _a = this._a;
      return { type: "diffclamp", input: _a.__getNativeTag(), min: this._min, max: this._max, debugID: this.__getDebugID() };
    }
  };
  return callback(AnimatedDiffClamp, items);
})(require("_isNativeReflectConstruct"));
