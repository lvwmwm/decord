// Module ID: 373
// Function ID: 5533
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 373 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _superPropGet(arg0, arg1, arg2, arg3) {
  arg1 = arg2;
  let prototype = arg0;
  if (1) {
    prototype = arg0.prototype;
  }
  const tmpResult = closure_8(closure_7(prototype), arg1, arg2);
  const importDefault = tmpResult;
  let fn = tmpResult;
  if (2) {
    fn = tmpResult;
    if ("function" === typeof tmpResult) {
      fn = (arg0) => tmpResult.apply(arg2, arg0);
    }
  }
  return fn;
}
function _connectAnimatedView2(instance) {
  const self = this;
  importDefault(dependencyMap[15])(this.__isNative, "Expected node to be marked as \"native\"");
  const findNodeHandleResult = arg1(dependencyMap[16]).findNodeHandle(instance.instance);
  if (null == findNodeHandleResult) {
    const _Error = Error;
    const error = new Error("Unable to locate attached view in the native tree");
    throw error;
  } else {
    const API = importDefault(dependencyMap[14]).API;
    const result = API.connectAnimatedNodeToView(self.__getNativeTag(), findNodeHandleResult);
    instance.connectedViewTag = findNodeHandleResult;
  }
  const obj = arg1(dependencyMap[16]);
}
function _disconnectAnimatedView2(connectedViewTag) {
  const self = this;
  importDefault(dependencyMap[15])(this.__isNative, "Expected node to be marked as \"native\"");
  connectedViewTag = connectedViewTag.connectedViewTag;
  if (null != connectedViewTag) {
    const API = importDefault(dependencyMap[14]).API;
    const result = API.disconnectAnimatedNodeFromView(self.__getNativeTag(), connectedViewTag);
    connectedViewTag.connectedViewTag = null;
  }
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
let closure_11 = importDefaultResult("callback");
let closure_12 = importDefaultResult("nodeKeys");
let closure_13 = importDefaultResult("nodes");
let closure_14 = importDefaultResult("props");
let closure_15 = importDefaultResult("target");
let closure_16 = importDefaultResult("connectAnimatedView");
let closure_17 = importDefaultResult("disconnectAnimatedView");
let fn = Object.hasOwn;
if (null == fn) {
  fn = (arg0, arg1) => hasOwnProperty.call(arg0, arg1);
}

export default (arg0) => {
  class AnimatedProps {
    constructor(arg0, arg1, arg2, arg3) {
      self = this;
      tmp = closure_4(this, AnimatedProps);
      items = [];
      items[0] = arg3;
      obj = closure_7(AnimatedProps);
      tmp2 = closure_6;
      if (closure_20()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_7;
        constructResult = Reflect.construct(obj, items, closure_7(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      obj = { value: closure_23 };
      definePropertyResult = Object.defineProperty(tmp2Result, closure_17, obj);
      obj1 = { value: closure_22 };
      definePropertyResult1 = Object.defineProperty(tmp2Result, closure_16, obj1);
      tmp9 = closure_11;
      definePropertyResult2 = Object.defineProperty(tmp2Result, closure_11, { writable: true, value: undefined });
      tmp11 = closure_12;
      definePropertyResult3 = Object.defineProperty(tmp2Result, closure_12, { writable: true, value: undefined });
      tmp13 = closure_13;
      definePropertyResult4 = Object.defineProperty(tmp2Result, closure_13, { writable: true, value: undefined });
      tmp15 = closure_14;
      definePropertyResult5 = Object.defineProperty(tmp2Result, closure_14, { writable: true, value: undefined });
      definePropertyResult6 = Object.defineProperty(tmp2Result, closure_15, { 1644126463: 131122.52832032426, 1711236095: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000239785558174 });
      items1 = [];
      items2 = [];
      obj2 = {};
      keys = Object.keys(arg0);
      length = keys.length;
      num = 0;
      if (0 < length) {
        while (true) {
          tmp19 = keys[num];
          tmp20 = arg0[tmp19];
          if (null != arg2) {
            tmp21 = closure_19;
            if (!closure_19(arg2, tmp19)) {
              obj2[tmp19] = tmp20;
              tmp22 = tmp18;
            }
            num = num + 1;
            tmp18 = tmp22;
            if (num >= length) {
              break;
            }
          }
          if ("style" === tmp19) {
            tmp28 = tmp20;
            tmp29 = tmp18;
            if ("object" === typeof tmp20) {
              tmp28 = tmp20;
              tmp29 = tmp18;
              if (null != tmp20) {
                tmp30 = closure_1;
                tmp31 = closure_2;
                tmp32 = closure_1(closure_2[9])(tmp20);
                obj6 = closure_1(closure_2[10]);
                style = undefined;
                if (null != arg2) {
                  style = arg2.style;
                }
                fromResult = obj6.from(tmp32, style, tmp20);
                tmp28 = tmp32;
                tmp29 = tmp32;
              }
            }
          } else {
            tmp23 = closure_1;
            tmp24 = closure_2;
            fromResult = tmp20;
            if (!(tmp20 instanceof closure_1(closure_2[11]))) {
              tmp26 = closure_1;
              tmp27 = closure_2;
              obj5 = closure_1(closure_2[12]);
              fromResult = obj5.from(tmp20);
            }
            tmp28 = tmp20;
            tmp29 = tmp18;
          }
          if (null == fromResult) {
            obj2[tmp19] = tmp28;
            tmp37 = fromResult;
            tmp22 = tmp29;
          } else {
            arr = items1.push(tmp19);
            arr1 = items2.push(fromResult);
            obj2[tmp19] = fromResult;
            tmp36 = fromResult;
            tmp22 = tmp29;
          }
        }
      }
      items3 = [, , ];
      items3[0] = items1;
      items3[1] = items2;
      items3[2] = obj2;
      tmp38 = closure_3(items3, 3);
      [tmp39, tmp40, tmp41] = tmp38;
      closure_10(tmp2Result, tmp11)[tmp11] = tmp39;
      closure_10(tmp2Result, tmp13)[tmp13] = tmp40;
      closure_10(tmp2Result, tmp15)[tmp15] = tmp41;
      closure_10(tmp2Result, tmp9)[tmp9] = arg1;
      return tmp2Result;
    }
  }
  const arg1 = AnimatedProps;
  callback2(AnimatedProps, arg0);
  let obj = {
    key: "__getValue",
    value: function __getValue() {
      const obj = {};
      const keys = Object.keys(callback5(this, closure_14)[closure_14]);
      for (let num = 0; num < length; num = num + 1) {
        let tmp = keys[num];
        let tmp2 = callback5;
        let tmp3 = closure_14;
        let obj2 = callback5(this, closure_14)[closure_14][tmp];
        let tmp4 = callback;
        let tmp5 = closure_2;
        if (obj2 instanceof callback(closure_2[11])) {
          obj[tmp] = obj2.__getValue();
        } else {
          let tmp6 = AnimatedProps;
          let tmp7 = closure_2;
          if (obj2 instanceof AnimatedProps(closure_2[13]).AnimatedEvent) {
            obj[tmp] = obj2.__getHandler();
          } else {
            obj[tmp] = obj2;
          }
        }
      }
      return obj;
    }
  };
  const items = [obj, , , , , , , , , , ];
  obj = {
    key: "__getValueWithStaticProps",
    value: function __getValueWithStaticProps(style) {
      let tmp15;
      let merged = Object.assign({}, style);
      const keys = Object.keys(style);
      let num = 0;
      if (0 < keys.length) {
        while (true) {
          let tmp4 = keys[num];
          let tmp5 = callback5;
          let tmp6 = closure_14;
          merged = callback5(this, closure_14)[closure_14][tmp4];
          if ("style" === tmp4) {
            style = style.style;
            let tmp13 = callback;
            let tmp14 = closure_2;
            tmp15 = callback(closure_2[9])(style);
            if (merged instanceof callback(closure_2[10])) {
              break;
            } else {
              merged[tmp4] = tmp15;
              let tmp11 = style;
              let tmp12 = tmp15;
            }
          } else {
            let tmp7 = callback;
            let tmp8 = closure_2;
            if (merged instanceof callback(closure_2[11])) {
              merged[tmp4] = merged.__getValue();
              tmp11 = tmp2;
              tmp12 = tmp3;
            } else {
              let tmp9 = AnimatedProps;
              let tmp10 = closure_2;
              tmp11 = tmp2;
              tmp12 = tmp3;
              if (merged instanceof AnimatedProps(closure_2[13]).AnimatedEvent) {
                merged[tmp4] = merged.__getHandler();
                tmp11 = tmp2;
                tmp12 = tmp3;
              }
            }
          }
          num = num + 1;
          let tmp2 = tmp11;
          let tmp3 = tmp12;
        }
        if (null == tmp15) {
          merged = {};
        } else {
          merged = tmp15;
          if (tmp15 === style) {
            const _Object = Object;
            merged = Object.assign({}, tmp15);
          }
        }
        const result = merged.__replaceAnimatedNodeWithValues(merged);
        merged[tmp4] = merged.__getValueForStyle(merged);
      }
      return merged;
    }
  };
  items[1] = obj;
  obj = {
    key: "__getNativeAnimatedEventTuples",
    value: function __getNativeAnimatedEventTuples() {
      const items = [];
      const keys = Object.keys(callback5(this, closure_14)[closure_14]);
      for (let num = 0; num < length; num = num + 1) {
        let tmp = keys[num];
        let tmp2 = callback5;
        let tmp3 = closure_14;
        let tmp4 = callback5(this, closure_14)[closure_14][tmp];
        let tmp5 = AnimatedProps;
        let tmp6 = closure_2;
        let tmp7 = tmp4 instanceof AnimatedProps(closure_2[13]).AnimatedEvent && tmp4.__isNative;
        if (tmp7) {
          let items1 = [tmp, tmp4];
          let arr = items.push(items1);
        }
      }
      return items;
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
      callback8(AnimatedProps, "__attach", self, 3)([]);
    }
  };
  items[5] = {
    key: "__detach",
    value: function __detach() {
      const self = this;
      let __isNative = this.__isNative;
      if (__isNative) {
        __isNative = null != callback5(self, closure_15)[closure_15];
      }
      if (__isNative) {
        callback5(self, closure_17)[closure_17](callback5(self, closure_15)[closure_15]);
        const tmp6 = callback5(self, closure_17);
      }
      callback5(self, closure_15)[closure_15] = null;
      const arr = callback5(self, closure_13)[closure_13];
      for (let num = 0; num < length; num = num + 1) {
        let obj = arr[num];
        let __removeChildResult = obj.__removeChild(self);
      }
      callback8(AnimatedProps, "__detach", self, 3)([]);
    }
  };
  items[6] = {
    key: "update",
    value: function update() {
      callback5(this, closure_11)[closure_11]();
    }
  };
  items[7] = {
    key: "__makeNative",
    value: function __makeNative(arg0) {
      const self = this;
      const arr = callback5(this, closure_13)[closure_13];
      for (let num = 0; num < length; num = num + 1) {
        let obj = arr[num];
        let __makeNativeResult = obj.__makeNative(arg0);
      }
      if (!self.__isNative) {
        self.__isNative = true;
        const items = [arg0];
        callback8(AnimatedProps, "__setPlatformConfig", self, 3)(items);
        if (null != callback5(self, closure_15)[closure_15]) {
          callback5(self, closure_16)[closure_16](callback5(self, closure_15)[closure_15]);
          const tmp11 = callback5(self, closure_16);
        }
      }
    }
  };
  items[8] = {
    key: "setNativeView",
    value: function setNativeView(instance) {
      const self = this;
      const tmp = callback5(this, closure_15)[closure_15];
      instance = undefined;
      if (null != tmp) {
        instance = tmp.instance;
      }
      if (instance !== instance) {
        const obj = { instance, connectedViewTag: null };
        callback5(self, closure_15)[closure_15] = obj;
        if (self.__isNative) {
          callback5(self, closure_16)[closure_16](callback5(self, closure_15)[closure_15]);
          const tmp7 = callback5(self, closure_16);
        }
      }
    }
  };
  items[9] = {
    key: "__restoreDefaultValues",
    value: function __restoreDefaultValues() {
      const self = this;
      if (this.__isNative) {
        const API = callback(closure_2[14]).API;
        API.restoreDefaultValues(self.__getNativeTag());
      }
    }
  };
  items[10] = {
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
      obj = { type: "props", props: obj, debugID: self.__getDebugID() };
      return obj;
    }
  };
  return callback(AnimatedProps, items);
}(importDefault(dependencyMap[11]));
