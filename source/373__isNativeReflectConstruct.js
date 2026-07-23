// Module ID: 373
// Function ID: 5533
// Name: _isNativeReflectConstruct
// Dependencies: [57, 6, 7, 15, 17, 102, 18, 99, 100, 147, 374, 358, 375, 377, 348, 44, 117]

// Module 373 (_isNativeReflectConstruct)
import _slicedToArray from "_slicedToArray";
import _inherits from "_inherits";
import _classPrivateFieldBase from "_classPrivateFieldBase";
import invariant from "invariant";
import _getPrototypeOf from "_getPrototypeOf";
import _get from "_get";
import closure_9 from "_inherits";
import closure_10 from "_classPrivateFieldBase";
import importDefaultResult from "_classPrivateFieldKey";

const require = arg1;
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
  const importDefault = tmpResult;
  let fn = tmpResult;
  if (2) {
    fn = tmpResult;
    if ("function" === typeof tmpResult) {
      fn = (arg0) => tmpResult.apply(closure_0, arg0);
    }
  }
  return fn;
}
function _connectAnimatedView2(instance) {
  const self = this;
  importDefault(44)(this.__isNative, "Expected node to be marked as \"native\"");
  const findNodeHandleResult = require(117) /* renderElement */.findNodeHandle(instance.instance);
  if (null == findNodeHandleResult) {
    const _Error = Error;
    const error = new Error("Unable to locate attached view in the native tree");
    throw error;
  } else {
    const API = importDefault(348).API;
    const result = API.connectAnimatedNodeToView(self.__getNativeTag(), findNodeHandleResult);
    instance.connectedViewTag = findNodeHandleResult;
  }
  const obj = require(117) /* renderElement */;
}
function _disconnectAnimatedView2(connectedViewTag) {
  const self = this;
  importDefault(44)(this.__isNative, "Expected node to be marked as \"native\"");
  connectedViewTag = connectedViewTag.connectedViewTag;
  if (null != connectedViewTag) {
    const API = importDefault(348).API;
    const result = API.disconnectAnimatedNodeFromView(self.__getNativeTag(), connectedViewTag);
    connectedViewTag.connectedViewTag = null;
  }
}
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

export default ((arg0) => {
  class AnimatedProps {
    constructor(arg0, arg1, arg2, arg3) {
      self = this;
      tmp = outer1_4(this, AnimatedProps);
      items = [];
      items[0] = arg3;
      obj = outer1_7(AnimatedProps);
      tmp2 = outer1_6;
      if (outer1_20()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_7;
        constructResult = Reflect.construct(obj, items, outer1_7(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      obj = { value: outer1_23 };
      definePropertyResult = Object.defineProperty(tmp2Result, outer1_17, obj);
      obj1 = { value: outer1_22 };
      definePropertyResult1 = Object.defineProperty(tmp2Result, outer1_16, obj1);
      tmp9 = outer1_11;
      definePropertyResult2 = Object.defineProperty(tmp2Result, outer1_11, { writable: true, value: undefined });
      tmp11 = outer1_12;
      definePropertyResult3 = Object.defineProperty(tmp2Result, outer1_12, { writable: true, value: undefined });
      tmp13 = outer1_13;
      definePropertyResult4 = Object.defineProperty(tmp2Result, outer1_13, { writable: true, value: undefined });
      tmp15 = outer1_14;
      definePropertyResult5 = Object.defineProperty(tmp2Result, outer1_14, { writable: true, value: undefined });
      definePropertyResult6 = Object.defineProperty(tmp2Result, outer1_15, { writable: true, value: null });
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
            tmp21 = outer1_19;
            if (!outer1_19(arg2, tmp19)) {
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
                tmp30 = outer1_1;
                tmp31 = outer1_2;
                tmp32 = outer1_1(outer1_2[9])(tmp20);
                obj6 = outer1_1(outer1_2[10]);
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
            tmp23 = outer1_1;
            tmp24 = outer1_2;
            fromResult = tmp20;
            if (!(tmp20 instanceof outer1_1(outer1_2[11]))) {
              tmp26 = outer1_1;
              tmp27 = outer1_2;
              obj5 = outer1_1(outer1_2[12]);
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
      tmp38 = outer1_3(items3, 3);
      [tmp39, tmp40, tmp41] = tmp38;
      outer1_10(tmp2Result, tmp11)[tmp11] = tmp39;
      outer1_10(tmp2Result, tmp13)[tmp13] = tmp40;
      outer1_10(tmp2Result, tmp15)[tmp15] = tmp41;
      outer1_10(tmp2Result, tmp9)[tmp9] = arg1;
      return tmp2Result;
    }
  }
  callback2(AnimatedProps, arg0);
  let obj = {
    key: "__getValue",
    value: function __getValue() {
      const obj = {};
      const keys = Object.keys(outer1_10(this, outer1_14)[outer1_14]);
      for (let num = 0; num < length; num = num + 1) {
        let tmp = keys[num];
        let tmp2 = outer1_10;
        let tmp3 = outer1_14;
        let obj2 = outer1_10(this, outer1_14)[outer1_14][tmp];
        let tmp4 = outer1_1;
        let tmp5 = outer1_2;
        if (obj2 instanceof outer1_1(outer1_2[11])) {
          obj[tmp] = obj2.__getValue();
        } else {
          let tmp6 = AnimatedProps;
          let tmp7 = outer1_2;
          if (obj2 instanceof AnimatedProps(outer1_2[13]).AnimatedEvent) {
            obj[tmp] = obj2.__getHandler();
          } else {
            obj[tmp] = obj2;
          }
        }
      }
      return obj;
    }
  };
  let items = [obj, , , , , , , , , , ];
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
          let tmp5 = outer1_10;
          let tmp6 = outer1_14;
          merged = outer1_10(this, outer1_14)[outer1_14][tmp4];
          if ("style" === tmp4) {
            style = style.style;
            let tmp13 = outer1_1;
            let tmp14 = outer1_2;
            tmp15 = outer1_1(outer1_2[9])(style);
            if (merged instanceof outer1_1(outer1_2[10])) {
              break;
            } else {
              merged[tmp4] = tmp15;
              let tmp11 = style;
              let tmp12 = tmp15;
            }
          } else {
            let tmp7 = outer1_1;
            let tmp8 = outer1_2;
            if (merged instanceof outer1_1(outer1_2[11])) {
              merged[tmp4] = merged.__getValue();
              tmp11 = tmp2;
              tmp12 = tmp3;
            } else {
              let tmp9 = AnimatedProps;
              let tmp10 = outer1_2;
              tmp11 = tmp2;
              tmp12 = tmp3;
              if (merged instanceof AnimatedProps(outer1_2[13]).AnimatedEvent) {
                merged[tmp4] = merged.__getHandler();
                tmp11 = tmp2;
                tmp12 = tmp3;
              }
            }
          }
          num = num + 1;
          tmp2 = tmp11;
          tmp3 = tmp12;
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
      const keys = Object.keys(outer1_10(this, outer1_14)[outer1_14]);
      for (let num = 0; num < length; num = num + 1) {
        let tmp = keys[num];
        let tmp2 = outer1_10;
        let tmp3 = outer1_14;
        let tmp4 = outer1_10(this, outer1_14)[outer1_14][tmp];
        let tmp5 = AnimatedProps;
        let tmp6 = outer1_2;
        let tmp7 = tmp4 instanceof AnimatedProps(outer1_2[13]).AnimatedEvent && tmp4.__isNative;
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
      outer1_21(AnimatedProps, "__attach", self, 3)([]);
    }
  };
  items[5] = {
    key: "__detach",
    value: function __detach() {
      const self = this;
      let __isNative = this.__isNative;
      if (__isNative) {
        __isNative = null != outer1_10(self, outer1_15)[outer1_15];
      }
      if (__isNative) {
        outer1_10(self, outer1_17)[outer1_17](outer1_10(self, outer1_15)[outer1_15]);
        const tmp6 = outer1_10(self, outer1_17);
      }
      outer1_10(self, outer1_15)[outer1_15] = null;
      const arr = outer1_10(self, outer1_13)[outer1_13];
      for (let num = 0; num < length; num = num + 1) {
        let obj = arr[num];
        let __removeChildResult = obj.__removeChild(self);
      }
      outer1_21(AnimatedProps, "__detach", self, 3)([]);
    }
  };
  items[6] = {
    key: "update",
    value: function update() {
      outer1_10(this, outer1_11)[outer1_11]();
    }
  };
  items[7] = {
    key: "__makeNative",
    value: function __makeNative(arg0) {
      const self = this;
      const arr = outer1_10(this, outer1_13)[outer1_13];
      for (let num = 0; num < length; num = num + 1) {
        let obj = arr[num];
        let __makeNativeResult = obj.__makeNative(arg0);
      }
      if (!self.__isNative) {
        self.__isNative = true;
        const items = [arg0];
        outer1_21(AnimatedProps, "__setPlatformConfig", self, 3)(items);
        if (null != outer1_10(self, outer1_15)[outer1_15]) {
          outer1_10(self, outer1_16)[outer1_16](outer1_10(self, outer1_15)[outer1_15]);
          const tmp11 = outer1_10(self, outer1_16);
        }
      }
    }
  };
  items[8] = {
    key: "setNativeView",
    value: function setNativeView(instance) {
      const self = this;
      const tmp = outer1_10(this, outer1_15)[outer1_15];
      instance = undefined;
      if (null != tmp) {
        instance = tmp.instance;
      }
      if (instance !== instance) {
        const obj = { instance, connectedViewTag: null };
        outer1_10(self, outer1_15)[outer1_15] = obj;
        if (self.__isNative) {
          outer1_10(self, outer1_16)[outer1_16](outer1_10(self, outer1_15)[outer1_15]);
          const tmp7 = outer1_10(self, outer1_16);
        }
      }
    }
  };
  items[9] = {
    key: "__restoreDefaultValues",
    value: function __restoreDefaultValues() {
      const self = this;
      if (this.__isNative) {
        const API = outer1_1(outer1_2[14]).API;
        API.restoreDefaultValues(self.__getNativeTag());
      }
    }
  };
  items[10] = {
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
      obj = { type: "props", props: obj, debugID: self.__getDebugID() };
      return obj;
    }
  };
  return callback(AnimatedProps, items);
})(require("_assertNativeAnimatedModule"));
