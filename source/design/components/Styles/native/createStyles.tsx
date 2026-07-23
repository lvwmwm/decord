// Module ID: 4130
// Function ID: 34350
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 27, 4122, 3942, 3842, 477, 689, 3835, 3991, 4131, 4134, 4063, 1324, 2]
// Exports: createAnimatedThemedStyles, createLegacyClassComponentStyles, createNativeStyleProperties, createStyleProperties, createStyles, experimental_createToken, useLegacyClassComponentStyles

// Module 4130 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import { processColor } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import set from "_isNativeReflectConstruct";

const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function createCacheKey(arg0) {
  const items = [...arguments];
  return items.join("");
}
function processColorOrThrow(arg0) {
  const tmp = processColor(arg0);
  if (null == tmp) {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("Unable to parse color: \"" + arg0 + "\"");
    throw error;
  } else {
    return tmp;
  }
}
function parseThemedStyles(arg0, enabledExperiments) {
  let contrast;
  let saturation;
  let theme;
  ({ theme, saturation, contrast } = enabledExperiments);
  let obj = {};
  const keys = Object.keys();
  if (keys !== undefined) {
    while (keys[tmp] !== undefined) {
      let tmp32 = tmp8;
      let obj6 = arg0[tmp8];
      let hasOwnPropertyResult = null != obj6;
      if (hasOwnPropertyResult) {
        let tmp9 = closure_7;
        hasOwnPropertyResult = obj6.hasOwnProperty(closure_7);
      }
      let obj2 = obj6;
      if (hasOwnPropertyResult) {
        let tmp11 = closure_7;
        obj2 = obj6[closure_7](enabledExperiments);
      }
      if (null != obj2) {
        if (obj2.hasOwnProperty("resolve")) {
          obj = { theme };
          let tmp30 = require;
          let tmp31 = dependencyMap;
          let obj5 = require(477) /* set */;
          obj.isAndroid = obj5.isAndroid();
          enabledExperiments = enabledExperiments.enabledExperiments;
          let items = enabledExperiments;
          if (null == enabledExperiments) {
            items = [];
          }
          obj.enabledExperiments = items;
          let density = enabledExperiments.density;
          let str4 = "compact";
          if (null != density) {
            str4 = density;
          }
          obj.density = str4;
          obj[tmp8] = obj2.resolve(obj);
          continue;
        }
      }
      let tmp12 = importDefault;
      let tmp13 = dependencyMap;
      let internal = importDefault(689).internal;
      if (internal.isSemanticColor(obj2)) {
        let tmp26 = require;
        let tmp27 = dependencyMap;
        let obj3 = require(3835) /* getSemanticColorContextFromThemeContext */;
        let tmp29 = importDefault;
        let semanticColorContextFromThemeContext = obj3.getSemanticColorContextFromThemeContext(enabledExperiments);
        let internal4 = importDefault(689).internal;
        obj[tmp8] = internal4.resolveSemanticColor(theme, obj2, semanticColorContextFromThemeContext);
        continue;
      } else {
        if (tmp2) {
          let tmp14 = obj2;
          if ("string" === typeof obj2) {
            tmp14 = obj2;
            let tmp3 = tmp6;
            let tmp4 = tmp7;
            if ("#" === obj2[0]) {
              let str3 = "background";
              if ("backgroundColor" !== tmp8) {
                let str = "border";
                if ("borderColor" !== tmp8) {
                  let str2 = "generic";
                  if ("color" === tmp8) {
                    str2 = "text";
                  }
                  str = str2;
                }
                str3 = str;
              }
              let result = obj2;
              if (tmp2) {
                let tmp16 = importDefault;
                let tmp17 = dependencyMap;
                let internal2 = importDefault(689).internal;
                result = internal2.adjustColorSaturation(obj2, saturation, str3);
              }
              let adjustColorContrastResult = result;
              if (1 !== contrast) {
                let tmp19 = importDefault;
                let tmp20 = dependencyMap;
                let internal3 = importDefault(689).internal;
                let tmp21 = internal3;
                let tmp22 = result;
                let tmp23 = contrast;
                let tmp24 = str3;
                let tmp25 = theme;
                adjustColorContrastResult = internal3.adjustColorContrast(result, contrast, str3, theme);
              }
              tmp14 = adjustColorContrastResult;
              tmp3 = str3;
              tmp4 = adjustColorContrastResult;
            }
          }
        } else {
          tmp14 = obj2;
        }
        obj[tmp8] = tmp14;
        continue;
      }
      continue;
    }
  }
  return obj;
}
let set = new Set(["backgroundColor", "borderBottomColor", "borderColor", "borderEndColor", "borderLeftColor", "borderRightColor", "borderStartColor", "borderTopColor", "color", "shadowColor", "shadowOffset", "shadowOpacity", "shadowRadius", "elevation", "textDecorationColor", "textShadowColor", "tintColor"]);
let closure_7 = Symbol.for("dynamicToken");
let closure_8 = ["light", "darker", "midnight"];
let closure_9 = { code: "function createStylesTsx1(){const{resolvedStyles,withTiming,interpolateColor,themeIndex,stops,timingStandard}=this.__closure;const result={};for(const propertyName in resolvedStyles){const value=resolvedStyles[propertyName];if(Array.isArray(value)){result[propertyName]=withTiming(interpolateColor(themeIndex.get(),stops,value),timingStandard);}else{result[propertyName]=value;}}return result;}" };
let result = set.fileFinishedImporting("design/components/Styles/native/createStyles.tsx");

export const experimental_createToken = function experimental_createToken(arg0) {
  let closure_0 = arg0;
  return { [closure_7]: (arg0) => callback(arg0) };
};
export const createStyles = function createStyles(_createForOfIteratorHelperLoose) {
  let closure_0 = _createForOfIteratorHelperLoose;
  const map = new Map();
  let closure_2 = "function" === typeof _createForOfIteratorHelperLoose;
  return (arg0) => {
    let items = [...arguments];
    let obj;
    obj = _createForOfIteratorHelperLoose(table[4]);
    const themeContext = obj.useThemeContext();
    const tmp2 = outer1_12(...items, themeContext.key);
    const value = themeContext.get(tmp2);
    if (null != value) {
      return value;
    } else {
      obj = {};
      const _Object3 = Object;
      if (obj) {
        const items1 = [];
        HermesBuiltin.arraySpread(items, 0);
        keys = keys(HermesBuiltin.apply(items1, undefined));
      } else {
        keys = keys(tmp14);
      }
      const _Object = Object;
      const _Object2 = Object;
      Object.defineProperties(obj, Object.fromEntries(keys.map((arg0) => {
        let closure_0 = arg0;
        let items = [arg0, ];
        const obj = {
          configurable: true,
          enumerable: true,
          get() {
            if (obj) {
              const items = [];
              HermesBuiltin.arraySpread(closure_0, 0);
              let applyResult = HermesBuiltin.apply(items, undefined);
            } else {
              applyResult = tmp2;
            }
            const tmpResult = outer3_14(applyResult[closure_0], outer1_1);
            Object.defineProperty(outer1_2, closure_0, { value: tmpResult, enumerable: true });
            return tmpResult;
          }
        };
        items[1] = obj;
        return items;
      })));
      const result = themeContext.set(tmp2, obj);
      return obj;
    }
  };
};
export const createLegacyClassComponentStyles = function createLegacyClassComponentStyles(_createForOfIteratorHelperLoose) {
  let closure_0 = _createForOfIteratorHelperLoose;
  const map = new Map();
  return (key) => {
    const _createForOfIteratorHelperLoose = key;
    const FALLBACK_THEME_CONTEXT_VALUE = _createForOfIteratorHelperLoose(outer1_2[4]).FALLBACK_THEME_CONTEXT_VALUE;
    const value = obj.get(key.key);
    if (null != value) {
      return value;
    } else {
      obj = {};
      const _Object = Object;
      const keys = Object.keys(_createForOfIteratorHelperLoose);
      const _Object2 = Object;
      const _Object3 = Object;
      Object.defineProperties(obj, Object.fromEntries(keys.map((arg0) => {
        let closure_0 = arg0;
        const items = [arg0, ];
        const obj = {
          configurable: true,
          enumerable: true,
          get() {
            const tmp = outer3_14(table[table], table);
            Object.defineProperty(outer1_1, table, { value: tmp, enumerable: true });
            return tmp;
          }
        };
        items[1] = obj;
        return items;
      })));
      const result = obj.set(key.key, obj);
      return obj;
    }
  };
};
export const useLegacyClassComponentStyles = function useLegacyClassComponentStyles(_createForOfIteratorHelperLoose) {
  return _createForOfIteratorHelperLoose(require(3842) /* ManaContext */.useThemeContext());
};
export const createStyleProperties = function createStyleProperties(_createForOfIteratorHelperLoose) {
  let closure_0 = _createForOfIteratorHelperLoose;
  const map = new Map();
  return (arg0) => {
    const items = [...arguments];
    const themeContext = _createForOfIteratorHelperLoose(outer1_2[4]).useThemeContext();
    const tmp2 = outer1_12(...items, themeContext.key);
    const value = map.get(tmp2);
    if (null != value) {
      return value;
    } else {
      if ("function" === typeof _createForOfIteratorHelperLoose) {
        const items1 = [];
        HermesBuiltin.arraySpread(items, 0);
        let applyResult = HermesBuiltin.apply(items1, undefined);
      } else {
        applyResult = _createForOfIteratorHelperLoose;
      }
      const tmp4Result = outer1_14(applyResult, themeContext);
      const result = map.set(tmp2, tmp4Result);
      return tmp4Result;
    }
    const obj = _createForOfIteratorHelperLoose(outer1_2[4]);
  };
};
export { processColorOrThrow };
export const createNativeStyleProperties = function createNativeStyleProperties(_createForOfIteratorHelperLoose) {
  let closure_0 = _createForOfIteratorHelperLoose;
  const map = new Map();
  return (arg0, arg1) => {
    const substr = [...arguments].slice();
    let obj = _createForOfIteratorHelperLoose(outer1_2[11]);
    let gradientPreset = obj.getCustomBackgroundGradient();
    if (null == gradientPreset) {
      gradientPreset = outer1_6.gradientPreset;
    }
    let tmp3 = null;
    if (null != gradientPreset) {
      tmp3 = gradientPreset;
    }
    if (null == tmp3) {
      const items = [];
      if (obj3.isMobileVisualRefreshEnabled("createFakeThemedContext")) {
        items.push("mobile-visual-refresh");
      }
      let tmp14;
      if (items.length > 0) {
        tmp14 = items;
      }
      obj = {};
      const merged = Object.assign(_createForOfIteratorHelperLoose(outer1_2[4]).FALLBACK_THEME_CONTEXT_VALUE);
      obj["flags"] = 0;
      obj["saturation"] = outer1_5.saturation;
      obj["theme"] = arg0;
      obj["enabledExperiments"] = tmp14;
      obj["gradient"] = tmp3;
      const _JSON = JSON;
      obj = {};
      const json = JSON.stringify(obj);
      const merged1 = Object.assign(obj);
      obj["key"] = json;
      const items1 = [];
      let arraySpreadResult = HermesBuiltin.arraySpread(substr, 0);
      items1[arraySpreadResult] = obj.key;
      const sum = arraySpreadResult + 1;
      const applyResult = HermesBuiltin.apply(items1, undefined);
      const value = map.get(applyResult);
      if (null != value) {
        return value;
      } else {
        let items2 = "function";
        if ("function" === typeof _createForOfIteratorHelperLoose) {
          items2 = [];
          arraySpreadResult = HermesBuiltin.arraySpread(substr, 0);
          let applyResult1 = HermesBuiltin.apply(items2, undefined);
        } else {
          applyResult1 = _createForOfIteratorHelperLoose;
        }
        const tmp46Result = outer1_14(applyResult1, obj);
        for (const key10107 in tmp46Result) {
          let tmp48 = key10107;
          let tmp49 = outer1_13;
          tmp46Result[key10107] = outer1_13(tmp46Result[key10107]);
          continue;
        }
        const result = map.set(applyResult, tmp46Result);
        return tmp46Result;
      }
      obj3 = _createForOfIteratorHelperLoose(outer1_2[12]);
    } else {
      if ("light" === tmp3.theme) {
        let MOBILE_DARK_GRADIENT_THEME_ENABLED = _createForOfIteratorHelperLoose(outer1_2[4]).ThemeContextFlags.MOBILE_LIGHT_GRADIENT_THEME_ENABLED;
      } else {
        MOBILE_DARK_GRADIENT_THEME_ENABLED = _createForOfIteratorHelperLoose(outer1_2[4]).ThemeContextFlags.MOBILE_DARK_GRADIENT_THEME_ENABLED;
      }
      _createForOfIteratorHelperLoose(outer1_2[4]).setThemeFlag(0, MOBILE_DARK_GRADIENT_THEME_ENABLED);
      const obj2 = _createForOfIteratorHelperLoose(outer1_2[4]);
    }
  };
};
export const createAnimatedThemedStyles = function createAnimatedThemedStyles(_createForOfIteratorHelperLoose, items) {
  let arr = items;
  if (items === undefined) {
    arr = closure_8;
  }
  let _slicedToArray;
  let map;
  items = [];
  let obj = {};
  for (const key10008 in arg0) {
    let tmp3 = key10008;
    let tmp4 = arg0[key10008];
    let tmp5 = items;
    let tmp6 = obj;
    let internal = items(obj[6]).internal;
    if (internal.isSemanticColor(tmp4)) {
      let items1 = [key10008, tmp4];
      arr = items.push(items1);
      continue;
    } else {
      obj[key10008] = tmp4;
      continue;
    }
    continue;
  }
  _slicedToArray = arr.map((arg0, arg1) => arg1);
  map = new Map();
  return (themeIndex) => {
    let callback;
    let done;
    let closure_0 = themeIndex;
    obj = arr(obj[4]);
    const themeContext = obj.useThemeContext();
    const value = map.get(themeContext.key);
    obj = value;
    let tmp3 = value;
    if (null == value) {
      obj = {};
      let enabledExperiments = themeContext.enabledExperiments;
      if (null == enabledExperiments) {
        enabledExperiments = [];
      }
      obj.enabledExperiments = enabledExperiments;
      let num2 = 1;
      if (null == themeContext.primaryColor) {
        const saturation = themeContext.saturation;
        let num3 = 1;
        if (null != saturation) {
          num3 = saturation;
        }
        num2 = num3;
      }
      obj.saturation = num2;
      let num4 = 1;
      if (null == themeContext.primaryColor) {
        const contrast = themeContext.contrast;
        let num5 = 1;
        if (null != contrast) {
          num5 = contrast;
        }
        num4 = num5;
      }
      obj.contrast = num4;
      obj = {};
      const merged = Object.assign(obj);
      function _loop(arg0) {
        const themeIndex = arg0;
        obj[_slicedToArray] = themeIndex.map((theme) => {
          const internal = items(obj[6]).internal;
          return internal.resolveSemanticColor(theme, closure_0, outer1_2);
        });
      }
      const tmp9 = outer1_10(obj);
      let iter = tmp9();
      if (!iter.done) {
        do {
          let tmp10 = callback;
          let tmp11 = callback(iter.value, 2);
          callback = tmp11[0];
          let _loopResult = _loop(tmp11[1]);
          let iter2 = tmp9();
          iter = iter2;
          done = iter2.done;
        } while (!done);
      }
      const result = map.set(themeContext.key, obj);
      tmp3 = obj;
    }
    const fn = function _() {
      const obj = {};
      for (const key10008 in closure_4) {
        let tmp6 = key10008;
        let tmp7 = tmp3;
        let tmp8 = tmp3[key10008];
        let _Array = Array;
        if (Array.isArray(tmp8)) {
          let tmp = arr;
          let tmp2 = obj;
          let obj2 = arr(obj[9]);
          let obj3 = arr(obj[8]);
          let tmp3 = themeIndex;
          let tmp4 = outer1_3;
          let interpolateColorResult = obj3.interpolateColor(themeIndex.get(), outer1_3, tmp8);
          obj[key10008] = obj2.withTiming(interpolateColorResult, arr(obj[10]).timingStandard);
          continue;
        } else {
          obj[key10008] = tmp8;
          continue;
        }
        continue;
      }
      return obj;
    };
    const obj1 = { resolvedStyles: tmp3, withTiming: arr(obj[9]).withTiming, interpolateColor: arr(obj[8]).interpolateColor, themeIndex, stops: callback, timingStandard: arr(obj[10]).timingStandard };
    fn.__closure = obj1;
    fn.__workletHash = 6815805628278;
    fn.__initData = outer1_9;
    return arr(obj[8]).useAnimatedStyle(fn);
  };
};
