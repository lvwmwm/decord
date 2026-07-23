// Module ID: 375
// Function ID: 5573
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 102, 18, 99, 100, 31, 358, 357]

// Module 375 (_isNativeReflectConstruct)
import _classPrivateFieldBase from "_classPrivateFieldBase";
import _classPrivateFieldKey from "_classPrivateFieldKey";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _get from "_get";
import _inherits from "_inherits";
import closure_8 from "_classPrivateFieldBase";
import { isValidElement } from "result";

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
function isPlainObject(icon) {
  let isPrototypeOfResult = null !== icon;
  if (isPrototypeOfResult) {
    isPrototypeOfResult = "object" === typeof icon;
  }
  if (isPrototypeOfResult) {
    const _Object = Object;
    const prototypeOf = Object.getPrototypeOf(icon);
    const _Object2 = Object;
    isPrototypeOfResult = prototypeOf.isPrototypeOf(Object);
  }
  if (isPrototypeOfResult) {
    isPrototypeOfResult = !isValidElement(icon);
  }
  return isPrototypeOfResult;
}
function flatAnimatedNodes(arg0, items, arg2) {
  if (arguments.length > 1) {
    if (undefined !== arguments[1]) {
      items = arguments[1];
    }
    let num3 = 0;
    if (arguments.length > 2) {
      num3 = 0;
      if (undefined !== arguments[2]) {
        num3 = arguments[2];
      }
    }
    if (num3 >= 5) {
      return items;
    } else {
      if (arg0 instanceof importDefault(358)) {
        items.push(arg0);
      } else {
        const _Array = Array;
        if (Array.isArray(arg0)) {
          for (let num6 = 0; num6 < length2; num6 = num6 + 1) {
            let tmp5 = flatAnimatedNodes;
            let tmp6 = flatAnimatedNodes(arg0[num6], items, num3 + 1);
          }
          length2 = arg0.length;
        } else if (isPlainObject(arg0)) {
          const _Object = Object;
          const keys = Object.keys(arg0);
          for (let num5 = 0; num5 < length; num5 = num5 + 1) {
            let tmp3 = flatAnimatedNodes;
            let tmp4 = flatAnimatedNodes(arg0[keys[num5]], items, num3 + 1);
          }
          length = keys.length;
        }
      }
      return items;
    }
  }
  items = [];
}
function mapAnimatedNodes(arr, arg1, arg2) {
  const importDefault = arg1;
  let num = 0;
  if (arguments.length > 2) {
    num = 0;
    if (undefined !== arguments[2]) {
      num = arguments[2];
    }
  }
  if (num >= 5) {
    return arr;
  } else if (arr instanceof importDefault(num[9])) {
    return arg1(arr);
  } else {
    const _Array = Array;
    if (Array.isArray(arr)) {
      return arr.map((arg0) => outer1_15(arg0, closure_0, num + 1));
    } else if (isPlainObject(arr)) {
      const obj = {};
      const _Object = Object;
      const keys = Object.keys(arr);
      for (let num3 = 0; num3 < length; num3 = num3 + 1) {
        let tmp3 = keys[num3];
        let tmp4 = mapAnimatedNodes;
        obj[tmp3] = mapAnimatedNodes(arr[tmp3], arg1, num + 1);
      }
      return obj;
    } else {
      return arr;
    }
  }
}
let closure_10 = require("_classPrivateFieldKey")("nodes");

export default ((arg0) => {
  class AnimatedObject {
    constructor(arg0, arg1, arg2) {
      self = this;
      tmp = outer1_2(this, AnimatedObject);
      items = [];
      items[0] = arg2;
      obj = outer1_5(AnimatedObject);
      tmp2 = outer1_4;
      if (outer1_11()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_5;
        constructResult = Reflect.construct(obj, items, outer1_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      definePropertyResult = Object.defineProperty(tmp2Result, outer1_10, { writable: true, value: undefined });
      outer1_8(tmp2Result, outer1_10)[outer1_10] = arg0;
      tmp2Result._value = arg1;
      return tmp2Result;
    }
  }
  callback2(AnimatedObject, arg0);
  let obj = {
    key: "__getValue",
    value: function __getValue() {
      return outer1_15(this._value, (__getValue) => __getValue.__getValue());
    }
  };
  let items = [obj, , , , , , ];
  obj = {
    key: "__getValueWithStaticObject",
    value: function __getValueWithStaticObject(arg0) {
      let closure_0 = outer1_8(this, outer1_10)[outer1_10];
      let c1 = 0;
      return outer1_15(arg0, () => {
        let closure_1 = tmp + 1;
        return table[+closure_1].__getValue();
      });
    }
  };
  items[1] = obj;
  obj = {
    key: "__getAnimatedValue",
    value: function __getAnimatedValue() {
      return outer1_15(this._value, (__getAnimatedValue) => __getAnimatedValue.__getAnimatedValue());
    }
  };
  items[2] = obj;
  items[3] = {
    key: "__attach",
    value: function __attach() {
      const self = this;
      const arr = outer1_8(this, outer1_10)[outer1_10];
      for (let num = 0; num < length; num = num + 1) {
        let obj = arr[num];
        let __addChildResult = obj.__addChild(self);
      }
      outer1_12(AnimatedObject, "__attach", self, 3)([]);
    }
  };
  items[4] = {
    key: "__detach",
    value: function __detach() {
      const self = this;
      const arr = outer1_8(this, outer1_10)[outer1_10];
      for (let num = 0; num < length; num = num + 1) {
        let obj = arr[num];
        let __removeChildResult = obj.__removeChild(self);
      }
      outer1_12(AnimatedObject, "__detach", self, 3)([]);
    }
  };
  items[5] = {
    key: "__makeNative",
    value: function __makeNative(arg0) {
      const self = this;
      const arr = outer1_8(this, outer1_10)[outer1_10];
      for (let num = 0; num < length; num = num + 1) {
        let obj = arr[num];
        let __makeNativeResult = obj.__makeNative(arg0);
      }
      const items = [arg0];
      outer1_12(AnimatedObject, "__makeNative", self, 3)(items);
    }
  };
  items[6] = {
    key: "__getNativeConfig",
    value: function __getNativeConfig() {
      return { type: "object", value: outer1_15(this._value, (__getNativeTag) => ({ nodeTag: __getNativeTag.__getNativeTag() })), debugID: this.__getDebugID() };
    }
  };
  const items1 = [
    {
      key: "from",
      value: function from(_value) {
        const arr = outer1_14(_value);
        let tmp = null;
        if (0 !== arr.length) {
          const prototype = AnimatedObject.prototype;
          tmp = new AnimatedObject(arr, _value);
        }
        return tmp;
      }
    }
  ];
  return callback(AnimatedObject, items, items1);
})(require("_isNativeReflectConstruct"));
export { isPlainObject };
