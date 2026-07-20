// Module ID: 364
// Function ID: 5394
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 364 (_isNativeReflectConstruct)
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
  class AnimatedMultiplication {
    constructor(arg0, arg1, arg2) {
      self = this;
      tmp = closure_2(this, AnimatedMultiplication);
      items = [];
      items[0] = arg2;
      obj = closure_5(AnimatedMultiplication);
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
      tmp10 = arg0;
      if ("number" === typeof arg0) {
        tmp8 = AnimatedMultiplication;
        tmp9 = closure_1;
        num = 6;
        tmp10 = AnimatedMultiplication(closure_1[6]);
        prototype = tmp10.prototype;
        tmp11 = new.target;
        tmp12 = new.target;
        tmp13 = arg0;
        tmp10 = new tmp10(arg0);
      }
      tmp2Result._a = tmp10;
      tmp17 = arg1;
      if ("number" === typeof arg1) {
        tmp15 = AnimatedMultiplication;
        tmp16 = closure_1;
        num2 = 6;
        tmp17 = AnimatedMultiplication(closure_1[6]);
        prototype2 = tmp17.prototype;
        tmp18 = new.target;
        tmp19 = new.target;
        tmp20 = arg1;
        tmp17 = new tmp17(arg1);
      }
      tmp2Result._b = tmp17;
      return tmp2Result;
    }
  }
  const importDefault = AnimatedMultiplication;
  callback2(AnimatedMultiplication, arg0);
  let obj = {
    key: "__makeNative",
    value: function __makeNative(arg0) {
      const _a = this._a;
      _a.__makeNative(arg0);
      const _b = this._b;
      _b.__makeNative(arg0);
      const items = [arg0];
      callback4(AnimatedMultiplication, "__makeNative", this, 3)(items);
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "__getValue",
    value: function __getValue() {
      let _a;
      let _b;
      ({ _a, _b } = this);
      return _a.__getValue() * _b.__getValue();
    }
  };
  items[1] = obj;
  obj = {
    key: "interpolate",
    value: function interpolate(arg0) {
      let tmp = AnimatedMultiplication(closure_1[7]);
      tmp = new tmp(this, arg0);
      return tmp;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "__attach",
    value: function __attach() {
      const _a = this._a;
      _a.__addChild(this);
      const _b = this._b;
      _b.__addChild(this);
      callback4(AnimatedMultiplication, "__attach", this, 3)([]);
    }
  };
  items[4] = {
    key: "__detach",
    value: function __detach() {
      const _a = this._a;
      _a.__removeChild(this);
      const _b = this._b;
      _b.__removeChild(this);
      callback4(AnimatedMultiplication, "__detach", this, 3)([]);
    }
  };
  items[5] = {
    key: "__getNativeConfig",
    value: function __getNativeConfig() {
      const obj = { type: "multiplication" };
      const _a = this._a;
      const items = [_a.__getNativeTag(), ];
      const _b = this._b;
      items[1] = _b.__getNativeTag();
      obj.input = items;
      obj.debugID = this.__getDebugID();
      return obj;
    }
  };
  return callback(AnimatedMultiplication, items);
}(importDefault(dependencyMap[8]));
