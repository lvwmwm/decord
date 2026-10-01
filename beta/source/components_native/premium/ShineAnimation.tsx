// Module ID: 10196
// Function ID: 10197
// Name: ShineAnimation
// Dependencies: [19, 17, 21, 4836, 576, 4566, 4837, 672, 2]

// Module 10196 (ShineAnimation)
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import timing from "timing" /* 4837 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault, set;

let StyleSheet;
let closure_4;
let hasOwnProperty;
let items;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let size;
({ Image: closure_4, View: hasOwnProperty, StyleSheet } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const ShineAnimationConfig = Object.freeze({ FLASH_TIME_PERCENT: 0.72, FLASH_DURATION_PERCENT: 0.08 });
let createStyles = createStyles_mod;
let obj = { container: { overflow: "hidden" }, shineContainer: obj2, shine: size, shineInner: obj3 };
obj2 = {};
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
size = { transform: items, width: 56, flex: 0, height: "300%", top: "-10%" };
items = [{ rotate: "30deg" }];
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, flex: 1 };
let closure_9 = createStyles(obj);
const __initData = { code: "function ShineAnimationTsx1(){const{interpolate,progress}=this.__closure;const widthPercent=interpolate(progress.get(),[0,1],[20,160]);return{width:widthPercent+\"%\"};}" };
const __initData2 = { code: "function ShineAnimationTsx2(){const{ShineAnimationConfig,interpolateColor,progress,flashStartColor,flashEndColor}=this.__closure;const startTime=ShineAnimationConfig.FLASH_TIME_PERCENT;const duration=ShineAnimationConfig.FLASH_DURATION_PERCENT;return{backgroundColor:interpolateColor(progress.get(),[0,startTime,startTime,startTime+duration,1],[flashStartColor,flashStartColor,flashEndColor,flashEndColor,flashStartColor])};}" };
const memoResult = react.memo(function ShineAnimation(arg0) {
  let c1;
  let items1;
  let items2;
  let items3;
  let obj9;
  let source;
  let style;
  let sharedValue;
  importDefault = undefined;
  let hexResult1;
  ({ source, style } = arg0);
  const tmp = closure_9();
  let obj = sharedValue(hexResult1[5]);
  sharedValue = obj.useSharedValue(0);
  let items = [sharedValue];
  const effect = react.useEffect(() => {
    set = sharedValue.set;
    const withDelay = ReanimatedRexport.withDelay;
    ReanimatedRexport;
    const withRepeat = ReanimatedRexport.withRepeat;
    ReanimatedRexport;
    const obj = timing;
    const result = set(withDelay(400, withRepeat(obj.withTiming(1, { duration: 1000 }), -1, false)));
  }, items);
  let obj2 = sharedValue(hexResult1[5]);
  class A {
    constructor() {
      let obj2;
      const obj = { width: "" + obj2.interpolate(sharedValue.get(), [0, 1], [20, 160]) + "%" };
      obj2 = ReanimatedRexport;
      return obj;
    }
  }
  A.__closure = { interpolate: sharedValue(hexResult1[5]).interpolate, progress: sharedValue };
  A.__workletHash = 4072719467417;
  A.__initData = __initData;
  ({ interpolate: sharedValue(hexResult1[5]).interpolate, progress: sharedValue });
  const animatedStyle = obj2.useAnimatedStyle(A);
  const tmp5 = require("module_672");
  const tmp5Result = tmp5(require("native").unsafe_rawColors.BRAND_360);
  const alphaResult = tmp5Result.alpha(0.2);
  const hexResult = alphaResult.hex();
  importDefault = hexResult;
  const tmp7 = require("module_672");
  const tmp7Result = tmp7(require("native").unsafe_rawColors.BRAND_360);
  const alphaResult1 = tmp7Result.alpha(1);
  hexResult1 = alphaResult1.hex();
  const obj8 = sharedValue(hexResult1[5]);
  class E {
    constructor() {
      let items;
      let items1;
      let obj2;
      const FLASH_TIME_PERCENT = constants.FLASH_TIME_PERCENT;
      const FLASH_DURATION_PERCENT = constants.FLASH_DURATION_PERCENT;
      const obj = { backgroundColor: obj2.interpolateColor(sharedValue.get(), items, items1) };
      items = [0, FLASH_TIME_PERCENT, FLASH_TIME_PERCENT, FLASH_TIME_PERCENT + FLASH_DURATION_PERCENT, 1];
      items1 = [c1, c1, hexResult1, hexResult1, c1];
      obj2 = ReanimatedRexport;
      return obj;
    }
  }
  E.__closure = { ShineAnimationConfig, interpolateColor: sharedValue(hexResult1[5]).interpolateColor, progress: sharedValue, flashStartColor: hexResult, flashEndColor: hexResult1 };
  E.__workletHash = 9845866779228;
  E.__initData = __initData2;
  ({ ShineAnimationConfig, interpolateColor: sharedValue(hexResult1[5]).interpolateColor, progress: sharedValue, flashStartColor: hexResult, flashEndColor: hexResult1 });
  const animatedStyle1 = obj8.useAnimatedStyle(E);
  const obj5 = { style: items1, children: items3 };
  items1 = [tmp.container, style, animatedStyle1];
  const obj6 = { style: tmp.shineContainer, children: items2 };
  const View = require("ReanimatedRexport").View;
  items2 = [closure_6(require("ReanimatedRexport").View, { style: animatedStyle }), ];
  const obj7 = { style: tmp.shine, children: closure_6(closure_5, obj9) };
  obj9 = { style: tmp.shineInner };
  items2[1] = closure_6(closure_5, obj7);
  items3 = [closure_7(closure_5, obj6), closure_6(closure_4, { source })];
  return closure_7(View, obj5);
});
size = size_mod;
let result = size.fileFinishedImporting("components_native/premium/ShineAnimation.tsx");

export default memoResult;
