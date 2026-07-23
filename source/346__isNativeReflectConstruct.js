// Module ID: 346
// Function ID: 5125
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 102, 18, 347, 354, 357]

// Module 346 (_isNativeReflectConstruct)
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
  class AnimatedAddition {
    constructor(arg0, arg1, arg2) {
      self = this;
      tmp = outer1_2(this, AnimatedAddition);
      items = [];
      items[0] = arg2;
      obj = outer1_5(AnimatedAddition);
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
      tmp10 = arg0;
      if ("number" === typeof arg0) {
        tmp8 = AnimatedAddition;
        tmp9 = outer1_1;
        num = 6;
        tmp10 = AnimatedAddition(outer1_1[6]);
        prototype = tmp10.prototype;
        tmp11 = new.target;
        tmp12 = new.target;
        tmp13 = arg0;
        tmp10 = new tmp10(arg0);
      }
      tmp2Result._a = tmp10;
      tmp17 = arg1;
      if ("number" === typeof arg1) {
        tmp15 = AnimatedAddition;
        tmp16 = outer1_1;
        num2 = 6;
        tmp17 = AnimatedAddition(outer1_1[6]);
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
  callback2(AnimatedAddition, arg0);
  let obj = {
    key: "__makeNative",
    value: function __makeNative(arg0) {
      const _a = this._a;
      _a.__makeNative(arg0);
      const _b = this._b;
      _b.__makeNative(arg0);
      const items = [arg0];
      outer1_9(AnimatedAddition, "__makeNative", this, 3)(items);
    }
  };
  let items = [obj, , , , , ];
  obj = {
    key: "__getValue",
    value: function __getValue() {
      let _a;
      let _b;
      ({ _a, _b } = this);
      return _a.__getValue() + _b.__getValue();
    }
  };
  items[1] = obj;
  obj = {
    key: "interpolate",
    value: function interpolate(arg0) {
      let tmp = AnimatedAddition(outer1_1[7]);
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
      outer1_9(AnimatedAddition, "__attach", this, 3)([]);
    }
  };
  items[4] = {
    key: "__detach",
    value: function __detach() {
      const _a = this._a;
      _a.__removeChild(this);
      const _b = this._b;
      _b.__removeChild(this);
      outer1_9(AnimatedAddition, "__detach", this, 3)([]);
    }
  };
  items[5] = {
    key: "__getNativeConfig",
    value: function __getNativeConfig() {
      const obj = { type: "addition" };
      const _a = this._a;
      const items = [_a.__getNativeTag(), ];
      const _b = this._b;
      items[1] = _b.__getNativeTag();
      obj.input = items;
      obj.debugID = this.__getDebugID();
      return obj;
    }
  };
  return callback(AnimatedAddition, items);
})(require("_isNativeReflectConstruct"));
