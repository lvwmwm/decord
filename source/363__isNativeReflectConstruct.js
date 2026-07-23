// Module ID: 363
// Function ID: 5380
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 102, 18, 358, 347, 354, 357]

// Module 363 (_isNativeReflectConstruct)
import _assertNativeAnimatedModule from "_assertNativeAnimatedModule";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
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
  class AnimatedDivision {
    constructor(arg0, arg1, arg2) {
      self = this;
      tmp = outer1_2(this, AnimatedDivision);
      items = [];
      items[0] = arg2;
      obj = outer1_5(AnimatedDivision);
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
      tmp2Result._warnedAboutDivideByZero = false;
      tmp7 = 0 === arg1;
      if (!tmp7) {
        tmp8 = AnimatedDivision;
        tmp9 = outer1_1;
        num = 6;
        tmp10 = arg1 instanceof AnimatedDivision(outer1_1[6]) && 0 === arg1.__getValue();
        tmp7 = tmp10;
      }
      if (tmp7) {
        tmp11 = globalThis;
        _console = console;
        str = "Detected potential division by zero in AnimatedDivision";
        errorResult = console.error("Detected potential division by zero in AnimatedDivision");
      }
      tmp16 = arg0;
      if ("number" === typeof arg0) {
        tmp14 = AnimatedDivision;
        tmp15 = outer1_1;
        num2 = 7;
        tmp16 = AnimatedDivision(outer1_1[7]);
        prototype = tmp16.prototype;
        tmp17 = new.target;
        tmp18 = new.target;
        tmp19 = arg0;
        tmp16 = new tmp16(arg0);
      }
      tmp2Result._a = tmp16;
      tmp23 = arg1;
      if ("number" === typeof arg1) {
        tmp21 = AnimatedDivision;
        tmp22 = outer1_1;
        num3 = 7;
        tmp23 = AnimatedDivision(outer1_1[7]);
        prototype2 = tmp23.prototype;
        tmp24 = new.target;
        tmp25 = new.target;
        tmp26 = arg1;
        tmp23 = new tmp23(arg1);
      }
      tmp2Result._b = tmp23;
      return tmp2Result;
    }
  }
  callback2(AnimatedDivision, arg0);
  let obj = {
    key: "__makeNative",
    value: function __makeNative(arg0) {
      const _a = this._a;
      _a.__makeNative(arg0);
      const _b = this._b;
      _b.__makeNative(arg0);
      const items = [arg0];
      outer1_9(AnimatedDivision, "__makeNative", this, 3)(items);
    }
  };
  let items = [obj, , , , , ];
  obj = {
    key: "__getValue",
    value: function __getValue() {
      let _a;
      let _b;
      const self = this;
      ({ _a, _b } = this);
      const __getValueResult1 = _b.__getValue();
      if (0 === __getValueResult1) {
        let num = 0;
        if (!self._warnedAboutDivideByZero) {
          const _console = console;
          console.error("Detected division by zero in AnimatedDivision");
          self._warnedAboutDivideByZero = true;
          num = 0;
        }
      } else {
        self._warnedAboutDivideByZero = false;
        num = __getValueResult / __getValueResult1;
      }
      return num;
    }
  };
  items[1] = obj;
  obj = {
    key: "interpolate",
    value: function interpolate(arg0) {
      let tmp = AnimatedDivision(outer1_1[8]);
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
      outer1_9(AnimatedDivision, "__attach", this, 3)([]);
    }
  };
  items[4] = {
    key: "__detach",
    value: function __detach() {
      const _a = this._a;
      _a.__removeChild(this);
      const _b = this._b;
      _b.__removeChild(this);
      outer1_9(AnimatedDivision, "__detach", this, 3)([]);
    }
  };
  items[5] = {
    key: "__getNativeConfig",
    value: function __getNativeConfig() {
      const obj = { type: "division" };
      const _a = this._a;
      const items = [_a.__getNativeTag(), ];
      const _b = this._b;
      items[1] = _b.__getNativeTag();
      obj.input = items;
      obj.debugID = this.__getDebugID();
      return obj;
    }
  };
  return callback(AnimatedDivision, items);
})(require("_isNativeReflectConstruct"));
