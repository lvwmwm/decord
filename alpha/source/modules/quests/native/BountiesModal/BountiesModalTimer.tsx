// Module ID: 17212
// Function ID: 17213
// Name: BountiesModalTimer
// Dependencies: [19, 17, 21, 5774, 1652, 8171, 5141, 575, 1377, 5378, 5761, 9348, 2]
// Exports: default

// Module 17212 (BountiesModalTimer)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import timing_timing from "timing/timing" /* 5378 */;
import ButtonConstants from "ButtonConstants" /* 5774 */;
import inlineStyles from "inlineStyles" /* 8171 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5141 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
const module_1652 = _mod1652;
let _require, importDefault, set, set2;

let hasOwnProperty;
let items;
let metroRequire;
let num;
let obj2;
let obj3;
let obj4;
let size;
let size1;
let View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let c7 = "#2ECC71";
let result = (ButtonConstants.SMALL_BUTTON_HEIGHT - 4) / 2;
const metroImportAll = result;
let closure_9 = 2 * Math.PI * result;
const Easing = _mod1652.Easing;
let closure_10 = Easing.bezier(0.15, 0.21, 0.58, 1);
const Easing2 = _mod1652.Easing;
let closure_11 = Easing2.bezier(0.61, 0, 0.58, 1);
const Easing3 = _mod1652.Easing;
let closure_12 = Easing3.bezier(0.42, 0, 0.58, 1);
let closure_13 = module_1652.createAnimatedComponent(inlineStyles.Circle);
let createStyles = createStyles_mod;
let obj = { progress: size, ring: obj2, trackPath: obj3, countdownText: obj4, checkmarkLayer: { position: "absolute", inset: 6, alignItems: "center", justifyContent: "center" }, checkmarkBackground: size1, checkmarkIcon: { width: 20, height: 20 } };
size = { alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.round, width: ButtonConstants.SMALL_BUTTON_HEIGHT, height: ButtonConstants.SMALL_BUTTON_HEIGHT };
createStyles = createStyles.createStyles;
obj2 = { position: "absolute", transform: items };
items = [{ rotate: "-90deg" }];
obj3 = { color: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST };
obj4 = { color: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT, lineHeight: num };
num = undefined;
if (PlatformUtils.isAndroid()) {
  num = 14;
}
size1 = { width: 20, height: 20, backgroundColor: "#2ECC71", borderRadius: nativeDefault.radii.round };
let closure_14 = createStyles(obj);
let closure_15 = { code: "(function BountiesModalTimerTsx1(){let[PROGRESS_CIRCUMFERENCE,animatedProgress]=this.__closure;return{strokeDashoffset:PROGRESS_CIRCUMFERENCE-PROGRESS_CIRCUMFERENCE*animatedProgress.get()};})" };
let closure_16 = { code: "(function BountiesModalTimerTsx2(){let[checkmarkBackgroundScale]=this.__closure;return{transform:[{scale:checkmarkBackgroundScale.get()}]};})" };
let closure_17 = { code: "(function BountiesModalTimerTsx3(){let[checkmarkScale]=this.__closure;return{transform:[{scale:checkmarkScale.get()}]};})" };
size = size_mod;
let result1 = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalTimer.tsx");

export default function BountiesModalTimer(arg0) {
  let CheckmarkSmallBoldIcon;
  let c1;
  let closure_0;
  let easing;
  let easing2;
  let easing3;
  let isCompleted;
  let items10;
  let items11;
  let items8;
  let items9;
  let num2;
  let obj10;
  let obj12;
  let remainingSeconds;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp17;
  let tmp18;
  let tmp20;
  let tmp21;
  let totalSeconds;
  ({ isCompleted, totalSeconds, remainingSeconds } = arg0);
  _require = undefined;
  importDefault = undefined;
  let sharedValue;
  let sharedValue1;
  let sharedValue2;
  let ref;
  const tmp = closure_14();
  let tmp2 = isCompleted;
  if (!tmp2) {
    tmp2 = remainingSeconds <= 0;
  }
  _require = tmp2;
  importDefault = 0;
  const bound = Math.max(1, Math.ceil(remainingSeconds));
  if (isCompleted) {
    importDefault = 1;
    num2 = 1;
  } else {
    num2 = 0;
    if (totalSeconds > 0) {
      const diff = 1 - remainingSeconds / totalSeconds;
      importDefault = diff;
      num2 = diff;
    }
  }
  let tmp5 = _require;
  let obj = require("module_1652");
  sharedValue = obj.useSharedValue(num2);
  let obj2 = require("module_1652");
  sharedValue1 = obj2.useSharedValue(0);
  let obj3 = require("module_1652");
  sharedValue2 = obj3.useSharedValue(0);
  let items = [sharedValue, num2];
  const effect = sharedValue1.useEffect(() => {
    set = sharedValue.set;
    const obj = timing_timing;
    const result = set(obj.withTiming(c1, { duration: 500 }, "animate-always"));
  }, items);
  ref = sharedValue1.useRef(false);
  const items1 = [tmp2, sharedValue1, sharedValue2];
  const effect1 = sharedValue1.useEffect(() => {
    let tmp5;
    const current = ref.current;
    ref.current = true;
    if (closure_0) {
      if (current) {
        const withSequence = _mod1652.withSequence;
        _mod1652;
        const obj2 = { duration: 267, easing };
        const obj = timing_timing;
        const obj4 = { duration: 233, easing: easing2 };
        const withTimingResult = obj.withTiming(1.65, obj2);
        const obj3 = timing_timing;
        const result = set(withSequence(withTimingResult, obj3.withTiming(1, obj4)));
        set2 = sharedValue2.set;
        const withDelay = _mod1652.withDelay;
        _mod1652;
        const withSequence2 = _mod1652.withSequence;
        _mod1652;
        const obj6 = { duration: 167, easing: easing3 };
        const obj5 = timing_timing;
        const obj8 = { duration: 333, easing: easing3 };
        const withTimingResult1 = obj5.withTiming(1.25, obj6);
        const obj7 = timing_timing;
        set2(withDelay(167, withSequence2(withTimingResult1, obj7.withTiming(1, obj8))));
      } else {
        const result1 = set(1);
        const result2 = sharedValue2.set(1);
      }
      tmp5 = tmp9;
    } else {
      const result3 = set(0);
      const result4 = sharedValue2.set(0);
    }
    return tmp5;
  }, items1);
  let obj4 = require("module_1652");
  const items2 = [closure_15, closure_9, sharedValue];
  let c0;
  importDefault = undefined;
  [tmp13, tmp14, tmp15] = items2;
  class BountiesModalTimerTsx1 {
    constructor() {
      const obj = { strokeDashoffset: c0 - c0 * _undefined.get() };
      return obj;
    }
  }
  const items3 = [tmp14, tmp15];
  BountiesModalTimerTsx1.__closure = items3;
  BountiesModalTimerTsx1.__workletHash = 1981431490589;
  BountiesModalTimerTsx1.__initData = tmp13;
  const tmp12 = closure_9;
  const animatedProps = obj4.useAnimatedProps(BountiesModalTimerTsx1);
  const items4 = [closure_16, sharedValue1];
  c0 = undefined;
  [tmp17, tmp18] = items4;
  const tmp5Result = tmp5(sharedValue[4]);
  class BountiesModalTimerTsx2 {
    constructor() {
      let items;
      const obj = { transform: items };
      items = [{ scale: _undefined.get() }];
      ({ scale: _undefined.get() });
      return obj;
    }
  }
  const items5 = [tmp18];
  BountiesModalTimerTsx2.__closure = items5;
  BountiesModalTimerTsx2.__workletHash = 3015849196897;
  BountiesModalTimerTsx2.__initData = tmp17;
  const animatedStyle = tmp5Result.useAnimatedStyle(BountiesModalTimerTsx2);
  const items6 = [closure_17, sharedValue2];
  c0 = undefined;
  [tmp20, tmp21] = items6;
  const tmp5Result2 = tmp5(sharedValue[4]);
  class BountiesModalTimerTsx3 {
    constructor() {
      let items;
      const obj = { transform: items };
      items = [{ scale: _undefined.get() }];
      ({ scale: _undefined.get() });
      return obj;
    }
  }
  const items7 = [tmp21];
  BountiesModalTimerTsx3.__closure = items7;
  BountiesModalTimerTsx3.__workletHash = 10659255628480;
  BountiesModalTimerTsx3.__initData = tmp20;
  let obj5 = { style: tmp.progress, children: items9 };
  const animatedStyle1 = tmp5Result2.useAnimatedStyle(BountiesModalTimerTsx3);
  size = { height: tmp5(sharedValue[3]).SMALL_BUTTON_HEIGHT, width: tmp5(sharedValue[3]).SMALL_BUTTON_HEIGHT, style: tmp.ring, children: items8 };
  const tmp26 = require("inlineStyles");
  let obj6 = { cx: tmp5(sharedValue[3]).SMALL_BUTTON_HEIGHT / 2, cy: tmp5(sharedValue[3]).SMALL_BUTTON_HEIGHT / 2, r, fill: "none", stroke: tmp.trackPath.color, strokeWidth: 4 };
  const Circle = tmp5(tmp6[5]).Circle;
  items8 = [ref(Circle, obj6), ];
  let obj7 = { cx: tmp5(tmp6[3]).SMALL_BUTTON_HEIGHT / 2, cy: tmp5(tmp6[3]).SMALL_BUTTON_HEIGHT / 2, r, fill: "none", stroke, strokeWidth: 4, strokeDasharray: tmp12, strokeLinecap: "round", animatedProps };
  items8[1] = ref(closure_13, obj7);
  items9 = [closure_6(tmp26, size), , , ];
  let tmp27Result = !tmp2;
  const tmp23 = closure_6;
  if (tmp27Result) {
    let obj8 = { variant: "body-sm/semibold", style: tmp.countdownText, maxFontSizeMultiplier: 1, children: bound };
    tmp27Result = tmp27(tmp5(tmp6[10]).Text, obj8);
  }
  items9[1] = tmp27Result;
  const obj9 = { style: items10, children: ref(sharedValue2, obj10) };
  items10 = [tmp.checkmarkLayer, animatedStyle];
  obj10 = { style: tmp.checkmarkBackground };
  View = tmp25(tmp6[4]).View;
  items9[2] = ref(View, obj9);
  const obj11 = { style: items11, children: ref(CheckmarkSmallBoldIcon, obj12) };
  items11 = [tmp.checkmarkLayer, animatedStyle1];
  const View2 = tmp25(tmp6[4]).View;
  obj12 = { size: "custom", color: require("native").colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT, style: tmp.checkmarkIcon };
  CheckmarkSmallBoldIcon = tmp5(tmp6[11]).CheckmarkSmallBoldIcon;
  items9[3] = ref(View2, obj11);
  return tmp23(sharedValue2, obj5);
};
