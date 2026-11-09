// Module ID: 1679
// Function ID: 1680
// Name: colors
// Dependencies: [1666, 1674, 1680, 1681, 1683]
// Exports: processColor, processColorNumber, processColorsInProps, unprocessColorsInProps

// Module 1679 (colors)
import FONT_WEIGHT_MAPPINGS from "FONT_WEIGHT_MAPPINGS" /* 1666 */;
import _mod1674 from "module_1674" /* 1674 */;
import Colors from "Colors" /* 1680 */;
import ValueProcessorTarget from "ValueProcessorTarget" /* 1681 */;
import processStyleValue from "processStyleValue" /* 1683 */;

let dynamicNotAvailableOnPlatform;
let invalidColor;
let invalidProcessedColor;
let tmp10;
let tmp11;
let tmp12;
let tmp13;
let tmp14;
let tmp15;
let tmp16;
let tmp17;
let tmp18;
let tmp19;
let tmp2;
let tmp20;
let tmp21;
let tmp22;
let tmp23;
let tmp24;
let tmp25;
let tmp26;
let tmp27;
let tmp28;
let tmp29;
let tmp3;
let tmp30;
let tmp31;
let tmp4;
let tmp5;
let tmp6;
let tmp7;
let tmp8;
let tmp9;
function unprocessColorNumber(arg0) {
  return "rgba(" + arg0 << 8 >>> 24 + "," + arg0 << 16 >>> 24 + "," + arg0 << 24 >>> 24 + "," + (arg0 >>> 24) / 255 + ")";
}
function unprocessColor(color) {
  function unprocessDynamicColorObjectIOS(color) {
    const dynamic = {};
    const iter = items12[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      if (undefined !== color.dynamic[nextResult]) {
        dynamic[tmp3] = unprocessColorNumber(color.dynamic[tmp3]);
      }
      continue;
    }
    return { dynamic };
  }
  if (typeof color === "number") {
    const _HermesInternal3 = HermesInternal;
    return "rgba(" + color << 8 >>> 24 + "," + color << 16 >>> 24 + "," + color << 24 >>> 24 + "," + (color >>> 24) / 255 + ")";
  } else if (typeof isPlatformColorObject === "function") {
    let tmp2 = closure_130_0(color);
    if (tmp2) {
      let tmp3 = globalThis;
      const _Array = Array;
      let isArray = Array.isArray(color.semantic);
      if (!isArray) {
        const _Array2 = Array;
        isArray = Array.isArray(color.resource_paths);
      }
      tmp2 = isArray;
    }
    if (tmp2) {
      return color;
    } else {
      let tmp5 = isDynamicColorObjectIOS;
      if (typeof isDynamicColorObjectIOS === "function") {
        let tmp7 = closure_131_0(color) && closure_131_0(color.dynamic);
        if (tmp7) {
          tmp7 = "light" in color.dynamic;
        }
        if (tmp7) {
          tmp7 = "dark" in color.dynamic;
        }
        if (tmp7) {
          if (FONT_WEIGHT_MAPPINGS.IS_IOS) {
            return unprocessDynamicColorObjectIOS(color);
          } else {
            const _Error2 = Error;
            const _HermesInternal2 = HermesInternal;
            const self3 = this;
            const self4 = this;
            const error = new Error("[Reanimated] " + obj.dynamicNotAvailableOnPlatform());
            throw error;
          }
        } else {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          const self = this;
          const self2 = this;
          const error1 = new Error("[Reanimated] " + obj.invalidProcessedColor(color));
          throw error1;
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
let items = [{ code: "(function PlatformColor_Pnpm_colorsTs1(...names){let[IS_IOS]=this.__closure;return IS_IOS?{semantic:names}:{resource_paths:names};})" }, FONT_WEIGHT_MAPPINGS.IS_IOS];
let c0;
[tmp2, tmp3] = items;
class PlatformColor {
  constructor() {
    let obj;
    const items = [...arguments];
    const tmp = c0;
    if (tmp) {
      obj = { semantic: items };
      const obj2 = { semantic: items };
    } else {
      obj = { resource_paths: items };
    }
    return obj;
  }
}
const items1 = [tmp3];
PlatformColor.__closure = items1;
PlatformColor.__workletHash = 10379678763889;
PlatformColor.__initData = tmp2;
const items2 = [{ code: "(function isPlatformColorObject_Pnpm_colorsTs2(value){let[isRecord]=this.__closure;return isRecord(value)&&(Array.isArray(value.semantic)||Array.isArray(value.resource_paths));})" }, _mod1674.isRecord];
c0 = undefined;
[tmp4, tmp5] = items2;
function isPlatformColorObject(semantic) {
  let tmp = _undefined(semantic);
  if (tmp) {
    const _Array = Array;
    let isArray = Array.isArray(semantic.semantic);
    if (!isArray) {
      const _Array2 = Array;
      isArray = Array.isArray(semantic.resource_paths);
    }
    tmp = isArray;
  }
  return tmp;
}
const items3 = [tmp5];
isPlatformColorObject.__closure = items3;
isPlatformColorObject.__workletHash = 5343726766594;
isPlatformColorObject.__initData = tmp4;
const items4 = [{ code: "(function DynamicColorIOS_Pnpm_colorsTs3(tuple){return{dynamic:{light:tuple.light,dark:tuple.dark,highContrastLight:tuple.highContrastLight,highContrastDark:tuple.highContrastDark}};})" }];
[tmp6] = items4;
class DynamicColorIOS {
  constructor(light) {
    return { dynamic: { light: light.light, dark: light.dark, highContrastLight: light.highContrastLight, highContrastDark: light.highContrastDark } };
  }
}
DynamicColorIOS.__workletHash = 12574859383117;
DynamicColorIOS.__initData = tmp6;
const items5 = [{ code: "(function isDynamicColorObjectIOS_Pnpm_colorsTs4(value){let[isRecord]=this.__closure;return isRecord(value)&&isRecord(value.dynamic)&&'light'in value.dynamic&&'dark'in value.dynamic;})" }, _mod1674.isRecord];
[tmp7, tmp8] = items5;
function isDynamicColorObjectIOS(dynamic) {
  let tmp2 = _undefined(dynamic) && _undefined(dynamic.dynamic);
  if (tmp2) {
    tmp2 = "light" in dynamic.dynamic;
  }
  if (tmp2) {
    tmp2 = "dark" in dynamic.dynamic;
  }
  return tmp2;
}
const items6 = [tmp8];
isDynamicColorObjectIOS.__closure = items6;
isDynamicColorObjectIOS.__workletHash = 13530379233407;
isDynamicColorObjectIOS.__initData = tmp7;
const items7 = [{ code: "(function invalidColor_Pnpm_colorsTs5(color){return\"Invalid color value: \"+JSON.stringify(color);})" }];
[tmp9] = items7;
const ERROR_MESSAGES = { invalidColor, invalidProcessedColor, dynamicNotAvailableOnPlatform };
invalidColor = function invalidColor(arg0) {
  return "Invalid color value: " + JSON.stringify(arg0);
};
invalidColor.__workletHash = 10171982994499;
invalidColor.__initData = tmp9;
const items8 = [{ code: "(function invalidProcessedColor_Pnpm_colorsTs6(color){return\"Invalid processed color value: \"+JSON.stringify(color);})" }];
[tmp10] = items8;
invalidProcessedColor = function invalidProcessedColor(color) {
  return "Invalid processed color value: " + JSON.stringify(color);
};
invalidProcessedColor.__workletHash = 10285187193184;
invalidProcessedColor.__initData = tmp10;
const items9 = [{ code: "(function dynamicNotAvailableOnPlatform_Pnpm_colorsTs7(){return'DynamicColorIOS is not available on this platform.';})" }];
[tmp11] = items9;
dynamicNotAvailableOnPlatform = function dynamicNotAvailableOnPlatform() {
  return "DynamicColorIOS is not available on this platform.";
};
dynamicNotAvailableOnPlatform.__workletHash = 2024579873557;
dynamicNotAvailableOnPlatform.__initData = tmp11;
const items10 = [{ code: "(function processColorNumber_Pnpm_colorsTs8(value){let[processColorInitially,IS_ANDROID]=this.__closure;let normalizedColor=processColorInitially(value);if(IS_ANDROID&&typeof normalizedColor=='number'){normalizedColor=normalizedColor|0x0;}return normalizedColor;})" }, Colors.processColorInitially, FONT_WEIGHT_MAPPINGS.IS_ANDROID];
[tmp12, tmp13, tmp14] = items10;
function processColorNumber(color) {
  const tmp = _undefined(color);
  let tmp3 = tmp;
  const tmp2 = c1 && typeof tmp === "number";
  if (tmp2) {
    tmp3 = tmp | 0;
  }
  return tmp3;
}
const items11 = [tmp13, tmp14];
processColorNumber.__closure = items11;
processColorNumber.__workletHash = 7493092146691;
processColorNumber.__initData = tmp12;
const items12 = ["light", "dark", "highContrastLight", "highContrastDark"];
const items13 = [{ code: "(function processDynamicColorObjectIOS_Pnpm_colorsTs9(value){let[DynamicColorIOSProperties,processColorNumber]=this.__closure;const result={};for(const property of DynamicColorIOSProperties){if(value.dynamic[property]===undefined){continue;}const processed=processColorNumber(value.dynamic[property]);if(processed===null){return null;}result[property]=processed;}return{dynamic:result};})" }, items12, processColorNumber];
[tmp15, tmp16, tmp17] = items13;
function processDynamicColorObjectIOS(arg0) {
  const dynamic = {};
  const iter = _undefined[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = nextResult;
    if (undefined !== arg0.dynamic[nextResult]) {
      let tmp6 = _undefined2(arg0.dynamic[tmp3]);
      if (null === tmp6) {
        iter.return();
        return null;
      } else {
        dynamic[tmp3] = tmp7;
      }
    }
    continue;
  }
  return { dynamic };
}
const items14 = [tmp16, tmp17];
processDynamicColorObjectIOS.__closure = items14;
processDynamicColorObjectIOS.__workletHash = 15541210186829;
processDynamicColorObjectIOS.__initData = tmp15;
const items15 = [{ code: "(function processColor_Pnpm_colorsTs10(value,context){let[processColorNumber,ValueProcessorTarget,isPlatformColorObject,isDynamicColorObjectIOS,IS_IOS,ERROR_MESSAGES,processDynamicColorObjectIOS]=this.__closure;let result=processColorNumber(value);if(result){return result;}if(result===0){if((context===null||context===void 0?void 0:context.target)===ValueProcessorTarget.CSS&&value==='transparent'){return false;}return result;}if(isPlatformColorObject(value)){return value;}if(isDynamicColorObjectIOS(value)){if(!IS_IOS){throw new Error(\"[Reanimated] \"+ERROR_MESSAGES.dynamicNotAvailableOnPlatform());}result=processDynamicColorObjectIOS(value);}if(result===null){throw new Error(\"[Reanimated] \"+ERROR_MESSAGES.invalidColor(value));}return result;})" }, processColorNumber, ValueProcessorTarget.ValueProcessorTarget, isPlatformColorObject, isDynamicColorObjectIOS, FONT_WEIGHT_MAPPINGS.IS_IOS, ERROR_MESSAGES, processDynamicColorObjectIOS];
let c3;
let c4;
let c5;
let c6;
[tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25] = items15;
function processColor(arg0, target) {
  const tmp = _undefined(arg0);
  if (tmp) {
    return tmp;
  } else if (0 === tmp) {
    target = undefined;
    if (target != null) {
      target = target.target;
    }
    return (target !== _undefined2.CSS || "transparent" !== arg0) && tmp;
  } else if (_undefined3(arg0)) {
    return arg0;
  } else {
    let tmp3 = tmp;
    if (_undefined4(arg0)) {
      const tmp4 = c4;
      if (tmp4) {
        tmp3 = _undefined6(arg0);
      } else {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const self = this;
        const self2 = this;
        const error = new Error("[Reanimated] " + _undefined5.dynamicNotAvailableOnPlatform());
        throw error;
      }
    }
    if (null === tmp3) {
      const _Error2 = Error;
      const _HermesInternal2 = HermesInternal;
      const self3 = this;
      const self4 = this;
      const error1 = new Error("[Reanimated] " + _undefined5.invalidColor(arg0));
      throw error1;
    } else {
      return tmp3;
    }
  }
}
const items16 = [tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25];
processColor.__closure = items16;
processColor.__workletHash = 7789291776954;
processColor.__initData = tmp18;
const items17 = [{ code: "(function pnpm_colorsTs11(value){let[processColor]=this.__closure;return Array.isArray(value)?value.map(function(color){return processColor(color);}):processColor(value);})" }, processColor];
[tmp26, tmp27] = items17;
function pnpm_colorsTs11(arr) {
  let mapped;
  if (Array.isArray(arr)) {
    mapped = arr.map((item) => _undefined(item));
  } else {
    mapped = _undefined(arr);
  }
  return mapped;
}
const items18 = [tmp27];
pnpm_colorsTs11.__closure = items18;
pnpm_colorsTs11.__workletHash = 13416349437474;
pnpm_colorsTs11.__initData = tmp26;
const items19 = [{ code: "(function processColorsInProps_Pnpm_colorsTs12(props){let[ColorProperties,processStylePropInPlace,processColorOrColors]=this.__closure;for(const key in props){if(!ColorProperties.includes(key))continue;processStylePropInPlace(props,key,processColorOrColors);}})" }, Colors.ColorProperties, processStyleValue.processStylePropInPlace, pnpm_colorsTs11];
c0 = undefined;
let c1;
let c2;
[tmp28, tmp29, tmp30, tmp31] = items19;
function processColorsInProps(obj) {
  for (const key10004 in obj) {
    if (!_undefined.includes(key10004)) {
      continue;
    } else {
      let tmp3 = _undefined2(obj, key10004, c2);
      continue;
    }
    continue;
  }
}
const items20 = [tmp29, tmp30, tmp31];
processColorsInProps.__closure = items20;
processColorsInProps.__workletHash = 5686813343018;
processColorsInProps.__initData = tmp28;

export { PlatformColor };
export { DynamicColorIOS };
export { ERROR_MESSAGES };
export { processColorNumber };
export { processColor };
export { unprocessColor };
export { processColorsInProps };
export function unprocessColorsInProps(boxShadow) {
  for (const key10005 in boxShadow) {
    let ColorProperties = Colors.ColorProperties;
    if (!ColorProperties.includes(key10005)) {
      continue;
    } else {
      let mapped;
      let arr = boxShadow[key10005];
      let _Array = Array;
      if (Array.isArray(arr)) {
        mapped = arr.map((item) => unprocessColor(item));
      } else {
        mapped = unprocessColor(arr);
      }
      boxShadow[key10005] = mapped;
      continue;
    }
    continue;
  }
}
