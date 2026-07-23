// Module ID: 374
// Function ID: 5555
// Name: _isNativeReflectConstruct
// Dependencies: [57, 6, 7, 15, 17, 102, 18, 99, 100, 79, 375, 376, 358, 357]

// Module 374 (_isNativeReflectConstruct)
import _slicedToArray from "_slicedToArray";
import _inherits from "_inherits";
import _classPrivateFieldBase from "_classPrivateFieldBase";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _get from "_get";
import closure_9 from "_inherits";
import closure_10 from "_classPrivateFieldBase";
import importDefaultResult from "_classPrivateFieldKey";

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
  const importAll = tmpResult;
  let fn = tmpResult;
  if (2) {
    fn = tmpResult;
    if ("function" === typeof tmpResult) {
      fn = (arg0) => tmpResult.apply(closure_0, arg0);
    }
  }
  return fn;
}
let closure_11 = importDefaultResult("originalStyleForWeb");
let closure_12 = importDefaultResult("nodeKeys");
let closure_13 = importDefaultResult("nodes");
let closure_14 = importDefaultResult("style");
let fn = Object.hasOwn;
if (null == fn) {
  fn = (arg0, arg1) => hasOwnProperty.call(arg0, arg1);
}

export default ((arg0) => {
  class AnimatedStyle {
    constructor(arg0, arg1, arg2, arg3, arg4) {
      self = this;
      tmp = outer1_4(this, AnimatedStyle);
      items = [];
      items[0] = arg4;
      obj = outer1_7(AnimatedStyle);
      tmp2 = outer1_6;
      if (outer1_17()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_7;
        constructResult = Reflect.construct(obj, items, outer1_7(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      definePropertyResult = Object.defineProperty(tmp2Result, outer1_11, { writable: true, value: undefined });
      definePropertyResult1 = Object.defineProperty(tmp2Result, outer1_12, { writable: true, value: undefined });
      definePropertyResult2 = Object.defineProperty(tmp2Result, outer1_13, { writable: true, value: undefined });
      definePropertyResult3 = Object.defineProperty(tmp2Result, outer1_14, { writable: true, value: undefined });
      outer1_10(tmp2Result, outer1_12)[outer1_12] = arg0;
      outer1_10(tmp2Result, outer1_13)[outer1_13] = arg1;
      outer1_10(tmp2Result, outer1_14)[outer1_14] = arg2;
      return tmp2Result;
    }
  }
  callback2(AnimatedStyle, arg0);
  let obj = {
    key: "__getValue",
    value: function __getValue() {
      const self = this;
      const obj = {};
      const keys = Object.keys(outer1_10(this, outer1_14)[outer1_14]);
      for (let num = 0; num < length; num = num + 1) {
        let tmp = keys[num];
        let tmp2 = outer1_10;
        let tmp3 = outer1_14;
        let obj2 = outer1_10(self, outer1_14)[outer1_14][tmp];
        let tmp4 = AnimatedStyle;
        let tmp5 = outer1_2;
        if (obj2 instanceof AnimatedStyle(outer1_2[12])) {
          obj[tmp] = obj2.__getValue();
        } else {
          obj[tmp] = obj2;
        }
      }
      return self.__getValueForStyle(obj);
    }
  };
  let items = [obj, , , , , , , ];
  obj = {
    key: "__getValueForStyle",
    value: function __getValueForStyle(merged) {
      return merged;
    }
  };
  items[1] = obj;
  obj = {
    key: "__replaceAnimatedNodeWithValues",
    value: function __replaceAnimatedNodeWithValues(merged) {
      let obj;
      let tmp;
      const keys = Object.keys(merged);
      let num = 0;
      if (0 < keys.length) {
        while (true) {
          tmp = keys[num];
          let tmp2 = outer1_10;
          let tmp3 = outer1_14;
          obj = outer1_10(this, outer1_14)[outer1_14][tmp];
          if ("transform" === tmp) {
            let tmp4 = AnimatedStyle;
            let tmp5 = outer1_2;
            if (obj instanceof AnimatedStyle(outer1_2[11])) {
              break;
            }
          }
          let tmp6 = AnimatedStyle;
          let tmp7 = outer1_2;
          if (obj instanceof AnimatedStyle(outer1_2[10])) {
            merged[tmp] = obj.__getValueWithStaticObject(merged[tmp]);
          } else {
            let tmp8 = AnimatedStyle;
            let tmp9 = outer1_2;
            if (obj instanceof AnimatedStyle(outer1_2[12])) {
              merged[tmp] = obj.__getValue();
            }
          }
          num = num + 1;
        }
        const _Array = Array;
        merged[tmp] = obj.__getValueWithStaticTransforms(Array.isArray(merged[tmp]) ? merged[tmp] : []);
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "__getAnimatedValue",
    value: function __getAnimatedValue() {
      const obj = {};
      const arr = outer1_10(this, outer1_13)[outer1_13];
      for (let num = 0; num < length; num = num + 1) {
        let obj2 = arr[num];
        obj[tmp[num]] = obj2.__getAnimatedValue();
      }
      return obj;
    }
  };
  items[4] = {
    key: "__attach",
    value: function __attach() {
      const self = this;
      const arr = outer1_10(this, outer1_13)[outer1_13];
      for (let num = 0; num < length; num = num + 1) {
        let obj = arr[num];
        let __addChildResult = obj.__addChild(self);
      }
      outer1_18(AnimatedStyle, "__attach", self, 3)([]);
    }
  };
  items[5] = {
    key: "__detach",
    value: function __detach() {
      const self = this;
      const arr = outer1_10(this, outer1_13)[outer1_13];
      for (let num = 0; num < length; num = num + 1) {
        let obj = arr[num];
        let __removeChildResult = obj.__removeChild(self);
      }
      outer1_18(AnimatedStyle, "__detach", self, 3)([]);
    }
  };
  items[6] = {
    key: "__makeNative",
    value: function __makeNative(arg0) {
      const self = this;
      const arr = outer1_10(this, outer1_13)[outer1_13];
      for (let num = 0; num < length; num = num + 1) {
        let obj = arr[num];
        let __makeNativeResult = obj.__makeNative(arg0);
      }
      const items = [arg0];
      outer1_18(AnimatedStyle, "__makeNative", self, 3)(items);
    }
  };
  items[7] = {
    key: "__getNativeConfig",
    value: function __getNativeConfig() {
      const self = this;
      let obj = {};
      const arr = outer1_10(this, outer1_13)[outer1_13];
      for (let num = 0; num < length; num = num + 1) {
        let obj2 = arr[num];
        let __makeNativeResult = obj2.__makeNative(__getPlatformConfigResult);
        obj[tmp2[num]] = obj2.__getNativeTag();
      }
      obj = { type: "style", style: obj, debugID: self.__getDebugID() };
      return obj;
    }
  };
  let items1 = [
    {
      key: "from",
      value: function from(arg0, arg1, arg2) {
        let tmp2;
        if (null == arg0) {
          return null;
        } else {
          const items = [];
          const items1 = [];
          let obj = {};
          const _Object = Object;
          const keys = Object.keys(arg0);
          let num = 0;
          if (0 < keys.length) {
            while (true) {
              let tmp = keys[num];
              tmp2 = arg0[tmp];
              if (null != arg1) {
                let tmp3 = outer1_16;
                if (!outer1_16(arg1, tmp)) {
                  obj[tmp] = tmp2;
                }
                num = num + 1;
              }
              if (null != tmp2) {
                if ("transform" === tmp) {
                  break;
                }
              }
              let tmp4 = AnimatedStyle;
              let tmp5 = outer1_2;
              let fromResult = tmp2;
              if (!(tmp2 instanceof AnimatedStyle(outer1_2[12]))) {
                let tmp7 = AnimatedStyle;
                let tmp8 = outer1_2;
                obj = AnimatedStyle(outer1_2[10]);
                fromResult = obj.from(tmp2);
              }
              if (null == fromResult) {
                obj[tmp] = tmp2;
                let tmp17 = fromResult;
              } else {
                let arr = items.push(tmp);
                arr = items1.push(fromResult);
                obj[tmp] = fromResult;
                let tmp16 = fromResult;
              }
            }
            let tmp11 = AnimatedStyle;
            let from = outer1_2;
            if (obj2.shouldUseAnimatedObjectForTransform()) {
              tmp11 = tmp11(from[10]);
              from = tmp11.from;
              let fromResult1 = from(tmp2);
            } else {
              fromResult1 = tmp11(from[11]).from(tmp2);
              const tmp11Result = tmp11(from[11]);
            }
            obj2 = outer1_1(outer1_2[9]);
          }
          const items2 = [items, items1, obj];
          const tmp19 = outer1_3(items2, 3);
          const first = tmp19[0];
          let tmp22 = null;
          if (0 !== tmp19[1].length) {
            const prototype = AnimatedStyle.prototype;
            tmp22 = new AnimatedStyle(first, arr2, tmp21, arg2);
          }
          return tmp22;
        }
      }
    }
  ];
  return callback(AnimatedStyle, items, items1);
})(require("_isNativeReflectConstruct"));
