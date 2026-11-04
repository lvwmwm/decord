// Module ID: 10780
// Function ID: 10781
// Name: ShineAnimation
// Dependencies: [19, 17, 21, 5141, 575, 1652, 5378, 671, 5851, 2]

// Module 10780 (ShineAnimation)
import nativeDefault from "native" /* 575 */;
import _modDef671 from "module_671" /* 671 */;
import _mod1652 from "module_1652" /* 1652 */;
import timing_timing from "timing/timing" /* 5378 */;
import FastImageDefault from "FastImage" /* 5851 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5141 */;
import size_mod from "module_2" /* 2 */;

const _modDef1652 = _mod1652;
let set;

let StyleSheet;
let closure_4;
let hasOwnProperty;
let items;
let metroRequire;
let obj2;
let obj3;
let size;
({ View: closure_4, StyleSheet } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = Object.freeze({ FLASH_TIME_PERCENT: 0.72, FLASH_DURATION_PERCENT: 0.08 });
let createStyles = createStyles_mod;
let obj = { container: { overflow: "hidden" }, shineContainer: obj2, shine: size, shineInner: obj3 };
obj2 = {};
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
size = { transform: items, width: 56, flex: 0, height: "300%", top: "-10%" };
items = [{ rotate: "30deg" }];
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, flex: 1 };
let closure_8 = createStyles(obj);
let closure_9 = { code: "(function ShineAnimationTsx1(){let[interpolate,progress]=this.__closure;const widthPercent=interpolate(progress.get(),[0,1],[20,160]);return{width:widthPercent+\"%\"};})" };
let closure_10 = { code: "(function ShineAnimationTsx2(){let[ShineAnimationConfig,interpolateColor,progress,flashStartColor,flashEndColor]=this.__closure;const startTime=ShineAnimationConfig.FLASH_TIME_PERCENT;const duration=ShineAnimationConfig.FLASH_DURATION_PERCENT;return{backgroundColor:interpolateColor(progress.get(),[0,startTime,startTime,startTime+duration,1],[flashStartColor,flashStartColor,flashEndColor,flashEndColor,flashStartColor])};})" };
const memoResult = react.memo(function ShineAnimation(arg0) {
  let items5;
  let items6;
  let items7;
  let obj5;
  let source;
  let style;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp7;
  let tmp8;
  let tmp9;
  let sharedValue;
  ({ source, style } = arg0);
  const tmp = closure_8();
  const tmp2 = sharedValue;
  let obj = sharedValue(1652);
  sharedValue = obj.useSharedValue(0);
  let items = [sharedValue];
  const effect = react.useEffect(() => {
    set = sharedValue.set;
    const withDelay = _mod1652.withDelay;
    _mod1652;
    const withRepeat = _mod1652.withRepeat;
    _mod1652;
    const obj = timing_timing;
    const result = set(withDelay(400, withRepeat(obj.withTiming(1, { duration: 1000 }), -1, false)));
  }, items);
  let items1 = [closure_9, , ];
  const useAnimatedStyle = sharedValue(1652).useAnimatedStyle;
  sharedValue(1652);
  items1[1] = sharedValue(1652).interpolate;
  items1[2] = sharedValue;
  let c0;
  let c1;
  [tmp7, tmp8, tmp9] = items1;
  class ShineAnimationTsx1 {
    constructor() {
      const obj = { width: "" + _undefined(_undefined2.get(), [0, 1], [20, 160]) + "%" };
      return obj;
    }
  }
  const items2 = [tmp8, tmp9];
  ShineAnimationTsx1.__closure = items2;
  ShineAnimationTsx1.__workletHash = 2390175696032;
  ShineAnimationTsx1.__initData = tmp7;
  const animatedStyle = useAnimatedStyle(ShineAnimationTsx1);
  const tmp12 = _modDef671;
  const tmp12Result = tmp12(nativeDefault.unsafe_rawColors.BRAND_360);
  const alphaResult = tmp12Result.alpha(0.2);
  const hexResult = alphaResult.hex();
  const tmp14 = _modDef671;
  const tmp14Result = tmp14(nativeDefault.unsafe_rawColors.BRAND_360);
  const alphaResult1 = tmp14Result.alpha(1);
  const items3 = [closure_10, closure_7, , , , ];
  const hexResult1 = alphaResult1.hex();
  const useAnimatedStyle2 = tmp2(1652).useAnimatedStyle;
  tmp2(1652);
  items3[2] = tmp2(1652).interpolateColor;
  items3[3] = sharedValue;
  items3[4] = hexResult;
  items3[5] = hexResult1;
  c0 = undefined;
  c1 = undefined;
  let c2;
  let c3;
  let c4;
  [tmp17, tmp18, tmp19, tmp20, tmp21, tmp22] = items3;
  class ShineAnimationTsx2 {
    constructor() {
      let items;
      let items1;
      const FLASH_TIME_PERCENT = _undefined.FLASH_TIME_PERCENT;
      const obj = { backgroundColor: _undefined2(_undefined3.get(), items, items1) };
      items = [0, FLASH_TIME_PERCENT, FLASH_TIME_PERCENT, FLASH_TIME_PERCENT + _undefined.FLASH_DURATION_PERCENT, 1];
      items1 = [c3, c3, c4, c4, c3];
      return obj;
    }
  }
  const items4 = [tmp18, tmp19, tmp20, tmp21, tmp22];
  ShineAnimationTsx2.__closure = items4;
  ShineAnimationTsx2.__workletHash = 15848815967493;
  ShineAnimationTsx2.__initData = tmp17;
  const animatedStyle2 = useAnimatedStyle2(ShineAnimationTsx2);
  const obj2 = { style: items5, children: items7 };
  items5 = [tmp.container, style, animatedStyle2];
  const obj3 = { style: tmp.shineContainer, children: items6 };
  const View = tmp11(1652).View;
  items6 = [closure_5(_modDef1652.View, { style: animatedStyle }), ];
  const obj4 = { style: tmp.shine, children: closure_5(closure_4, obj5) };
  obj5 = { style: tmp.shineInner };
  items6[1] = closure_5(closure_4, obj4);
  items7 = [closure_6(closure_4, obj3), closure_5(FastImageDefault, { source })];
  return closure_6(View, obj2);
});
size = size_mod;
let result = size.fileFinishedImporting("components_native/premium/ShineAnimation.tsx");

export default memoResult;
