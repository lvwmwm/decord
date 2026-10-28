// Module ID: 14397
// Function ID: 14398
// Name: ConjureWorkingWand
// Dependencies: [19, 17, 5005, 21, 5085, 683, 587, 7994, 5004, 558, 576, 504, 5242, 14398, 2]

// Module 14397 (ConjureWorkingWand)
import nativeDefault from "native" /* 587 */;
import _modDef683 from "module_683" /* 683 */;
import ReanimatedRexport2 from "ReanimatedRexport" /* 5085 */;
import timing from "timing" /* 5242 */;
import inlineStyles from "inlineStyles" /* 7994 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5005 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5004 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const inlineStylesDefault = inlineStyles;
const ReanimatedRexport = ReanimatedRexport2;
let _require, flag, flag2, num, num2, num3, num4, obj1, set, set2, set2Result, set3, set3Result, tmp16, tmp17, tmp2, tmp3, tmp5;

let c9;
let closure_4;
let hasOwnProperty;
let items;
let metroImportAll;
let metroImportDefault;
({ StyleSheet: closure_4, View: hasOwnProperty } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll, Fragment: c9 } = Fragment);
const Easing = ReanimatedRexport2.Easing;
const easing = Easing.bezier(0.42, 0, 0.58, 1);
let c11 = 24;
let c12 = "0 0 24 24";
let c13 = 19.200000000000003;
let c14 = -33.6;
let obj = _modDef683(nativeDefault.unsafe_rawColors.ILLO_PURPLE_40);
let result = obj.set("oklch.l", "*0.95");
let result1 = result.set("oklch.c", "*0.8");
let color = result1.hex();
let obj4 = _modDef683(nativeDefault.unsafe_rawColors.ILLO_PURPLE_30);
let result2 = obj4.set("oklch.l", "*0.95");
let result3 = result2.set("oklch.c", "*0.8");
const color2 = result3.hex();
let obj7 = _modDef683(nativeDefault.unsafe_rawColors.ILLO_PINK_40);
const result4 = obj7.set("oklch.l", "*0.95");
const result5 = result4.set("oklch.c", "*0.8");
const fill = result5.hex();
let closure_18 = ReanimatedRexport.createAnimatedComponent(inlineStyles.Rect);
let closure_19 = createStyles.createStyles((width) => ({ root: { width, height: width }, sparkleSmall: { transformOrigin: "33.6% 18.6%" }, sparkleLarge: { transformOrigin: "75% 75%" } }));
function twinkle(arg0) {
  let items;
  const obj = { opacity: 0.35 + 0.65 * arg0, transform: items };
  items = [, ];
  obj2 = { scale: 0.55 + 0.7 * arg0 };
  items[0] = obj2;
  const obj3 = { rotate: `${45 * arg0}deg` };
  items[1] = obj3;
  return obj;
}
twinkle.__closure = {};
twinkle.__workletHash = 1269251083411;
twinkle.__initData = { code: "function twinkle_ConjureWorkingWandTsx1(peak){return{opacity:0.35+0.65*peak,transform:[{scale:0.55+0.7*peak},{rotate:45*peak+\"deg\"}]};}" };
let obj2 = { opacity: 1, transform: items };
items = [{ scale: 1 }, { rotate: "0deg" }];
const __initData = { code: "function ConjureWorkingWandTsx2(){const{band,BAND_FROM}=this.__closure;var _band$get,_band;return{x:(_band$get=(_band=band)===null||_band===void 0?void 0:_band.get())!==null&&_band$get!==void 0?_band$get:BAND_FROM};}" };
const __initData2 = { code: "function ConjureWorkingWandTsx3(){const{band,BAND_FROM}=this.__closure;var _band$get,_band;return{x:(_band$get=(_band=band)===null||_band===void 0?void 0:_band.get())!==null&&_band$get!==void 0?_band$get:BAND_FROM};}" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_24 = ReactCompilerGating.isReactCompilerEnabled() ? (function WandPart(arg0) {
  let band;
  let items;
  let items1;
  let items2;
  let items3;
  let path;
  let size3;
  let tmp4;
  let obj = band(576);
  const cResult = obj.c(15);
  ({ path, color, size, band } = arg0);
  const str = react.useId();
  if (cResult[0] !== str) {
    let tmp6;
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp7 = /:/g;
      cResult[2] = tmp7;
      tmp6 = tmp7;
    } else {
      tmp6 = cResult[2];
    }
    const replaced = str.replace(tmp6, "");
    cResult[0] = str;
    cResult[1] = replaced;
    tmp4 = replaced;
  } else {
    tmp4 = cResult[1];
  }
  const tmpResult = band(5085);
  class W {
    constructor() {
      obj = band;
      value = undefined;
      if (band != null) {
        value = obj.get();
      }
      if (value == null) {
        value = c14;
      }
      return { x: value };
    }
  }
  obj2 = { band, BAND_FROM };
  W.__closure = obj2;
  W.__workletHash = 10738212380370;
  W.__initData = __initData;
  const animatedProps = tmpResult.useAnimatedProps(W);
  if (cResult[3] === color) {
    let tmp10;
    if (cResult[4] === path) {
      tmp10 = cResult[5];
    }
    if (cResult[6] === band) {
      if (cResult[7] === animatedProps) {
        if (cResult[8] === tmp4) {
          let tmp12;
          if (cResult[9] === path) {
            tmp12 = cResult[10];
          }
          if (cResult[11] === size) {
            if (cResult[12] === tmp10) {
              let tmp23;
              if (cResult[13] === tmp12) {
                tmp23 = cResult[14];
              }
              return tmp23;
            }
          }
          const size1 = { width: size, height: size, viewBox, children: items };
          items = [tmp10, tmp12];
          const tmp27 = closure_8(inlineStylesDefault, size1);
          cResult[11] = size;
          class W {
            constructor() {
              obj = band;
              value = undefined;
              if (band != null) {
                value = obj.get();
              }
              if (value == null) {
                value = c14;
              }
              return { x: value };
            }
          }
          cResult[12] = tmp10;
          cResult[13] = tmp12;
          cResult[14] = tmp27;
          tmp23 = tmp27;
        }
      }
    }
    let tmp13 = null;
    if (null != band) {
      const obj3 = { children: items3 };
      const obj4 = { children: items2 };
      const Defs = tmp(7994).Defs;
      const _HermesInternal = HermesInternal;
      const obj5 = { id: "" + tmp4 + "band", x1: "0", y1: "0", x2: "1", y2: "0", children: items1 };
      const LinearGradient = tmp(7994).LinearGradient;
      const obj6 = { offset: "0", stopColor: null, stopOpacity: 0 };
      const Stop = tmp(7994).Stop;
      class W {
        constructor() {
          obj = band;
          value = undefined;
          if (band != null) {
            value = obj.get();
          }
          if (value == null) {
            value = c14;
          }
          return { x: value };
        }
      }
      items1 = [closure_7(Stop, obj6), , ];
      const obj7 = { offset: "0.5", stopColor: nativeDefault.unsafe_rawColors.WHITE, stopOpacity: 1 };
      const Stop2 = tmp(7994).Stop;
      items1[1] = closure_7(Stop2, obj7);
      const obj8 = { offset: "1", stopColor: nativeDefault.unsafe_rawColors.WHITE, stopOpacity: 0 };
      const Stop3 = tmp(7994).Stop;
      items1[2] = closure_7(Stop3, obj8);
      items2 = [closure_8(LinearGradient, obj5), ];
      const size2 = { id: "" + tmp4 + "mask", maskUnits: "userSpaceOnUse", x: 0, y: 0, width: v24, height: v24, children: closure_7(closure_18, size3) };
      const _HermesInternal2 = HermesInternal;
      const Mask = tmp(7994).Mask;
      size3 = { animatedProps, y: 0, width, height: v24, fill: "url(#" + tmp4 + "band)" };
      const _HermesInternal3 = HermesInternal;
      items2[1] = closure_7(Mask, size2);
      items3 = [closure_8(Defs, obj4), ];
      const _HermesInternal4 = HermesInternal;
      const obj9 = { d: path, fill, mask: "url(#" + tmp4 + "mask)" };
      const Path = tmp(7994).Path;
      items3[1] = closure_7(Path, obj9);
      tmp13 = closure_8(closure_9, obj3);
    }
    cResult[6] = band;
    cResult[7] = animatedProps;
    cResult[8] = tmp4;
    cResult[9] = path;
    cResult[10] = tmp13;
    tmp12 = tmp13;
  }
  const tmp11 = closure_7(band(7994).Path, { d: path, fill: color });
  cResult[3] = color;
  cResult[4] = path;
  cResult[5] = tmp11;
  tmp10 = tmp11;
}) : (function WandPart(color) {
  let band;
  let items;
  let items1;
  let items2;
  let items3;
  let path;
  let size3;
  ({ path, size, band } = color);
  color = color.color;
  const str = react.useId();
  const replaced = str.replace(/:/g, "");
  let obj = band(5085);
  const fn = function u() {
    let x;
    const obj = band;
    if (band != null) {
      x = obj.get();
    }
    if (x == null) {
      x = c14;
    }
    return { x };
  };
  obj2 = { band, BAND_FROM };
  fn.__closure = obj2;
  fn.__workletHash = 9301414249299;
  fn.__initData = __initData2;
  const animatedProps = obj.useAnimatedProps(fn);
  const size1 = { width: size, height: size, viewBox, children: items };
  items = [, ];
  const tmp7 = inlineStylesDefault;
  items[0] = closure_7(band(7994).Path, { d: path, fill: color });
  let tmp5Result = null;
  if (null != band) {
    const obj3 = { children: items3 };
    const obj4 = { children: items2 };
    const Defs = tmp2(7994).Defs;
    const _HermesInternal = HermesInternal;
    const obj5 = { id: "" + replaced + "band", x1: "0", y1: "0", x2: "1", y2: "0", children: items1 };
    const LinearGradient = tmp2(7994).LinearGradient;
    const obj6 = { offset: "0", stopColor: nativeDefault.unsafe_rawColors.WHITE, stopOpacity: 0 };
    const Stop = tmp2(7994).Stop;
    items1 = [closure_7(Stop, obj6), , ];
    const obj7 = { offset: "0.5", stopColor: nativeDefault.unsafe_rawColors.WHITE, stopOpacity: 1 };
    const Stop2 = tmp2(7994).Stop;
    items1[1] = closure_7(Stop2, obj7);
    const obj8 = { offset: "1", stopColor: nativeDefault.unsafe_rawColors.WHITE, stopOpacity: 0 };
    const Stop3 = tmp2(7994).Stop;
    items1[2] = closure_7(Stop3, obj8);
    items2 = [closure_8(LinearGradient, obj5), ];
    const size2 = { id: "" + replaced + "mask", maskUnits: "userSpaceOnUse", x: 0, y: 0, width: v24, height: v24, children: closure_7(closure_18, size3) };
    const _HermesInternal2 = HermesInternal;
    const Mask = tmp2(7994).Mask;
    size3 = { animatedProps, y: 0, width, height: v24, fill: "url(#" + replaced + "band)" };
    const _HermesInternal3 = HermesInternal;
    items2[1] = closure_7(Mask, size2);
    items3 = [closure_8(Defs, obj4), ];
    const _HermesInternal4 = HermesInternal;
    const obj9 = { d: path, fill, mask: "url(#" + replaced + "mask)" };
    const Path = tmp2(7994).Path;
    items3[1] = closure_7(Path, obj9);
    tmp5Result = tmp5(closure_9, obj3);
  }
  items[1] = tmp5Result;
  return closure_8(tmp7, size1);
});
const __initData3 = { code: "function ConjureWorkingWandTsx4(){const{still,STILL,twinkle,small}=this.__closure;return still?STILL:twinkle(small.get());}" };
const __initData4 = { code: "function ConjureWorkingWandTsx5(){const{still,STILL,twinkle,large}=this.__closure;return still?STILL:twinkle(large.get());}" };
const __initData5 = { code: "function ConjureWorkingWandTsx6(){const{still,STILL,twinkle,small}=this.__closure;return still?STILL:twinkle(small.get());}" };
const __initData6 = { code: "function ConjureWorkingWandTsx7(){const{still,STILL,twinkle,large}=this.__closure;return still?STILL:twinkle(large.get());}" };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureWorkingWand(arg0) {
  let closure_0;
  let paused;
  let sharedValue1;
  let tmp6;
  let tmp7;
  let useReducedMotion;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(34);
  ({ size, paused } = arg0);
  const tmp4 = undefined !== paused && paused;
  closure_19(size);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [AccessibilityStore];
    const fn = function h() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp7 = fn;
    tmp6 = items;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const tmpResult = tmp(sharedValue1[11]);
  const tmp9 = tmpResult.useStateFromStores(tmp6, tmp7) || tmp4;
  _require = tmp9;
  const tmpResult6 = tmp(sharedValue1[4]);
  const sharedValue = tmpResult6.useSharedValue(0);
  const tmpResult7 = tmp(sharedValue1[4]);
  sharedValue1 = tmpResult7.useSharedValue(1);
  const tmpResult8 = tmp(sharedValue1[4]);
  const sharedValue2 = tmpResult8.useSharedValue(c14);
  if (cResult[2] === sharedValue2) {
    if (cResult[3] === sharedValue1) {
      if (cResult[4] === sharedValue) {
        let tmp13;
        let tmp14;
        if (cResult[5] === tmp9) {
          tmp13 = cResult[6];
          tmp14 = cResult[7];
        }
        const effect = sharedValue2.useEffect(tmp13, tmp14);
        const fn2 = function $() {
          let items;
          let obj;
          const tmp = closure_0;
          if (tmp) {
            obj = obj2;
          } else {
            const value = sharedValue.get();
            if (typeof twinkle === "function") {
              obj = { opacity: 0.35 + 0.65 * value, transform: items };
              obj2 = { scale: 0.55 + 0.7 * value };
              items = [obj2, ];
              const obj3 = { rotate: `${45 * tmp4}deg` };
              items[1] = obj3;
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
          return obj;
        };
        obj2 = { still: tmp9, STILL: obj2, twinkle, small: sharedValue };
        fn2.__closure = obj2;
        fn2.__workletHash = 3544281548002;
        fn2.__initData = __initData3;
        const tmpResult9 = tmp(sharedValue1[4]);
        const animatedStyle = tmpResult9.useAnimatedStyle(fn2);
        const fn3 = function j() {
          let items;
          let obj;
          const tmp = closure_0;
          if (tmp) {
            obj = obj2;
          } else {
            const value = sharedValue1.get();
            if (typeof twinkle === "function") {
              obj = { opacity: 0.35 + 0.65 * value, transform: items };
              obj2 = { scale: 0.55 + 0.7 * value };
              items = [obj2, ];
              const obj3 = { rotate: `${45 * tmp4}deg` };
              items[1] = obj3;
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
          return obj;
        };
        let obj3 = { still: tmp9, STILL: obj2, twinkle, large: sharedValue1 };
        fn3.__closure = obj3;
        fn3.__workletHash = 4983902861027;
        fn3.__initData = __initData4;
        const tmpResult10 = tmp(sharedValue1[4]);
        const animatedStyle1 = tmpResult10.useAnimatedStyle(fn3);
        let tmp23 = null;
        if (!tmp9) {
          tmp23 = sharedValue2;
        }
        class W {
          constructor() {
            tmp = paused;
            if (tmp) {
              return;
            } else {
              obj = { duration: 1000, easing: null };
              tmp2 = closure_10;
              obj.easing = closure_10;
              tmp3 = closure_1;
              num = 0;
              result = closure_1.set(0);
              tmp5 = closure_0;
              tmp6 = closure_2;
              set = closure_1.set;
              tmp7 = closure_0(closure_2[4]);
              withRepeat = tmp7.withRepeat;
              obj2 = closure_0(closure_2[12]);
              num2 = 1;
              flag = true;
              num3 = -1;
              result1 = set(withRepeat(obj2.withTiming(1, obj), -1, true));
              tmp9 = closure_2;
              result2 = closure_2.set(1);
              set2 = closure_2.set;
              tmp11 = closure_0(closure_2[4]);
              withRepeat2 = tmp11.withRepeat;
              obj3 = closure_0(closure_2[12]);
              set2Result = set2(withRepeat2(obj3.withTiming(0, obj), -1, true));
              tmp13 = closure_3;
              tmp14 = c14;
              result3 = closure_3.set(c14);
              set3 = closure_3.set;
              tmp16 = closure_0(closure_2[4]);
              withRepeat3 = tmp16.withRepeat;
              tmp17 = closure_0(closure_2[12]);
              obj1 = { duration: 2000, easing: null };
              withTiming = tmp17.withTiming;
              obj1.easing = closure_0(closure_2[4]).Easing.linear;
              num4 = 38.4;
              flag2 = false;
              set3Result = set3(withRepeat3(withTiming(38.4, obj1), -1, false));
              return () => {
                const obj = closure_0(sharedValue1[4]);
                obj.cancelAnimation(sharedValue);
                obj2 = closure_0(sharedValue1[4]);
                obj2.cancelAnimation(closure_1_2);
                const obj3 = closure_0(sharedValue1[4]);
                obj3.cancelAnimation(sharedValue2);
              };
            }
          }
        }
        let obj4 = { path: tmp(tmp2[13]).WAND_PATH, color, size, band: tmp23 };
        cResult[8] = tmp23;
        cResult[9] = size;
        cResult[10] = closure_7(closure_24, obj4);
        const tmp28 = closure_7(closure_24, obj4);
      }
    }
  }
  class W {
    constructor() {
      tmp = paused;
      if (tmp) {
        return;
      } else {
        obj = { duration: 1000, easing: null };
        tmp2 = closure_10;
        obj.easing = closure_10;
        tmp3 = closure_1;
        num = 0;
        result = closure_1.set(0);
        tmp5 = closure_0;
        tmp6 = closure_2;
        set = closure_1.set;
        tmp7 = closure_0(closure_2[4]);
        withRepeat = tmp7.withRepeat;
        obj2 = closure_0(closure_2[12]);
        num2 = 1;
        flag = true;
        num3 = -1;
        result1 = set(withRepeat(obj2.withTiming(1, obj), -1, true));
        tmp9 = closure_2;
        result2 = closure_2.set(1);
        set2 = closure_2.set;
        tmp11 = closure_0(closure_2[4]);
        withRepeat2 = tmp11.withRepeat;
        obj3 = closure_0(closure_2[12]);
        set2Result = set2(withRepeat2(obj3.withTiming(0, obj), -1, true));
        tmp13 = closure_3;
        tmp14 = c14;
        result3 = closure_3.set(c14);
        set3 = closure_3.set;
        tmp16 = closure_0(closure_2[4]);
        withRepeat3 = tmp16.withRepeat;
        tmp17 = closure_0(closure_2[12]);
        obj1 = { duration: 2000, easing: null };
        withTiming = tmp17.withTiming;
        obj1.easing = closure_0(closure_2[4]).Easing.linear;
        num4 = 38.4;
        flag2 = false;
        set3Result = set3(withRepeat3(withTiming(38.4, obj1), -1, false));
        return () => {
          const obj = closure_0(sharedValue1[4]);
          obj.cancelAnimation(sharedValue);
          obj2 = closure_0(sharedValue1[4]);
          obj2.cancelAnimation(closure_1_2);
          const obj3 = closure_0(sharedValue1[4]);
          obj3.cancelAnimation(sharedValue2);
        };
      }
    }
  }
  const items1 = [tmp9, sharedValue, sharedValue1, sharedValue2];
  cResult[2] = sharedValue2;
  cResult[3] = sharedValue1;
  cResult[4] = sharedValue;
  cResult[5] = tmp9;
  cResult[6] = W;
  cResult[7] = items1;
  tmp14 = items1;
  tmp13 = W;
}) : (function ConjureWorkingWand(arg0) {
  let closure_0;
  let items2;
  let items3;
  let items4;
  let obj6;
  let obj8;
  let paused;
  let useReducedMotion;
  ({ size, paused } = arg0);
  if (paused === undefined) {
    paused = false;
  }
  _require = undefined;
  let sharedValue1;
  let tmp = closure_19(size);
  let obj = require("get initialized");
  let items = [AccessibilityStore];
  const tmp4 = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion) || paused;
  _require = tmp4;
  const tmp2Result = require("ReanimatedRexport");
  const sharedValue = tmp2Result.useSharedValue(0);
  const tmp2Result5 = require("ReanimatedRexport");
  sharedValue1 = tmp2Result5.useSharedValue(1);
  const tmp2Result6 = require("ReanimatedRexport");
  const sharedValue2 = tmp2Result6.useSharedValue(c14);
  const items1 = [tmp4, sharedValue, sharedValue1, sharedValue2];
  const effect = sharedValue2.useEffect(() => {
    const tmp = closure_0;
    if (!tmp) {
      let obj = { duration: 1000, easing };
      const result = sharedValue.set(0);
      set = sharedValue.set;
      const withRepeat = ReanimatedRexport2.withRepeat;
      ReanimatedRexport2;
      obj2 = timing;
      const result1 = set(withRepeat(obj2.withTiming(1, obj), -1, true));
      const result2 = sharedValue1.set(1);
      set2 = sharedValue1.set;
      const withRepeat2 = ReanimatedRexport2.withRepeat;
      ReanimatedRexport2;
      let obj3 = timing;
      set2(withRepeat2(obj3.withTiming(0, obj), -1, true));
      const result3 = sharedValue2.set(c14);
      set3 = sharedValue2.set;
      const withRepeat3 = ReanimatedRexport2.withRepeat;
      ReanimatedRexport2;
      const obj4 = { duration: 2000, easing: ReanimatedRexport2.Easing.linear };
      const withTiming = timing.withTiming;
      timing;
      set3(withRepeat3(withTiming(38.4, obj4), -1, false));
      return () => {
        const obj = closure_0(sharedValue1[4]);
        obj.cancelAnimation(sharedValue);
        obj2 = closure_0(sharedValue1[4]);
        obj2.cancelAnimation(closure_1_2);
        const obj3 = closure_0(sharedValue1[4]);
        obj3.cancelAnimation(sharedValue2);
      };
    }
  }, items1);
  const tmp2Result7 = require("ReanimatedRexport");
  class A {
    constructor() {
      let items;
      let obj;
      const tmp = closure_0;
      if (tmp) {
        obj = obj2;
      } else {
        const value = sharedValue.get();
        if (typeof twinkle === "function") {
          obj = { opacity: 0.35 + 0.65 * value, transform: items };
          obj2 = { scale: 0.55 + 0.7 * value };
          items = [obj2, ];
          const obj3 = { rotate: `${45 * tmp4}deg` };
          items[1] = obj3;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      return obj;
    }
  }
  obj2 = { still: tmp4, STILL: obj2, twinkle, small: sharedValue };
  A.__closure = obj2;
  A.__workletHash = 10709532827232;
  A.__initData = __initData5;
  const animatedStyle = tmp2Result7.useAnimatedStyle(A);
  const tmp2Result8 = require("ReanimatedRexport");
  class W {
    constructor() {
      let items;
      let obj;
      const tmp = closure_0;
      if (tmp) {
        obj = obj2;
      } else {
        const value = sharedValue1.get();
        if (typeof twinkle === "function") {
          obj = { opacity: 0.35 + 0.65 * value, transform: items };
          obj2 = { scale: 0.55 + 0.7 * value };
          items = [obj2, ];
          const obj3 = { rotate: `${45 * tmp4}deg` };
          items[1] = obj3;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      return obj;
    }
  }
  W.__closure = { still: tmp4, STILL: obj2, twinkle, large: sharedValue1 };
  W.__workletHash = 3641232314465;
  W.__initData = __initData6;
  let tmp11 = null;
  const animatedStyle1 = tmp2Result8.useAnimatedStyle(W);
  if (!tmp4) {
    tmp11 = sharedValue2;
  }
  let obj3 = { style: tmp.root, children: items2 };
  let obj4 = { path: tmp2(tmp3[13]).WAND_PATH, color, size, band: tmp11 };
  items2 = [closure_7(closure_24, obj4), , ];
  const obj5 = { style: items3, children: closure_7(closure_24, obj6) };
  items3 = [closure_4.absoluteFill, tmp.sparkleSmall, animatedStyle];
  obj6 = { path: require("conjureWandGeometry").SPARKLE_SMALL_PATH, color: color2, size, band: tmp11 };
  const View = sharedValue(tmp3[4]).View;
  items2[1] = closure_7(View, obj5);
  const obj7 = { style: items4, children: closure_7(closure_24, obj8) };
  items4 = [closure_4.absoluteFill, tmp.sparkleLarge, animatedStyle1];
  obj8 = { path: require("conjureWandGeometry").SPARKLE_LARGE_PATH, color: color2, size, band: tmp11 };
  const View2 = sharedValue(tmp3[4]).View;
  items2[2] = closure_7(View2, obj7);
  return closure_8(closure_5, obj3);
});
const result6 = size.fileFinishedImporting("modules/conjure/title_bar/native/ConjureWorkingWand.tsx");

export default tmp4;
