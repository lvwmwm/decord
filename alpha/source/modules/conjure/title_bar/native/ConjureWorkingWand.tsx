// Module ID: 14847
// Function ID: 14848
// Name: ConjureWorkingWand
// Dependencies: [19, 17, 5142, 21, 1652, 671, 575, 8155, 5141, 504, 5377, 14848, 2]
// Exports: default

// Module 14847 (ConjureWorkingWand)
import nativeDefault from "native" /* 575 */;
import _modDef671 from "module_671" /* 671 */;
import _mod1652 from "module_1652" /* 1652 */;
import timing_timing from "timing/timing" /* 5377 */;
import inlineStyles from "inlineStyles" /* 8155 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5142 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5141 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const inlineStylesDefault = inlineStyles;
const module_1652 = _mod1652;
let _require, set, set2, set3, value;

let c9;
let closure_4;
let hasOwnProperty;
let items1;
let metroImportAll;
let metroImportDefault;
let tmp4;
function WandPart(color) {
  let band;
  let items2;
  let items4;
  let items5;
  let path;
  let size3;
  let tmp4;
  let tmp5;
  let tmp6;
  ({ path, size, band } = color);
  color = color.color;
  const str = react.useId();
  const replaced = str.replace(/:/g, "");
  let obj = _mod1652;
  const items = [closure_19, band, c11];
  let c0;
  let c1;
  [tmp4, tmp5, tmp6] = items;
  class ConjureWorkingWandTsx2 {
    constructor() {
      obj = closure_0;
      value = undefined;
      if (closure_0 != null) {
        value = obj.get();
      }
      if (value == null) {
        value = closure_1;
      }
      return { x: value };
    }
  }
  const items1 = [tmp5, tmp6];
  ConjureWorkingWandTsx2.__closure = items1;
  ConjureWorkingWandTsx2.__workletHash = 15414694029355;
  ConjureWorkingWandTsx2.__initData = tmp4;
  const animatedProps = obj.useAnimatedProps(ConjureWorkingWandTsx2);
  const size1 = { width: size, height: size, viewBox: "0 0 24 24", children: items2 };
  items2 = [, ];
  const tmp10 = inlineStylesDefault;
  items2[0] = metroImportDefault(inlineStyles.Path, { d: path, fill: color });
  let tmp8Result = null;
  if (null != band) {
    obj2 = { children: items5 };
    const obj3 = { children: items4 };
    const Defs = tmp2(8155).Defs;
    const _HermesInternal = HermesInternal;
    const obj4 = { id: "" + replaced + "band", x1: "0", y1: "0", x2: "1", y2: "0", children: null };
    const LinearGradient = tmp2(8155).LinearGradient;
    const obj5 = { offset: "0", stopColor: nativeDefault.unsafe_rawColors.WHITE, stopOpacity: 0 };
    const Stop = tmp2(8155).Stop;
    const items3 = [metroImportDefault(Stop, obj5), , ];
    const obj6 = { offset: "0.5", stopColor: nativeDefault.unsafe_rawColors.WHITE, stopOpacity: 1 };
    const Stop2 = tmp2(8155).Stop;
    items3[1] = metroImportDefault(Stop2, obj6);
    const obj7 = { offset: "1", stopColor: nativeDefault.unsafe_rawColors.WHITE, stopOpacity: 0 };
    const Stop3 = tmp2(8155).Stop;
    items3[2] = metroImportDefault(Stop3, obj7);
    class ConjureWorkingWandTsx2 {
      constructor() {
        obj = closure_0;
        value = undefined;
        if (closure_0 != null) {
          value = obj.get();
        }
        if (value == null) {
          value = closure_1;
        }
        return { x: value };
      }
    }
    items4 = [metroImportAll(LinearGradient, obj4), ];
    const size2 = { id: "" + replaced + "mask", maskUnits: "userSpaceOnUse", x: 0, y: 0, width: 24, height: 24, children: metroImportDefault(closure_15, size3) };
    const _HermesInternal2 = HermesInternal;
    const Mask = tmp2(8155).Mask;
    size3 = { animatedProps, y: 0, width: 19.200000000000003, height: 24, fill: "url(#" + replaced + "band)" };
    const _HermesInternal3 = HermesInternal;
    items4[1] = metroImportDefault(Mask, size2);
    items5 = [metroImportAll(Defs, obj3), ];
    const _HermesInternal4 = HermesInternal;
    const obj8 = { d: path, fill, mask: "url(#" + replaced + "mask)" };
    const Path = tmp2(8155).Path;
    items5[1] = metroImportDefault(Path, obj8);
    tmp8Result = tmp8(React4, obj2);
  }
  items2[1] = tmp8Result;
  return metroImportAll(tmp10, size1);
}
({ StyleSheet: closure_4, View: hasOwnProperty } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll, Fragment: c9 } = Fragment);
const Easing = _mod1652.Easing;
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
let closure_15 = module_1652.createAnimatedComponent(inlineStyles.Rect);
let closure_16 = createStyles.createStyles((width) => ({ root: { width, height: width }, sparkleSmall: { transformOrigin: "33.6% 18.6%" }, sparkleLarge: { transformOrigin: "75% 75%" } }));
let items = [{ code: "(function twinkle_ConjureWorkingWandTsx1(peak){return{opacity:0.35+0.65*peak,transform:[{scale:0.55+0.7*peak},{rotate:45*peak+\"deg\"}]};})" }];
[tmp4] = items;
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
twinkle.__workletHash = 12293803237522;
twinkle.__initData = tmp4;
let obj2 = { opacity: 1, transform: items1 };
items1 = [{ scale: 1 }, { rotate: "0deg" }];
let closure_19 = { code: "(function ConjureWorkingWandTsx2(){let[band,BAND_FROM]=this.__closure;var _band$get,_band;return{x:(_band$get=(_band=band)===null||_band===void 0?void 0:_band.get())!==null&&_band$get!==void 0?_band$get:BAND_FROM};})" };
let closure_21 = { code: "(function ConjureWorkingWandTsx3(){let[still,STILL,twinkle,small]=this.__closure;return still?STILL:twinkle(small.get());})" };
let closure_22 = { code: "(function ConjureWorkingWandTsx4(){let[still,STILL,twinkle,large]=this.__closure;return still?STILL:twinkle(large.get());})" };
const result6 = size.fileFinishedImporting("modules/conjure/title_bar/native/ConjureWorkingWand.tsx");

export default function ConjureWorkingWand(arg0) {
  let closure_0;
  let easing;
  let items6;
  let items7;
  let items8;
  let obj5;
  let obj7;
  let paused;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp21;
  let useReducedMotion;
  ({ size, paused } = arg0);
  if (paused === undefined) {
    paused = false;
  }
  _require = undefined;
  let sharedValue1;
  let tmp = closure_16(size);
  let obj = require("get initialized");
  const items = [AccessibilityStore];
  let tmp4 = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion) || paused;
  _require = tmp4;
  const tmp2Result = require("module_1652");
  const sharedValue = tmp2Result.useSharedValue(0);
  const tmp2Result5 = require("module_1652");
  sharedValue1 = tmp2Result5.useSharedValue(1);
  const tmp2Result6 = require("module_1652");
  const sharedValue2 = tmp2Result6.useSharedValue(c11);
  const items1 = [tmp4, sharedValue, sharedValue1, sharedValue2];
  const effect = sharedValue2.useEffect(() => {
    const tmp = closure_0;
    if (!tmp) {
      let obj = { duration: 1000, easing };
      const result = sharedValue.set(0);
      set = sharedValue.set;
      const withRepeat = _mod1652.withRepeat;
      _mod1652;
      obj2 = timing_timing;
      const result1 = set(withRepeat(obj2.withTiming(1, obj), -1, true));
      const result2 = sharedValue1.set(1);
      set2 = sharedValue1.set;
      const withRepeat2 = _mod1652.withRepeat;
      _mod1652;
      let obj3 = timing_timing;
      set2(withRepeat2(obj3.withTiming(0, obj), -1, true));
      const result3 = sharedValue2.set(c11);
      set3 = sharedValue2.set;
      const withRepeat3 = _mod1652.withRepeat;
      _mod1652;
      const obj4 = { duration: 2000, easing: _mod1652.Easing.linear };
      const withTiming = timing_timing.withTiming;
      timing_timing;
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
  const items2 = [closure_21, tmp4, obj2, twinkle, sharedValue];
  let c0;
  let c1;
  let c2;
  let c3;
  [tmp11, tmp12, tmp13, tmp14, tmp15] = items2;
  const tmp2Result7 = require("module_1652");
  class ConjureWorkingWandTsx3 {
    constructor() {
      let tmp4;
      const tmp = c0;
      if (tmp) {
        tmp4 = c1;
      } else {
        tmp4 = _undefined(_undefined2.get());
      }
      return tmp4;
    }
  }
  const items3 = [tmp12, tmp13, tmp14, tmp15];
  ConjureWorkingWandTsx3.__closure = items3;
  ConjureWorkingWandTsx3.__workletHash = 10450060011100;
  ConjureWorkingWandTsx3.__initData = tmp11;
  const animatedStyle = tmp2Result7.useAnimatedStyle(ConjureWorkingWandTsx3);
  const items4 = [closure_22, tmp4, obj2, twinkle, sharedValue1];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  [tmp17, tmp18, tmp19, tmp20, tmp21] = items4;
  const tmp2Result8 = require("module_1652");
  class ConjureWorkingWandTsx4 {
    constructor() {
      let tmp4;
      const tmp = c0;
      if (tmp) {
        tmp4 = c1;
      } else {
        tmp4 = _undefined(_undefined2.get());
      }
      return tmp4;
    }
  }
  const items5 = [tmp18, tmp19, tmp20, tmp21];
  ConjureWorkingWandTsx4.__closure = items5;
  ConjureWorkingWandTsx4.__workletHash = 16092104502971;
  ConjureWorkingWandTsx4.__initData = tmp17;
  let tmp23 = null;
  const animatedStyle1 = tmp2Result8.useAnimatedStyle(ConjureWorkingWandTsx4);
  if (!tmp4) {
    tmp23 = sharedValue2;
  }
  obj2 = { style: tmp.root, children: items6 };
  let obj3 = { path: tmp2(tmp3[11]).WAND_PATH, color, size, band: tmp23 };
  items6 = [closure_7(WandPart, obj3), , ];
  let obj4 = { style: items7, children: closure_7(WandPart, obj5) };
  items7 = [closure_4.absoluteFill, tmp.sparkleSmall, animatedStyle];
  obj5 = { path: require("conjureWandGeometry").SPARKLE_SMALL_PATH, color: color2, size, band: tmp23 };
  const View = sharedValue(tmp3[4]).View;
  items6[1] = closure_7(View, obj4);
  const obj6 = { style: items8, children: closure_7(WandPart, obj7) };
  items8 = [closure_4.absoluteFill, tmp.sparkleLarge, animatedStyle1];
  obj7 = { path: require("conjureWandGeometry").SPARKLE_LARGE_PATH, color: color2, size, band: tmp23 };
  const View2 = sharedValue(tmp3[4]).View;
  items6[2] = closure_7(View2, obj6);
  return closure_8(closure_5, obj2);
};
