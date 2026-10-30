// Module ID: 14667
// Function ID: 14668
// Name: ConjureWorkingWand
// Dependencies: [19, 17, 5010, 21, 5090, 671, 575, 8023, 5009, 504, 5249, 14668, 2]
// Exports: default

// Module 14667 (ConjureWorkingWand)
import nativeDefault from "native" /* 575 */;
import _modDef671 from "module_671" /* 671 */;
import ReanimatedRexport2 from "ReanimatedRexport" /* 5090 */;
import timing from "timing" /* 5249 */;
import inlineStyles from "inlineStyles" /* 8023 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5010 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const inlineStylesDefault = inlineStyles;
const ReanimatedRexport = ReanimatedRexport2;
let _require, set, set2, set3;

let c9;
let closure_4;
let hasOwnProperty;
let items;
let metroImportAll;
let metroImportDefault;
function WandPart(color) {
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
  let obj = band(5090);
  const fn = function u() {
    let x;
    const obj = band;
    if (band != null) {
      x = obj.get();
    }
    if (x == null) {
      x = c11;
    }
    return { x };
  };
  obj2 = { band, BAND_FROM };
  fn.__closure = obj2;
  fn.__workletHash = 10738212380370;
  fn.__initData = __initData;
  const animatedProps = obj.useAnimatedProps(fn);
  const size1 = { width: size, height: size, viewBox: "0 0 24 24", children: items };
  items = [, ];
  const tmp7 = inlineStylesDefault;
  items[0] = closure_7(band(8023).Path, { d: path, fill: color });
  let tmp5Result = null;
  if (null != band) {
    const obj3 = { children: items3 };
    const obj4 = { children: items2 };
    const Defs = tmp2(8023).Defs;
    const _HermesInternal = HermesInternal;
    const obj5 = { id: "" + replaced + "band", x1: "0", y1: "0", x2: "1", y2: "0", children: items1 };
    const LinearGradient = tmp2(8023).LinearGradient;
    const obj6 = { offset: "0", stopColor: nativeDefault.unsafe_rawColors.WHITE, stopOpacity: 0 };
    const Stop = tmp2(8023).Stop;
    items1 = [closure_7(Stop, obj6), , ];
    const obj7 = { offset: "0.5", stopColor: nativeDefault.unsafe_rawColors.WHITE, stopOpacity: 1 };
    const Stop2 = tmp2(8023).Stop;
    items1[1] = closure_7(Stop2, obj7);
    const obj8 = { offset: "1", stopColor: nativeDefault.unsafe_rawColors.WHITE, stopOpacity: 0 };
    const Stop3 = tmp2(8023).Stop;
    items1[2] = closure_7(Stop3, obj8);
    items2 = [closure_8(LinearGradient, obj5), ];
    const size2 = { id: "" + replaced + "mask", maskUnits: "userSpaceOnUse", x: 0, y: 0, width: 24, height: 24, children: closure_7(closure_15, size3) };
    const _HermesInternal2 = HermesInternal;
    const Mask = tmp2(8023).Mask;
    size3 = { animatedProps, y: 0, width: 19.200000000000003, height: 24, fill: "url(#" + replaced + "band)" };
    const _HermesInternal3 = HermesInternal;
    items2[1] = closure_7(Mask, size2);
    items3 = [closure_8(Defs, obj4), ];
    const _HermesInternal4 = HermesInternal;
    const obj9 = { d: path, fill, mask: "url(#" + replaced + "mask)" };
    const Path = tmp2(8023).Path;
    items3[1] = closure_7(Path, obj9);
    tmp5Result = tmp5(closure_9, obj3);
  }
  items[1] = tmp5Result;
  return closure_8(tmp7, size1);
}
({ StyleSheet: closure_4, View: hasOwnProperty } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll, Fragment: c9 } = Fragment);
const Easing = ReanimatedRexport2.Easing;
let closure_10 = Easing.bezier(0.42, 0, 0.58, 1);
let c11 = -33.6;
let obj = _modDef671(nativeDefault.unsafe_rawColors.ILLO_PURPLE_40);
let result = obj.set("oklch.l", "*0.95");
let result1 = result.set("oklch.c", "*0.8");
let color = result1.hex();
let obj4 = _modDef671(nativeDefault.unsafe_rawColors.ILLO_PURPLE_30);
let result2 = obj4.set("oklch.l", "*0.95");
let result3 = result2.set("oklch.c", "*0.8");
const color2 = result3.hex();
let obj7 = _modDef671(nativeDefault.unsafe_rawColors.ILLO_PINK_40);
const result4 = obj7.set("oklch.l", "*0.95");
const result5 = result4.set("oklch.c", "*0.8");
const fill = result5.hex();
let closure_15 = ReanimatedRexport.createAnimatedComponent(inlineStyles.Rect);
let closure_16 = createStyles.createStyles((width) => ({ root: { width, height: width }, sparkleSmall: { transformOrigin: "33.6% 18.6%" }, sparkleLarge: { transformOrigin: "75% 75%" } }));
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
const __initData2 = { code: "function ConjureWorkingWandTsx3(){const{still,STILL,twinkle,small}=this.__closure;return still?STILL:twinkle(small.get());}" };
const __initData3 = { code: "function ConjureWorkingWandTsx4(){const{still,STILL,twinkle,large}=this.__closure;return still?STILL:twinkle(large.get());}" };
const result6 = size.fileFinishedImporting("modules/conjure/title_bar/native/ConjureWorkingWand.tsx");

export default function ConjureWorkingWand(arg0) {
  let closure_0;
  let easing;
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
  let tmp = closure_16(size);
  let obj = require("get initialized");
  let items = [AccessibilityStore];
  const tmp4 = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion) || paused;
  _require = tmp4;
  const tmp2Result = require("ReanimatedRexport");
  const sharedValue = tmp2Result.useSharedValue(0);
  const tmp2Result5 = require("ReanimatedRexport");
  sharedValue1 = tmp2Result5.useSharedValue(1);
  const tmp2Result6 = require("ReanimatedRexport");
  const sharedValue2 = tmp2Result6.useSharedValue(c11);
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
      const result3 = sharedValue2.set(c11);
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
  class C {
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
  C.__closure = obj2;
  C.__workletHash = 2076791891301;
  C.__initData = __initData2;
  const animatedStyle = tmp2Result7.useAnimatedStyle(C);
  const fn = function v() {
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
  fn.__closure = { still: tmp4, STILL: obj2, twinkle, large: sharedValue1 };
  fn.__workletHash = 10804017144546;
  fn.__initData = __initData3;
  let tmp11 = null;
  const tmp2Result8 = require("ReanimatedRexport");
  const animatedStyle1 = tmp2Result8.useAnimatedStyle(fn);
  if (!tmp4) {
    tmp11 = sharedValue2;
  }
  let obj3 = { style: tmp.root, children: items2 };
  let obj4 = { path: tmp2(tmp3[11]).WAND_PATH, color, size, band: tmp11 };
  items2 = [closure_7(WandPart, obj4), , ];
  const obj5 = { style: items3, children: closure_7(WandPart, obj6) };
  items3 = [closure_4.absoluteFill, tmp.sparkleSmall, animatedStyle];
  obj6 = { path: require("conjureWandGeometry").SPARKLE_SMALL_PATH, color: color2, size, band: tmp11 };
  const View = sharedValue(tmp3[4]).View;
  items2[1] = closure_7(View, obj5);
  const obj7 = { style: items4, children: closure_7(WandPart, obj8) };
  items4 = [closure_4.absoluteFill, tmp.sparkleLarge, animatedStyle1];
  obj8 = { path: require("conjureWandGeometry").SPARKLE_LARGE_PATH, color: color2, size, band: tmp11 };
  const View2 = sharedValue(tmp3[4]).View;
  items2[2] = closure_7(View2, obj7);
  return closure_8(closure_5, obj3);
};
