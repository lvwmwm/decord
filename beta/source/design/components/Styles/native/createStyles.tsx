// Module ID: 4836
// Function ID: 4837
// Name: createStyles
// Dependencies: [32, 17, 4825, 4653, 4540, 1364, 576, 4532, 4566, 4837, 4840, 4764, 2]
// Exports: createAnimatedThemedStyles, createLegacyClassComponentStyles, createNativeStyleProperties, createStyleProperties, createStyles, experimental_createToken, processColorOrThrow, useLegacyClassComponentStyles

// Module 4836 (createStyles)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import SemanticColorContext from "SemanticColorContext" /* 4532 */;
import native from "native" /* 4540 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import MobileThemesUtils from "MobileThemesUtils" /* 4764 */;
import timing from "timing" /* 4837 */;
import timingPresets from "timingPresets" /* 4840 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 4653 */;
import size from "module_2" /* 2 */;

let map;

function createCacheKey() {
  items = [...arguments];
  return items.join("");
}
function parseThemedStyles(obj, enabledExperiments) {
  let contrast;
  let saturation;
  let theme;
  ({ theme, saturation, contrast } = enabledExperiments);
  obj = {};
  for (const key10022 in obj) {
    let obj6 = obj[key10022];
    let hasOwnPropertyResult;
    if (obj6 != null) {
      hasOwnPropertyResult = obj6.hasOwnProperty(closure_8);
    }
    let obj2 = obj6;
    if (hasOwnPropertyResult) {
      obj2 = obj6[closure_8](enabledExperiments);
    }
    let hasOwnPropertyResult1;
    if (obj2 != null) {
      hasOwnPropertyResult1 = obj2.hasOwnProperty("resolve");
    }
    if (hasOwnPropertyResult1) {
      let obj4 = { theme, isAndroid: obj5.isAndroid(), enabledExperiments, density: str4 };
      let resolve = obj2.resolve;
      let obj5 = PlatformUtils;
      enabledExperiments = enabledExperiments.enabledExperiments ?? [];
      let str4 = enabledExperiments.density ?? "compact";
      obj[key10022] = resolve(obj4);
      continue;
    } else {
      let tmp6 = importDefault;
      let internal = nativeDefault.internal;
      if (internal.isSemanticColor(obj2)) {
        let obj3 = SemanticColorContext;
        let semanticColorContextFromThemeContext = obj3.getSemanticColorContextFromThemeContext(enabledExperiments);
        let internal4 = tmp6(576).internal;
        obj[key10022] = internal4.resolveSemanticColor(theme, obj2, semanticColorContextFromThemeContext);
        continue;
      } else {
        let tmp8;
        if (tmp) {
          tmp8 = obj2;
          if (typeof obj2 === "string") {
            tmp8 = obj2;
            if ("#" === obj2[0]) {
              let str = "background";
              if ("backgroundColor" !== key10022) {
                let str2 = "border";
                if ("borderColor" !== key10022) {
                  let str3 = "generic";
                  if ("color" === key10022) {
                    str3 = "text";
                  }
                  str2 = str3;
                }
                str = str2;
              }
              let result = obj2;
              if (tmp) {
                let internal2 = tmp6(576).internal;
                result = internal2.adjustColorSaturation(obj2, saturation, str);
              }
              let adjustColorContrastResult = result;
              if (1 !== contrast) {
                let internal3 = tmp6(576).internal;
                adjustColorContrastResult = internal3.adjustColorContrast(result, contrast, str, theme);
              }
              tmp8 = adjustColorContrastResult;
            }
          }
        } else {
          tmp8 = obj2;
        }
        obj[key10022] = tmp8;
        continue;
      }
      continue;
    }
    continue;
  }
  return obj;
}
const processColor = react_native.processColor;
new Set(["backgroundColor", "borderBottomColor", "borderColor", "borderEndColor", "borderLeftColor", "borderRightColor", "borderStartColor", "borderTopColor", "color", "outlineColor", "shadowColor", "shadowOffset", "shadowOpacity", "shadowRadius", "elevation", "textDecorationColor", "textShadowColor", "tintColor"]);
let closure_8 = Symbol.for("dynamicToken");
let items = [nativeDefault.themes.LIGHT, nativeDefault.themes.DARK, nativeDefault.themes.ONYX];
let closure_11 = { code: "function createStylesTsx1(){const{resolvedStyles,withTiming,interpolateColor,themeIndex,stops,timingStandard}=this.__closure;const result={};for(const propertyName in resolvedStyles){const value=resolvedStyles[propertyName];if(Array.isArray(value)){result[propertyName]=withTiming(interpolateColor(themeIndex.get(),stops,value),timingStandard);}else{result[propertyName]=value;}}return result;}" };
let result = size.fileFinishedImporting("design/components/Styles/native/createStyles.tsx");

export const experimental_createToken = function experimental_createToken(arg0) {
  let closure_0 = arg0;
  return { [closure_1_8]: (arg0) => closure_0(arg0) };
};
export const createStyles = function createStyles(rect) {
  map = new Map();
  let closure_2 = typeof rect === "function";
  return () => {
    items = [...arguments];
    let obj3;
    const obj = rect(closure_2[4]);
    const themeContext = obj.useThemeContext();
    const items1 = [];
    items1[HermesBuiltin.arraySpread(items1, items, 0)] = themeContext.key;
    const tmp3 = createCacheKey();
    const value = themeContext.get(tmp3);
    const obj2 = themeContext;
    if (null != value) {
      return value;
    } else {
      let keys1;
      obj3 = {};
      const _Object3 = Object;
      if (obj3) {
        const items2 = [];
        HermesBuiltin.arraySpread(items2, items, 0);
        keys1 = keys(HermesBuiltin.apply(tmp14, items2, undefined));
      } else {
        keys1 = keys(tmp14);
      }
      const _Object = Object;
      const _Object2 = Object;
      Object.defineProperties(obj3, Object.fromEntries(keys1.map((item) => {
        let closure_0 = item;
        items = [
          item,
          {
            configurable: true,
            enumerable: true,
            get() {
              let applyResult;
              const tmp2 = parseThemedStyles;
              if (closure_2) {
                items = [];
                HermesBuiltin.arraySpread(items, items, 0);
                applyResult = HermesBuiltin.apply(tmp3, items, undefined);
              } else {
                applyResult = tmp3;
              }
              const tmp2Result = tmp2(applyResult[rect], themeContext);
              Object.defineProperty(obj3, rect, { value: tmp2Result, enumerable: true });
              return tmp2Result;
            }
          }
        ];
        return items;
      })));
      const result = obj2.set(tmp3, obj3);
      return obj3;
    }
  };
};
export const createLegacyClassComponentStyles = function createLegacyClassComponentStyles(arg0) {
  let closure_0 = arg0;
  map = new Map();
  return (key) => {
    let obj2;
    closure_0 = key;
    const FALLBACK_THEME_CONTEXT_VALUE = closure_0(dependencyMap[4]).FALLBACK_THEME_CONTEXT_VALUE;
    const value = obj2.get(key.key);
    const obj = obj2;
    if (null != value) {
      return value;
    } else {
      obj2 = {};
      const _Object = Object;
      const keys = Object.keys(closure_0);
      const _Object2 = Object;
      const _Object3 = Object;
      Object.defineProperties(obj2, Object.fromEntries(keys.map((item) => {
        items = [
          item,
          {
            configurable: true,
            enumerable: true,
            get() {
              const tmp = parseThemedStyles(item[item], item);
              Object.defineProperty(obj2, item, { value: tmp, enumerable: true });
              return tmp;
            }
          }
        ];
        return items;
      })));
      const result = obj.set(key.key, obj2);
      return obj2;
    }
  };
};
export const useLegacyClassComponentStyles = function useLegacyClassComponentStyles(legacyClassComponentStyles) {
  const obj = native;
  return legacyClassComponentStyles(obj.useThemeContext());
};
export const createStyleProperties = function createStyleProperties(getButtonColorTokens) {
  let closure_0 = getButtonColorTokens;
  map = new Map();
  return () => {
    items = [...arguments];
    const obj = native;
    const themeContext = obj.useThemeContext();
    const items1 = [];
    items1[HermesBuiltin.arraySpread(items1, items, 0)] = themeContext.key;
    const tmp3 = createCacheKey();
    const value = map.get(tmp3);
    const obj2 = map;
    if (null != value) {
      return value;
    } else {
      let applyResult = getButtonColorTokens;
      const tmp5 = parseThemedStyles;
      if (typeof getButtonColorTokens === "function") {
        const items2 = [];
        HermesBuiltin.arraySpread(items2, items, 0);
        applyResult = HermesBuiltin.apply(tmp6, items2, undefined);
      }
      const tmp5Result = tmp5(applyResult, themeContext);
      const result = obj2.set(tmp3, tmp5Result);
      return tmp5Result;
    }
  };
};
export const processColorOrThrow = function processColorOrThrow(arg0) {
  const tmp = processColor(arg0);
  if (null == tmp) {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const error = new Error("Unable to parse color: \"" + arg0 + "\"");
    throw error;
  } else {
    return tmp;
  }
};
export const createNativeStyleProperties = function createNativeStyleProperties(arg0) {
  let closure_0 = arg0;
  map = new Map();
  return function(theme) {
    let json;
    const substr = [...arguments].slice();
    const saturation = AccessibilityStore.saturation;
    const obj = MobileThemesUtils;
    let customBackgroundGradient = obj.getCustomBackgroundGradient();
    if (customBackgroundGradient == null) {
      customBackgroundGradient = ClientThemesBackgroundStore.gradientPreset;
    }
    if (customBackgroundGradient == null) {
      customBackgroundGradient = null;
    }
    let num = 0;
    if (null != customBackgroundGradient) {
      let MOBILE_DARK_GRADIENT_THEME_ENABLED;
      const setThemeFlag = native.setThemeFlag;
      native;
      if ("light" === customBackgroundGradient.theme) {
        MOBILE_DARK_GRADIENT_THEME_ENABLED = tmp3(4540).ThemeContextFlags.MOBILE_LIGHT_GRADIENT_THEME_ENABLED;
      } else {
        MOBILE_DARK_GRADIENT_THEME_ENABLED = tmp3(4540).ThemeContextFlags.MOBILE_DARK_GRADIENT_THEME_ENABLED;
      }
      num = setThemeFlag(0, MOBILE_DARK_GRADIENT_THEME_ENABLED);
    }
    const obj2 = { flags: num, saturation, theme, enabledExperiments: ["mobile-visual-refresh"], gradient: customBackgroundGradient };
    const merged = Object.assign(tmp3(4540).FALLBACK_THEME_CONTEXT_VALUE);
    const obj3 = { key: json };
    json = JSON.stringify(obj2);
    const merged1 = Object.assign(obj2);
    const tmp12 = createCacheKey(...substr, obj3.key);
    const value = map.get(tmp12);
    if (null != value) {
      return value;
    } else {
      let applyResult = closure_0;
      const tmp20 = parseThemedStyles;
      if (typeof closure_0 === "function") {
        items = [];
        HermesBuiltin.arraySpread(items, substr, 0);
        applyResult = HermesBuiltin.apply(tmp21, items, undefined);
      }
      const tmp20Result = tmp20(applyResult, obj3);
      for (const key10061 in tmp20Result) {
        let tmp28 = tmp20Result[key10061];
        let tmp30 = processColor(tmp28);
        if (null == tmp30) {
          let _Error = Error;
          let _HermesInternal = HermesInternal;
          let str2 = "\"";
          let str3 = "Unable to parse color: \"";
          let self = this;
          let self2 = this;
          let error = new Error("Unable to parse color: \"" + tmp28 + "\"");
          throw error;
        } else {
          tmp20Result[key10061] = tmp30;
          continue;
        }
      }
      const result = map.set(tmp12, tmp20Result);
      return tmp20Result;
    }
  };
};
export const createAnimatedThemedStyles = function createAnimatedThemedStyles(backgroundColor, items) {
  let arr = items;
  if (items === undefined) {
    arr = items;
  }
  let stops;
  items = [];
  let obj = {};
  for (const key10007 in backgroundColor) {
    let tmp3 = key10007;
    let tmp4 = backgroundColor[key10007];
    let tmp5 = items;
    let internal = items(obj[6]).internal;
    if (internal.isSemanticColor(tmp4)) {
      let items1 = [key10007, tmp4];
      let arr2 = items.push(items1);
      continue;
    } else {
      obj[key10007] = tmp4;
      continue;
    }
    continue;
  }
  stops = arr.map((item, index) => index);
  new Map();
  return (themeIndex) => {
    let closure_3;
    let num2;
    let num4;
    let obj3;
    obj = arr(obj[4]);
    const themeContext = obj.useThemeContext();
    const value = obj3.get(themeContext.key);
    items = value;
    let tmp3 = value;
    if (null == value) {
      let enabledExperiments = themeContext.enabledExperiments;
      if (enabledExperiments == null) {
        enabledExperiments = [];
      }
      let obj2 = { enabledExperiments, saturation: num2, contrast: num4 };
      num2 = 1;
      if (null == themeContext.primaryColor) {
        let num3 = themeContext.saturation;
        if (num3 == null) {
          num3 = 1;
        }
        num2 = num3;
      }
      num4 = 1;
      if (null == themeContext.primaryColor) {
        let num5 = themeContext.contrast;
        if (num5 == null) {
          num5 = 1;
        }
        num4 = num5;
      }
      obj3 = {};
      let tmp4 = obj2;
      let tmp5 = obj3;
      const merged = Object.assign(obj2);
      class S {
        constructor() {
          obj = {};
          for (const key10005 in obj3) {
            let tmp9 = obj3[key10005];
            let _Array = Array;
            if (Array.isArray(tmp9)) {
              let tmp3 = timing;
              let withTiming = tmp3.withTiming;
              obj2 = ReanimatedRexport;
              let interpolateColorResult = obj2.interpolateColor(themeIndex.get(), stops, tmp9);
              obj[key10005] = withTiming(interpolateColorResult, timingPresets.timingStandard);
              continue;
            } else {
              obj[key10005] = tmp9;
              continue;
            }
            continue;
          }
          return obj;
        }
      }
      let tmp8 = items;
      function _loop(arg0) {
        let closure_0;
        themeIndex = arg0;
        closure_1[closure_3] = themeIndex.map((item) => {
          const internal = nativeDefault.internal;
          return internal.resolveSemanticColor(item, closure_0, obj2);
        });
      }
      let tmp7 = items;
      let tmp9 = items[Symbol.iterator]();
      while (tmp9 !== undefined) {
        let tmp14 = stops(tmp11, 2);
        stops = tmp14[0];
        let _loopResult = _loop(tmp14[1]);
        continue;
      }
      const result = obj3.set(themeContext.key, obj3);
      tmp3 = obj3;
    }
    obj3 = tmp3;
    const obj4 = arr(obj[8]);
    class S {
      constructor() {
        obj = {};
        for (const key10005 in obj3) {
          let tmp9 = obj3[key10005];
          let _Array = Array;
          if (Array.isArray(tmp9)) {
            let tmp3 = timing;
            let withTiming = tmp3.withTiming;
            obj2 = ReanimatedRexport;
            let interpolateColorResult = obj2.interpolateColor(themeIndex.get(), stops, tmp9);
            obj[key10005] = withTiming(interpolateColorResult, timingPresets.timingStandard);
            continue;
          } else {
            obj[key10005] = tmp9;
            continue;
          }
          continue;
        }
        return obj;
      }
    }
    S.__closure = { resolvedStyles: tmp3, withTiming: arr(obj[9]).withTiming, interpolateColor: arr(obj[8]).interpolateColor, themeIndex, stops, timingStandard: arr(obj[10]).timingStandard };
    S.__workletHash = 6815805628278;
    S.__initData = __initData;
    ({ resolvedStyles: tmp3, withTiming: arr(obj[9]).withTiming, interpolateColor: arr(obj[8]).interpolateColor, themeIndex, stops, timingStandard: arr(obj[10]).timingStandard });
    return obj4.useAnimatedStyle(S);
  };
};
