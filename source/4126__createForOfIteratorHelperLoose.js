// Module ID: 4126
// Function ID: 34313
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: createAnimatedThemedStyles, createLegacyClassComponentStyles, createNativeStyleProperties, createStyleProperties, createStyles, experimental_createToken, useLegacyClassComponentStyles

// Module 4126 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
          let tmp30 = enabledExperiments;
          let tmp31 = dependencyMap;
          let obj5 = enabledExperiments(dependencyMap[5]);
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
          // continue
        }
      }
      let tmp12 = importDefault;
      let tmp13 = dependencyMap;
      let internal = importDefault(dependencyMap[6]).internal;
      if (internal.isSemanticColor(obj2)) {
        let tmp26 = enabledExperiments;
        let tmp27 = dependencyMap;
        let obj3 = enabledExperiments(dependencyMap[7]);
        let tmp29 = importDefault;
        let semanticColorContextFromThemeContext = obj3.getSemanticColorContextFromThemeContext(enabledExperiments);
        let internal4 = importDefault(dependencyMap[6]).internal;
        obj[tmp8] = internal4.resolveSemanticColor(theme, obj2, semanticColorContextFromThemeContext);
        // continue
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
                let internal2 = importDefault(dependencyMap[6]).internal;
                result = internal2.adjustColorSaturation(obj2, saturation, str3);
              }
              let adjustColorContrastResult = result;
              if (1 !== contrast) {
                let tmp19 = importDefault;
                let tmp20 = dependencyMap;
                let internal3 = importDefault(dependencyMap[6]).internal;
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
        // continue
      }
      continue;
    }
  }
  return obj;
}
let closure_3 = importDefault(dependencyMap[0]);
const processColor = arg1(dependencyMap[1]).processColor;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
new Set(["isArray", "x", "withSpring", "icon", "Array", "isArray", "push", "intl", "r", "isArray", "x", "context", "formatToPlainString", "Array", "isArray", "Path", "ti"]);
let closure_7 = Symbol.for("dynamicToken");
let closure_8 = [false, false, false];
let closure_9 = { code: "function createStylesTsx1(){const{resolvedStyles,withTiming,interpolateColor,themeIndex,stops,timingStandard}=this.__closure;const result={};for(const propertyName in resolvedStyles){const value=resolvedStyles[propertyName];if(Array.isArray(value)){result[propertyName]=withTiming(interpolateColor(themeIndex.get(),stops,value),timingStandard);}else{result[propertyName]=value;}}return result;}" };
const result = arg1(dependencyMap[13]).fileFinishedImporting("design/components/Styles/native/createStyles.tsx");

export const experimental_createToken = function experimental_createToken(arg0) {
  const arg1 = arg0;
  return { [closure_7]: (arg0) => arg0(arg0) };
};
export const createStyles = function createStyles(result) {
  const arg1 = result;
  const importDefault = new Map();
  let closure_2 = "function" === typeof result;
  return (arg0) => {
    const items = [...arguments];
    arg0 = items;
    let closure_2;
    let obj = arg0(closure_2[4]);
    const themeContext = obj.useThemeContext();
    const tmp2 = callback(...items, themeContext.key);
    const value = map.get(tmp2);
    if (null != value) {
      return value;
    } else {
      obj = {};
      closure_2 = obj;
      const _Object3 = Object;
      if (closure_2) {
        const items1 = [];
        HermesBuiltin.arraySpread(items, 0);
        keys = keys(HermesBuiltin.apply(items1, undefined));
      } else {
        keys = keys(tmp14);
      }
      const _Object = Object;
      const _Object2 = Object;
      Object.defineProperties(obj, Object.fromEntries(keys.map((arg0) => {
        let items = arg0;
        items = [arg0, ];
        const obj = {
          "Bool(true)": null,
          "Bool(true)": null,
          get() {
            if (closure_2) {
              const items = [];
              HermesBuiltin.arraySpread(arg0, 0);
              let applyResult = HermesBuiltin.apply(items, undefined);
            } else {
              applyResult = tmp2;
            }
            const tmpResult = closure_14(applyResult[closure_0], closure_1);
            Object.defineProperty(closure_2, arg0, { value: tmpResult, enumerable: true });
            return tmpResult;
          }
        };
        items[1] = obj;
        return items;
      })));
      const result = map.set(tmp2, obj);
      return obj;
    }
  };
};
export const createLegacyClassComponentStyles = function createLegacyClassComponentStyles(result) {
  const arg1 = result;
  const importDefault = new Map();
  return (key) => {
    const FALLBACK_THEME_CONTEXT_VALUE = key(closure_2[4]).FALLBACK_THEME_CONTEXT_VALUE;
    const value = map.get(key.key);
    if (null != value) {
      return value;
    } else {
      const obj = {};
      const _Object = Object;
      const keys = Object.keys(key);
      const _Object2 = Object;
      const _Object3 = Object;
      Object.defineProperties(obj, Object.fromEntries(keys.map((arg0) => {
        const items = [arg0, ];
        const obj = {
          "Bool(true)": null,
          "Bool(true)": null,
          get() {
            const tmp = callback(arg0[closure_0], arg0);
            Object.defineProperty(closure_1, arg0, { value: tmp, enumerable: true });
            return tmp;
          }
        };
        items[1] = obj;
        return items;
      })));
      const result = map.set(key.key, obj);
      return obj;
    }
  };
};
export const useLegacyClassComponentStyles = function useLegacyClassComponentStyles(closure_22) {
  return closure_22(arg1(dependencyMap[4]).useThemeContext());
};
export const createStyleProperties = function createStyleProperties(arg0) {
  const arg1 = arg0;
  const importDefault = new Map();
  return (arg0) => {
    const items = [...arguments];
    const themeContext = arg0(closure_2[4]).useThemeContext();
    const tmp2 = callback(...items, themeContext.key);
    const value = map.get(tmp2);
    if (null != value) {
      return value;
    } else {
      if ("function" === typeof arg0) {
        const items1 = [];
        HermesBuiltin.arraySpread(items, 0);
        let applyResult = HermesBuiltin.apply(items1, undefined);
      } else {
        applyResult = arg0;
      }
      const tmp4Result = closure_14(applyResult, themeContext);
      const result = map.set(tmp2, tmp4Result);
      return tmp4Result;
    }
    const obj = arg0(closure_2[4]);
  };
};
export { processColorOrThrow };
export const createNativeStyleProperties = function createNativeStyleProperties(arg0) {
  const arg1 = arg0;
  const importDefault = new Map();
  return (arg0, arg1) => {
    const substr = [...arguments].slice();
    let obj = arg0(closure_2[11]);
    let gradientPreset = obj.getCustomBackgroundGradient();
    if (null == gradientPreset) {
      gradientPreset = gradientPreset.gradientPreset;
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
      const merged = Object.assign(arg0(closure_2[4]).FALLBACK_THEME_CONTEXT_VALUE);
      obj["flags"] = 0;
      obj["saturation"] = saturation.saturation;
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
        if ("function" === typeof arg0) {
          items2 = [];
          arraySpreadResult = HermesBuiltin.arraySpread(substr, 0);
          let applyResult1 = HermesBuiltin.apply(items2, undefined);
        } else {
          applyResult1 = arg0;
        }
        const tmp46Result = closure_14(applyResult1, obj);
        for (const key10107 in tmp46Result) {
          let tmp48 = key10107;
          let tmp49 = closure_13;
          tmp46Result[key10107] = closure_13(tmp46Result[key10107]);
        }
        const result = map.set(applyResult, tmp46Result);
        return tmp46Result;
      }
      const obj3 = arg0(closure_2[12]);
    } else {
      if ("light" === tmp3.theme) {
        let MOBILE_DARK_GRADIENT_THEME_ENABLED = arg0(closure_2[4]).ThemeContextFlags.MOBILE_LIGHT_GRADIENT_THEME_ENABLED;
      } else {
        MOBILE_DARK_GRADIENT_THEME_ENABLED = arg0(closure_2[4]).ThemeContextFlags.MOBILE_DARK_GRADIENT_THEME_ENABLED;
      }
      arg0(closure_2[4]).setThemeFlag(0, MOBILE_DARK_GRADIENT_THEME_ENABLED);
      const obj2 = arg0(closure_2[4]);
    }
  };
};
export const createAnimatedThemedStyles = function createAnimatedThemedStyles(obj, items) {
  let arr = items;
  if (items === undefined) {
    arr = closure_8;
  }
  items = arr;
  let closure_3;
  let processColor;
  items = [];
  const importDefault = items;
  obj = {};
  const dependencyMap = obj;
  for (const key10008 in arg0) {
    let tmp3 = key10008;
    let tmp4 = arg0[key10008];
    let tmp5 = closure_1;
    let tmp6 = closure_2;
    let internal = closure_1(closure_2[6]).internal;
    if (internal.isSemanticColor(tmp4)) {
      let items1 = [key10008, tmp4];
      arr = items.push(items1);
      // continue
    } else {
      obj[key10008] = tmp4;
      // continue
    }
    continue;
  }
  closure_3 = arr.map((arg0, arg1) => arg1);
  processColor = new Map();
  return (themeIndex) => {
    let done;
    let obj = arr(obj[4]);
    const themeContext = obj.useThemeContext();
    const value = map.get(themeContext.key);
    let items = value;
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
      items = obj;
      function _loop(arg0) {
        obj[closure_3] = arg0.map((theme) => {
          const internal = callback(closure_2[6]).internal;
          return internal.resolveSemanticColor(theme, theme, closure_2);
        });
      }
      const tmp9 = callback(items);
      let iter = tmp9();
      if (!iter.done) {
        do {
          let tmp10 = closure_3;
          let tmp11 = closure_3(iter.value, 2);
          closure_3 = tmp11[0];
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
        let tmp7 = closure_4;
        let tmp8 = closure_4[key10008];
        let _Array = Array;
        if (Array.isArray(tmp8)) {
          let tmp = closure_0;
          let tmp2 = closure_2;
          let obj2 = closure_0(closure_2[9]);
          let obj3 = closure_0(closure_2[8]);
          let tmp3 = closure_0;
          let tmp4 = closure_3;
          let interpolateColorResult = obj3.interpolateColor(closure_0.get(), closure_3, tmp8);
          obj[key10008] = obj2.withTiming(interpolateColorResult, closure_0(closure_2[10]).timingStandard);
          // continue
        } else {
          obj[key10008] = tmp8;
          // continue
        }
        continue;
      }
      return obj;
    };
    const obj1 = { resolvedStyles: tmp3, withTiming: themeIndex(obj[9]).withTiming, interpolateColor: themeIndex(obj[8]).interpolateColor, themeIndex, stops: closure_3, timingStandard: themeIndex(obj[10]).timingStandard };
    fn.__closure = obj1;
    fn.__workletHash = 6815805628278;
    fn.__initData = closure_9;
    return themeIndex(obj[8]).useAnimatedStyle(fn);
  };
};
