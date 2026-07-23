// Module ID: 1692
// Function ID: 18722
// Name: pnpm_colorsTs1
// Dependencies: [1693, 1625, 1694, 1593]

// Module 1692 (pnpm_colorsTs1)
const require = arg1;
const dependencyMap = arg6;
/* worklet (recovered source) */ function pnpm_colorsTs1(value){return typeof value==='object'&&value!==null&&!Array.isArray(value);}
pnpm_colorsTs1.__closure = {};
pnpm_colorsTs1.__workletHash = 12151866759552;
pnpm_colorsTs1.__initData = { code: "function pnpm_colorsTs1(value){return typeof value==='object'&&value!==null&&!Array.isArray(value);}" };
let closure_3 = { code: "function PlatformColor_Pnpm_colorsTs2(...names){const{IS_IOS}=this.__closure;return IS_IOS?{semantic:names}:{resource_paths:names};}" };
let closure_4 = { code: "function isPlatformColorObject_Pnpm_colorsTs3(value){const{isRecord}=this.__closure;return isRecord(value)&&(Array.isArray(value.semantic)||Array.isArray(value.resource_paths));}" };
let closure_5 = (() => {
  function isPlatformColorObject(semantic) {
    let tmp = outer1_2(semantic);
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
  isPlatformColorObject.__closure = { isRecord: pnpm_colorsTs1 };
  isPlatformColorObject.__workletHash = 9660595997722;
  isPlatformColorObject.__initData = closure_4;
  return isPlatformColorObject;
})();
let closure_6 = { code: "function DynamicColorIOS_Pnpm_colorsTs4(tuple){return{dynamic:{light:tuple.light,dark:tuple.dark,highContrastLight:tuple.highContrastLight,highContrastDark:tuple.highContrastDark}};}" };
let closure_7 = { code: "function isDynamicColorObjectIOS_Pnpm_colorsTs5(value){const{isRecord}=this.__closure;return isRecord(value)&&isRecord(value.dynamic)&&'light'in value.dynamic&&'dark'in value.dynamic;}" };
let tmp2 = (() => {
  class PlatformColor {
    constructor() {
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      obj = {};
      if (outer1_0(outer1_1[0]).IS_IOS) {
        obj.semantic = array;
        tmp2 = obj;
      } else {
        obj.resource_paths = array;
        tmp2 = obj;
      }
      return tmp2;
    }
  }
  PlatformColor.__closure = { IS_IOS: require(1693) /* IS_ANDROID */.IS_IOS };
  PlatformColor.__workletHash = 12890406291275;
  PlatformColor.__initData = closure_3;
  return PlatformColor;
})();
let closure_8 = (() => {
  function isDynamicColorObjectIOS(dynamic) {
    let tmp = outer1_2(dynamic);
    if (tmp) {
      tmp = outer1_2(dynamic.dynamic);
    }
    if (tmp) {
      tmp = "light" in dynamic.dynamic;
    }
    if (tmp) {
      tmp = "dark" in dynamic.dynamic;
    }
    return tmp;
  }
  isDynamicColorObjectIOS.__closure = { isRecord: pnpm_colorsTs1 };
  isDynamicColorObjectIOS.__workletHash = 1181760541767;
  isDynamicColorObjectIOS.__initData = closure_7;
  return isDynamicColorObjectIOS;
})();
let obj = { invalidColor: pnpm_colorsTs6, invalidProcessedColor: pnpm_colorsTs7, dynamicNotAvailableOnPlatform: pnpm_colorsTs8 };
pnpm_colorsTs6 = /* worklet (recovered source) */ function pnpm_colorsTs6(color){return"Invalid color value: "+JSON.stringify(color);};
pnpm_colorsTs6.__closure = {};
pnpm_colorsTs6.__workletHash = 16453254098770;
pnpm_colorsTs6.__initData = { code: "function pnpm_colorsTs6(color){return\"Invalid color value: \"+JSON.stringify(color);}" };
pnpm_colorsTs7 = /* worklet (recovered source) */ function pnpm_colorsTs7(color){return"Invalid processed color value: "+JSON.stringify(color);};
pnpm_colorsTs7.__closure = {};
pnpm_colorsTs7.__workletHash = 8662920964153;
pnpm_colorsTs7.__initData = { code: "function pnpm_colorsTs7(color){return\"Invalid processed color value: \"+JSON.stringify(color);}" };
pnpm_colorsTs8 = /* worklet (recovered source) */ function pnpm_colorsTs8(){return'DynamicColorIOS is not available on this platform.';};
pnpm_colorsTs8.__closure = {};
pnpm_colorsTs8.__workletHash = 13235944247491;
pnpm_colorsTs8.__initData = { code: "function pnpm_colorsTs8(){return'DynamicColorIOS is not available on this platform.';}" };
let closure_10 = { code: "function processColorNumber_Pnpm_colorsTs9(value){const{processColorInitially,IS_ANDROID}=this.__closure;let normalizedColor=processColorInitially(value);if(IS_ANDROID&&typeof normalizedColor=='number'){normalizedColor=normalizedColor|0x0;}return normalizedColor;}" };
let tmp4 = (() => {
  function processColorNumber(arg0) {
    const result = outer1_0(outer1_1[1]).processColorInitially(arg0);
    let IS_ANDROID = outer1_0(outer1_1[0]).IS_ANDROID;
    if (IS_ANDROID) {
      IS_ANDROID = "number" === typeof result;
    }
    let tmp2 = result;
    if (IS_ANDROID) {
      tmp2 = result | 0;
    }
    return tmp2;
  }
  processColorNumber.__closure = { processColorInitially: require(1625) /* call */.processColorInitially, IS_ANDROID: require(1693) /* IS_ANDROID */.IS_ANDROID };
  processColorNumber.__workletHash = 11813019963227;
  processColorNumber.__initData = closure_10;
  return processColorNumber;
})();
let closure_11 = tmp4;
let closure_12 = { code: "function unprocessColorNumber_Pnpm_colorsTs10(value){const a=(value>>>24)/255;const r=value<<8>>>24;const g=value<<16>>>24;const b=value<<24>>>24;return\"rgba(\"+r+\",\"+g+\",\"+b+\",\"+a+\")\";}" };
let closure_13 = (() => {
  function unprocessColorNumber(arg0) {
    return "rgba(" + arg0 << 8 >>> 24 + "," + arg0 << 16 >>> 24 + "," + arg0 << 24 >>> 24 + "," + (arg0 >>> 24) / 255 + ")";
  }
  unprocessColorNumber.__closure = {};
  unprocessColorNumber.__workletHash = 5518391320995;
  unprocessColorNumber.__initData = closure_12;
  return unprocessColorNumber;
})();
let closure_14 = ["light", "dark", "highContrastLight", "highContrastDark"];
let closure_15 = { code: "function processDynamicColorObjectIOS_Pnpm_colorsTs11(value){const{DynamicColorIOSProperties,processColorNumber}=this.__closure;const result={};for(const property of DynamicColorIOSProperties){if(value.dynamic[property]===undefined){continue;}const processed=processColorNumber(value.dynamic[property]);if(processed===null){return null;}result[property]=processed;}return{dynamic:result};}" };
let closure_16 = (() => {
  function processDynamicColorObjectIOS(arg0) {
    const dynamic = {};
    const iter = outer1_14[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp2 = nextResult;
      let tmp3 = arg0;
      if (undefined !== arg0.dynamic[nextResult]) {
        let tmp4 = outer1_11;
        let tmp5 = arg0;
        let tmp6 = nextResult;
        let tmp7 = outer1_11(arg0.dynamic[tmp2]);
        if (null === tmp7) {
          iter.return();
          return null;
        } else {
          let tmp9 = dynamic;
          let tmp10 = nextResult;
          let tmp11 = tmp7;
          dynamic[tmp2] = tmp8;
        }
      }
      continue;
    }
    return { dynamic };
  }
  processDynamicColorObjectIOS.__closure = { DynamicColorIOSProperties: closure_14, processColorNumber: closure_11 };
  processDynamicColorObjectIOS.__workletHash = 12385759836493;
  processDynamicColorObjectIOS.__initData = closure_15;
  return processDynamicColorObjectIOS;
})();
let closure_17 = { code: "function unprocessDynamicColorObjectIOS_Pnpm_colorsTs12(value){const{DynamicColorIOSProperties,unprocessColorNumber}=this.__closure;const result={};for(const property of DynamicColorIOSProperties){if(value.dynamic[property]!==undefined){result[property]=unprocessColorNumber(value.dynamic[property]);}}return{dynamic:result};}" };
let closure_18 = (() => {
  function unprocessDynamicColorObjectIOS(arg0) {
    const dynamic = {};
    for (const item10007 of outer1_14) {
      let tmp = item10007;
      let tmp2 = arg0;
      if (undefined !== arg0.dynamic[item10007]) {
        let tmp3 = dynamic;
        let tmp4 = item10007;
        let tmp5 = outer1_13;
        let tmp6 = arg0;
        dynamic[tmp] = outer1_13(arg0.dynamic[tmp]);
      }
      continue;
    }
    return { dynamic };
  }
  unprocessDynamicColorObjectIOS.__closure = { DynamicColorIOSProperties: closure_14, unprocessColorNumber: closure_13 };
  unprocessDynamicColorObjectIOS.__workletHash = 3217615757982;
  unprocessDynamicColorObjectIOS.__initData = closure_17;
  return unprocessDynamicColorObjectIOS;
})();
let closure_19 = { code: "function processColor_Pnpm_colorsTs13(value,context){const{processColorNumber,ValueProcessorTarget,isPlatformColorObject,isDynamicColorObjectIOS,IS_IOS,ERROR_MESSAGES,processDynamicColorObjectIOS}=this.__closure;let result=processColorNumber(value);if(result){return result;}if(result===0){if((context===null||context===void 0?void 0:context.target)===ValueProcessorTarget.CSS&&value==='transparent'){return false;}return result;}if(isPlatformColorObject(value)){return value;}if(isDynamicColorObjectIOS(value)){if(!IS_IOS){throw new ReanimatedError(ERROR_MESSAGES.dynamicNotAvailableOnPlatform());}result=processDynamicColorObjectIOS(value);}if(result===null){throw new ReanimatedError(ERROR_MESSAGES.invalidColor(value));}return result;}" };
let tmp5 = (() => {
  function processColor(arg0, target) {
    const tmp = outer1_11(arg0);
    if (tmp) {
      return tmp;
    } else if (0 === tmp) {
      target = undefined;
      if (null != target) {
        target = target.target;
      }
      let tmp26 = target !== outer1_0(outer1_1[2]).ValueProcessorTarget.CSS;
      if (!tmp26) {
        tmp26 = "transparent" !== arg0;
      }
      if (tmp26) {
        tmp26 = tmp;
      }
      return tmp26;
    } else if (outer1_5(arg0)) {
      return arg0;
    } else {
      let tmp3 = tmp;
      if (outer1_8(arg0)) {
        if (outer1_0(outer1_1[0]).IS_IOS) {
          tmp3 = outer1_16(arg0);
        } else {
          const ReanimatedError = outer1_0(outer1_1[3]).ReanimatedError;
          const prototype = ReanimatedError.prototype;
          const reanimatedError = new ReanimatedError(outer1_9.dynamicNotAvailableOnPlatform());
          throw reanimatedError;
        }
      }
      if (null === tmp3) {
        const ReanimatedError2 = outer1_0(outer1_1[3]).ReanimatedError;
        const prototype2 = ReanimatedError2.prototype;
        const reanimatedError2 = new ReanimatedError2(outer1_9.invalidColor(arg0));
        throw reanimatedError2;
      } else {
        return tmp3;
      }
    }
  }
  obj = { processColorNumber: closure_11, ValueProcessorTarget: require(1694).ValueProcessorTarget, isPlatformColorObject: closure_5, isDynamicColorObjectIOS: closure_8, IS_IOS: require(1693) /* IS_ANDROID */.IS_IOS, ERROR_MESSAGES: obj, processDynamicColorObjectIOS: closure_16 };
  processColor.__closure = obj;
  processColor.__workletHash = 3532980737440;
  processColor.__initData = closure_19;
  return processColor;
})();
let closure_20 = tmp5;
let closure_21 = { code: "function unprocessColor_Pnpm_colorsTs14(value){const{unprocessColorNumber,isPlatformColorObject,isDynamicColorObjectIOS,IS_IOS,ERROR_MESSAGES,unprocessDynamicColorObjectIOS}=this.__closure;if(typeof value==='number'){return unprocessColorNumber(value);}if(isPlatformColorObject(value)){return value;}if(isDynamicColorObjectIOS(value)){if(!IS_IOS){throw new ReanimatedError(ERROR_MESSAGES.dynamicNotAvailableOnPlatform());}return unprocessDynamicColorObjectIOS(value);}throw new ReanimatedError(ERROR_MESSAGES.invalidProcessedColor(value));}" };
let tmp6 = (() => {
  function unprocessColor(color) {
    if ("number" === typeof color) {
      return outer1_13(color);
    } else if (outer1_5(color)) {
      return color;
    } else if (outer1_8(color)) {
      if (tmp2(tmp3[0]).IS_IOS) {
        return outer1_18(color);
      } else {
        const ReanimatedError2 = outer1_0(outer1_1[3]).ReanimatedError;
        const prototype2 = ReanimatedError2.prototype;
        const reanimatedError2 = new ReanimatedError2(outer1_9.dynamicNotAvailableOnPlatform());
        throw reanimatedError2;
      }
    } else {
      const ReanimatedError = tmp2(tmp3[3]).ReanimatedError;
      const prototype = ReanimatedError.prototype;
      const reanimatedError = new ReanimatedError(outer1_9.invalidProcessedColor(color));
      throw reanimatedError;
    }
  }
  obj = { unprocessColorNumber: closure_13, isPlatformColorObject: closure_5, isDynamicColorObjectIOS: closure_8, IS_IOS: require(1693) /* IS_ANDROID */.IS_IOS, ERROR_MESSAGES: obj, unprocessDynamicColorObjectIOS: closure_18 };
  unprocessColor.__closure = obj;
  unprocessColor.__workletHash = 11221362619601;
  unprocessColor.__initData = closure_21;
  return unprocessColor;
})();
let closure_22 = tmp6;
let closure_23 = { code: "function processColorsInProps_Pnpm_colorsTs15(props){const{ColorProperties,processColor}=this.__closure;for(const key in props){if(!ColorProperties.includes(key)){continue;}const value=props[key];props[key]=Array.isArray(value)?value.map(function(c){return processColor(c);}):processColor(value);}}" };
let closure_24 = { code: "function unprocessColorsInProps_Pnpm_colorsTs16(props){const{ColorProperties,unprocessColor}=this.__closure;for(const key in props){if(!ColorProperties.includes(key)){continue;}const value=props[key];props[key]=Array.isArray(value)?value.map(function(c){return unprocessColor(c);}):unprocessColor(value);}}" };
let tmp3 = (() => {
  class DynamicColorIOS {
    constructor(arg0) {
      dynamic = { light: arg0.light, dark: arg0.dark, highContrastLight: arg0.highContrastLight, highContrastDark: arg0.highContrastDark };
      return { dynamic };
    }
  }
  DynamicColorIOS.__closure = {};
  DynamicColorIOS.__workletHash = 593421129931;
  DynamicColorIOS.__initData = closure_6;
  return DynamicColorIOS;
})();
arg5.PlatformColor = tmp2;
arg5.DynamicColorIOS = tmp3;
arg5.ERROR_MESSAGES = obj;
arg5.processColorNumber = tmp4;
arg5.processColor = tmp5;
arg5.unprocessColor = tmp6;
arg5.processColorsInProps = (() => {
  function processColorsInProps(obj) {
    for (const key10007 in arg0) {
      let tmp4 = key10007;
      let tmp5 = outer1_0;
      let tmp6 = outer1_1;
      let ColorProperties = outer1_0(outer1_1[1]).ColorProperties;
      if (!ColorProperties.includes(key10007)) {
        continue;
      } else {
        let arr = arg0[key10007];
        let _Array = Array;
        if (Array.isArray(arr)) {
          let mapped = arr.map((arg0) => outer2_20(arg0));
        } else {
          let tmp = outer1_20;
          mapped = outer1_20(arr);
        }
        arg0[key10007] = mapped;
        let tmp3 = arr;
        continue;
      }
      continue;
    }
  }
  processColorsInProps.__closure = { ColorProperties: require(1625) /* call */.ColorProperties, processColor: closure_20 };
  processColorsInProps.__workletHash = 10982881159897;
  processColorsInProps.__initData = closure_23;
  return processColorsInProps;
})();
arg5.unprocessColorsInProps = (() => {
  function unprocessColorsInProps(styleProps) {
    for (const key10007 in arg0) {
      let tmp4 = key10007;
      let tmp5 = outer1_0;
      let tmp6 = outer1_1;
      let ColorProperties = outer1_0(outer1_1[1]).ColorProperties;
      if (!ColorProperties.includes(key10007)) {
        continue;
      } else {
        let arr = arg0[key10007];
        let _Array = Array;
        if (Array.isArray(arr)) {
          let mapped = arr.map((arg0) => outer2_22(arg0));
        } else {
          let tmp = outer1_22;
          mapped = outer1_22(arr);
        }
        arg0[key10007] = mapped;
        let tmp3 = arr;
        continue;
      }
      continue;
    }
  }
  unprocessColorsInProps.__closure = { ColorProperties: require(1625) /* call */.ColorProperties, unprocessColor: closure_22 };
  unprocessColorsInProps.__workletHash = 1282697128442;
  unprocessColorsInProps.__initData = closure_24;
  return unprocessColorsInProps;
})();
