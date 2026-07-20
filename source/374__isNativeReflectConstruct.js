// Module ID: 374
// Function ID: 5555
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 374 (_isNativeReflectConstruct)
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
  const tmpResult = closure_8(closure_7(prototype), arg1, arg2);
  const importAll = tmpResult;
  let fn = tmpResult;
  if (2) {
    fn = tmpResult;
    if ("function" === typeof tmpResult) {
      fn = (arg0) => tmpResult.apply(arg2, arg0);
    }
  }
  return fn;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
const importDefaultResult = importDefault(dependencyMap[8]);
let closure_11 = importDefaultResult("originalStyleForWeb");
let closure_12 = importDefaultResult("nodeKeys");
let closure_13 = importDefaultResult("nodes");
let closure_14 = importDefaultResult("style");
let fn = Object.hasOwn;
if (null == fn) {
  fn = (arg0, arg1) => hasOwnProperty.call(arg0, arg1);
}

export default (arg0) => {
  class AnimatedStyle {
    constructor(arg0, arg1, arg2, arg3, arg4) {
      self = this;
      tmp = closure_4(this, AnimatedStyle);
      items = [];
      items[0] = arg4;
      obj = closure_7(AnimatedStyle);
      tmp2 = closure_6;
      if (closure_17()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_7;
        constructResult = Reflect.construct(obj, items, closure_7(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      definePropertyResult = Object.defineProperty(tmp2Result, closure_11, { writable: true, value: undefined });
      definePropertyResult1 = Object.defineProperty(tmp2Result, closure_12, { writable: true, value: undefined });
      definePropertyResult2 = Object.defineProperty(tmp2Result, closure_13, { writable: true, value: undefined });
      definePropertyResult3 = Object.defineProperty(tmp2Result, closure_14, { writable: true, value: undefined });
      closure_10(tmp2Result, closure_12)[closure_12] = arg0;
      closure_10(tmp2Result, closure_13)[closure_13] = arg1;
      closure_10(tmp2Result, closure_14)[closure_14] = arg2;
      return tmp2Result;
    }
  }
  const importDefault = AnimatedStyle;
  callback2(AnimatedStyle, arg0);
  let obj = {
    key: "__getValue",
    value: function __getValue() {
      const self = this;
      const obj = {};
      const keys = Object.keys(callback5(this, closure_14)[closure_14]);
      for (let num = 0; num < length; num = num + 1) {
        let tmp = keys[num];
        let tmp2 = callback5;
        let tmp3 = closure_14;
        let obj2 = callback5(self, closure_14)[closure_14][tmp];
        let tmp4 = AnimatedStyle;
        let tmp5 = closure_2;
        if (obj2 instanceof AnimatedStyle(closure_2[12])) {
          obj[tmp] = obj2.__getValue();
        } else {
          obj[tmp] = obj2;
        }
      }
      return self.__getValueForStyle(obj);
    }
  };
  const items = [obj, , , , , , , ];
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
          let tmp2 = callback5;
          let tmp3 = closure_14;
          obj = callback5(this, closure_14)[closure_14][tmp];
          if ("transform" === tmp) {
            let tmp4 = AnimatedStyle;
            let tmp5 = closure_2;
            if (obj instanceof AnimatedStyle(closure_2[11])) {
              break;
            }
          }
          let tmp6 = AnimatedStyle;
          let tmp7 = closure_2;
          if (obj instanceof AnimatedStyle(closure_2[10])) {
            merged[tmp] = obj.__getValueWithStaticObject(merged[tmp]);
          } else {
            let tmp8 = AnimatedStyle;
            let tmp9 = closure_2;
            if (obj instanceof AnimatedStyle(closure_2[12])) {
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
      const arr = callback5(this, closure_13)[closure_13];
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
      const arr = callback5(this, closure_13)[closure_13];
      for (let num = 0; num < length; num = num + 1) {
        let obj = arr[num];
        let __addChildResult = obj.__addChild(self);
      }
      callback8(AnimatedStyle, "__attach", self, 3)([]);
    }
  };
  items[5] = {
    key: "__detach",
    value: function __detach() {
      const self = this;
      const arr = callback5(this, closure_13)[closure_13];
      for (let num = 0; num < length; num = num + 1) {
        let obj = arr[num];
        let __removeChildResult = obj.__removeChild(self);
      }
      callback8(AnimatedStyle, "__detach", self, 3)([]);
    }
  };
  items[6] = {
    key: "__makeNative",
    value: function __makeNative(arg0) {
      const self = this;
      const arr = callback5(this, closure_13)[closure_13];
      for (let num = 0; num < length; num = num + 1) {
        let obj = arr[num];
        let __makeNativeResult = obj.__makeNative(arg0);
      }
      const items = [arg0];
      callback8(AnimatedStyle, "__makeNative", self, 3)(items);
    }
  };
  items[7] = {
    key: "__getNativeConfig",
    value: function __getNativeConfig() {
      const self = this;
      let obj = {};
      const arr = callback5(this, closure_13)[closure_13];
      for (let num = 0; num < length; num = num + 1) {
        let obj2 = arr[num];
        let __makeNativeResult = obj2.__makeNative(__getPlatformConfigResult);
        obj[tmp2[num]] = obj2.__getNativeTag();
      }
      obj = { type: "style", style: obj, debugID: self.__getDebugID() };
      return obj;
    }
  };
  const items1 = [
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
                let tmp3 = callback6;
                if (!callback6(arg1, tmp)) {
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
              let tmp5 = closure_2;
              let fromResult = tmp2;
              if (!(tmp2 instanceof AnimatedStyle(closure_2[12]))) {
                let tmp7 = AnimatedStyle;
                let tmp8 = closure_2;
                obj = AnimatedStyle(closure_2[10]);
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
            let from = closure_2;
            if (obj2.shouldUseAnimatedObjectForTransform()) {
              tmp11 = tmp11(from[10]);
              from = tmp11.from;
              let fromResult1 = from(tmp2);
            } else {
              fromResult1 = tmp11(from[11]).from(tmp2);
              const tmp11Result = tmp11(from[11]);
            }
            const obj2 = callback(closure_2[9]);
          }
          const items2 = [items, items1, obj];
          const tmp19 = callback2(items2, 3);
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
}(importDefault(dependencyMap[13]));
