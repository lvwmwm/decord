// Module ID: 354
// Function ID: 5227
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 102, 18, 355, 44, 39, 38, 348, 357]

// Module 354 (_isNativeReflectConstruct)
import closure_2 from "A";
import invariant from "invariant";
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
function createNumericInterpolation(extrapolateLeft) {
  let dependencyMap;
  let easing;
  let importDefault;
  ({ outputRange: importDefault, inputRange: dependencyMap, easing } = extrapolateLeft);
  if (!easing) {
    easing = importDefault(355).linear;
  }
  let extrapolate = "extend";
  if (undefined !== extrapolateLeft.extrapolateLeft) {
    extrapolate = extrapolateLeft.extrapolateLeft;
  } else if (undefined !== extrapolateLeft.extrapolate) {
    extrapolate = extrapolateLeft.extrapolate;
  }
  extrapolate = "extend";
  if (undefined !== extrapolateLeft.extrapolateRight) {
    extrapolate = extrapolateLeft.extrapolateRight;
  } else if (undefined !== extrapolateLeft.extrapolate) {
    extrapolate = extrapolateLeft.extrapolate;
  }
  return (arg0) => {
    outer1_0(outer1_1[7])("number" === typeof arg0, "Cannot interpolation an input which is not a number");
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
    let tmp8 = dependencyMap[sum1];
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
  const tmp = importDefault(39)(str);
  let tmp3 = null == tmp;
  if (!tmp3) {
    tmp3 = "object" !== typeof tmp;
  }
  importDefault(44)(tmp3, "PlatformColors are not supported");
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
        let tmp7 = regex;
        match1 = regex.exec(str);
        num2 = num;
      } while (null != match1);
    }
    importDefault(44)(items1.length > 0, "outputRange must contain color or value with numeric component");
    if (num2 < str.length) {
      items1.push(str.substring(num2, str.length));
    }
    obj = { isColor: false, components: items1 };
    return obj;
  }
  const tmp2 = importDefault(44);
}
const re8 = /[+-]?(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?/g;

export default ((arg0) => {
  class AnimatedInterpolation {
    constructor(arg0, arg1) {
      self = this;
      tmp = outer1_2(this, AnimatedInterpolation);
      items = [];
      items[0] = arg1;
      obj = outer1_5(AnimatedInterpolation);
      tmp2 = outer1_4;
      if (outer1_9()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_5;
        constructResult = Reflect.construct(obj, items, outer1_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result._parent = arg0;
      tmp2Result._config = arg1;
      return tmp2Result;
    }
  }
  callback2(AnimatedInterpolation, arg0);
  let obj = {
    key: "_getInterpolation",
    value: function _getInterpolation() {
      const self = this;
      if (!this._interpolation) {
        const _config = self._config;
        if (_config.outputRange) {
          if ("string" === typeof _config.outputRange[0]) {
            self._interpolation = (function createStringInterpolation(_config) {
              let closure_0 = _config;
              AnimatedInterpolation(outer2_1[7])(_config.outputRange.length >= 2, "Bad output range");
              const outputRange = _config.outputRange;
              let mapped = outputRange.map(outer2_12);
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
              let _possibleConstructorReturn = first.map((arg0, arg1) => {
                let closure_0 = arg1;
                return outer3_11(Object.assign({}, closure_0, { outputRange: mapped1.map((arg0) => arg0[closure_0]) }));
              });
              return isColor ? ((arg0) => {
                let closure_0 = arg0;
                const mapped = _possibleConstructorReturn.map((arg0, arg1) => {
                  const tmp = arg0(closure_0);
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
              }) : ((arg0) => {
                let closure_0 = arg0;
                let mapped = _possibleConstructorReturn.map((arg0) => arg0(closure_0));
                let c2 = 0;
                const components = mapped[0].components;
                mapped = components.map((arg0) => {
                  let tmp = arg0;
                  if ("number" === typeof arg0) {
                    let closure_2 = tmp4 + 1;
                    tmp = table[tmp4];
                  }
                  return tmp;
                });
                return mapped.join("");
              });
            })(_config);
          }
        }
        self._interpolation = outer1_11(_config);
      }
      return self._interpolation;
    }
  };
  let items = [obj, , , , , , ];
  obj = {
    key: "__makeNative",
    value: function __makeNative(arg0) {
      const _parent = this._parent;
      _parent.__makeNative(arg0);
      const items = [arg0];
      outer1_10(AnimatedInterpolation, "__makeNative", this, 3)(items);
    }
  };
  items[1] = obj;
  obj = {
    key: "__getValue",
    value: function __getValue() {
      const _parent = this._parent;
      const __getValueResult = _parent.__getValue();
      AnimatedInterpolation(outer1_1[7])("number" === typeof __getValueResult, "Cannot interpolate an input which is not a number.");
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
      outer1_10(AnimatedInterpolation, "__attach", this, 3)([]);
    }
  };
  items[5] = {
    key: "__detach",
    value: function __detach() {
      const _parent = this._parent;
      _parent.__removeChild(this);
      outer1_10(AnimatedInterpolation, "__detach", this, 3)([]);
    }
  };
  items[6] = {
    key: "__getNativeConfig",
    value: function __getNativeConfig() {
      const self = this;
      const outputRange = this._config.outputRange;
      let c0 = null;
      let mapped = outputRange;
      if ("string" === typeof outputRange[0]) {
        mapped = outputRange.map((arg0) => {
          const tmp = AnimatedInterpolation(outer2_1[9])(arg0);
          if ("number" === typeof tmp) {
            const color = "color";
            let transformDataTypeResult = tmp;
          } else {
            transformDataTypeResult = AnimatedInterpolation(outer2_1[10]).transformDataType(arg0);
            const obj = AnimatedInterpolation(outer2_1[10]);
          }
          return transformDataTypeResult;
        });
      }
      let obj = { inputRange: self._config.inputRange, outputRange: mapped, outputType: c0, extrapolateLeft: self._config.extrapolateLeft || self._config.extrapolate || "extend", extrapolateRight: self._config.extrapolateRight || self._config.extrapolate || "extend", type: "interpolation", debugID: self.__getDebugID() };
      return obj;
    }
  };
  return callback(AnimatedInterpolation, items);
})(require("_isNativeReflectConstruct"));
