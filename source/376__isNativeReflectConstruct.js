// Module ID: 376
// Function ID: 5597
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 376 (_isNativeReflectConstruct)
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
function mapTransforms(arr) {
  const importDefault = arg1;
  return arr.map((arg0) => {
    let obj = {};
    const keys = Object.keys();
    if (keys !== undefined) {
      while (keys[tmp] !== undefined) {
        let tmp15 = tmp6;
        let arr = arg0[tmp6];
        let tmp16 = arg1;
        let tmp17 = closure_1;
        if (arr instanceof arg1(closure_1[8])) {
          let tmp14 = arg1;
          obj[tmp6] = arg1(arr);
          // continue
        } else {
          let _Array = Array;
          if (Array.isArray(arr)) {
            obj[tmp6] = arr.map((arg0) => {
              let tmp = arg0;
              if (arg0 instanceof callback(closure_1[8])) {
                tmp = callback(arg0);
              }
              return tmp;
            });
            // continue
          } else {
            if ("object" === typeof arr) {
              obj = {};
              let tmp7 = arr;
              let tmp8 = tmp3;
              let keys1 = Object.keys();
              if (keys1 !== undefined) {
                let tmp3 = tmp8;
                let tmp10 = keys1[tmp2];
                while (tmp10 !== undefined) {
                  let tmp18 = tmp10;
                  let tmp19 = arr[tmp10];
                  let tmp20 = arg1;
                  let tmp21 = closure_1;
                  let tmp12 = tmp19;
                  if (tmp19 instanceof arg1(closure_1[8])) {
                    let tmp11 = arg1;
                    tmp12 = arg1(tmp19);
                  }
                  obj[tmp10] = tmp12;
                  tmp8 = tmp19;
                  // continue
                }
              }
              obj[tmp6] = obj;
              let tmp13 = obj;
              // continue
            } else {
              obj[tmp6] = arr;
              // continue
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
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
let closure_9 = importDefault(dependencyMap[7])("nodes");

export default (arg0) => {
  class AnimatedTransform {
    constructor(arg0, arg1, arg2) {
      self = this;
      tmp = closure_2(this, AnimatedTransform);
      items = [];
      items[0] = arg2;
      obj = closure_5(AnimatedTransform);
      tmp2 = closure_4;
      if (closure_10()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_5;
        constructResult = Reflect.construct(obj, items, closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      definePropertyResult = Object.defineProperty(tmp2Result, closure_9, { writable: true, value: undefined });
      closure_8(tmp2Result, closure_9)[closure_9] = arg0;
      tmp2Result._transforms = arg1;
      return tmp2Result;
    }
  }
  const importDefault = AnimatedTransform;
  callback2(AnimatedTransform, arg0);
  let obj = {
    key: "__makeNative",
    value: function __makeNative(arg0) {
      const self = this;
      const arr = callback3(this, closure_9)[closure_9];
      for (let num = 0; num < length; num = num + 1) {
        let obj = arr[num];
        let __makeNativeResult = obj.__makeNative(arg0);
      }
      const items = [arg0];
      callback5(AnimatedTransform, "__makeNative", self, 3)(items);
    }
  };
  const items = [obj, , , , , , ];
  obj = {
    key: "__getValue",
    value: function __getValue() {
      return callback6(this._transforms, (__getValue) => __getValue.__getValue());
    }
  };
  items[1] = obj;
  obj = {
    key: "__getValueWithStaticTransforms",
    value: function __getValueWithStaticTransforms(arg0) {
      let closure_0 = [];
      callback6(this._transforms, (__getValue) => {

      });
      return callback6(arg0, () => arr.shift());
    }
  };
  items[2] = obj;
  items[3] = {
    key: "__getAnimatedValue",
    value: function __getAnimatedValue() {
      return callback6(this._transforms, (__getAnimatedValue) => __getAnimatedValue.__getAnimatedValue());
    }
  };
  items[4] = {
    key: "__attach",
    value: function __attach() {
      const self = this;
      const arr = callback3(this, closure_9)[closure_9];
      for (let num = 0; num < length; num = num + 1) {
        let obj = arr[num];
        let __addChildResult = obj.__addChild(self);
      }
      callback5(AnimatedTransform, "__attach", self, 3)([]);
    }
  };
  items[5] = {
    key: "__detach",
    value: function __detach() {
      const self = this;
      const arr = callback3(this, closure_9)[closure_9];
      for (let num = 0; num < length; num = num + 1) {
        let obj = arr[num];
        let __removeChildResult = obj.__removeChild(self);
      }
      callback5(AnimatedTransform, "__detach", self, 3)([]);
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
          let tmp2 = tmp6;
          let tmp3 = tmp7;
          let tmp9 = keys[tmp];
          while (tmp9 !== undefined) {
            let tmp14 = tmp9;
            let obj3 = tmp4[tmp9];
            let tmp15 = AnimatedTransform;
            let tmp16 = closure_1;
            let push = items.push;
            let obj = {};
            if (obj3 instanceof AnimatedTransform(closure_1[8])) {
              obj.type = "animated";
              obj.property = tmp9;
              obj.nodeTag = obj3.__getNativeTag();
              let arr = push(obj);
              tmp6 = tmp9;
              tmp7 = obj3;
              // continue
            } else {
              obj.type = "static";
              obj.property = tmp9;
              let tmp10 = AnimatedTransform;
              let tmp11 = closure_1;
              obj = AnimatedTransform(closure_1[9]);
              obj.value = obj.transformDataType(obj3);
              arr = push(obj);
              tmp6 = tmp9;
              tmp7 = obj3;
              // continue
            }
            continue;
          }
        }
      }
      obj = { type: "transform", transforms: items, debugID: self.__getDebugID() };
      return obj;
    }
  };
  const items1 = [
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
            let tmp2 = tmp5;
            let tmp7 = keys[tmp];
            while (tmp7 !== undefined) {
              let tmp15 = tmp7;
              let tmp16 = tmp3[tmp7];
              let tmp17 = AnimatedTransform;
              let tmp18 = closure_1;
              tmp5 = tmp16;
              if (!(tmp16 instanceof AnimatedTransform(closure_1[8]))) {
                continue;
              } else {
                let arr = items1.push(tmp16);
                tmp5 = tmp16;
                // continue
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
}(importDefault(dependencyMap[10]));
