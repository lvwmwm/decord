// Module ID: 354
// Function ID: 5227
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 354 (_isNativeReflectConstruct)
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
function createNumericInterpolation(extrapolateLeft) {
  let easing;
  ({ outputRange: closure_0, inputRange: closure_1, easing } = extrapolateLeft);
  if (!easing) {
    easing = importDefault(dependencyMap[6]).linear;
  }
  let closure_2 = easing;
  extrapolateLeft = "extend";
  if (undefined !== extrapolateLeft.extrapolateLeft) {
    extrapolateLeft = extrapolateLeft.extrapolateLeft;
  } else if (undefined !== extrapolateLeft.extrapolate) {
    extrapolateLeft = extrapolateLeft.extrapolate;
  }
  let extrapolateRight = "extend";
  if (undefined !== extrapolateLeft.extrapolateRight) {
    extrapolateRight = extrapolateLeft.extrapolateRight;
  } else if (undefined !== extrapolateLeft.extrapolate) {
    extrapolateRight = extrapolateLeft.extrapolate;
  }
  return (arg0) => {
    callback(length[7])("number" === typeof arg0, "Cannot interpolation an input which is not a number");
    let num = 1;
    if (1 < length.length - 1) {
      let num2 = 1;
      num = 1;
      if (arr[1] < arg0) {
        const sum = num2 + 1;
        num = sum;
        while (sum < arr.length - 1) {
          num2 = sum;
          num = sum;
          if (arr[sum] >= arg0) {
            break;
          }
        }
      }
    }
    const diff = num - 1;
    const sum1 = diff + 1;
    let tmp8 = callback[sum1];
    let tmp12 = arg0;
    if (arg0 >= length[diff]) {
      let tmp14 = tmp12;
      if (tmp12 <= tmp6) {
        let tmp13 = tmp7;
        if (tmp7 !== tmp8) {
          if (tmp4 === tmp6) {
            if (arg0 <= tmp4) {
              tmp8 = tmp7;
            }
            tmp13 = tmp8;
          } else {
            if (tmp4 === -Infinity) {
              let diff1 = -tmp14;
            } else if (tmp6 === Infinity) {
              diff1 = tmp14 - tmp4;
            } else {
              diff1 = (tmp14 - tmp4) / (tmp6 - tmp4);
            }
            const tmp9Result = tmp9(diff1);
            if (tmp7 === -Infinity) {
              let sum2 = -tmp9Result;
            } else if (tmp8 === Infinity) {
              sum2 = tmp9Result + tmp7;
            } else {
              sum2 = tmp9Result * (tmp8 - tmp7) + tmp7;
            }
            tmp13 = sum2;
          }
        }
      } else {
        tmp13 = tmp12;
        if ("identity" !== tmp11) {
          tmp14 = tmp12;
          if ("clamp" === tmp11) {
            tmp14 = tmp6;
          }
        }
      }
    } else {
      tmp13 = arg0;
      if ("identity" !== tmp10) {
        tmp12 = arg0;
        if ("clamp" === tmp10) {
          tmp12 = tmp4;
        }
      }
    }
    return tmp13;
  };
}
function mapStringToNumericComponents(str) {
  const tmp = importDefault(dependencyMap[8])(str);
  let tmp3 = null == tmp;
  if (!tmp3) {
    tmp3 = "object" !== typeof tmp;
  }
  importDefault(dependencyMap[7])(tmp3, "PlatformColors are not supported");
  if ("number" === typeof tmp) {
    let obj = { isColor: true };
    let num3 = tmp;
    if (!tmp) {
      num3 = 0;
    }
    const items = [(4278190080 & num3) >>> 24, (16711680 & num3) >>> 16, (65280 & num3) >>> 8, (255 & num3) / 255];
    obj.components = items;
    return obj;
  } else {
    const items1 = [];
    const match = regex.exec(str);
    let match1 = match;
    let num = 0;
    let num2 = 0;
    if (null != match) {
      do {
        if (match1.index > num) {
          let arr = items1.push(str.substring(num, match1.index));
        }
        let _parseFloat = parseFloat;
        arr = items1.push(parseFloat(match1[0]));
        num = match1.index + match1[0].length;
        let tmp7 = closure_8;
        match1 = closure_8.exec(str);
        num2 = num;
      } while (null != match1);
    }
    importDefault(dependencyMap[7])(items1.length > 0, "outputRange must contain color or value with numeric component");
    if (num2 < str.length) {
      items1.push(str.substring(num2, str.length));
    }
    obj = { isColor: false, components: items1 };
    return obj;
  }
  const tmp2 = importDefault(dependencyMap[7]);
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = /[+-]?(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?/g;

export default (arg0) => {
  class AnimatedInterpolation {
    constructor(arg0, arg1) {
      self = this;
      tmp = closure_2(this, AnimatedInterpolation);
      items = [];
      items[0] = arg1;
      obj = closure_5(AnimatedInterpolation);
      tmp2 = closure_4;
      if (closure_9()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_5;
        constructResult = Reflect.construct(obj, items, closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result._parent = arg0;
      tmp2Result._config = arg1;
      return tmp2Result;
    }
  }
  const importDefault = AnimatedInterpolation;
  callback2(AnimatedInterpolation, arg0);
  let obj = {
    key: "_getInterpolation",
    value: function _getInterpolation() {
      const self = this;
      if (!this._interpolation) {
        const _config = self._config;
        if (_config.outputRange) {
          if ("string" === typeof _config.outputRange[0]) {
            self._interpolation = function createStringInterpolation(_config) {
              _config(mapped[7])(_config.outputRange.length >= 2, "Bad output range");
              const outputRange = _config.outputRange;
              const mapped = outputRange.map(closure_12);
              const isColor = mapped[0].isColor;
              const mapped1 = mapped.map((components) => {
                components = components.components;
                if (isColor) {
                  let found = components;
                } else {
                  found = components.filter((arg0) => "number" === typeof arg0);
                }
                return found;
              });
              const first = mapped1[0];
              let closure_4 = first.map((arg0, arg1) => {
                arg0 = arg1;
                return callback(Object.assign({}, arg0, { outputRange: mapped1.map((arg0) => arg0[closure_0]) }));
              });
              return isColor ? (arg0) => {
                const mapped = closure_4.map((arg0, arg1) => {
                  const tmp = arg0(arg0);
                  if (arg1 < 3) {
                    const _Math2 = Math;
                    let rounded = Math.round(tmp);
                  } else {
                    const _Math = Math;
                    rounded = Math.round(1000 * tmp) / 1000;
                  }
                  return rounded;
                });
                return "rgba(" + mapped[0] + ", " + mapped[1] + ", " + mapped[2] + ", " + mapped[3] + ")";
              } : (arg0) => {
                let closure_1 = closure_4.map((arg0) => arg0(arg0));
                let closure_2 = 0;
                const components = closure_1[0].components;
                const mapped = components.map((arg0) => {
                  let tmp = arg0;
                  if ("number" === typeof arg0) {
                    let closure_2 = tmp4 + 1;
                    tmp = closure_1[tmp4];
                  }
                  return tmp;
                });
                return mapped.join("");
              };
            }(_config);
          }
        }
        self._interpolation = callback5(_config);
      }
      return self._interpolation;
    }
  };
  const items = [obj, , , , , , ];
  obj = {
    key: "__makeNative",
    value: function __makeNative(arg0) {
      const _parent = this._parent;
      _parent.__makeNative(arg0);
      const items = [arg0];
      callback4(AnimatedInterpolation, "__makeNative", this, 3)(items);
    }
  };
  items[1] = obj;
  obj = {
    key: "__getValue",
    value: function __getValue() {
      const _parent = this._parent;
      const __getValueResult = _parent.__getValue();
      AnimatedInterpolation(closure_1[7])("number" === typeof __getValueResult, "Cannot interpolate an input which is not a number.");
      return this._getInterpolation()(__getValueResult);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "interpolate",
    value: function interpolate(_config) {
      return new AnimatedInterpolation(this, _config);
    }
  };
  items[4] = {
    key: "__attach",
    value: function __attach() {
      const _parent = this._parent;
      _parent.__addChild(this);
      callback4(AnimatedInterpolation, "__attach", this, 3)([]);
    }
  };
  items[5] = {
    key: "__detach",
    value: function __detach() {
      const _parent = this._parent;
      _parent.__removeChild(this);
      callback4(AnimatedInterpolation, "__detach", this, 3)([]);
    }
  };
  items[6] = {
    key: "__getNativeConfig",
    value: function __getNativeConfig() {
      const self = this;
      const outputRange = this._config.outputRange;
      let closure_0 = null;
      let mapped = outputRange;
      if ("string" === typeof outputRange[0]) {
        mapped = outputRange.map((arg0) => {
          const tmp = _null(closure_1[9])(arg0);
          if ("number" === typeof tmp) {
            const _null = "color";
            let transformDataTypeResult = tmp;
          } else {
            transformDataTypeResult = _null(closure_1[10]).transformDataType(arg0);
            const obj = _null(closure_1[10]);
          }
          return transformDataTypeResult;
        });
      }
      const obj = { inputRange: self._config.inputRange, outputRange: mapped, outputType: closure_0, extrapolateLeft: self._config.extrapolateLeft || self._config.extrapolate || "extend", extrapolateRight: self._config.extrapolateRight || self._config.extrapolate || "extend", type: "interpolation", debugID: self.__getDebugID() };
      return obj;
    }
  };
  return callback(AnimatedInterpolation, items);
}(importDefault(dependencyMap[11]));
