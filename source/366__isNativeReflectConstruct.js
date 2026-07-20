// Module ID: 366
// Function ID: 5422
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 366 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _superPropGet(arg0, arg1, arg2, arg3) {
  const importDefault = arg2;
  let prototype = arg0;
  if (1) {
    prototype = arg0.prototype;
  }
  const tmpResult = closure_6(closure_5(prototype), arg1, arg2);
  const dependencyMap = tmpResult;
  let fn = tmpResult;
  if (2) {
    fn = tmpResult;
    if ("function" === typeof tmpResult) {
      fn = (arg0) => tmpResult.apply(arg2, arg0);
    }
  }
  return fn;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);

export default (arg0) => {
  class AnimatedDiffClamp {
    constructor(arg0, arg1, arg2, arg3) {
      self = this;
      tmp = closure_2(this, AnimatedDiffClamp);
      items = [];
      items[0] = arg3;
      obj = closure_5(AnimatedDiffClamp);
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
  const importDefault = AnimatedDiffClamp;
  callback2(AnimatedDiffClamp, arg0);
  let obj = {
    key: "__makeNative",
    value: function __makeNative(arg0) {
      const _a = this._a;
      _a.__makeNative(arg0);
      const items = [arg0];
      callback4(AnimatedDiffClamp, "__makeNative", this, 3)(items);
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "interpolate",
    value: function interpolate(arg0) {
      let tmp = AnimatedDiffClamp(closure_1[6]);
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
      callback4(AnimatedDiffClamp, "__attach", this, 3)([]);
    }
  };
  items[4] = {
    key: "__detach",
    value: function __detach() {
      const _a = this._a;
      _a.__removeChild(this);
      callback4(AnimatedDiffClamp, "__detach", this, 3)([]);
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
}(importDefault(dependencyMap[7]));
