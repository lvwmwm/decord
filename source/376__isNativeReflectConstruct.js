// Module ID: 376
// Function ID: 5597
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 102, 18, 99, 100, 358, 348, 357]

// Module 376 (_isNativeReflectConstruct)
import _classPrivateFieldBase from "_classPrivateFieldBase";
import _classPrivateFieldKey from "_classPrivateFieldKey";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _get from "_get";
import _inherits from "_inherits";
import closure_8 from "_classPrivateFieldBase";

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
function mapTransforms(arr) {
  let closure_0 = arg1;
  return arr.map((arg0) => {
    let obj = {};
    const keys = Object.keys();
    if (keys !== undefined) {
      while (keys[tmp] !== undefined) {
        let tmp15 = tmp6;
        let arr = arg0[tmp6];
        let tmp16 = callback;
        let tmp17 = outer1_1;
        if (arr instanceof callback(outer1_1[8])) {
          let tmp14 = callback;
          obj[tmp6] = callback(arr);
          continue;
        } else {
          let _Array = Array;
          if (Array.isArray(arr)) {
            obj[tmp6] = arr.map((arg0) => {
              let tmp = arg0;
              if (arg0 instanceof callback(outer2_1[8])) {
                tmp = outer1_0(arg0);
              }
              return tmp;
            });
            continue;
          } else {
            if ("object" === typeof arr) {
              obj = {};
              let tmp7 = arr;
              let tmp8 = tmp3;
              let keys1 = Object.keys();
              if (keys1 !== undefined) {
                tmp3 = tmp8;
                let tmp10 = keys1[tmp2];
                while (tmp10 !== undefined) {
                  let tmp18 = tmp10;
                  let tmp19 = arr[tmp10];
                  let tmp20 = callback;
                  let tmp21 = outer1_1;
                  let tmp12 = tmp19;
                  if (tmp19 instanceof callback(outer1_1[8])) {
                    let tmp11 = callback;
                    tmp12 = callback(tmp19);
                  }
                  obj[tmp10] = tmp12;
                  tmp8 = tmp19;
                  continue;
                }
              }
              obj[tmp6] = obj;
              let tmp13 = obj;
              continue;
            } else {
              obj[tmp6] = arr;
              continue;
            }
            continue;
          }
          continue;
        }
        continue;
      }
    }
    return obj;
  });
}
let closure_9 = require("_classPrivateFieldKey")("nodes");

export default ((arg0) => {
  class AnimatedTransform {
    constructor(arg0, arg1, arg2) {
      self = this;
      tmp = outer1_2(this, AnimatedTransform);
      items = [];
      items[0] = arg2;
      obj = outer1_5(AnimatedTransform);
      tmp2 = outer1_4;
      if (outer1_10()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_5;
        constructResult = Reflect.construct(obj, items, outer1_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      definePropertyResult = Object.defineProperty(tmp2Result, outer1_9, { writable: true, value: undefined });
      outer1_8(tmp2Result, outer1_9)[outer1_9] = arg0;
      tmp2Result._transforms = arg1;
      return tmp2Result;
    }
  }
  callback2(AnimatedTransform, arg0);
  let obj = {
    key: "__makeNative",
    value: function __makeNative(arg0) {
      const self = this;
      const arr = outer1_8(this, outer1_9)[outer1_9];
      for (let num = 0; num < length; num = num + 1) {
        let obj = arr[num];
        let __makeNativeResult = obj.__makeNative(arg0);
      }
      const items = [arg0];
      outer1_11(AnimatedTransform, "__makeNative", self, 3)(items);
    }
  };
  let items = [obj, , , , , , ];
  obj = {
    key: "__getValue",
    value: function __getValue() {
      return outer1_12(this._transforms, (__getValue) => __getValue.__getValue());
    }
  };
  items[1] = obj;
  obj = {
    key: "__getValueWithStaticTransforms",
    value: function __getValueWithStaticTransforms(arg0) {
      let closure_0 = [];
      outer1_12(this._transforms, (__getValue) => {

      });
      return outer1_12(arg0, () => arr.shift());
    }
  };
  items[2] = obj;
  items[3] = {
    key: "__getAnimatedValue",
    value: function __getAnimatedValue() {
      return outer1_12(this._transforms, (__getAnimatedValue) => __getAnimatedValue.__getAnimatedValue());
    }
  };
  items[4] = {
    key: "__attach",
    value: function __attach() {
      const self = this;
      const arr = outer1_8(this, outer1_9)[outer1_9];
      for (let num = 0; num < length; num = num + 1) {
        let obj = arr[num];
        let __addChildResult = obj.__addChild(self);
      }
      outer1_11(AnimatedTransform, "__attach", self, 3)([]);
    }
  };
  items[5] = {
    key: "__detach",
    value: function __detach() {
      const self = this;
      const arr = outer1_8(this, outer1_9)[outer1_9];
      for (let num = 0; num < length; num = num + 1) {
        let obj = arr[num];
        let __removeChildResult = obj.__removeChild(self);
      }
      outer1_11(AnimatedTransform, "__detach", self, 3)([]);
    }
  };
  items[6] = {
    key: "__getNativeConfig",
    value: function __getNativeConfig() {
      const self = this;
      const items = [];
      const _transforms = this._transforms;
      for (let num = 0; num < length; num = num + 1) {
        let tmp4 = _transforms[num];
        let tmp5 = tmp4;
        let tmp6 = tmp2;
        let tmp7 = tmp3;
        let keys = Object.keys();
        if (keys !== undefined) {
          tmp2 = tmp6;
          tmp3 = tmp7;
          let tmp9 = keys[tmp];
          while (tmp9 !== undefined) {
            let tmp14 = tmp9;
            let obj3 = tmp4[tmp9];
            let tmp15 = AnimatedTransform;
            let tmp16 = outer1_1;
            let push = items.push;
            let obj = {};
            if (obj3 instanceof AnimatedTransform(outer1_1[8])) {
              obj.type = "animated";
              obj.property = tmp9;
              obj.nodeTag = obj3.__getNativeTag();
              let arr = push(obj);
              tmp6 = tmp9;
              tmp7 = obj3;
              continue;
            } else {
              obj.type = "static";
              obj.property = tmp9;
              let tmp10 = AnimatedTransform;
              let tmp11 = outer1_1;
              obj = AnimatedTransform(outer1_1[9]);
              obj.value = obj.transformDataType(obj3);
              arr = push(obj);
              tmp6 = tmp9;
              tmp7 = obj3;
              continue;
            }
            continue;
          }
        }
      }
      obj = { type: "transform", transforms: items, debugID: self.__getDebugID() };
      return obj;
    }
  };
  let items1 = [
    {
      key: "from",
      value: function from(_transforms) {
        let items = _transforms;
        if (!Array.isArray(_transforms)) {
          items = [];
        }
        const items1 = [];
        for (let num = 0; num < length; num = num + 1) {
          let tmp3 = items[num];
          let tmp4 = tmp3;
          let tmp5 = tmp2;
          let keys = Object.keys();
          if (keys !== undefined) {
            tmp2 = tmp5;
            let tmp7 = keys[tmp];
            while (tmp7 !== undefined) {
              let tmp15 = tmp7;
              let tmp16 = tmp3[tmp7];
              let tmp17 = AnimatedTransform;
              let tmp18 = outer1_1;
              tmp5 = tmp16;
              if (!(tmp16 instanceof AnimatedTransform(outer1_1[8]))) {
                continue;
              } else {
                let arr = items1.push(tmp16);
                tmp5 = tmp16;
                continue;
              }
              continue;
            }
          }
        }
        let tmp9 = null;
        if (0 !== items1.length) {
          const prototype = AnimatedTransform.prototype;
          tmp9 = new AnimatedTransform(items1, _transforms);
        }
        return tmp9;
      }
    }
  ];
  return callback(AnimatedTransform, items, items1);
})(require("_isNativeReflectConstruct"));
